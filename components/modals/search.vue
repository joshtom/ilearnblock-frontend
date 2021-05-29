<template>
  <div class="search-modal">
    <a-modal
      v-model="visible"
      @ok="handleOk"
      :footer="null"
      width="100%"
      style="transition: none; top: 20px"
      class="modal-label"
    >
      <a-form layout="vertical" style="" @submit="handleSubmit">
        <a-form-item>
          <a-input
            style="border: none"
            type="email"
            placeholder="What do you want to learn"
            v-decorator="[
              'email',
              {
                rules: [{ required: true, message: 'Email is required!' }],
              },
            ]"
            autocomplete="email"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login" });
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
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
