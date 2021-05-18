<template>
  <div class="testimonial">
    <h1 class="testimonial--title">Student's feedback</h1>
    <p class="testimonial--subtitle">Read our latest news</p>
    <div class="testimonial--container">
      <testimonial-card> </testimonial-card>
      <testimonial-card> </testimonial-card>
    </div>

    <div class="btn">
      <nuxt-link to="/testimonial" class="btn-link">
        View more Feedbacks</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "testimonial-card": () => import("~/components/cards/testimonial"),
  },
};
</script>

<style lang="scss" scoped>
</style>