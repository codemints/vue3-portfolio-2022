<template>
  <div ref="controlModal" class="[ modal__controls ]">
    <div class="[ modal__inner ]">
      <div
        @click="controlsOpen = !controlsOpen"
        class="[ controls__tab ]"
      >
        <div class="[ tab__inner ]">
          <p>{{ !controlsOpen ? 'open' : 'close'  }} controls</p>
          <div class="icons">
            <i v-if="controlsOpen" class="[ fa-solid fa-chevron-right ]"></i>
            <i v-if="!controlsOpen" class="[ fa-solid fa-chevron-left ]"></i>
          </div>
        </div>
      </div>
      <transition name="show">
        <div
          class="[ controls__container ] [ bg-white dark:bg-theme-700 ]"
          :class="{ isCollapsed: !controlsOpen }"
        >
          <div class="[ controls__intro ]">
            <h2 class="[ text-theme-600 dark:text-theme-100 ]">Canvas Animation Controls</h2>
            <p class="[ text-theme-400 dark:text-theme-100 ]">use these controls to perform actions like redrawing the canvas, stoppign the animation, and show/hide the hero text. Click around and have some fun!</p>
          </div>
          <div class="[ control__buttons ]">
            <div class="[ section__controls ]">
              <GlobalsControlButton
                dataFunction="hide"
                dataButton="color"
                :click="toggleElement"
              >
                toggleVisibility(text)
              </GlobalsControlButton>
            </div>
            <div class="[ animation__controls ]">
              <GlobalsControlButton
                dataFunction="increase"
                dataButton="dark"
                :click="changeVelocity"
              >
                v.increase()
              </GlobalsControlButton>
              <GlobalsControlButton
                dataFunction="decrease"
                dataButton="light"
                :click="changeVelocity"
              >
                v.decrease()
              </GlobalsControlButton>
              
            </div>
            
            <div class="[ canvas__controls ]">
              <GlobalsControlButton
                dataFunction="clear"
                dataButton="neutral"
                :click="canvasClear"
              >
                ctx.clear()
              </GlobalsControlButton>
              
              <Teleport to="body">
                <Toast
                  :toastData="toastData"
                />
              </Teleport>
              
              <GlobalsControlButton
                dataFunction="stop"
                dataButton="neutral"
                :click="canvasStop"
              >
                ctx.{{ suspend === true ? 'start' : 'stop' }}()
              </GlobalsControlButton>
              
              <GlobalsControlButton
                dataFunction="redraw"
                dataButton="neutral"
                :click="canvasRedraw"
              >
                ctx.redraw()
              </GlobalsControlButton>
              
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
  //IMPORTS
  import { ref, watch, reactive, onMounted } from 'vue'
  import ControlButton from 'comp/globals/ControlButton.vue'
  import useCircles from '@/stores/circles'
  import Toast from './Toast.vue';
  import { mode } from '@/composables/dark-mode'
  
  //PROPS
  const props = defineProps(['hide', 'canvasClick'])

  //DATA
  const controlModal = ref(null)
  const heroText = ref(props.hide)
  const heroHeight = ref(null)
  const isVisible = ref(true)
  const controlsOpen = ref(false)
  const suspend = ref(false)
  const toastData = reactive({
    show: false,
    msg: null
  })
  
  //STATE
  const {
    changeVelocity,
    clearCanvas,
    toggleAnimation,
    redrawCanvas,
    updateCircleColor,
  } = useCircles()


  //METHODS
  const canvasStop = () => {
    if ( toggleAnimation() === false ) {
      toastData.show = true,
      toastData.msg = 'Please redraw the canvas before stopping animation. [ ctx.redraw() ]'
      return setTimeout(() => toastData.show = false, 2750)
    }
    suspend.value = !suspend.value
    const toggle = toggleAnimation(suspend.value)
  }

  const canvasRedraw = () => {
    const redraw = redrawCanvas()
    if ( redraw === false ) {
      toastData.show = true,
      toastData.msg = 'Please clear the canvas before a redraw. [ ctx.clear() ]'
      return setTimeout(() => toastData.show = false,2750)
    }
    if ( suspend.value === true ) suspend.value = false
  }

  const canvasClear = () => {
    clearCanvas()
    if ( suspend.value === true ) suspend.value = false
  }

  const toggleElement = () => {
    isVisible.value = !isVisible.value
    
    if ( isVisible.value === false ) {
      heroText.value.style.maxHeight = 0
      heroText.value.style.opactiy = 0
      heroText.value.style.overflow = 'hidden'
    }
    
    if ( isVisible.value === true ) {
      heroText.value.style.opacity = 1
      heroText.value.style.maxHeight = `${heroHeight.value / 10}rem`
      setTimeout(() => heroText.value.style.overflow = 'visible', 300)
    }
  }

  const handleReset = () => {
    if ( window.scrollY < controlModal.value.offsetTop ) handleReset.kill = false
    if ( handleReset.kill === true ) return
    if ( window.scrollY > controlModal.value.offsetTop + 500 ) {
      isVisible.value = true
      controlsOpen.value = false
      
      heroText.value.style.opacity = 1
      heroText.value.style.maxHeight = `${heroHeight.value / 10}rem`
      setTimeout(() => heroText.value.style.overflow = 'visible', 300)

      clearCanvas()
      redrawCanvas()
      updateCircleColor()
      
      handleReset.kill = true
    }
  }

  //WATCHERS
  watch(() => props.hide, (newVal) => {
    heroText.value = newVal
    heroHeight.value = newVal.offsetHeight
  })

  watch(() => props.canvasClick, (newVal) => {
    controlsOpen.value = false
  })

  //LIFECYCLE
  onMounted(() => {
    
    window.addEventListener('scroll', handleReset)
  })

