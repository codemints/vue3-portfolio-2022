import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNavState = defineStore('nav', () => {
  const state = ref({
    navItems: [
      {
        text: 'site(intro)',
        linksTo: 'intro',
        domEl: ref(null)
      },
      {
        text: 'about(me)',
        linksTo: 'about',
        domEl: ref(null)
      },
      {
        text: 'my(work)',
        linksTo: 'portfolio',
        domEl: ref(null)
      },
      {
        text: 'dev(skills)',
        linksTo: 'experience',
        domEl: ref(null)
      },
      {
        text: 'contact(info)',
        linksTo: 'contact',
        domEl: ref(null)
      },
    ],
    currentLink: null,
    previousLink: null,
  })
})