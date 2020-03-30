<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$el.children)
      for(let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if(name !== 'button') {
          console.warn(`c-button-group的子元素建议全部是c-button，但是你写的是${name},这样可能导致某些样式失效`)
        }
      }
    }
  }
</script>

<style lang="scss">
  .c-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .c-button {
      border-radius: 0;
      margin-left: -1px;
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>