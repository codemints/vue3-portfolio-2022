<template>
  <section id="section-three" ref="section">
    <h2>Section Three</h2>
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
    height: 100vh;
  }
</style>