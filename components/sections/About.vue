<template>
  <section id="about" ref="section" :class="names.surfaceB">
        <h2>dev(skills)</h2>
  </section>
</template>

<script>
  import { useNavState } from '~/stores/nav-state'
  import { ref, onMounted } from 'vue'
  import { cNameRef as names} from 'state/class-names'

  export default {
    setup () {
      const section = ref(null)
      const store = useNavState()

      onMounted(() => {
        store.setRefNode(section)
      })

      return {
        section,
        names
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

    h2 {
      color: white;
      font-size: 9.6rem;
    }
  }
</style>