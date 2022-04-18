<template>
  <header ref="header" id="header__nav">
    <section ref="headerLogo" class="[ site__header ]" :class="names.surfaceA">
      <div class="[ nav__start ]">
        <HeaderHamburger />
        <GlobalsSocialIcons />
      </div>
      <div class="[ nav__middle ]">
        <img class="[ site__logo ] [ cursor-pointer ]" :src="mode === true ? logoDark : logoLight" alt="site logo">
      </div>
      <div class="[ nav__end ]">
        <HeaderModeToggle />
      </div>
    </section>
    
    <section
      ref="headerNav"
      class="[ site__nav ]"
      :class="names.surfaceB"
    >
      <HeaderMainNav />
      <div class="[ expand__nav ]">
        <i
        class="[ fa-solid fa-arrow-down-to-line ]"
        :class="names.toggleShrink"
        v-if="collapsed && collapsed !== null"
        @click="grow">
        </i>
        <i
        class="[ fa-solid fa-arrow-up-to-line ]"
        :class="names.toggleShrink"
        v-if="!collapsed && collapsed !== null"
        @click="shrink">
        </i>
      </div>
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
    const headerNav = ref(null)
    const headerLogo = ref(null)
    const logoStatic = ref(null)
    const collapsed = ref(null)

    const grow = () => {
      headerLogo.value.style.height = logoStatic.value
      headerLogo.value.style.padding = ''
      collapsed.value = !collapsed.value
    }

    const shrink = () => {
      headerLogo.value.style.height = 0
      headerLogo.value.style.padding = 0
      collapsed.value = !collapsed.value
    }

    onMounted(() => {
      setHeaderHeight(header.value.offsetHeight)

      const body = document.body
      //height of the logo nav section in px
      const logoHeight = `${headerLogo.value.offsetHeight}px`
      logoStatic.value = logoHeight
      const logoStyle = headerLogo.value.style
      //height of entire header section in px
      const headerHeight = `${header.value.offsetHeight}px`
      //distance of nav links container from top
      const navTop = headerNav.value.offsetTop

      body.style.paddingTop = headerHeight
      
      window.addEventListener('scroll', () => {
        if ( window.scrollY >= navTop ) {
          logoStyle.height = 0
          logoStyle.padding = 0
          collapsed.value = true
        } else {
          logoStyle.height = logoHeight
          logoStyle.padding = ''
          collapsed.value = null
        }
      })
    })

    return {
      logoDark,
      logoLight,
      names,
      mode,
      header,
      headerNav,
      headerLogo,
      grow,
      shrink,
      collapsed,
    }
  }
}
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;

  #header__nav {
    position: fixed;
    top: 0;
  }
    
  .site__header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    width: 100vw;
    padding-inline: 5rem;
    padding-block: 2rem;

    overflow: hidden;
    transition: $base;
    
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

  .site__nav {
    position: relative;

    .expand__nav {
      position: absolute;
      top: 50%;
      left: 70vw;
      transform: translateY(-50%);

      i {
        font-size: 1.8rem;
      }
    }
  }

</style>