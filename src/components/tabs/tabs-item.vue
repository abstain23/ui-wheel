<template>
  <div class="tabs-item" @click="onClick" :class="[{active:active},{disabled:disabled}]" :test-name='name'>
    <c-icon :name="icon" v-if="icon"></c-icon>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false
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
    },
    icon: {
      type: String,
      default: ""
    }
  },
  created() {
    // console.log("sunzi", this.eventBus);
    // console.log(this.name);
    // console.log(this.disabled);
    this.eventBus&&this.eventBus.$on("update:selected", name => {
      // this.name === name ? (this.active = true) : (this.active = false);
      this.active = this.name === name;
      // if(this.name === name) {
      //   console.log(this.name + '选中了')
      // } else {
      //   console.log(this.name + '没被选中')
      // }
    });
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.$emit('click')
      console.log("cc");
      this.eventBus&&this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: blue;
$disabled-text-color: gray;
.tabs-item {
  padding: 0 1.5em;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active {
    color: $blue;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor:not-allowed;
  }
}
</style>