<template>
  <div class="[ mode__toggle ]">
    <p class="[ mode__text ] [ text-theme-300 dark:text-theme-100 ]">mode.light()</p>
    
    <div class="[ toggle__buttons ] [ bg-theme-600 dark:bg-theme-800 ]">
      <div class="[ toggle_inputs ]">
        <label for="toggle__light">Toggle light mode</label>
        <input type="radio" name="toggle-mode" id="toggle__light" @click.stop.prevent="handleSchemeSwitch">
      </div>
      <div class="[ toggle_inputs ]">
        <label for="toggle__dark">Toggle dark mode</label>
        <input type="radio" name="toggle-mode" id="toggle__dark" @click.stop.prevent="handleSchemeSwitch">
      </div>
      <div class="[ switch__wrap ]" :class="{ 'isDark': mode === true }">
        <div class="[ toggle__indicator ] [ bg-theme-blue ]"></div>
      </div>
    </div>
    
    <p class="[ mode__text ] [ text-theme-600 dark:text-theme-500 ]">mode.dark()</p>
  </div>
</template>

<script setup>
  import { mode, setMode } from 'state/dark-mode'
  
  const handleSchemeSwitch = () => {
    setMode(!mode.value)
    localStorage.setItem('darkMode', mode.value)
  }
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  .mode__toggle {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .toggle__buttons {
    $toggleD: 1.75rem;
    $toggleP: 0.5rem;
    $toggleC: #ffffff;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-width: 6rem;
    border-radius: calc(( $toggleD + $toggleP ));
    padding: $toggleP;
    
    input {
      height: $toggleD;
      width: $toggleD;

      background-color: rgba($toggleC, 0.15);
      border-radius: 50%;

      margin: 0;
      transition: $base;

      &:hover,
      &:focus,
      &:checked {
        background-color: rgba($toggleC, 0.35);
      }
    }

    .switch__wrap {
      position:absolute;
      height: 100%;
      width: calc(100% - $toggleP);

      display: flex;
      align-items: center;
      justify-content: flex-start;

      transition: $bounce;
      pointer-events: none;
      &.isDark {
        transform: translateX(calc( 100% - ($toggleD + $toggleP) ));
      }
    }
    .toggle__indicator {
      height: $toggleD;
      width: $toggleD;
      border-radius: 50%;

      transform: translateX(0);
      z-index: 1;

    }
  }
  label {
    display: none;
    height: 0;
    opacity: 0;
    overflow: hidden;
  }

</style>