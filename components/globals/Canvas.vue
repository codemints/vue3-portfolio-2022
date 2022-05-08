<template>
  <canvas
    @click="spawnNewCircle"
    @mousedown="emit('canvasClick')"
    id="intro__canvas"
    ref="thisCanvas"
  ></canvas>
</template>

<script setup>
  import { ref, onMounted, reactive, watch } from 'vue'
  import { mode } from '@/composables/dark-mode'
  import useCircles from '@/stores/circles'
  import { headerHeight } from 'state/component-info'

  const emit = defineEmits(['canvasClick'])

  const thisCanvas = ref(null)

  const {
    circleData,
    setCircleData,
    drawToCanvas,
    spawnNewCircle,
    updateCircleColor,
    changeVelocity,
  } = useCircles()

  watch(mode, () => {
    setTimeout(() => updateCircleColor(), 100)
  })

  onMounted(() => {
    thisCanvas.value.height = window.innerHeight - headerHeight.value
    thisCanvas.value.width = window.innerWidth
    const circleConfig = setCircleData({
      canvas: thisCanvas.value,
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