<template>
  <div class="header" v-scroll="handleScroll">
    <search ref="search" />
    <mobile ref="mobile" />
    <header :class="{ 'scroll-bg': scroll }">
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
          <nuxt-link to="/skills" :class="{ 'scroll-text': scroll }"
            >Skills</nuxt-link
          >
        </li>
        <li class="link company" :class="{ active: subIsActive('/company') }">
          <nuxt-link to="/company" :class="{ 'scroll-text': scroll }"
            >Company</nuxt-link
          >
          <ul class="company-dropdown dropdown">
            <li>
              <nuxt-link to="/about"> About Us </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blog"> Blog </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact"> Help Center </nuxt-link>
            </li>
          </ul>
        </li>
        <li
          class="link education"
          :class="{ active: subIsActive('/education') }"
        >
          <nuxt-link to="/education" :class="{ 'scroll-text': scroll }"
            >Education</nuxt-link
          >

          <ul class="education-dropdown dropdown">
            <li><nuxt-link to="/course"> Courses </nuxt-link></li>
            <li><nuxt-link to="/glossary"> Glossary </nuxt-link></li>
          </ul>
        </li>
        <li class="link service" :class="{ active: subIsActive('/service') }">
          <nuxt-link to="/service" :class="{ 'scroll-text': scroll }"
            >Service</nuxt-link
          >

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
          v-if="!scroll"
        />

        <img
          src="~/assets/icons/darkSearch.svg"
          alt="search-icon"
          class="ctaBtn--search"
          width="20"
          height="20"
          @click="searchModal"
          v-else
        />

        <nuxt-link to="/login" class="ctaBtn--login text-primary text-bold">
          Sign In</nuxt-link
        >
        <nuxt-link to="/register" class="ctaBtn--register">
          Get Started
        </nuxt-link>
        <!-- Hamburger Menu -->
        <div class="ctaBtn--hamburger" @click="mobileModal">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  components: {
    search: () => import("~/components/modals/search.vue"),
    mobile: () => import("~/components/modals/mobile.vue"),
  },
  data() {
    return {
      scroll: false,
    };
  },
  methods: {
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
    searchModal() {
      this.$refs.search.showModal();
    },
    mobileModal() {
      this.$refs.mobile.showModal();
    },

    handleScroll: function () {
      if (window.scrollY > 40) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
      // return window.scrollY > 100;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>