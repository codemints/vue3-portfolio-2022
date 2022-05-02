<template>
  <div
    ref="cursor"
    class="[ cursor__block ]"
  >
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { initCursorAnimations } from '@/composables/animationHelpers'

  const cursor = ref(null)

  onMounted(() => {
    const root = document.documentElement
    const body = document.body
    initCursorAnimations(cursor, body, root)
    })

</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  .cursor__block {
    --x: 0;
    --y: 0;
    --h: 2rem;
    --w: 2rem;

    position: fixed;
    top: 0;
    left: 0;

    transform: translate( calc( var(--x) - (var(--w)/2) ), calc( var(--y) - (var(--h)/2) ) );

    height: var(--h);
    width: var(--w);

    border: 0.3rem solid;
    border-color: $theme-orange;
    border-radius: 50%;

    pointer-events: none;
    z-index: 1000;
  }

  .dark .cursor__block {
    border-color: $theme-blue;
  }

</style>