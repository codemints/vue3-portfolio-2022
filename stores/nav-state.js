import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavState = defineStore('nav', () => {
  const state = ref({
    links: [
      {
        text: 'site(intro)',
        linksTo: 'intro',
        refNode: ref(null)
      },
      {
        text: 'about(me)',
        linksTo: 'about',
        refNode: ref(null)
      },
      {
        text: 'my(work)',
        linksTo: 'portfolio',
        refNode: ref(null)
      },
      {
        text: 'dev(skills)',
        linksTo: 'experience',
        refNode: ref(null)
      },
      {
        text: 'contact(info)',
        linksTo: 'contact',
        refNode: ref(null)
      },
    ],
    current: ref('section-one'),
    previous: ref('section-one'),
    initial: ref('section-one')
  })

  const setInitial = (id) => {
    state.value.initial = id
  }

  const setRefNode = (item) => {
    state.value.links.forEach(link => {
      if ( link.linksTo === item.value.id ) {
        link.refNode = item
      }
    })
  }

  const setState = (id) => {
    const s = state.value
    
    s.previous = s.current
    s.current = id
    
    s.links.forEach(link => {
      if ( link.linksTo === id ) link.isActive = true
      else link.isActive = false
    })
  }

  return {
    state,
    setState,
    setInitial,
    setRefNode,
  }
})