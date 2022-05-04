<template>
  <canvas
    @click="spawnNewCircle"
    id="intro__canvas"
    ref="thisCanvas"
  ></canvas>
</template>

<script setup>
  import { ref, onMounted, reactive, watch } from 'vue'
  import { mode } from '@/composables/dark-mode'
  import animateCanvas from '@/composables/animateCanvas'
  import { headerHeight } from 'state/component-info'

  const thisCanvas = ref(null)
  const colors = reactive({
    seed: {
      dark: ['#212933', '#323e4c'],
      light: ['#dde4ec', '#eff2f6'],
    },
    click: {
      dark: ['#ff5850', '#00a7af'],
      light: ['#ff5850', '#00a7af'],
    }
  })

  const {
    setCircleData,
    drawToCanvas,
    spawnNewCircle,
    changeVelocity,
    clearCanvas,
    toggleAnimation,
    redrawCanvas,
    updateCircleColor,
  } = animateCanvas()

  watch(mode, (newVal) => {
    setTimeout(() => updateCircleColor(newVal), 100)
  })

  onMounted(() => {
    thisCanvas.value.height = window.innerHeight - headerHeight.value
    thisCanvas.value.width = window.innerWidth
    setCircleData({
      canvas: thisCanvas.value,
      seedColors: mode.value === false ? colors.seed.light : colors.seed.dark,
      clickColors: mode.value === false ? colors.click.light : colors.click.dark,
      maxSize: 120,
      minSize: 10,
      maxPop: 13,
      minPop: 8,
      velocity: 0.125,
      offset: headerHeight
    })
    drawToCanvas();
  })
</script>

<style lang="scss" scoped>
  #intro__canvas {
    position: absolute;
    top: 0;
    background-color: transparent;
  }
</style>