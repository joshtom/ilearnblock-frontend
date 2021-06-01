<template>
  <div class="dashboard-layout">
    <Header />
    <div class="dashboard-layout__container">
      <aside class="dashboard-layout__container--sidebar">
        <div class="img">
          <div class="circle"></div>
          <h3>Nuel Page</h3>
        </div>
        <!--  -->
        <ul class="dashboard-links">
          <nuxt-link
            v-for="(tab, i) in tabs"
            :key="i"
            :to="tab.route"
            class="link"
          >
            <li :class="{ active: subIsActive(`${tab.route}`) }">
              <span class="icon"></span>{{ tab.name }}
            </li>
          </nuxt-link>
        </ul>
      </aside>
      <aside class="dashboard-layout__container--main">
        <nuxt />
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          name: "My Courses",
          route: "/courses",
        },
        {
          name: "History",
          route: "/history",
        },
        {
          name: "Edit Profile",
          route: "/edit-profile",
        },
        {
          name: "Update Profile",
          route: "/update-profile",
        },
        {
          name: "Notification",
          route: "/notification",
        },
        {
          name: "Logout",
          route: "/logout",
        },
      ],
    };
  },
  components: {},
  methods: {
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>