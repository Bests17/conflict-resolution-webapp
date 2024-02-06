<template lang="">
  <div class="flex">
    <div class="m-auto">
      <label class="relative flex cursor-pointer items-center rounded">
        <input
          :id="id"
          :name="name"
          :value="modelValue"
          type="checkbox"
          class="peer cursor-pointer appearance-none relative h-4 w-4 bg-white border border-black border-opacity-[0.14] transition-all checked:border-primary checked:bg-primary rounded"
          @change="$emit('update:modelValue', $event.target.value)"
        />
        <div
          class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100"
        >
          <BaseIcon name="checkbox" />
        </div>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import BaseIcon from "../../components/icons/icon-checkbox.vue"
export default {
  components: {
    BaseIcon,
  },
  props: {
    name: { type: String, default: "" },
    id: { type: String, default: "" },
    modelValue: { type: String, default: "" },
  },
  emits: ["update:modelValue"],
}
</script>
<style lang=""></style>
