<template lang="">
  <div class="py-[15px] border-t">
    <div class="container mx-auto">
      <div class="flex items-center gap-[25px]">
        <Dropdown
          :items="records"
          :value="activeRecord"
          label="Sort record by"
          rounded
          @onChange="handleOnChange"
        />

        <Dropdown :items="records" label="Filter" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Dropdown, { ItemType } from "../dropdown/dropdown.vue"

interface DataType {
  activeRecord: String | null
  records: ItemType[]
}
export default {
  components: {
    Dropdown,
  },
  data(): DataType {
    return {
      activeRecord: null,
      records: [
        {
          value: "name",
          label: "Name",
        },
        {
          value: "date_modified",
          label: "Date modified",
        },
        {
          value: "date_added",
          label: "Date added",
        },
      ],
    }
  },

  methods: {
    handleOnChange(_e: Event, value: string) {
      this.activeRecord = value
    },
  },
}
</script>
<style lang=""></style>
