<template>
  <div class="login">
    <nuxt-link to="/" class="login__logo">
      <img
        src="~/assets/images/logo.png"
        alt="ilearnbock-logo"
        width="50px"
        height="50px"
      />
    </nuxt-link>
    <h1 class="title text-secondary">Sign Up</h1>
    <p class="subtitle">Sign up to create an account</p>
    <Button class="btn-outline w-full btn-google">
      <img
        src="~/assets/icons/google.svg"
        alt="google-icom"
        width="24"
        height="24"
      />
      Sign in with Google</Button
    >
    <auth-text> Or sign up with email </auth-text>
    <div class="form">
      <a-form layout="vertical" style="" @submit="handleSubmit">
        <a-form-item label="Name">
          <a-input
            type="text"
            placeholder="Enter full name"
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: 'Name is required!' }],
              },
            ]"
            autocomplete="name"
          />
        </a-form-item>

        <a-form-item label="Email">
          <a-input
            type="email"
            placeholder="example@email.com"
            v-decorator="[
              'email',
              {
                rules: [{ required: true, message: 'Email is required!' }],
              },
            ]"
            autocomplete="email"
          />
        </a-form-item>

        <a-form-item label="Password">
          <a-input-password
            type="password"
            placeholder="Min 8 characters"
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: 'Password is required!' }],
              },
            ]"
            autocomplete="password"
          />
        </a-form-item>

        <a-form-item label="Confirm Password">
          <a-input-password
            type="password"
            placeholder="Repeat password"
            v-decorator="[
              'confirm-password',
              {
                rules: [
                  { required: true, message: 'Confirm Password is required!' },
                ],
              },
            ]"
            autocomplete="confirm-password"
          />
          <a-form-item> </a-form-item>
          <div class="form__bottom">
            <a-checkbox @change="onChange">
              I agree to the
              <NuxtLink to="/forgot-password" class="forgotPassword-link">
                Terms and Conditions?
              </NuxtLink></a-checkbox
            >
          </div>
        </a-form-item>
        <a-form-item>
          <a-spin :spinning="false">
            <Button type="submit" className="btn-primary w-full">
              Continue
            </Button>
          </a-spin>
        </a-form-item>
      </a-form>
      <p>
        Already have an account?
        <nuxt-link to="/login" class="text-secondary text-bold">
          Login
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login" });
  },
  components: {
    AuthText: () => import("~/components/utilities/authtext"),
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
