import { defineStore } from 'pinia'
import { ref } from 'vue'

export const siteButtons = defineStore('buttons', () => {
  const buttons = ref([])

  const addButton = (elRef) => {
    buttons.value.push(elRef)
  }

  return {
    buttons,
    addButton
  }
})