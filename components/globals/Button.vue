<template>
  <button
    class="[ block px-12 py-6 text-3xl lowercase w-max ] [ button ]"
    @click="onClick"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
    :class="classNames"
    :id="id"
    :data-button="dataType"
    ref="thisButton"
  >
    {{ isHovered ? hovText : text }}
  </button>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { siteLinks } from '@/stores/links'

  const props = defineProps(['onClick', 'classNames', 'id', 'dataType', 'text', 'hovText'])

  
  const { addItem } = siteLinks()
  const thisButton = ref(null)
  const isHovered = ref(false)

  onMounted(() => {
    addItem(thisButton.value, 'buttons')
  })
  
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;

  button {
    font-family: $font-body;
  }

</style>