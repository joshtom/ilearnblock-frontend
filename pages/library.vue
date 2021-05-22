<template>
  <div class="library">
    <div class="library__hero">
      <h1>Turn to learning</h1>
      <article>
        Get started your free courses below! If you’re enjoying your lessons,
        you can start earning Bitcoin while you learn by signing up for
        <b>ILEARNBLOCK PRO</b>! You’ll get full access to our course library and
        much more!
      </article>
    </div>
    <div class="library__intro">
      <div class="card">
        <ul class="incentives">
          <li>Unlimited access to ILearnBlock course library</li>
          <li>Earn rewards as you learn with L+Earn</li>
          <li>New guides, courses and crypto-reports</li>
          <li>Market data, analysis, and reports</li>
          <li>Members-only community of blockchain experts</li>
          <li>Unlock all of this and more with your membership</li>
        </ul>
        <nuxt-link to="/courses" class="btn-link">
          View more courses
        </nuxt-link>
      </div>

      <div class="library__intro--video">
        <!-- <img src="~/assets/images/video.png" alt="" /> -->
      </div>
    </div>

    <div class="library__freeCourses">
      <headText>Access Free Courses</headText>
      <div class="container">
        <div class="col">
          <course />
        </div>
        <div class="col">
          <course />
        </div>
        <div class="col">
          <course />
        </div>
        <div class="col">
          <course />
        </div>
      </div>
      <a-pagination
        v-model="current"
        :total="50"
        show-less-items
        @change="onChange"
      />
    </div>

    <div class="library__freeCourses">
      <headText>Recommended courses</headText>
      <div class="container">
        <div class="col">
          <course />
        </div>
        <div class="col">
          <course />
        </div>
        <div class="col">
          <course />
        </div>
        <div class="col">
          <course />
        </div>
        <div class="col">
          <course />
        </div>
        <div class="col">
          <course />
        </div>
        <div class="col">
          <course />
        </div>
        <div class="col">
          <course />
        </div>
      </div>
      <a-pagination
        v-model="current"
        :total="50"
        show-less-items
        @change="onChange"
      />
    </div>

    <categories />

    <linetext
      bg="#ffffff"
      line="#eee"
      style="margin-top: 20px"
      class="linetext-bottom"
    >
      <img src="~/assets/images/logo2.png" alt="" width="70" height="70" />
    </linetext>
  </div>
</template>

<script>
export default {
  // Use a library template for it and auth for the route guard
  data() {
    return {
      current: 1,
    };
  },
  components: {
    Course: () => import("~/components/cards/course"),
    headText: () => import("~/components/utilities/headingtext"),
    linetext: () => import("~/components/utilities/linetext"),
  },
  methods: {
    onChange(value) {
      console.log("The current value", value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>