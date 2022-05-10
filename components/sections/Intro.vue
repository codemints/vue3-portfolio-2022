<template>
  <section
    id="intro"
    class="[ page__section ]"
    ref="section"
  >
    <div class="[ intro__content ]" ref="heroText">
      <h1
        id="hero__title"
        class="[ intro__title ]"
        :class="names.titles"
      >
        <GlobalsSplitting
          :content="text"
          wordClass="word"
          charClass="char"
          specialChars="['.']"
          specialClass="[ text-theme-orange ]"
          @hover="handleHoverClass($event, ['animate__animated', 'animate__bounce'])"
          
        />
      </h1>
      <h3
        id="hero__subtitle"
        class="[ intro__subtitle ]"
        :class="names.subTitles"
      >
        And I'm A <span class="[ block__hover ]">Creative</span> Frontend <span class="[ block__hover ]">Developer</span> With Roots In <span class="[ block__hover ]">Design</span>
      </h3>

      <GlobalsButton
        :onClick="scrollTo"
        :classNames="[ 'bg-theme-orange', 'text-theme-100', 'mt-20', 'mx-auto' ]"
        id="hero__button"
        dataType="primary"
        text="Let's Work Together"
        hovText="Contact Me Today"
      />
    </div>
    
    <Controls
      :hide="heroText"
      :canvasClick="canvasClick"
    />
    <GlobalsCanvas
      @canvasClick="canvasClick = !canvasClick"
    />
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { headerHeight } from 'state/component-info'
  import { cNameRef as names } from 'state/class-names'
  import { useNavState } from '@/stores/nav-state'
  import { handleHoverClass } from '@/composables/animationHelpers'
  import Controls from 'comp/globals/Controls.vue'
  import gsapAnimations from '@/composables/gsapAnimations'

  const section = ref(null)
  const heroText = ref(null)
  const canvasClick = ref(false)
  const store = useNavState()
  const text = ref('Hello. My Name is LT.')

  const {
    initIntroAnimations
  } = gsapAnimations()

  const scrollTo = () => {
    console.log('clicked')
  }

  onMounted(() => {
    store.setRefNode(section)
    
    const height = (window.innerHeight - headerHeight.value) / 10
    section.value.style.height = `${height}rem`

    initIntroAnimations()
  })
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  
  section {
    text-align: center;

    position: relative;

    .intro__content {
      position: relative;
      top: 50%;

      max-height: 100%;
      width: max-content;

      margin-inline: auto;
      transform: translateY(-60%);
      transition: $base;
      z-index: 1;
    }

    h1,
    h1 span {
      font-size: 9.6rem;
    }

    h3 {
      font-size: 2.8rem;
      font-family: $font-body;
      font-weight: 400;
    }

    .button {
      margin-top: 5rem;
      width: 30rem;

      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: $theme-200;
        color: $theme-600;
      }
    }
  }

</style>