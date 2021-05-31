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
          <img
            src="~/assets/icons/search.svg"
            alt="search-icon"
            class="search"
            width="20"
            height="20"
          />
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

<style lang="scss">
.modal-label {
  .ant-form-item {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .search {
    position: absolute;
    top: 0px;
    z-index: 1;
  }
  .ant-input {
    position: relative;
    background: #181818;
    height: 80px;
    padding-left: 2.4rem;

    &:focus,
    &:focus-within {
      color: white;
    }
  }

  .ant-modal {
    top: 40px;
    .ant-modal-body {
      background: #181818;
      // background: red;
      padding: 0 50px;
      @media screen and (max-width: 640px) {
        padding: 0 20px;
      }
    }
    .ant-modal-content {
      .ant-modal-close {
        top: 11px;
        right: 30px;
        color: white;
        @media screen and (max-width: 640px) {
          right: 0;
        }
      }
    }
  }
}
</style>
