<template lang="">
  <Modal :open="open" @close="$emit('close')">
    <div class="text-center">
      <span class="inline-block">
        <span
          class="p-3 bg-warning-100 border-8 border-warning-50 rounded-full inline-block"
        >
          <Icon name="warning" class="text-warning-800" />
        </span>
      </span>

      <div class="text-md text-gray-900 mt-5 font-semibold">
        Replace record?
      </div>

      <div class="mt-2 text-gray-500 text-sm">
        Do you want to replace all conflicting records with the selected record?
      </div>

      <div class="flex gap-3 mt-8">
        <Button
          class="w-full leading-6 rounded-lg"
          color="white"
          @click="$emit('close')"
          >Keep Existing</Button
        >
        <Button class="w-full leading-6 rounded-lg" @click="$emit('confirm')"
          >Replace All</Button
        >
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import Modal from "./model.vue"
import Icon from "../icons/base-icon.vue"
import Button from "../button/button.vue"

export default {
  components: {
    Modal,
    Icon,
    Button,
  },
  emits: ["close", "confirm"],
  props: {
    open: { type: Boolean, required: true },
  },
}
</script>
<style lang=""></style>
