import { defineStore } from 'pinia'
import { ref } from 'vue'

export const siteLinks = defineStore('siteLinks', () => {
  const links = ref({
    buttons: [],
    links: []
  })

  const addItem = (elRef, type) => {
    links.value[type].push(elRef)
  }

  return {
    links,
    addItem
  }
})