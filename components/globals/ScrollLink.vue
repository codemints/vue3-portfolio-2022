<template>
  <a
    href="#"
    :data-link="props.linksTo"
    data-hover="shrink"
    :class="props.classList"
    @click.prevent="handleScroll"
    @mouseenter="handleShuttleIn"
    @mouseleave="handleShuttleOut"
    ref="currentItem"
  >
    <slot></slot>
  </a>
</template>

<script setup>
  import { ref, unref, onMounted } from 'vue'
  import { siteLinks } from '@/stores/links'

  const props = defineProps([
    'parentNode',
    'state',
    'classList',
    'link',
    'linksTo',
    'shuttle'
  ])
  
  const store = props.state
  const setState = store.setState
  const setInitial = store.setInitial
  const currentItem = ref(null)

  const { addItem, links } = siteLinks()

  const configure = (item) => {
    const val = unref(item)
    return {
      linkList: Array.from(props.parentNode.children),
      shuttle: props.shuttle,
      shuttleUpper: props.shuttle.children[0].children[1],
      shuttleLower: props.shuttle.children[0].children[0],
      linkPosition: val.offsetLeft,
      linkWidth: val.offsetWidth,
      update(item) {
        const value = unref(item)
        return {
          linkPosition: value.offsetLeft,
          linkWidth: value.offsetWidth,
        }
      }
    }
  }

  const handleScroll = () => {
    setState(props.linksTo)
    setInitial(props.linksTo)
    
    handleShuttleIn()
    
    const scrollTo = props.link.refNode
    if ( scrollTo.id === 'intro') window.scroll({ top: 0, behavior: 'smooth'})
    else scrollTo.scrollIntoView({ behavior: 'smooth' })
  }

  const handleShuttleIn = () => {
    const config = configure(currentItem)

    currentItem.value.classList.add('active')

    config.linkList.forEach(link => {
      if ( link.dataset.link !== props.linksTo) link.classList.remove('active')
    })

    config.shuttle.style.left = `${config.linkPosition}px`
    config.shuttle.style.width = `${config.linkWidth}px`
  }

  const handleShuttleOut = () => {
    let initialLink = Array.from(props.parentNode.children[0])
    const config = configure(initialLink)

    config.linkList.forEach(link => {
      link.classList.remove('active')
      if ( link.dataset.link === store.state.initial ) {
        link.classList.add('active')
        initialLink = link
      }
    })

    const update = config.update(initialLink)

    config.shuttle.style.left = `${update.linkPosition}px`
    config.shuttle.style.width = `${update.linkWidth}px`
  }

  onMounted(() => addItem(currentItem.value, 'links'))
</script>

<style lang="scss" scoped>

</style>