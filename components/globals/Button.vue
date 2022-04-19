<template>
  <button
    class="[ block px-12 py-6 text-3xl lowercase w-max ] [ button ]"
    @click="onClick"
    :class="classNames"
    :data-button="dataType">
    
    <slot>Button</slot>
  </button>
</template>

<script>
  export default {
    props: {
      onClick: {
        type: Function,
        required: false,
      },
      classNames: {
        type: Array,
        required: false,
      },
      dataType: {
        type: String,
        required: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use 'scss/abstracts/variables' as *;

  button {
    font-family: $font-body;
  }

</style>