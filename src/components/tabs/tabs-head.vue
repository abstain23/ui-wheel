<template>
  <div class="tabs-head">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsHead",
  inject: ["eventBus"],
  created() {
    console.log("yeye", this.eventBus);
  }
};
</script>

<style lang="scss" scoped>
</style>