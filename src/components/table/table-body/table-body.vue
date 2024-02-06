<template lang="">
  <tbody>
    <TableRow :key="`${row.id}-${index}`" v-for="(row, index) of data">
      <TableCell v-if="showCheckbox">
        <Checkbox :key="`${row.id}-checkbox-${index}`" :value="row.id" />
      </TableCell>
      <TableCell
        :key="`${row.id}-${headCell.field}`"
        v-for="headCell of headCells"
      >
        {{ row[headCell.field] }}
      </TableCell>
      <TableCell
        :key="`${row.id}-action-${index}`"
        v-for="(action, index) of tableActions"
      >
        <template v-if="action.type === 'button'">
          <Button
            :class="action.class"
            @click="handleAction(action.callback, row)"
          >
            {{ action.label }}
          </Button>
        </template>
      </TableCell>
    </TableRow>
  </tbody>
</template>

<script lang="ts">
import { HeadCellType } from "../table-header/table-header.vue"
import TableRow from "../table-row/table-row.vue"
import TableCell from "../table-cell/table-cell.vue"
import Checkbox from "../../checkbox/checkbox.vue"
import Button from "../../button/button.vue"
import { PropType } from "vue"
import { TableActionType } from "../table.vue"

export default {
  components: {
    TableRow,
    TableCell,
    Checkbox,
    Button,
  },
  props: {
    data: { type: Array, required: true },
    checkedItems: { type: Array<String> },
    showCheckbox: { type: Boolean },
    headCells: { type: Array<HeadCellType>, required: true },
    tableActions: { type: Object as PropType<TableActionType[]>, default: [] },
  },
  methods: {
    handleAction(callback: Function, row: any) {
      callback(row) // Invoke the callback function with the row data
    },
  },
}
</script>
<style lang=""></style>
