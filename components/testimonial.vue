<template>
  <div class="testimonial">
    <h1 class="testimonial--title">Student's feedback</h1>
    <p class="testimonial--subtitle">Read our latest news</p>
    <!-- <div class="testimonial--container">
      <testimonial-card> </testimonial-card>
      <testimonial-card> </testimonial-card>
    </div> -->

    <!--  -->
    <swiper class="swiper testimonial--container" :options="swiperOption">
      <swiper-slide>
        <testimonial-card> </testimonial-card>
      </swiper-slide>

      <swiper-slide>
        <testimonial-card> </testimonial-card>
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-prev"></div>
    </swiper>

    <!--  -->

    <!-- <div class="btn">
      <nuxt-link to="/testimonial" class="btn-link">
        View more Feedbacks</nuxt-link
      >
    </div> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    "testimonial-card": () => import("~/components/cards/testimonial"),
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>