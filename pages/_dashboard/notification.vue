<template>
  <div class="notification">
    <m-header>
      <template v-slot:title>
        <h1 class="text-bold">Notification</h1>
      </template>
      <template v-slot:subtitle>
        <p class="text-center">Turn email notifications on or off</p>
      </template>
    </m-header>
    <div class="notification__container">
      <p class="text-bold">Email Address</p>
      <div class="bordered-notification">
        <a-checkbox @change="onChange">
          Promotions, course recommendations, and helpful resources from
          ILearnBlock
        </a-checkbox>
      </div>
      <div class="bordered-notification">
        <a-checkbox @change="onChange">
          Don't send me any promotional emails. <br />
          If this box is checked, please note that you will continue to receive
          important transactional emails like purchase receipts.
        </a-checkbox>
      </div>

      <a-spin :spinning="false">
        <Button type="submit" className="btn-primary"> Save </Button>
      </a-spin>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  components: {
    "m-header": () => import("~/components/dashboard/main-header"),
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>