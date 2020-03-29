<template>
  <div>
    <button class="c-button">
      <svg class="icon" v-if="icon">
        <use :xlink:href='`#i${icon}`'></use>
      </svg>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props:['icon', 'iconPosition']
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
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>