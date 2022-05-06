import { defineStore } from 'pinia'
import { ref } from 'vue'

export const siteButtons = defineStore('siteButtons', () => {
  const buttons = ref([])

  const addButton = (elRef) => {
    buttons.value.push(elRef)
  }

  return {
    buttons,
    addButton
  }
})