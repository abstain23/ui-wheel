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
    // this.$emit("update:selected", "yyyy");
    if(!this.$children.length) {
      console.warn('tabs组件的子组件只能为tabs-head和tabs-body')
    }
    this.$children.forEach(item => {
      if(item.$options.name === 'TabsHead') {
        item.$children.forEach(child => {
          // console.log(child.name)
          if(child.$options.name === 'TabsItem' && child.name === this.selected) {
            this.eventBus.$emit("update:selected", this.selected, child);
          }
        })
      }
      if(item.$options.name !== 'TabsHead' && item.$options.name !== 'TabsBody') {
        console.warn('tabs组件的子组件只能为tabs-head和tabs-body')
      }
    })
  }
};
</script>

<style lang="scss" scoped>
</style>