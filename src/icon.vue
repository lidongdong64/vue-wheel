<template>
  <svg class="wheel-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Icon',
    props: ['name']
  };
</script>

<style lang="scss">
  .wheel-icon {
    width: 1em;
    height: 1em;
  }
</style>