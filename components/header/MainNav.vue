<template>
  <nav class="[ main__nav ][ bg-theme-600 dark:bg-theme-500 ]">
    <div class="[ nav__wrapper ]">
      <div ref="parentNode" class="nav__links">
        <GlobalsScrollLink
          v-for="(link, index) in state.state.links"
          :key="index"
          :state="state"
          :parentNode="parentNode"
          :classList="`[ scrollLink, ${names.nav} ]`"
          :link="link"
          :linksTo="link.linksTo"
          :class="`[ nav__item--${index}, nav__item ]`"
          :shuttle="shuttle"
        >
          {{ link.text }}
        </GlobalsScrollLink>
      </div>
  
      <div class="nav__shuttle--parent" ref="shuttle">
        <div class="nav__shuttle--wrapper">
          <div class="nav__shuttle--lower"></div>
          <div class="nav__shuttle--upper"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { cNameRef as names } from 'state/class-names'
  import { headerHeight } from 'state/component-info'
  import { ref, onMounted, watch } from 'vue'
  import { useNavState } from '~/stores/nav-state'
  
  export default {
    setup () {
      const state = useNavState()
      const setState = state.setState
      const setInitial = state.setInitial
      const parentNode = ref(null)
      const shuttle = ref(null)

      const watchOnce = watch(headerHeight, (newVal, oldVal) => {
        const sections = state.state.links
        const linkList = Array.from(parentNode.value.children)
        const sectionTops = {}
        const offset = headerHeight.value
        const marker = shuttle.value
        const data = {
          links: linkList,
          tops: sectionTops,
          offset: offset,
          marker: marker,
        }

        sections.forEach(section => {
          const nodeId = section.refNode.id
          const nodeTop = section.refNode.offsetTop

          sectionTops[nodeId] = nodeTop
        })

        window.addEventListener('scroll', (e) => scrollSpy(e, data))

        if ( newVal !== null ) watchOnce()
      })

      onMounted(() => {
        const first = parentNode.value.children[0]
        const width = first.offsetWidth

        setState(first.dataset.link)
        setInitial(first.dataset.link)
        
        first.classList.add('active');
        shuttle.value.style.width = `${width}px`
      })
        
      const scrollSpy = (e, data) => {
        const { links, tops, offset, marker } = data
        const { scrollY, innerHeight } = window
        const scrolled = scrollY + 350
        
        for ( let key in tops ) {
          if ( tops[key] <= scrolled && tops[key] + innerHeight - offset >= scrolled ) {
            setState(key)
            setInitial(key)
            
            links.forEach(link => {
              link.classList.remove('active')
              if ( link.dataset.link === key ) {
                link.classList.add('active')
                marker.style.width = `${link.offsetWidth}px`
                marker.style.left = `${link.offsetLeft}px`
              }
            })
          }
        }
      }

      return {
        state,
        parentNode,
        shuttle,
        names
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  
  .main__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    
    min-height: 6rem;
    width: 100vw;

    .nav__wrapper {
      text-align: center;
      max-width: 65vw;
      height: 100%;
    }

    .nav__links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3.2rem;
    }

    .nav__item {
      &.active {
      color: $theme-200;
      }
    }
    
  }
  
  .dark .nav__item.active {
    color: $theme-blue;
  }

  .nav__shuttle--parent {
    position: absolute;
    bottom: 1rem;
    width: 0;
    height: 0.3rem;
    transition: $bounce;

    .nav__shuttle--wrapper {
      position: relative;
      height: 100%;
      width: 100%;
    }

    .nav__shuttle--lower,
    .nav__shuttle--upper {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }

    .nav__shuttle--lower {
      width: 100%;
      background-color: $theme-blue;
    }

    .nav__shuttle--upper {
      width: 50%;
      background-color: $theme-blue;
    }
  }
</style>