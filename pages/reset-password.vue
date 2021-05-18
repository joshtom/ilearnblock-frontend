<template>
  <div class="reset">
    <div class="container">
      <img src="~/assets/images/reset.svg" alt="" />
      <h1 class="text-secondary">Reset Password</h1>
      <p>
        Enter your email address in the form below and we will send you further
        instructions on how to reset your password.
      </p>
      <a-form layout="vertical" style="" @submit="handleSubmit">
        <a-form-item>
          <a-input
            type="email"
            placeholder="email@example.com"
            v-decorator="[
              'email',
              {
                rules: [{ required: true, message: 'Email is required!' }],
              },
            ]"
            autocomplete="email"
          />
        </a-form-item>
        <a-form-item>
          <div class="btnFooter">
            <Button type="submit" class="btn-primary"> Reset Password </Button>
            <Button> Cancel </Button>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  BeforeCreate() {
    this.form = this.$form.createForm(this, { name: "login" });
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
  },
};
</script>

<style lang="scss" scoped>
</style>