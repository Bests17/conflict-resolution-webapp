<template lang="">
  <button :data-variant="variant" :class="[_class]">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    color: { type: String, default: "primary" },
    variant: { type: String, default: "filled" },
    class: String,
  },
  computed: {
    _class() {
      let _class = [
        "flex items-center gap-[8px] transition duration-150 ease",
        "text-nowrap",
        "rounded",
      ]
      if (this.color === "primary") {
        // padding
        _class.push("px-[18px] py-2.5")
        // font
        _class.push("text-lg font-semi-bold")
        // hover state
        _class.push("hover:bg-opacity-80")

        if (this.variant === "outlined") {
          _class.push("bg-primary-200 text-neutral-1000")
          _class.push("ring-2 ring-inset ring-primary text-neutral-1000")
          _class.push("active:bg-primary-100")
        } else {
          // background
          _class.push("bg-primary text-white")
          // active state
          _class.push("active:bg-primary-800")
        }
      }

      if (this.class) {
        _class.push(this.class)
      }
      return _class
    },
  },
}
</script>

<style lang="scss">
.bg-primary {
  &[data-variant="outlined"] {
    path {
      @apply fill-neutral-700;
    }
  }

  path {
    @apply fill-white;
  }
}
</style>
