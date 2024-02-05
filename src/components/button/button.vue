<template lang="">
  <button :class="_class">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    color: { type: String, default: "primary" },
    class: String,
  },
  computed: {
    _class() {
      let _class = ["flex items-center gap-[8px] transition duration-300 ease"]
      if (this.color === "primary") {
        // display
        // background
        _class.push("bg-primary text-white")
        // padding
        _class.push("px-[18px] py-2.5")
        // border radius
        _class.push("rounded")
        // font
        _class.push("text-lg font-semi-bold")
        // hover state
        _class.push("hover:bg-opacity-80")
        // active state
        _class.push("active:bg-primary-800")
      }

      return _class
    },
  },
}
</script>

<style lang=""></style>
