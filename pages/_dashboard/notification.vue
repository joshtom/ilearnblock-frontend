<template>
  <div class="notification">
    <m-header>
      <template v-slot:title>
        <h1>Notification</h1>
      </template>
      <template v-slot:subtitle>
        <p>All notification here</p>
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