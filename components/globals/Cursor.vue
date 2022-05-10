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
  import cursorAnimations from '@/composables/cursorAnimations'
  import { siteButtons } from '@/stores/buttons'


  const cursorOuter = ref(null)
  const cursorInner = ref(null)

  const { buttons } = siteButtons()
  const animateOuter = cursorAnimations()
  const animateInner = cursorAnimations()

  onMounted(() => {
    const root = document.documentElement
    const body = document.body

    animateOuter.setCursorData({
      root: root,
      body: body,
      cursor: cursorOuter.value,
      drag: 0.0775,
    })


    animateInner.setCursorData({
      root: root,
      body: body,
      cursor: cursorInner.value,
      drag: 1,
    })
    animateOuter.initCursorAnimation()
    animateOuter.initCursorMorph(buttons)
    animateInner.initCursorAnimation()
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
    z-index: 1000;
  }
  .cursor__outer {
    --x: 0;
    --y: 0;
    --h: 4rem;
    --w: 4rem;

    transform: translate( calc( var(--x) - (var(--w)/2) ), calc( var(--y) - (var(--h)/2) ) );

    height: var(--h);
    width: var(--w);

    border: 0.2rem solid;
    border-color: $theme-orange;

    
    transition: color 0.2s cubic-bezier(.39,.575,.565,1);
  }

  .cursor__inner {
    --x: 0;
    --y: 0;
    --h: 0.75rem;
    --w: 0.75rem;

    transform: translate( calc( var(--x) - (var(--w)/2) ), calc( var(--y) - (var(--h)/2) ) );

    height: var(--h);
    width: var(--w);

    background-color: $theme-600;
  }

  .dark .cursor__outer {
    border-color: $theme-blue;
  }
  .dark .cursor__inner {
    background-color: $theme-500;
  }

</style>