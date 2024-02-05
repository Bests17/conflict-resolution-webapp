<template lang="">
  <div class="pt-[13px]">
    <div class="py-[15px] border-t bg-[#F3F6FF] border-neutral-500">
      <div class="container mx-auto">
        <div class="flex items-center gap-[25px] justify-between">
          <div class="flex items-center gap-[25px] w-full">
            <Dropdown
              :items="records"
              v-model="activeRecord"
              label="Sort record by"
              rounded
            />

            <Dropdown
              :items="records"
              label="Filter"
              icon="bars-filter"
              iconClass="min-w-5 min-h-5"
            />

            <div class="w-full max-w-[600px]">
              <Input
                v-model="searchText"
                :fullWidth="true"
                :startAdornment="startAdornment"
                placeholder="Search student by any keyword"
              />
            </div>
          </div>

          <Button variant="outlined" class="py-[15px] ring-[#226BFF]">
            <span class="text-nowrap"> Download Doc </span>
            <Icon name="download" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Dropdown, { ItemType } from "../dropdown/dropdown.vue"
import Input, { AdornmentType } from "../input/input.vue"
import Button from "../button/button.vue"
import Icon from "../icons/base-icon.vue"

interface DataType {
  activeRecord: String | null
  records: ItemType[]
  startAdornment: AdornmentType
  searchText: String
}

export default {
  components: {
    Dropdown,
    Input,
    Button,
    Icon,
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
      startAdornment: { type: "icon", name: "search" },
      searchText: "",
    }
  },
}
</script>
<style lang=""></style>
