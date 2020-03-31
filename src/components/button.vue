<template>
    <button class="c-button" :class="{[`icon-${iconPosition}`]: true}"  @click="$emit('click')">
      <c-icon v-if="icon && !loading" :name='icon' class="icon"></c-icon>
      <c-icon v-if="loading" name='loading' class="icon loading"></c-icon>
      <div class="content">
        <slot></slot>
      </div>
    </button>
</template>

<script>
import Icon from './icon'
export default {
  components: {
    'c-icon': Icon
  },
  props: {
    icon: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(val){
        // console.log(val)
        // if(val !== 'left' && val !== 'right') {
        //   return false
        // } 
        // return true
        return val === 'left' || val === 'right'
      }
    }
  }
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.c-button {
  font-size: var(--fons-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle; //解决行内元素对不齐
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>