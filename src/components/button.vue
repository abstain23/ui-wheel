<template>
    <button class="c-button" :class="{[`icon-${iconPosition}`]: true}">
      <svg class="icon" v-if="icon">
        <use :xlink:href="`#i${icon}`" />
      </svg>
      <div class="content">
        <slot></slot>
      </div>
    </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconPosition: {
      type: String,
      default: "left"
    }
  }
};
</script>

<style lang="scss">
.c-button {
  font-size: var(--fons-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle; //解决行内元素对不齐
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
    > .content {
      order: 1;
    }
  }
}
</style>