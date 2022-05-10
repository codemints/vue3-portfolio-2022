<template>
  <div id="root">
    <GlobalsCursor />
    <Header/>
    <SectionsIntro />
    <SectionsAbout />
    <SectionsPortfolio />
    <SectionsExperience />
    <SectionsContact />
    <Footer />
  </div>
</template>

<script setup>
  import { mode, setMode } from 'state/dark-mode'
  import { ref, onMounted, watch } from 'vue'

  const root = ref(null)
  const body = ref(null)

  //METHODS
  const updatePreferredColorScheme = (method, val) => {
    setMode(val)
    root.value.classList[method]('dark')
    localStorage.setItem('darkMode', mode.value)
  }

  const getPreferredColorScheme = (scheme) => {
    return window.matchMedia(`(prefers-color-scheme: ${scheme})`)
  }

  const setPreferredColorScheme = () => {
    const storedScheme = localStorage.getItem('darkMode')

    if ( getPreferredColorScheme('dark').matches && !storedScheme ) {
      updatePreferredColorScheme('add', true)
    }

    if ( getPreferredColorScheme('light').matches && !storedScheme ) {
      updatePreferredColorScheme('remove', false)
    }
    
    if ( storedScheme ) {
      if ( storedScheme === 'true' ) updatePreferredColorScheme('add', true)
      if ( storedScheme === 'false' ) updatePreferredColorScheme('remove', false)
    }
  }

  onMounted(() => {
    root.value = document.documentElement
    body.value = document.body
    const matchScheme = getPreferredColorScheme('dark')

    if ( mode.value === true ) root.value.classList.add('dark')
    else root.value.classList.remove('dark')

    setPreferredColorScheme()

    matchScheme.addEventListener('change', () => {
      matchScheme.matches ? updatePreferredColorScheme('add', true) : updatePreferredColorScheme('remove', false)
    })
  })

  watch(mode, () => {        
    if ( mode.value === true ) root.value.classList.add('dark')
    else root.value.classList.remove('dark')
  })
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;

  #root {
    // background-image: 
    //   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
      // url('img/lightbg-section-01.png');
    min-width: 100vw;
    min-height: 100vh;
    background-color: $theme-100;
    transition: $bounce;

  }
  .dark #root {
    // background-image:
    //   linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    //   url('img/darkbg-section-01.png');
    background-color: $theme-800;
  }
  
</style>