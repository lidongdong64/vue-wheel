<template>
  <button class="w-button">按钮</button>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'w-button'
  }
</script>

<style lang="scss">
  .w-button {
    padding: 0 1em;
    height: var(--button-height);
    color: var(--color);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background-color: var(--button-bg);
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-bg-active);
    }
    &:focus {
      outline: none;
    }
  }
</style>