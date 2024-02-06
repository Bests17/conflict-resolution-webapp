<template lang="">
  <tbody>
    <template :key="`${row.id}-${index}`" v-for="(row, index) of data">
      <TableRow @click="handleClick(row.id)">
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

      <TableRow v-if="row.records" class="w-full">
        <TableCell
          :class="[
            row.id !== expandedId ? ' border-none' : '',
            'transition-all duration-500 p-0',
          ]"
          :colspan="colspan"
        >
          <Collapse :when="row.id === expandedId" class="duration-500">
            <RecordCompareTable
              :records="row.records"
              :headCells="recordHeadCells"
              :tableActions="recordTableActions"
            />
          </Collapse>
        </TableCell>
      </TableRow>
    </template>
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
import RecordCompareTable from "../../conflict-compare-table/conflict-compare-table-row-view.vue"
import { Collapse } from "vue-collapsed"

interface DataType {
  expandedId: string | null
  recordHeadCells: HeadCellType[]
  recordTableActions: TableActionType[]
}

export default {
  components: {
    TableRow,
    TableCell,
    Checkbox,
    Button,
    RecordCompareTable,
    Collapse,
  },
  props: {
    data: { type: Array, required: true },
    checkedItems: { type: Array<String> },
    showCheckbox: { type: Boolean },
    headCells: { type: Array<HeadCellType>, required: true },
    tableActions: { type: Object as PropType<TableActionType[]>, default: [] },
  },
  computed: {
    colspan() {
      let length = Object.keys(this.headCells).length
      if (this.showCheckbox) {
        length += 1
      }
      if (this.tableActions) {
        length += 1
      }
      return String(length)
    },
  },
  data(): DataType {
    return {
      expandedId: null,
      recordHeadCells: [
        {
          field: "first_name",
          name: "First name",
        },
        {
          field: "last_name",
          name: "Last name",
        },
        {
          field: "phone",
          name: "Phone",
        },
        {
          field: "birthday",
          name: "birthday",
        },
        {
          field: "address",
          name: "Address",
        },
        {
          field: "source",
          name: "Source",
        },
      ],
      recordTableActions: [
        {
          type: "button",
          label: "Delete record",
          color: "red",
          callback: this.deleteRecord,
        },
      ],
    }
  },
  methods: {
    handleAction(callback: Function, row: any) {
      callback(row) // Invoke the callback function with the row data
    },
    handleClick(row_id: string) {
      if (row_id === this.expandedId) {
        this.expandedId = null
      } else {
        this.expandedId = row_id
      }
    },
    deleteRecord(row: any) {
      console.log("row", row)
    },
  },
  $emit: ["row-click"],
}
</script>
<style lang=""></style>
