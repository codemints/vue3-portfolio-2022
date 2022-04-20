<template>
  <nav class="[ main__nav ]">
    <div ref="parentNode" class="nav__links">
        <GlobalsScrollLink
          v-for="(link, index) in state.state.links"
          :key="index"
          :state="state"
          :parentNode="parentNode"
          :classList="['test', 'class']"
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

      onMounted(() => {
        const first = parentNode.value.children[0]
        const width = first.offsetWidth
        
        first.classList.add('active');
        shuttle.value.style.width = `${width}px`

        // const sections = state.state.links
        // const linkList = Array.from(parentNode.children)
        // const sectionTops = {}
        // const offset = headerHeight.value
        // const marker = shuttle.value
        // const data = {
        //   links: linkList,
        //   tops: sectionTops,
        //   offset: offset,
        //   marker: marker,
        // }


        // sections.forEach(section => {
        //   const nodeId = section.refNode.id
        //   const nodeTop = section.refNode.offsetTop

        //   sectionTops[nodeId] = nodeTop
        // })

        // window.addEventListener('scroll', (e) => scrollSpy(e, data))
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  
</style>