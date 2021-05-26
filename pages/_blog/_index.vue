<template>
  <div class="blog-details">
    <div class="blog-details--container">
      <h1 class="title text-secondary">
        The Importance of Crptocurrency in Nigeria
      </h1>
      <p class="author">By Adam Adams November 17,2019</p>
      <div class="image">
        <img
          src="~/assets/images/crypto-legality2.png"
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <article class="content">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore <br />
        <br />
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet. Lorem wefhh ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
        sea takimata sanctus est Lorem ipsum dolor sit amet. <br />
        <br />
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio efadde dignissim qui blandit praesent
        luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        Lorem dfeerfa ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci .
      </article>
      <div class="quote">
        And yes, it does attach an image of you selecting a text on Medium
        instead of just quoting the text. What a mess with image & blog.
      </div>
      <div class="comment">
        <h1 class="comment-title">Comments</h1>
        <div class="comment-card">
          <div class="image"></div>
          <div class="message">
            <h3>Carry Minati</h3>
            <p class="message__text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy sdaa eirmod tempor invidunt ut labore et .
            </p>
            <div class="footer">
              <nuxt-link to="#"> Reply </nuxt-link>
              <p>15 June 2019</p>
            </div>
          </div>
        </div>
        <!--  -->

        <a-form layout="vertical" style="" @submit="handleSubmit">
          <h2 style="margin-bottom: 20px">Leave a reply</h2>
          <a-form-item>
            <a-textarea placeholder="Type something if you want" :rows="4" />
          </a-form-item>
          <a-form-item>
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
          <a-form-item>
            <a-input
              type="email"
              placeholder="Your email"
              v-decorator="[
                'email',
                {
                  rules: [{ required: true, message: 'Email is required!' }],
                },
              ]"
              autocomplete="email"
            />
          </a-form-item>
          <a-checkbox style="margin-bottom: 20px">
            <span style="font-weight: 400">
              Save my name, email, and website in this browser for the next time
              I comment.
            </span>
          </a-checkbox>
          <a-form-item>
            <a-spin :spinning="false">
              <Button type="submit" className="btn-primary">
                Post Comment
              </Button>
            </a-spin>
          </a-form-item>
        </a-form>
      </div>
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
};
</script>

<style lang="scss" scoped>
</style>