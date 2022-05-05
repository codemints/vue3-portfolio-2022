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
  import useCircles from '@/stores/circles'
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
    circleData,
    setCircleData,
    drawToCanvas,
    spawnNewCircle,
    updateCircleColor,
    changeVelocity,
  } = useCircles()

  watch(mode, (newVal) => {
    setTimeout(() => updateCircleColor(newVal), 100)
  })

  watch(() => circleData, (newVal) => console.log(newVal))

  onMounted(() => {
    thisCanvas.value.height = window.innerHeight - headerHeight.value
    thisCanvas.value.width = window.innerWidth
    const circleConfig = setCircleData({
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
    drawToCanvas()
    circleConfig.circles.forEach(circle => {
      circle.dx *= 0.75
      circle.dy *= 0.75
    })
  })
</script>

<style lang="scss" scoped>
  #intro__canvas {
    position: absolute;
    top: 0;
    background-color: transparent;
    z-index: 0;
  }
</style>