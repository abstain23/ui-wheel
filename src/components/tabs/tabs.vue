<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Tabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "row",
      validator(value) {
        return ["row", "column"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  created() {
    // console.log(this.selected);
  },
  mounted() {
    this.$emit("update:selected", "yyyy");
    this.eventBus.$emit("update:selected", this.selected);
  }
};
</script>

<style lang="scss" scoped>
</style>