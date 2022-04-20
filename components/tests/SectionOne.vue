<template>
  <section id="section-one" ref="section">
    <h2>Section One</h2>
  </section>
</template>

<script>
  import { useNavState } from '~/stores/nav-state'
  import { ref, onMounted } from 'vue'

  export default {
    setup () {
      const section = ref(null)
      const store = useNavState()

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