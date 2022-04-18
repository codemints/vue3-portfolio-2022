<template>
  <section id="portfolio" ref="section">
    <h1>Portfolio</h1>
  </section>
</template>

<script>
  import { ref, onMounted } from 'vue'
  import { sectionRoutes as sRoutes } from 'state/routed'

  export default {
    setup () {
      const section = ref(null)

      onMounted(() => {
        const sectionId = section.value.id

        sRoutes.value.forEach(route => {
          if ( sectionId === route.scrollTo ) route.route = section.value
        })
      })

      return {
        section
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: orange;

    h1 {
      color: white;
      font-size: 9.6rem;
    }
  }
</style>