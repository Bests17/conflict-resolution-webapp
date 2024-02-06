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
        <template v-if="headCell.field === 'actions'">
          <div class="flex items-center">
            <Button
              :key="`${row.id}-action-${index}`"
              :class="action.class"
              v-for="(action, index) of row.actions"
              @click="row.onClick"
              >{{ action.label }}</Button
            >
          </div>
        </template>

        <template v-else>
          {{ row[headCell.field] }}
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
  },
}
</script>
<style lang=""></style>
