<template>
  <div class="col">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss'>
.col {
  height: 100px;
  background-color: blue;
  width: 50%;
  border: 1px solid red;
}
</style>
