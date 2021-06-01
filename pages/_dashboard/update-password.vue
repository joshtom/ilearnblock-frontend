<template>
  <div class="update-password">
    <m-header>
      <template v-slot:title>
        <h1>Update Password</h1>
      </template>
      <template v-slot:subtitle>
        <p>Secure your password</p>
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