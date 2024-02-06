<template lang="">
  <table class="conflict-compare-table-v2 w-full">
    <tbody>
      <tr v-for="(row, key) of records">
        <td class="w-[140px]">
          <div class="text-red font-bold">
            {{ `Record #${key + 1}` }}
          </div>
        </td>

        <td v-for="(headCell, index) of headCells">
          <div class="capitalize">
            <Radio
              :id="`${row.id}-${index}`"
              v-if="headCell.field !== 'source'"
              :label="row[headCell.field]"
            />
            <template v-else>
              {{ row[headCell.field] }}
            </template>
          </div>
        </td>

        <td
          :key="`${row.id}-action-${index}`"
          v-for="(action, index) of tableActions"
        >
          <template v-if="action.type === 'button'">
            <Button
              :color="action.color"
              :class="action.class"
              @click="handleAction(action.callback, row)"
            >
              {{ action.label }}
            </Button>
          </template>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="flex">
    <div class="flex gap-2 py-4 px-4">
      <Button color="white">
        <Icon name="undo" class="min-w-[20px]" />Revert Changes</Button
      >
      <Button
        class="bg-primary-950"
        @click="openReplaceConfirmModal"
        @confirm="onReplaceConfirm"
        ><Icon name="checkbox" class="min-w-[20px]" /> Resolve Changes</Button
      >
    </div>
  </div>

  <ReplaceConfirmModal
    :open="showReplaceConfirmModal"
    @close="closeReplaceConfirmModal"
    @confirm="onReplaceConfirm"
  />
  <ConfirmSuccessModal
    :open="showSuccessModal"
    :message="successMessage"
    @close="closeSuccessModal"
  />
</template>

<script lang="ts">
import { PropType } from "vue"
import { RecordType } from "../../types/record"
import { HeadCellType } from "../table/table-header/table-header.vue"
import { TableActionType } from "../table/table.vue"
import Button from "../button/button.vue"
import Radio from "../radio/radio.vue"
import Icon from "../icons/base-icon.vue"
import ReplaceConfirmModal from "../modal/replace-confirm-modal.vue"
import ConfirmSuccessModal from "../modal/confirmation-success-modal.vue"

export default {
  props: {
    records: { type: Object as PropType<RecordType[]>, required: true },
    headCells: { type: Array<HeadCellType>, required: true },
    tableActions: { type: Object as PropType<TableActionType[]>, default: [] },
  },
  components: {
    Button,
    Radio,
    Icon,
    ConfirmSuccessModal,
    ReplaceConfirmModal,
  },
  computed: {},
  data() {
    return {
      showReplaceConfirmModal: false,
      showSuccessModal: false,
      successMessage: "",
    }
  },
  methods: {
    handleAction(callback: Function, row: any) {
      callback(row) // Invoke the callback function with the row data
    },
    openReplaceConfirmModal() {
      this.showReplaceConfirmModal = true
    },
    closeReplaceConfirmModal() {
      this.showReplaceConfirmModal = false
    },
    closeSuccessModal() {
      this.showSuccessModal = false
    },
    onReplaceConfirm() {
      console.log("handle replacing")
      this.showReplaceConfirmModal = false
      this.successMessage = `<span class="font-semibold">Information has been updated.`
      this.showSuccessModal = true
    },
  },
}
</script>

<style lang="scss">
table.conflict-compare-table-v2 {
  tr {
    &:first-child {
      td {
        @apply border-t-0;
      }
    }

    td {
      @apply py-8;
      @apply px-5;
      @apply border;
      @apply border-neutral-500;
      @apply bg-[#F3F6FF];
    }
  }
}
</style>