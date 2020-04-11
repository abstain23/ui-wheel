<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref='line'></div>
    <div class="name-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on('update:selected', (name, item) => {
      let {left, right, width} = item.$el.getBoundingClientRect()
      const lineStyle = this.$refs.line.style
      lineStyle.width = `${width}px`
      lineStyle.left = `${left}px`
      // lineStyle.transform=`translate(${left}px)`
    })
  }
};
</script>

<style lang="scss" scoped>
  $tab-height:40px;
  $blue: blue;
  $border-color: #ddd;
  .tabs-head {
    display: flex;
    flex-direction: row;
    height: $tab-height;
    justify-content: flex-start; 
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all .5s;
    }
    > .name-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>