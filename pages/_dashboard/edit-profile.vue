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
    <div class="edit-profile__container">
      <a-form layout="vertical" style="" @submit="handleSubmit">
        <a-form-item label="First Name">
          <a-input
            type="text"
            placeholder="Enter first name"
            v-decorator="[
              'first-name',
              {
                rules: [{ required: true, message: 'First name is required!' }],
              },
            ]"
            autocomplete="first-name"
          />
        </a-form-item>
        <a-form-item label="Last Name">
          <a-input
            type="text"
            placeholder="Enter last name"
            v-decorator="[
              'lname',
              {
                rules: [{ required: true, message: 'Last Name is required!' }],
              },
            ]"
            autocomplete="last-name"
          />
        </a-form-item>
        <a-form-item label="Let us know you">
          <a-textarea placeholder="Write something about yourself" :rows="4" />
        </a-form-item>
        <a-form-item label="Add or Change Image">
          <a-upload
            name="avatar"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="false"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :before-upload="beforeUpload"
            @change="handleChange"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
              <a-icon :type="loading ? 'loading' : 'plus'" />
              <!-- <img src="~/assets/images/" /> -->
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
        </a-form-item>
        <h3 style="margin-bottom: 12px">Links</h3>
        <a-form-item>
          <a-input addon-before="http(s)://" default-value="mysite" />
          <p class="text-gray after-text">Link to website</p>
        </a-form-item>

        <a-form-item>
          <a-input
            addon-before="http://twitter.com/"
            default-value="e.g @johnsmith"
          />
          <p class="text-gray after-text">Enter your twitter username</p>
        </a-form-item>

        <a-form-item>
          <a-input
            addon-before="http://www.facebook.com/"
            default-value="e.g @johnsmith"
          />
          <p class="text-gray after-text">Enter your facebook username</p>
        </a-form-item>

        <a-form-item>
          <a-input
            addon-before="http://www.linkedin.com/"
            default-value="e.g @johnsmith"
          />
          <p class="text-gray after-text">Input your LinkedIn resource id.</p>
        </a-form-item>

        <a-form-item>
          <a-input
            addon-before="http://www.youtube.com/"
            default-value="e.g @johnsmith"
          />
          <p class="text-gray after-text">Enter your youtube username</p>
        </a-form-item>
        <a-form-item>
          <a-spin :spinning="false">
            <Button type="submit" className="btn-primary"> Save </Button>
          </a-spin>
        </a-form-item>
      </a-form>
    </div>
    <div class="edit-profile__footer">
      <a-spin :spinning="false">
        <Button type="submit" className="btn-primary"> Save </Button>
      </a-spin>
    </div>
  </div>
</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  layout: "dashboard",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login" });
  },
  components: {
    "m-header": () => import("~/components/dashboard/main-header"),
  },
  data() {
    return {
      loading: false,
      imageUrl: "",
    };
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

    //
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
  },
};
</script>

<style lang="scss">
.avatar-uploader > .ant-upload {
  width: 150px;
  height: 150px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.after-text {
  color: #999;
  margin-left: 10px;
  margin-top: 4px;
  font-size: 14px;
}
</style>