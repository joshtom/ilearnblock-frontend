<template>
  <div class="contact">
    <div class="container">
      <a-row :gutter="[32, 32]" type="flex" justify="space-between">
        <a-col
          :xs="{ span: 24, order: 2 }"
          :md="{ span: 12, order: 1 }"
          :lg="{ span: 10, order: 1 }"
        >
          <div class="form">
            <h1 class="text-secondary text-bold">Let's talk</h1>
            <p>
              To request a quote or want to meet up for coffee, contact us
              directly or fill out the form and we will get back to you
              promptly.
            </p>

            <a-form layout="vertical" style="" @submit="handleSubmit">
              <a-form-item label="Name">
                <a-input
                  type="text"
                  placeholder="Your Name"
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
                  placeholder="email@example.com"
                  v-decorator="[
                    'email',
                    {
                      rules: [
                        { required: true, message: 'Email is required!' },
                      ],
                    },
                  ]"
                  autocomplete="email"
                />
              </a-form-item>
              <a-form-item label="Your Message">
                <a-textarea
                  placeholder="Type something if you want"
                  :rows="4"
                />
              </a-form-item>
              <a-form-item>
                <a-spin :spinning="false">
                  <Button type="submit" className="btn-primary">
                    Send Message
                  </Button>
                </a-spin>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
        <a-col
          :xs="{ span: 24, order: 1 }"
          :md="{ span: 12, order: 2 }"
          :lg="{ span: 12, order: 2 }"
          :order="1"
        >
          <div class="address">
            <div class="img">
              <img
                src="~/assets/icons/contact-us.svg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <ul class="address--icons">
              <li>
                <location />
                <p>Lorem, Ipsum, Akure, Ondo state.</p>
              </li>
              <li>
                <contact />
                <p>+(234) 813-000-1111</p>
              </li>
              <li>
                <email />
                <p>loremipsum@mail.com</p>
              </li>
            </ul>
            <div class="social-icons">
              <facebook />
              <youtube />
              <linkedin />
              <instagram />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
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
    onChange(e) {
      // this.rememberMe = e.target.checked;
    },
  },
  components: {
    location: () => import("~/assets/icons/location"),
    contact: () => import("~/assets/icons/contact"),
    email: () => import("~/assets/icons/email"),
  },
};
</script>

<style lang="scss" scoped>
</style>