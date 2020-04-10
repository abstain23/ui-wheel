<template>
  <div class="tabs-pane" v-if="showPane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsPane",
  inject: ["eventBus"],
  data() {
    return {
      showPane: true
    };
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created() {
    this.eventBus.$on("update:selected", data => {
      this.name === data ? (this.showPane = true) : (this.showPane = false);
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>