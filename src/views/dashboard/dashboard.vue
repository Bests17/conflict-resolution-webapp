<template>
  <Layout><TopBar /> </Layout>
</template>

<script lang="ts">
import Header from "../../components/header/header.vue"
import Layout from "../../components/layout/dash-layout/dash-layout.vue"
import TopBar from "../../components/top-bar/top-bar.vue"

export default {
  components: {
    Header,
    Layout,
    TopBar,
  },
}
</script>
