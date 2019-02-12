<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'button-group',
    mounted () {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase();

        if (name !== 'button') {
          console.warn(`w-button-group 的子元素只能是 w-button，但你写的是 ${name}`)
        }
      }
    }
  }
</script>

<style lang="scss">
  .w-button-group {
    display: inline-flex;
    > .w-button {
      border-radius: 0 ;
      margin-left: -1px;
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>