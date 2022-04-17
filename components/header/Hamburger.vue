<template>
  <div class="[ nav__hamburger ] [ cursor-pointer ]">
    <div :class="names.menu"></div>
    <div :class="names.menu"></div>
    <div :class="names.menu"></div>
    <div :class="names.menu"></div>
    <div :class="names.menu"></div>
    <div :class="names.menu"></div>
  </div>
</template>

<script>
  import { cNameRef as names } from 'state/class-names'
  export default {
    setup () {
      

      return {
        names
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  .nav__hamburger {
    $navW: 3.6rem;
    $navH: 2.4rem;
    $barW: calc($navW / 2);
    $barH: 0.4rem;
    
    position: relative;
    width: $navW;
    height: $navH;

    &:hover > div {
      background-color: $theme-blue;
    }
    
    > div {
      position: absolute;
      height: $barH;
      width: $barW;
      transition: $base;

      &:nth-of-type(2n+1) {
        left: 0;
      }

      &:nth-of-type(2n+2) {
        right: 0;
      }

      &:nth-of-type(1),
      &:nth-of-type(2) {
        top: 0;
      }

      &:nth-of-type(3),
      &:nth-of-type(4) {
        top: calc($navH / 2 - $barH / 2);
      }
      
      &:nth-of-type(5),
      &:nth-of-type(6) {
        bottom: 0;
      }
    }
  }
</style>