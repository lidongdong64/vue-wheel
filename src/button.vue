<template>
  <button class="w-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'w-button',
//    props: ['icon', 'iconPosition']
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
//          if (value !== 'left' && value !== 'right') {
//            return false;
//          } else {
//            return true;
//          }
          return value === 'left' || value === 'right';
        }
      }
    }
  }
</script>

<style lang="scss">
  .w-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    height: var(--button-height);
    color: var(--color);
    font-size: var(--font-size);
    vertical-align: top;
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
    > .icon {
      order: 1;
      width: 1em;
      height: 1em;
      margin-right: .3em;
    }
    > .content {
      order: 2;
    }
    &.icon-right {
      > .content {
        order: 1;
      }
      > .icon {
        order: 2;
        margin-left: .3em;
      }
    }
  }
</style>