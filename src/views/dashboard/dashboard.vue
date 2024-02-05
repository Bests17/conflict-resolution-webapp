<template>
  <Layout>
    <TopBar />
    <div class="container pt-8 pb-4">
      <Alert color="warning" icon="circle-info"
        >you can toggle down the details to quickly resolve conflicting records,
        you can choose the main information of any conflicting item by clicking
        the item.
      </Alert>
    </div>
  </Layout>
</template>

<script lang="ts">
import Header from "../../components/header/header.vue"
import Layout from "../../components/layout/dash-layout/dash-layout.vue"
import TopBar from "../../components/top-bar/top-bar.vue"
import Alert from "../../components/alert/alert.vue"

export default {
  components: {
    Header,
    Layout,
    TopBar,
    Alert,
  },
}
</script>
