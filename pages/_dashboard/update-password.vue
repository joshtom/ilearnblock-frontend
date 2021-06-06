<template>
  <div class="update-password">
    <m-header>
      <template v-slot:title>
        <h1 class="text-bold">Update Password</h1>
      </template>
      <template v-slot:subtitle>
        <p class="text-center">
          Edit your account settings and change your password here.
        </p>
      </template>
    </m-header>
    <div class="update-password__container">
      <a-form layout="vertical" style="" @submit="handleSubmit">
        <a-form-item label="Current Password">
          <a-input-password
            type="password"
            placeholder="Enter current password"
            v-decorator="[
              'current-password',
              {
                rules: [{ required: true, message: 'Password is required!' }],
              },
            ]"
            autocomplete="current-password"
          />
        </a-form-item>
        <a-form-item label="New Password">
          <a-input-password
            type="password"
            placeholder="Enter new password"
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: 'Password is required!' }],
              },
            ]"
            autocomplete="current-password"
          />
        </a-form-item>
        <a-form-item label="Confirm New Password">
          <a-input-password
            type="password"
            placeholder="Confirm New Password"
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: 'Password is required!' }],
              },
            ]"
            autocomplete="new-current-password"
          />
        </a-form-item>
        <a-form-item>
          <a-spin :spinning="false">
            <Button type="submit" className="btn-primary"> Save </Button>
          </a-spin>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login" });
  },
  components: {
    "m-header": () => import("~/components/dashboard/main-header"),
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          //   this.loginAction(values);
        }
      });
    },
    onChange(e) {
      // this.rememberMe = e.target.checked;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>