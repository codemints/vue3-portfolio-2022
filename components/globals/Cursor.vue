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
  import { ref, onMounted, watch } from 'vue'
  import cursorAnimations from '@/composables/cursorAnimations'
  import { siteLinks } from '@/stores/links'


  const cursorOuter = ref(null)
  const cursorInner = ref(null)

  const { links } = siteLinks()
  const animateOuter = cursorAnimations()
  const animateInner = cursorAnimations()

  onMounted(() => {
    const root = document.documentElement
    const body = document.body

    animateOuter.setCursorData({
      root: root,
      body: body,
      activeCursor: cursorOuter.value,
      inactiveCursor: cursorInner.value,
      drag: 0.5,
    })


    animateInner.setCursorData({
      root: root,
      body: body,
      activeCursor: cursorInner.value,
      inactiveCursor: cursorOuter.value,
      drag: 1,
    })
    
    animateOuter.initCursorAnimation()
    animateInner.initCursorAnimation()
  })

  watch(links.buttons, (newVal) => animateOuter.initCursorMorph(newVal))
  watch(links.links, (newVal) => {
    const grow = newVal.filter(val => val.dataset.hover === 'grow')
    const shrink = newVal.filter(val => val.dataset.hover === 'shrink')

    animateOuter.animateGrow(grow)
    animateOuter.animateShrink(shrink)
  })

</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;

  .cursor__inner,
  .cursor__outer {
    position: fixed;

    border-radius: 50%;
    opacity: 0;

    pointer-events: none;
    z-index: 1000;
  }
  .cursor__outer {
    --x: 0;
    --y: 0;
    --h: 2.5rem;
    --w: 2.5rem;

    left: calc( var(--x) - (var(--w)/2) );
    top: calc( var(--y) - (var(--h)/2) );

    height: var(--h);
    width: var(--w);

    border: 0.25rem solid;
    border-color: lighten($theme-500, 10%);

    transition-property:
    color,
    border,
    height,
    width
    transform,
    ;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(.39,.575,.565,1);

    &.grow {
      --h: 5rem;
      --w: 5rem;
    }

    &.shrink {
      --h: 0.75rem;
      --w: 0.75rem;
      border: none;
      background-color: darken($theme-200, 15%);
    }
  }

  .cursor__inner {
    --x: 0;
    --y: 0;
    --h: 0.75rem;
    --w: 0.75rem;

    left: calc( var(--x) - (var(--w)/2) );
    top: calc( var(--y) - (var(--h)/2) );

    height: var(--h);
    width: var(--w);

    background-color: darken($theme-200, 15%);
  }

  .dark .cursor__outer {
    border-color: lighten($theme-300, 10%);

    &.shrink {
      background-color: lighten($theme-300, 10%);
    }
  }
  .dark .cursor__inner {
    background-color: lighten($theme-500, 15%);
  }

</style>