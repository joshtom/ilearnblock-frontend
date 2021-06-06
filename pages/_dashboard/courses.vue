<template>
  <div class="courses">
    <m-header>
      <template v-slot:title>
        <h1 class="text-bold">Courses</h1>
      </template>
      <template v-slot:subtitle>
        <p>Check your course track</p>
      </template>
    </m-header>
    <div class="courses__container">
      <div class="courses__container--card">
        <section class="card">
          <img
            src="~/assets/icons/c-course.svg"
            alt="completed-course"
            width="70"
            height="70"
          />
          <p>Completed Courses</p>
          <h1>5</h1>
        </section>
        <!--  -->
        <section class="card">
          <img
            src="~/assets/icons/c-lesson.svg"
            alt="completed-lesson"
            width="70"
            height="70"
          />
          <p>Completed Lessons</p>
          <h1>10</h1>
        </section>
        <!--  -->
        <section class="card">
          <img
            src="~/assets/icons/v-course.svg"
            alt="Viewed Courses"
            width="70"
            height="70"
          />
          <p>Viewed Courses</p>
          <h1>50</h1>
        </section>
        <!--  -->
        <section class="card">
          <img
            src="~/assets/icons/interest.svg"
            alt="Interests"
            width="70"
            height="70"
          />
          <p>Interests</p>
          <h1>10</h1>
        </section>
      </div>

      <div class="courses__container--introduction">
        <h1 class="title">Free Introduction</h1>
        <!-- Add carousel Courses card -->
      </div>

      <div class="courses__container--learning">
        <h1 class="title">Continue Learning</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  components: {
    "m-header": () => import("~/components/dashboard/main-header"),
  },
};
</script>

<style lang="scss" scoped>
</style>