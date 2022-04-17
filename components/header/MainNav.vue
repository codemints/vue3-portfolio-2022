<template>
  <nav class="[ main__nav ]">
    <div class="[ nav__wrapper ]">
      <div class="[ nav__links ]">
        <a :class="[ `menu__item-${index + 1}`, names.nav ]" class="[ menu__item ]" :href="section.route" v-for="(section, index) in sections" :key="index">{{ section.title }}</a>
      </div>
      <div class="[ nav__shuttle ] [ bg-theme-200 dark:bg-theme-blue ]"></div>
    </div>
  </nav>
</template>

<script>
  import { cNameRef as names } from 'state/class-names'
  import { sections } from 'state/routed'
  
  export default {
    setup () {

      return {
        names,
        sections,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main__nav {
    display: flex;
    align-items: center;
    min-height: 6rem;
  }
  
  .nav__wrapper {
    text-align: center;
    max-width: 65vw;
    height: 100%;
    margin-inline: auto;
  }

  .nav__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
  }

  .nav__shuttle {
    height: 0.2rem;
    width: 5rem;
    margin-top: 1rem;
  }
</style>