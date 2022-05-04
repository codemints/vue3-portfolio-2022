<template>
  <div class="[ modal__controls ]">
    <div class="[ modal__inner ]">
      <div class="[ controls__tab ]">
        <div class="tab__inner">
          <p>open controls</p>
        </div>
      </div>
      <div class="[ controls__container ]">
        <div class="[ controls__intro ]">
          <h2>Canvas Animation Controls</h2>
          <p>use these controls to perform actions like redrawing the canvas, stoppign the animation, and show/hide the hero text.</p>
        </div>
        <div class="[ controls__buttons ]">
          <GlobalsControlButton
          />
          <GlobalsControlButton
          />
          <GlobalsControlButton
          />
          <GlobalsControlButton
          />
          <GlobalsControlButton
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import ControlButton from 'comp/globals/ControlButton.vue'

</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;
  $w: 17rem;
  $h: 2.8rem;
  .modal__controls {
    position: absolute;
    left: 1rem;

    width: 50rem;
    z-index: 10;
  }

  .modal__inner {
    position: relative;
  }

  .controls__tab {
    position: absolute;
    top: 0;
    right: 0;

    width: $w;
    height: $h;

    background-color: $theme-blue;
    border-start-start-radius: 1rem;
    border-start-end-radius: 1rem;

    padding-inline: 1rem;
    padding-block: 0.5rem;
    transform: rotate(90deg) translate($w, -$h);
    transform-origin: 100% 0;
    
    p {
      color: white;
      font-family: $font-heading;
      text-transform: uppercase;
      font-weight: 900;
      line-height: 1;
    }
  }

  .controls__container {
    background-color: white;
    padding: 2rem;
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.125);
  }

</style>