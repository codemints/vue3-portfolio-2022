<template>
  <div class="[ scrollspy__outer ]">
    <div class="[ scrollspy__inner ] [ bg-theme-blue dark:bg-theme-orange ]" ref="bar"></div>
    <p class="[ text-theme-600 dark:text-theme-100 ]">document.scroll(<span ref="text">0</span>%)</p>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue'
  export default {
    setup () {
      const bar = ref(null)
      const text = ref(null)

      onMounted(() => {
        window.addEventListener('scroll', () => {
          const body = document.body
          const root = document.documentElement

          const scrollStart = body.scrollTop || root.scrollTop
          const scrollEnd = ( root.scrollHeight || body.scrollHeight ) - root.clientHeight
          const scrollPercent = scrollStart / scrollEnd * 100
          const roundedScrollPercent = Math.round(scrollPercent)

          bar.value.style.width = `${scrollPercent + 2}vw`
          text.value.innerHTML = roundedScrollPercent
          text.value.parentNode.style.left = `${scrollPercent / 1.2}vw`
        })
      })

      return {
        bar,
        text,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scrollspy__outer {
    $start: 2vw;

    position: relative;
    width: 100vw;
    height: 2.5rem;

    .scrollspy__inner {
      height: 100%;
      width: $start;
    }

    p {
      position: absolute;
      top: 50%;
      
      transform: translate(calc($start + 0.5vw), -50%);
      font-size: 1.6rem;
      transition: all 0 ease;
    }

    span {
      font-size: 1.6rem;
    }
  }

</style>