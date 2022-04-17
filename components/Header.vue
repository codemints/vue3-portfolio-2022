<template>
  <header ref="header">
    <section class="[ site__header ]" :class="names.surfaceA">
      <div class="[ nav__start ]">
        <HeaderHamburger />
        <SiteSocialIcons />
      </div>
      <div class="[ nav__middle ]">
        <img class="[ site__logo ] [ cursor-pointer ]" :src="mode === true ? logoDark : logoLight" alt="site logo">
      </div>
      <div class="[ nav__end ]">
        <HeaderModeToggle />
      </div>
    </section>

    <section class="[ site__nav ]" :class="names.surfaceB">
      <HeaderMainNav />
    </section>

    <section class="[ site__scrollspy ]" :class="names.surfaceA">
      <HeaderScrollSpy />
    </section>
  </header>
</template>

<script>
import logoDark from 'img/logo-dark.png'
import logoLight from 'img/logo-light.png'
import { cNameRef as names } from 'state/class-names'
import { mode } from 'state/dark-mode'
import { setHeaderHeight } from 'state/component-info'
import { ref, onMounted } from 'vue'

export default {
  setup () {
    const header = ref(null)

    onMounted(() => {
      setHeaderHeight(header.value.offsetHeight)
    })

    return {
      logoDark,
      logoLight,
      names,
      mode,
      header,
    }
  }
}
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  .site__header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    max-width: 100vw;
    padding-inline: 5rem;
    padding-block: 2rem;

    .site__logo {
      transition: $base;

      &:hover {
        filter: blur(2px);
      }
    }

    .nav__start {
      display: flex;
      align-items: center;
      gap: 5rem;

      justify-self: start;
    }

    .nav__middle {
      justify-self: center;
    }

    .nav__end {
      justify-self: end;
    }
  }

</style>