<template>
  <Layout>
    <TopBar>
      <div class="flex items-center gap-[25px] justify-between">
        <div class="flex items-center gap-[25px] w-full">
          <Dropdown
            :items="recordSortItems"
            v-model="activeRecord"
            label="Sort record by"
            rounded
          />

          <Dropdown
            :items="recordSortItems"
            label="Filter"
            icon="bars-filter"
            iconClass="min-w-5 min-h-5"
          />

          <div class="w-full max-w-[600px]">
            <SearchInput
              v-model="searchText"
              :fullWidth="true"
              placeholder="Search student by any keyword"
            />
          </div>
        </div>

        <Button variant="outlined" class="py-[15px] ring-[#226BFF]">
          <span class="text-nowrap"> Download Doc </span>
          <Icon name="download" />
        </Button>
      </div>
    </TopBar>
    <div class="container mx-auto pt-8 pb-4">
      <Alert color="warning" icon="circle-info"
        >you can toggle down the details to quickly resolve conflicting records,
        you can choose the main information of any conflicting item by clicking
        the item.
      </Alert>

      <Table
        :headCells="headCells"
        :data="getData"
        :showCheckbox="true"
        class="mt-[23px]"
        :tableActions="tableActions"
      />
    </div>
  </Layout>
</template>

<script lang="ts">
import Header from "../../components/header/header.vue"
import Layout from "../../components/layout/dash-layout/dash-layout.vue"
import TopBar from "../../components/top-bar/top-bar.vue"
import Alert from "../../components/alert/alert.vue"
import Table, { TableActionType } from "../../components/table/table.vue"
import { HeadCellType } from "../../components/table/table-header/table-header.vue"
import Dropdown, { ItemType } from "../../components/dropdown/dropdown.vue"
import Button from "../../components/button/button.vue"
import Icon from "../../components/icons/base-icon.vue"
import SearchInput from "../../components/input/search-input.vue"
import { v4 as uuidv4 } from "uuid"

interface DataType {
  headCells: HeadCellType[]
  tableData: any[]
  activeRecord: string | undefined
  recordSortItems: ItemType[]
  searchText: string
  tableActions: TableActionType[]
}

export default {
  components: {
    Header,
    Layout,
    TopBar,
    Alert,
    Table,
    Dropdown,
    Button,
    Icon,
    SearchInput,
  },
  data(): DataType {
    return {
      headCells: [
        {
          field: "name",
          name: "Name",
        },
        {
          field: "phone",
          name: "Phone Number",
        },
        {
          field: "birthday",
          name: "Date of Birth",
        },
        {
          field: "address",
          name: "Address",
        },
        {
          field: "status",
          name: "Status",
        },
      ],
      tableData: [
        {
          id: uuidv4(),
          name: "Aminu Alex",
          phone: "0903485423",
          birthday: "21/10/2001",
          address: "21 maple avenue",
          status: "2 Conflict",
        },
        {
          id: uuidv4(),
          name: "Aminu Alex",
          phone: "0903485423",
          birthday: "21/10/2001",
          address: "21 maple avenue",
          status: "2 Conflict",
        },
        {
          id: uuidv4(),
          name: "Aminu Alex",
          phone: "0903485423",
          birthday: "21/10/2001",
          address: "21 maple avenue",
          status: "2 Conflict",
        },
        {
          id: uuidv4(),
          name: "Aminu Alex",
          phone: "0903485423",
          birthday: "21/10/2001",
          address: "21 maple avenue",
          status: "2 Conflict",
        },
        {
          id: uuidv4(),
          name: "Aminu Alex",
          phone: "0903485423",
          birthday: "21/10/2001",
          address: "21 maple avenue",
          status: "2 Conflict",
        },
        {
          id: uuidv4(),
          name: "Aminu Alex",
          phone: "0903485423",
          birthday: "21/10/2001",
          address: "21 maple avenue",
          status: "2 Conflict",
        },
        {
          id: uuidv4(),
          name: "Aminu Alex",
          phone: "0903485423",
          birthday: "21/10/2001",
          address: "21 maple avenue",
          status: "2 Conflict",
        },
      ],
      activeRecord: "",
      recordSortItems: [
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
      searchText: "",
      tableActions: [
        {
          type: "button",
          label: "View",
          class: "w-full bg-purple-500 ring-1 ring-primary-1000",
          callback: this.handleViewDetail,
        },
      ],
    }
  },
  computed: {
    getData() {
      return this.tableData.map((row: any) => {
        return {
          ...row,
        }
      })
    },
  },
  methods: {
    handleViewDetail(row: any) {
      console.log("row", row)
      this.$router.push(`/record/${row.id}/review-conflict`)
    },
  },
}
</script>
