<template>
  <Transition name="show">
    <div
      v-if="toastData.show === true"
      class="[ toast__container ] [ bg-theme-600 dark:bg-theme-500 ]"
    >
      <h2 class="[ text-white ]">{{ toastData.msg }}</h2>
    </div>
  </Transition>
</template>

<script setup>
  const props = defineProps(['toastData'])

</script>

<style lang="scss" scoped>
  @use "scss/abstracts/variables" as *;

  .toast__container {
    $w: 45rem;
    $h: 15rem;

    position: absolute;
    top: 28vh;
    left: calc(100vw / 2 - ($w / 2));

    display: flex;
    align-items: center;
    justify-content: center;

    width: $w;
    height: $h;

    padding: 2rem;

    border: 0.25rem solid $theme-orange;
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.35);
    z-index: 1000;

    h2 {
      font-size: 1.6rem;
      text-align: center;
      font-weight: 600;
      letter-spacing: 0.1rem
    }
  }

  .dark .toast__container {
    border: 0.25rem solid $theme-blue;
  }

  .show-enter-active {
    animation: wobble 0.5s ease-in-out;
  }
  .show-leave-to {
    transform: translateY(-6rem);
    opacity: 0;
  }
  .show-leave-active {
    transition: all 0.3s ease-in-out;
  }

  @keyframes wobble {
    0% { transform: translateY(-6rem); opacity: 0 }
    50% { transform: translateY(0); }
    60% { transform: translateX(1rem); }
    65% { transform: translateX(-1rem); }
    70% { transform: translateX(0.8rem); }
    75% { transform: translateX(-0.8rem); }
    80% { transform: translateX(0.6rem); }
    85% { transform: translateX(-0.6rem); }
    90% { transform: translateX(0.4rem); }
    95% { transform: translateX(-0.4rem); }
    100% { transform: translateX(0); }
  }

</style>