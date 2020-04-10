<template>
  <div class="wrapper" :class="positionClass">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" @click="onCloseClick">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {};
  },
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: [Number, String],
      default: 50000
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "center"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    this.updateStyle();
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay);
    }
  },
  computed: {
    positionClass() {
      return `position-${this.position}`;
    }
  },
  methods: {
    updateStyle() {
      this.$nextTick(() => {
        // console.log(this.$refs);
        // console.log(this.$refs.line);
        this.$refs.line.style.height =
          this.$refs.toast.getBoundingClientRect().height + "px";
      });
    },
    close() {
      this.$el.remove();
      this.$emit("beforeClose");
      this.$destroy();
    },
    onCloseClick() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
    test() {
      console.log("test callback");
    }
  }
};
</script>

<style lang='scss'>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.74);
$animation-duration: 500ms;
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  &.position-top {
    top: 0;
    transform: translateX(-50%);
    .toast {
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
    .toast {
      animation: slide-up $animation-duration;
    }
  }
  &.position-center {
    top: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: fade-in $animation-duration;
    }
  }
}
.toast {
  font-size: $font-size;
  line-height: 1.5;
  min-height: $toast-height;
  display: flex;
  align-items: center;
  background-color: $toast-bg;
  color: white;
  padding: 0 16px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  .message {
    padding: 8px 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  .close {
    flex-shrink: 0;
    padding-left: 16px;
  }
}
</style>
