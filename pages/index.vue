<template>
  <div id="root" :class="{ 'dark': mode === true }">
    <Header/>
    <SectionsIntro />
    <SectionsAbout />
    <SectionsPortfolio />
    <SectionsExperience />
    <SectionsContact />
  </div>
</template>

<script>
  import { mode } from 'state/dark-mode'
  import { ref, onMounted } from 'vue'

  export default {
    setup () {

      return {
        mode
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;

  #root {
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
      url('img/lightbg-section-01.png');
    min-width: 100vw;
    min-height: 100vh;
    background-color: $theme-100;
    transition: $bounce;

    &.dark {
      background-image:
        linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url('img/darkbg-section-01.png');
      background-color: $theme-800;
    }
  }
  
</style>