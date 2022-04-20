<template>
  <TestsNav />
  <TestsSectionOne />
  <TestsSectionTwo />
  <TestsSectionThree />
</template>

<script>

  export default {
    setup () {

      return {

      }
    }
  }
</script>

<style lang="scss">
  $black: #333538;
  $red: #FF6384;
  $blue: #36A2EB;
  $green: #4BC0C0;

  $base: all 0.3s ease-in-out;

  header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 10rem;
    background-color: $black;
  }

  .nav__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    text-align: center;

    max-width: 70vw;
    width: 100%;
    margin-inline: auto;

    a {
      color: white;
      font-size: 1.8rem;
      transition: $base;

      &:hover,
      &.active {
        opacity: 0.5;
      }
    }
  }

  nav {
    position: relative;
  }

  .nav__shuttle--parent {
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 0;
    height: 0.2rem;
    margin-top: 0.5rem;
    transition: all 0.3s ease-in-out;

    .nav__shuttle--wrapper {
      position: relative;
      height: 100%;
      width: 100%;
    }

    .nav__shuttle--upper,
    .nav__shuttle--lower {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }

    .nav__shuttle--lower {
      width: 100%;
      height: 100%;
      background-color: $red;
    }
    .nav__shuttle--upper {
      width: 50%;
      height: 100%;
      background-color: $green;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;

    &:nth-of-type(1) {
      background-color: $red;
    }

    &:nth-of-type(2) {
      background-color: $blue;
    }

    &:nth-of-type(3) {
      background-color: $green;
    }
  }
  h2 {
    color: white;
    font-size: 6rem;
  }
</style>