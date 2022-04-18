import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => ({
    currentLink: null,
    previousLink: null,
    currentSection: null,
    previousSection: null
  })
})