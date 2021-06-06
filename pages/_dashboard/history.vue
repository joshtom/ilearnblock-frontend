<template>
  <div class="history">
    <m-header>
      <template v-slot:title>
        <h1 class="text-bold">History</h1>
      </template>
      <template v-slot:subtitle>
        <p>All your history here</p>
      </template>
    </m-header>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  components: {
    "m-header": () => import("~/components/dashboard/main-header"),
  },
};
</script>

<style lang="scss" scoped>
</style>