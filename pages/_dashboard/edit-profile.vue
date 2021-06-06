<template>
  <div class="edit-profile">
    <m-header>
      <template v-slot:title>
        <h1 class="text-bold">Edit Profile</h1>
      </template>
      <template v-slot:subtitle>
        <p>Update your details</p>
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