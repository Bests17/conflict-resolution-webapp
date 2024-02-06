<template lang="">
  <thead class="bg-black">
    <th
      v-if="showCheckbox"
      class="py-5 px-2.5 w-10 text-white font-semibold text-sm"
      align="center"
    >
      <Checkbox />
    </th>
    <th
      class="py-5 px-2.5 text-white font-semibold text-sm"
      :key="cell.field"
      v-for="cell of cells"
      :align="cell.align ?? 'left'"
    >
      {{ cell.name }}
    </th>
  </thead>
</template>

<script lang="ts">
import { PropType } from "vue"
import Checkbox from "../../checkbox/checkbox.vue"

export interface HeadCellType {
  name: string
  field: string
  align?: string
}

export default {
  components: {
    Checkbox,
  },
  props: {
    cells: { type: Object as PropType<HeadCellType[]>, required: true },
    checkedItems: { type: Array<String> },
    showCheckbox: { type: Boolean },
  },
}
</script>

<style lang=""></style>
