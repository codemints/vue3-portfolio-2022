<template>
  <section id="section-one" ref="section">
    <h2>Section One</h2>
  </section>
</template>

<script>
  import { useTest } from '~/stores/test'
  import { ref, onMounted } from 'vue'

  export default {
    setup () {
      const section = ref(null)
      const store = useTest()
      const fuck = {
        prop1: 'this shit',
        id: 'section-two'
      }

      onMounted(() => {
        store.setRefNode(section)
      })

      return {
        section
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {

    height: calc(100vh - 10rem);
  }

</style>