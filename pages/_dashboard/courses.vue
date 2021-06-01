<template>
  <div class="courses">
    <m-header>
      <template v-slot:title>
        <h1>Courses</h1>
      </template>
      <template v-slot:subtitle>
        <p>Check your course track</p>
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