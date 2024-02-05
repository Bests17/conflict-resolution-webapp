<template lang="">
  <Header />
  <main class="pt-[85px] px-[63px]">
    <div class="container mx-auto">
      <slot />
    </div>
  </main>
</template>
<script lang="ts">
import Header from "../../header/header.vue"

export default {
  components: {
    Header,
  },
}
</script>
<style lang=""></style>
