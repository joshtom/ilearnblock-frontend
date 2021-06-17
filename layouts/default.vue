<template>
  <div class="default-layout">
    <Header />
    <div class="container">
      <Nuxt />
    </div>
    <footer>
      <a-row :gutter="16">
        <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 4 }">
          <div class="footer--link">
            <h3>Quick Links</h3>
            <div class="footer--link-content">
              <nuxt-link to="/"> Home </nuxt-link>
              <nuxt-link to="/skills"> Skills </nuxt-link>
              <nuxt-link to="/company"> Company </nuxt-link>
              <nuxt-link to="/learn"> Learn </nuxt-link>
              <nuxt-link to="/forum"> Forum </nuxt-link>
            </div>
          </div>
        </a-col>
        <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 5 }">
          <div class="footer--link">
            <h3>Contact Us</h3>
            <div class="footer--link-content">
              <nuxt-link to="/#">
                <img
                  src="~/assets/icons/f-contact.svg"
                  alt="contact"
                  width="14"
                  height="14"
                />
                +(234) 813-0000-1111
              </nuxt-link>
              <nuxt-link to="/#">
                <img
                  src="~/assets/icons/f-location.svg"
                  alt="address"
                  width="14"
                  height="14"
                />
                Lorem Ipsum, Akure, Ondo state.
              </nuxt-link>
              <nuxt-link to="/#">
                <img
                  src="~/assets/icons/f-mail.svg"
                  alt="mail"
                  width="14"
                  height="14"
                />
                loremipsum@mail.com
              </nuxt-link>
            </div>
          </div>
        </a-col>
        <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 4 }">
          <div class="footer--link">
            <h3>Follow Us</h3>
            <div
              class="footer--link-content social-icon"
              style="flex-direction: row"
            >
              <a href="#">
                <img src="~/assets/icons/f-facebook.svg" alt="facebook-icon" />
              </a>
              <a href="#">
                <img src="~/assets/icons/f-youtube.svg" alt="youtube-icon" />
              </a>
              <a href="#">
                <img src="~/assets/icons/f-linkedin.svg" alt="linkedin-icon" />
              </a>
              <a href="#">
                <img
                  src="~/assets/icons/f-instagram.svg"
                  alt="instagram-icon"
                />
              </a>
            </div>
          </div>
        </a-col>
        <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 3 }">
          <div class="footer--link">
            <h3>Company</h3>
            <div class="footer--link-content">
              <nuxt-link to="/about"> About Us </nuxt-link>
              <nuxt-link to="/blog"> Blog </nuxt-link>
              <nuxt-link to="/contact"> Help Center </nuxt-link>
            </div>
          </div>
        </a-col>
        <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 4 }">
          <div class="footer--link">
            <h3>Education</h3>
            <div class="footer--link-content">
              <nuxt-link to="/courses"> Courses </nuxt-link>
              <nuxt-link to="/learn"> ILB Learn </nuxt-link>
              <nuxt-link to="/glocery"> Glossary </nuxt-link>
              <nuxt-link to="/contact"> Request a course </nuxt-link>
            </div>
          </div>
        </a-col>
        <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 4 }">
          <div class="footer--link">
            <h3>Services</h3>
            <div class="footer--link-content">
              <nuxt-link to="/training"> Training </nuxt-link>
              <nuxt-link to="/trade"> Trade Cryptocurrency </nuxt-link>
              <nuxt-link to="/investment"> Investment </nuxt-link>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center" align="middle">
        <a-col>
          <div class="footer-logo">
            <img
              src="~/assets/images/logo.png"
              alt=""
              width="47px"
              height="47px"
            />
            <h1><span class="text-primary">I</span>LearnBlock</h1>
          </div>
        </a-col>
      </a-row>
    </footer>
    <div class="copyright">
      <p>&copy; {{ getDate }}. All rights reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getDate() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
</style>
