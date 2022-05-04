<template>
  <button
    :data-function="dataFunction"
    :data-button="dataButton"
    :class="{isActive: isActive}"
    @click="click"
    @mousedown="isActive = true"
    @mouseup="isActive = false"
  >
    <slot>Fill This In</slot>
  </button>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps([
    'dataFunction',
    'dataButton',
    'click'
  ])

  const isActive = ref(false)



</script>

<style lang="scss" scoped>
  @use "scss/abstracts/variables" as *;

  button {
    color: white;
    font-size: 1.4rem;
    font-family: $font-body;
    text-transform: lowercase;

    display: block;

    padding-inline: 1rem;
    padding-block: 0.5rem;

    &:hover {
      box-shadow: 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
    }

    &.isActive {
      transform: scale(0.98);
      box-shadow: none;
      // outline: 1px solid $theme-500;
    }
  }

  [data-button="color"] {
    background-color: $theme-orange;
    &:hover {
      background-color: darken($theme-orange, 3%);
    }
  }

  [data-button="dark"] {
    background-color: $theme-600;
    &:hover {
      background-color: lighten($theme-600, 7%);
    }
  }

  [data-button="light"] {
    background-color: $theme-400;
    &:hover {
      background-color: darken($theme-400, 7%);
    }
  }

  [data-button="neutral"] {
    background-color: $theme-300;
    &:hover {
      background-color: darken($theme-300, 7%);
    }
  }

</style>