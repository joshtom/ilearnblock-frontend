<template>
  <div class="default-layout">
    <search ref="search" />
    <header>
      <div class="logo">
        <nuxt-link to="/">
          <img
            src="~/assets/images/logo.png"
            alt="ilearnblock-logo"
            width="47px"
            height="47px"
          />
          <h1 class="logo--text">
            <span class="text-primary">I</span>LearnBlock
          </h1>
        </nuxt-link>
      </div>
      <ul class="links">
        <li class="link" :class="{ active: subIsActive('/skills') }">
          <nuxt-link to="/skills">Skills</nuxt-link>
        </li>
        <li class="link company" :class="{ active: subIsActive('/company') }">
          <nuxt-link to="/company">Company</nuxt-link>
          <ul class="company-dropdown dropdown">
            <li><nuxt-link to="/about"> About Us </nuxt-link></li>
            <li><nuxt-link to="/blog"> Blog </nuxt-link></li>
            <li><nuxt-link to="/contact"> Help Center </nuxt-link></li>
          </ul>
        </li>
        <li
          class="link education"
          :class="{ active: subIsActive('/education') }"
        >
          <nuxt-link to="/education">Education</nuxt-link>

          <ul class="education-dropdown dropdown">
            <li><nuxt-link to="/course"> Courses </nuxt-link></li>
            <li><nuxt-link to="/glossary"> Glossary </nuxt-link></li>
          </ul>
        </li>
        <!-- <li
          class="link community"
          :class="{ active: subIsActive('/community') }"
        >
          <nuxt-link to="/community">Community</nuxt-link>'

          <ul class="community-dropdown dropdown">
            <li><nuxt-link to="/about"> Ask Community </nuxt-link></li>
            <li><nuxt-link to="/about"> Join Community </nuxt-link></li>
          </ul>
        </li> -->
        <li class="link service" :class="{ active: subIsActive('/service') }">
          <nuxt-link to="/service">Service</nuxt-link>

          <ul class="service-dropdown dropdown">
            <li><nuxt-link to="/training"> Training </nuxt-link></li>
            <li><nuxt-link to="/trade"> Trade Cryptocurrency </nuxt-link></li>
            <li><nuxt-link to="/investment"> Investment </nuxt-link></li>
          </ul>
        </li>
      </ul>
      <div class="ctaBtn">
        <img
          src="~/assets/icons/search.svg"
          alt="search-icon"
          class="ctaBtn--search"
          width="20"
          height="20"
          @click="searchModal"
        />
        <nuxt-link to="/login" class="ctaBtn--login text-primary text-bold">
          Sign In</nuxt-link
        >
        <nuxt-link to="/register" class="ctaBtn--register">
          Get Started
        </nuxt-link>
      </div>
    </header>
    <div class="container">
      <Nuxt />
    </div>
    <footer>
      <a-row :gutter="16">
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 4 }">
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
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 5 }">
          <div class="footer--link">
            <h3>Contact Us</h3>
            <div class="footer--link-content">
              <nuxt-link to="/#"> +(234) 813-0000-1111 </nuxt-link>
              <nuxt-link to="/#"> Lorem Ipsum, Akure, Ondo state. </nuxt-link>
              <nuxt-link to="/#"> loremipsum@mail.com </nuxt-link>
            </div>
          </div>
        </a-col>
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 4 }">
          <div class="footer--link">
            <h3>Follow Us</h3>
            <div class="footer--link-content">
              <nuxt-link to="/courses"> Courses </nuxt-link>
              <nuxt-link to="/learn"> ILB Learn </nuxt-link>
              <nuxt-link to="/glocery"> Glocery </nuxt-link>
              <nuxt-link to="/contact"> Request a course </nuxt-link>
            </div>
          </div>
        </a-col>
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 3 }">
          <div class="footer--link">
            <h3>Company</h3>
            <div class="footer--link-content">
              <nuxt-link to="/about"> About Us </nuxt-link>
              <nuxt-link to="/blog"> Blog </nuxt-link>
              <nuxt-link to="/contact"> Help Center </nuxt-link>
            </div>
          </div>
        </a-col>
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 4 }">
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
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 4 }">
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
  components: {
    search: () => import("~/components/modals/search.vue"),
  },
  methods: {
    subIsActive(input) {
      // return this.$route.path.includes(input);
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
    searchModal() {
      this.$refs.search.showModal();
    },
  },
  computed: {
    getDate() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
</style>
