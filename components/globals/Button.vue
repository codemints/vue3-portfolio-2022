<template>
  <button
    class="[ block px-12 py-6 text-3xl lowercase w-max ] [ button ]"
    @click="onClick"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
    :class="classNames"
    :data-button="dataType"
    ref="thisButton"
  >
    {{ isHovered ? hovText : text }}
  </button>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { siteButtons } from '~/stores/buttons'

  const props = defineProps(['onClick', 'classNames', 'dataType', 'text', 'hovText'])

  
  const buttonStore = siteButtons()
  const thisButton = ref(null)
  const isHovered = ref(false)

  onMounted(() => {
    buttonStore.addButton(thisButton.value)
  })
  
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;

  button {
    font-family: $font-body;
  }

</style>