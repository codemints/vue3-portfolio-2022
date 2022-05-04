<template>
  <section
    id="intro"
    class="[ page__section ]"
    ref="section"
  >
    <div class="[ intro__content ]" ref="heroText">
      <h1
        class="[ intro__title ]"
        :class="names.titles"
      >
        <GlobalsSplitting
          :content="text"
          wordClass="word"
          charClass="char"
          specialChars="['.']"
          specialClass="[ text-theme-orange ]"
          extraClasses="[ cursor-pointer ]"
          @hover="handleHoverClass($event, ['animate__animated', 'animate__bounce'])"
          
        />
      </h1>
      <h3 class="[ intro__subtitle ]" :class="names.subTitles">And I'm A <span class="[ block__hover ]">Creative</span> Frontend <span class="[ block__hover ]">Developer</span> With Roots In <span class="[ block__hover ]">Design</span></h3>

      <GlobalsButton
        :onClick="scrollTo"
        dataType="primary"
        :classNames="[ 'bg-theme-orange', 'text-theme-100', 'mt-20', 'mx-auto' ]"
      >
        Let's Work Together
      </GlobalsButton>
    </div>
    
    <GlobalsCanvas/>
    <Controls
      :hide="heroText"
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

  const section = ref(null)
  const heroText = ref(null)
  const store = useNavState()
  const text = ref('hello. my name is lt.')

  const scrollTo = () => {
    console.log('clicked')
  }

  onMounted(() => {
    store.setRefNode(section)
    
    const height = (window.innerHeight - headerHeight.value) / 10
    section.value.style.height = `${height}rem`
  })
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  
  section {
    // display: flex;
    // align-items: center;
    // justify-content: center;

    text-align: center;

    position: relative;

    .intro__content {
      position: relative;
      top: 50%;

      max-height: 100%;

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
    }
  }

</style>