<template>
  <div class="course__card">
    <div class="course__card--header">
      <img
        src="~/assets/images/course1.png"
        alt="course1-image"
        width="100%"
        height="100%"
      />
    </div>
    <div class="course__card--body">
      <p>Intro to <b>Bitcoin</b></p>
      <div class="course-type">
        <a-tag color="#CDF2E4" class="beginner-tag">
          <p></p>
          Beginner</a-tag
        >
        <p class="course-type--duration"><time-icon /> 5m</p>
      </div>
      <p class="text-bold text-star-rating">
        4.0
        <a-rate v-model="value" class="star-rating" :count="5" />
      </p>
      <div class="footer">
        <nuxt-link to="/learn">
          <Button class="btn-primary"> Enroll</Button>
        </nuxt-link>
        <Button class="btn-success">Free</Button>
      </div>
    </div>
  </div>
</template>

<script>
import TimeIcon from "~/assets/icons/timeIcon.vue";
export default {
  components: {
    TimeIcon,
  },
  data() {
    return {
      value: 4,
    };
  },
};
</script>

<style lang="scss" scoped>
.beginner-tag {
  padding: 0.2rem 0.5rem;
  color: black;
  display: flex;
  align-items: center;
  p {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #06c076;
    position: relative;
    margin-right: 5px;
  }
}
</style>