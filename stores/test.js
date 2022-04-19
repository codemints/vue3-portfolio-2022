import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTest = defineStore('test', () => {
  const state = ref({
    links: [
      {
        text: 'Home',
        linksTo: 'section-one',
        isActive: false,
        refNode: null
      },
      {
        text: 'About',
        linksTo: 'section-two',
        isActive: false,
        refNode: null
      },
      {
        text: 'Contact',
        linksTo: 'section-three',
        isActive: false,
        refNode: null
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