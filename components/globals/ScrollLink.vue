<template>
  <a href="#" @click.prevent="scrollTo(scroll)" ref="currentLink">
    {{ route.title }}
  </a>
</template>

<script>
  import { ref } from 'vue'

  export default {
    props: ['routeObj', 'parent'],

    setup (props) {
      const route = props.routeObj
      const scroll = ref(route.route)
      const currentLink = ref(null)

      const scrollTo = (domElement) => {
        if ( domElement.id === 'intro') window.scroll({ top: 0, behavior: 'smooth'})
        else domElement.scrollIntoView({ behavior: 'smooth' })
        
        handleActiveLink();
      }

      const handleActiveLink = () => {
        const navLinks = Array.from(props.parent.children)
        
        navLinks.forEach(link => {
          if ( link !== currentLink.value ) link.classList.remove('isActive')
        })

        currentLink.value.classList.add('isActive')
      }

      watch(route, () => {
        scroll.value = route.route
      })

      return {
        route,
        scrollTo,
        scroll,
        currentLink
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>