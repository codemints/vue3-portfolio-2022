<template>
  <button
    class="[ block px-12 py-6 text-3xl lowercase w-max ] [ button ]"
    @click="onClick"
    :class="classNames"
    :data-button="dataType"
    ref="thisButton"
  >
    
    <slot>Button</slot>
  </button>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { siteButtons } from '~/stores/buttons'

  const props = defineProps(['onClick', 'classNames', 'dataType'])

  
  const buttonStore = siteButtons()
  const thisButton = ref(null)

  onMounted(() => {
    buttonStore.addButton(thisButton)
  })
  
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;

  button {
    font-family: $font-body;
  }

</style>