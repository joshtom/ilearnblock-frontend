<template>
  <div class="learn">
    <div class="learn__course-info">
      <div class="img">
        <img
          src="~/assets/images/about.svg"
          alt="courses-images"
          width="100%"
          height="100%"
        />
      </div>
      <div class="learn__course-info--text">
        <h1 class="text-secondary">Learn Cryptoeconomics</h1>
        <p>
          Cryptoeconomics refers to the study of economic interaction in
          adversarial environments. The underlying challenge is that in
          decentralized P2P systems, that do not give control to any centralized
          party, one must assume that there will be bad actors looking to
          disrupt the system. Cryptoeconomic approaches combine cryptography and
          economics to create robust decentralized P2P networks that thrive over
          time despite adversaries attempting to disrupt them.
        </p>
      </div>
    </div>
    <div class="learn__difficulty">
      <h3>Difficulty</h3>
      <div class="learn__difficulty--container">
        <div class="card">
          <div class="icon"></div>
          <h3>Beginner</h3>
        </div>
        <div class="card">
          <div class="icon"></div>
          <h3>Intermediate</h3>
        </div>
        <div class="card">
          <div class="icon"></div>
          <h3>Advanced</h3>
        </div>
      </div>
    </div>
    <div class="learn__courses">
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
  </div>
</template>

<script>
export default {
  components: {
    headText: () => import("~/components/utilities/headingtext"),
    Course: () => import("~/components/cards/course"),
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