</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  $w: 18.5rem;
  $h: 2.8rem;
  $modalWidth: 42rem;
  $modalHeight: 35.25rem;
  $modalPadding: 2rem;
  .modal__controls {
    position: absolute;
    top: 50%;
    left: 0;

    border-inline-start: 0.75rem solid $theme-orange;
    transform: translateY(-50%);
    z-index: 3;
  }

  .modal__inner {
    position: relative;
  }

  .controls__tab {
    position: absolute;
    top: 0;
    right: 0.015rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: $w;
    height: $h;

    background-color: $theme-blue;
    border-start-start-radius: 1rem;
    border-start-end-radius: 1rem;

    padding-inline: 1rem;
    padding-block: 0.5rem;
    transform: rotate(90deg) translate($w, -$h);
    transform-origin: 100% 0;

    cursor: pointer;
    z-index: 1;
  }

  .tab__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    p {
      color: white;
      font-size: 1.25rem;
      font-family: $font-heading;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.1rem;
      line-height: 1;
    }
    .icons {
      position: relative;
      transform: rotate(90deg);

      i {
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        font-size: 1.25rem;

        transform: translate(-50%, -50%);
      }
    }
  }

  .controls__container {
    position: relative;

    width: $modalWidth;
    height: $modalHeight;
    
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.125);
    padding: $modalPadding;

    opacity: 1;
    overflow: hidden;
    transition: $base2;
    z-index: 0;

    &.isCollapsed {
      padding: 0;
      width: 0;
    }
  }

  .controls__intro {
    overflow-x: hidden;
    h2 {
      font-size: 1.8rem;
      min-width: 100%;
      word-break: keep-all;
      white-space: nowrap;
    }
    p {
      font-size: 1.4rem;
      text-transform: lowercase;
      margin-top: 1.25rem;
      min-width: calc($modalWidth - $modalPadding);
    }
  }

  .control__buttons {    
    > div:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }
  .section__controls {
    margin-top: 2rem;

    > button {
      width: 100%;
    }
  }

  .animation__controls,
  .canvas__controls {
    $gap: 1.25rem;
    display: flex;
    justify-content: center;
    align-content: center;
    gap: $gap;
    
    border-top: 0.1rem solid lighten($theme-300, 15%);

    padding-top: 2rem;
  }
  
  .animation__controls {
    $gap: 1.25rem;
    > button {
      flex: 1 0 calc(50% - $gap);
    }
  }

  .canvas__controls {
    $gap: 1.25rem;
    > button {
      flex: 1 0 calc(33% - $gap);
    }
  }

</style>