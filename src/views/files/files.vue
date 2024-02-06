<template>
  <Layout>
    <Topbar>
      <div class="flex justify-between gap-[25px]">
        <div class="w-full max-w-[625px]">
          <SearchInput
            v-model="searchText"
            placeholder="Search categories by any keyword"
          />
        </div>

        <Button
          variant="outlined"
          class="py-[15px] ring-[#226BFF]"
        >
          <span class="text-nowrap"> Add new category </span>
          <Icon name="addFolder" />
        </Button>
      </div>
    </Topbar>
  </Layout>
</template>

<script lang="ts">
import Header from "../../components/header/header.vue"
import Layout from "../../components/layout/dash-layout/dash-layout.vue"
import Topbar from "../../components/top-bar/top-bar.vue"
import SearchInput from "../../components/input/search-input.vue"
import Button from "../../components/button/button.vue"
import Icon from "../../components/icons/base-icon.vue"

interface DataType {
  searchText: string
  categories: CategoryType[]
  showAddModal: boolean
  category: CategoryType | null
}

export default {
  components: {
    Header,
    Topbar,
    Layout,
    SearchInput,
    Button,
    Icon,
  },
  data(): DataType {
    return {
      searchText: "",
      category: null,
      categories: [],
      showAddModal: false,
    }
  },
}
</script>
