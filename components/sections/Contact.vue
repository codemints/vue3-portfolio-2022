<template>
  <section id="contact" ref="section">
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: green;

    h2 {
      color: white;
      font-size: 9.6rem;
    }
  }
</style>