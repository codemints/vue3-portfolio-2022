<template>
  <div class="social__nav">
    <a v-for="link in links" :key="link.name" :href="link.url" target="_blank">
      <i class="[ fa-brands ]" :class="[ link.icon, names.icon ]"></i>
    </a>
  </div>
</template>

<script>
  import { cNameRef as names } from 'state/class-names'
  import { links } from 'state/routed'

  export default {
    setup () {

      return {
        names,
        links
      }
    }
  }
</script>

<style lang="scss" scoped>
  .social__nav {
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    
    a {
      cursor: none;
    }
    
    i {
      font-size: 2.8rem;
    }
  }

</style>