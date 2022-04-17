<template>
  <div class="[ scrollspy__outer ]">
    <div class="[ scrollspy__inner ] [ bg-theme-orange ]"></div>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
  .scrollspy__outer {
    width: 100vw;
    height: 2rem;
  }

  .scrollspy__inner {
    height: 100%;
    width: 20%; //temp
  }
</style>