<template>
  <nav class="[ main__nav ]">
    <div class="[ nav__wrapper ]">
      <div class="[ nav__links ]" ref="navLinks">

        <GlobalsScrollLink
          v-for="(route, index) in sRoutes"
          :key="index"
          :routeObj="route"
          :parent="navLinks"
          :class="[ `menu__item-${index + 1}`, names.nav ]"
          class="[ menu__item ]"
          @mouseenter="activate"
          @mouseleave="deactivate" />

      </div>
      <div class="[ nav__shuttle ] [ bg-theme-300 dark:bg-theme-blue ]" ref="navShuttle"></div>
    </div>
  </nav>
</template>

<script>
  import { cNameRef as names } from 'state/class-names'
  import { sectionRoutes as sRoutes } from 'state/routed'
  import { ref, onMounted, onUpdated } from 'vue'
  
  export default {
    setup () {
      const navLinks = ref(null)
      const navShuttle = ref(null)
      const links = ref(null)

      onMounted(() => {
        links.value = Array.from(navLinks.value.children)
        links.value[0].classList.add('isActive')
        navShuttle.value.style.width = `${links.value[0].offsetWidth}px`
      })

      const activate = (event) => {
        const targ = event.target
        const start = targ.offsetLeft
        const width = targ.offsetWidth
        const shuttle = navShuttle.value
        const shuttlePosition = start - shuttle.offsetLeft
        
        links.value.forEach(link => {
          if ( link !== targ ) link.classList.remove('isActive')
          else link.classList.add('isActive')
        })

        console.dir(shuttle)

        //move shuttle to target location
        shuttle.style.width = `${width}px`
        shuttle.style.transform = `translateX(${shuttlePosition}px)`
      }

      const deactivate = (event) => {

      }

      return {
        names,
        navLinks,
        navShuttle,
        sRoutes,
        activate,
        deactivate
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  .main__nav {
    
    display: flex;
    align-items: center;
    min-height: 6rem;
  }
  
  .nav__wrapper {
    text-align: center;
    max-width: 65vw;
    height: 100%;
    margin-inline: auto;
  }

  .nav__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
  }

  .menu__item {
    font-size: 1.8rem;
    font-family: $font-body;

    &.isActive {
      color: $theme-200;
    }
  }

  .dark .menu__item.isActive {
    color: $theme-blue;
  }

  .nav__shuttle {
    position: relative;
    height: 0.2rem;
    width: 5rem;
    margin-top: 1rem;
    // background-color: pink;
    transition:
      transform 0.5s cubic-bezier(.65,-0.17,0,1.73),
      width 0.3s cubic-bezier(.65,-0.17,0,1.73) 0.45s;
  }
</style>