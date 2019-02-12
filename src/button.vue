<template>
  <button class="w-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <w-icon v-if="loading" name="loading" class="loading icon"></w-icon>
    <w-icon v-if="icon && !loading" :name="icon" class="icon"></w-icon>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'w-button',
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right';
        }
      }
    }
  };
</script>

<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
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
    .loading {
      animation: spin 2s infinite linear;
    }
  }
</style>