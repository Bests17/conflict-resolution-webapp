<template>
  <router-link :to="to"> <slot /> </router-link>
</template>

<script lang="ts">
export default {
  props: {
    to: { type: String, required: true },
  },
}
</script>
<style lang="scss">
a {
  @apply flex;
  @apply items-center;
  @apply gap-2;
  @apply text-[#262D3D];
  @apply text-lg;
  @apply p-2;
  @apply rounded;
  @apply hover:text-primary;
  @apply transition duration-300;

  path {
    @apply fill-[#262D3D];
  }
}

.router-link-active {
  @apply bg-primary;
  @apply hover:text-white;
  @apply text-white;

  path {
    @apply fill-white;
  }
}
</style>
