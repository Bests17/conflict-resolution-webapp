<template lang="">
  <td
    :class="[
      'p-5',
      'text-black',
      'text-sm',
      'border-b border-[#B7B7B7]',
      _class,
    ]"
  >
    <slot />
  </td>
</template>

<script lang="ts">
export default {
  props: {
    class: {
      type: String,
      default: "",
    },
  },
  computed: {
    _class() {
      return this.class
    },
  },
}
</script>

<style lang=""></style>
