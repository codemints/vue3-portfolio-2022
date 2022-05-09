<template>
  <div
    ref="cursorOuter"
    class="[ cursor__outer ]"
  >
  </div>
  <div
    ref="cursorInner"
    class="[ cursor__inner ]"
  >

  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { initCursorAnimations } from '@/composables/animationHelpers'

  const cursorOuter = ref(null)

  onMounted(() => {
    const root = document.documentElement
    const body = document.body
    initCursorAnimations(cursorOuter, body, root)
    })

</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;

  .cursor__inner,
  .cursor__outer {
    position: fixed;
    top: 0;
    left: 0;

    border-radius: 50%;

    pointer-events: none;
    transition: all 0.2s cubic-bezier(.39,.575,.565,1);
    z-index: 1000;
  }
  .cursor__outer {
    --x: 0;
    --y: 0;
    --h: 3.5rem;
    --w: 3.5rem;

    transform: translate( calc( var(--x) - (var(--w)/2) ), calc( var(--y) - (var(--h)/2) ) );

    height: var(--h);
    width: var(--w);

    border: 0.2rem solid;
    border-color: $theme-orange;
  }

  .cursor__inner {
    --x: 0;
    --y: 0;
    --h: 0.5rem;
    --w: 0.5rem;

    transform: translate( calc( var(--x) - (var(--w)/2) ), calc( var(--y) - (var(--h)/2) ) );

    height: var(--h);
    width: var(--w);

    background-color: $theme-orange;
  }

  .dark .cursor__outer {
    border-color: $theme-blue;
  }

</style>