<template>
  <div class="tabs-item" @click="xx" :class="{red:color}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsItem",
  inject: ["eventBus"],
  data() {
    return {
      color: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  created() {
    // console.log("sunzi", this.eventBus);
    // console.log(this.name);
    // console.log(this.disabled);
    this.eventBus.$on("update:selected", data => {
      this.name === data ? (this.color = true) : (this.color = false);
    });
  },
  methods: {
    xx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>