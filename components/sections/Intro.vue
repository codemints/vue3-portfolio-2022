<template>
  <section id="intro" class="[ page__section ]" ref="section">
    <div class="[ intro__content ]">
      <h1 class="[ intro__title ]" :class="names.titles">Hello<span class="[ text-theme-orange ]">.</span> My Name Is LT<span class="[ text-theme-orange ]">.</span></h1>
      <h3 class="[ intro__subtitle ]" :class="names.subTitles">And I'm A Creative Frontend Developer With Roots In Design</h3>
      <a href="" class="[ button ] [ mx-auto ]">Let's Work Together</a>
    </div>
  </section>
</template>

<script>
  import { ref, onMounted } from 'vue'
  import { headerHeight } from 'state/component-info'
  import { cNameRef as names } from 'state/class-names'
  import { sectionRoutes as sRoutes } from 'state/routed'

  export default {
    setup () {
      const section = ref(0)

      onMounted(() => {
        const sectionId = section.value.id

        const height = (window.innerHeight - headerHeight.value) / 10
        section.value.style.height = `${height}rem`

        sRoutes.value.forEach(route => {
          if ( sectionId === route.scrollTo ) route.route = section.value
        })
      })

      return {
        section,
        names
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  
  section {
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

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