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
    this.eventBus.$on("update:selected", name => {
     this.showPane = this.name === name
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.tabs-pane {
  padding: 0 1em;
}
</style>