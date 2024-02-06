<template lang="">
  <Modal :open="open" @close="$emit('close')">
    <div class="text-center">
      <span
        class="inline-block p-3 rounded-[10px] border border-gray-200 shadow-sm"
      >
        <Icon name="folder" class="text-gray-700" />
      </span>
      <div class="text-md text-gray-700 mt-5">Create new category</div>
      <div class="mt-3">
        <Input
          v-model="categoryName"
          placeholder="Name your category"
          :fullWidth="true"
        />
      </div>
      <div class="flex gap-3 mt-8">
        <Button
          class="w-full leading-6 rounded-lg"
          color="white"
          @click="$emit('close')"
          >Cancel</Button
        >
        <Button class="w-full leading-6 rounded-lg" @click="handleCreate"
          >Create category</Button
        >
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import Modal from "./model.vue"
import Icon from "../icons/base-icon.vue"
import Input from "../input/input.vue"
import Button from "../button/button.vue"
import { CategoryType } from "../../types/category"
import { PropType } from "vue"

interface DataType {
  categoryName: string | null | undefined
}

export default {
  components: {
    Modal,
    Icon,
    Input,
    Button,
  },
  emits: ["close", "create"],
  props: {
    open: { type: Boolean, required: true },
    category: { type: Object as PropType<CategoryType | null> },
  },
  mounted() {},
  data(): DataType {
    return {
      categoryName: this.category?.name,
    }
  },
  methods: {
    handleCreate() {
      if (!this.categoryName) return

      this.$emit("create", this.categoryName)
      this.categoryName = ""
    },
  },
}
</script>
<style lang=""></style>
