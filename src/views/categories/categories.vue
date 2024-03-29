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
          @click="handleClick"
        >
          <span class="text-nowrap"> Add new category </span>
          <Icon name="addFolder" />
        </Button>
      </div>
    </Topbar>

    <div class="container mx-auto py-[65px]">
      <div
        v-if="categories.length"
        class="p-6 rounded-lg border w-fit mx-auto border-neutral-500 grid grid-cols-4 gap-x-11 gap-y-6 flex-wrap"
      >
        <CategoryCard
          :key="`category-${index}`"
          v-for="(category, index) of categories"
          :name="category.name"
          :id="category.id"
          @click="handleCardClick(category.id)"
          @edit="(id) => handleEdit(id, index)"
          @remove="(id) => handleRemove(id)"
        />
      </div>
      <template v-else>
        <div class="text-center">No Categories</div>
      </template>
    </div>

    <CreateCategoryModal
      :open="showAddModal"
      :category="category"
      @create="handleCreate"
      @close="handleClose"
    />
  </Layout>
</template>

<script lang="ts">
import Header from "../../components/header/header.vue"
import Layout from "../../components/layout/dash-layout/dash-layout.vue"
import Topbar from "../../components/top-bar/top-bar.vue"
import SearchInput from "../../components/input/search-input.vue"
import Button from "../../components/button/button.vue"
import Icon from "../../components/icons/base-icon.vue"
import CreateCategoryModal from "../../components/modal/create-category-modal.vue"
import CategoryCard from "../../components/category/category-card.vue"
import { CategoryType } from "../../types/category"
import { v4 as uuidv4 } from "uuid"

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
    CreateCategoryModal,
    CategoryCard,
  },
  data(): DataType {
    return {
      searchText: "",
      category: null,
      categories: [],
      showAddModal: false,
    }
  },
  methods: {
    handleClick() {
      this.category = null
      this.showAddModal = true
    },
    handleClose() {
      this.showAddModal = false
    },
    handleCreate(category: CategoryType) {
      if (category?.id) {
        this.categories = this.categories.map((ca) => {
          if (ca.id === category.id) {
            return { ...ca, name: category.name }
          } else {
            return ca
          }
        })
      } else {
        this.categories.push({
          id: `${uuidv4()}-${new Date().getTime()}`,
          name: category.name,
        })
      }
      this.showAddModal = false
    },
    handleRemove(id: string) {
      this.categories = this.categories.filter((category) => category.id !== id)
    },
    handleEdit(id: string, index: number) {
      this.showAddModal = true
      this.category = this.categories[index]
      console.log("handleEdit", id)
    },
    handleCardClick(id: string) {
      this.$router.push(`/categories/${id}/files`)
    },
  },
}
</script>
