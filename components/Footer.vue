<template>
  <footer class="[ site__footer ]" :class="names.surfaceA">
    <div class="[ footer__logo ]">
      <img :src="mode === true ? logoDark : logoLight" alt="">
    </div>
    <div class="tech__logos" :class="names.surfaceB">
      <h2 class="[ text-theme-300 dark:text-theme-100 ]">This Site Is Proudly Made With</h2>
      <div class="logo__container">
        <a
          v-for="item in tech"
          :href="item.url"
          target="_blank"
        >
          <img :src="mode === true ? item.iconDark : item.iconLight" alt="built with tech logo">
        </a>
      </div>
    </div>
    <div class="site__copyright">
      <p>©2022 Daniel LittleThunder - All rights reserved. | Powered by Coffee & Vue3</p>
    </div>
  </footer>
</template>

<script>
  import logoDark from 'img/logo-footer-dark.png'
  import logoLight from 'img/logo-footer-light.png'
  import { mode } from 'state/dark-mode'
  import { cNameRef as names } from 'state/class-names'
  import { tech } from 'state/routed'

  export default {
    setup () {
      
      return {
        logoDark,
        logoLight,
        mode,
        names,
        tech,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;

  .footer__logo {
    max-width: 114rem;
    width: 100%;
    margin-inline: auto;
    padding-block: 2rem;

    img {
      margin-inline: auto;
      transition: $base;

      &:hover {
        filter: blur(3px);
      }
    }
  }

  .tech__logos {    
    padding-inline: 5rem;
    padding-block: 3rem;

    h2 {
      text-align: center;
      font-size: 2.4rem;
      font-weight: 400;
    }

    .logo__container {
      $gap: 1rem;
      
      display: flex;
      justify-content: center;
      align-items: flex-end;
      grid-gap: $gap;
      
      max-width: 65vw;
      margin-inline: auto;
      margin-top: 2rem;

      img {
        margin-inline: auto;
        transition: $base;

        &:hover {
          filter: blur(3px);
        }
      }
    }
  }
  .site__copyright {
    color: white;
    text-align: center;
    background-color: $theme-blue;
    padding-inline: 5rem;
    padding-block: 1rem;

    p {
      font-size: 1.4rem;
    }
  }

</style>