<template>
  <div class="blog-card">
    <div class="blog-card__img">
      <img
        :src="require(`~/assets/images/${imgPath}`)"
        alt="blog-card-image"
        width="100%"
        height="100%"
      />
    </div>
    <div class="blog-card__body">
      <h3 class="blog-card__body--title">{{ title }}</h3>
      <p class="blog-card__body--author">By {{ author }} {{ date }}</p>
      <p class="blog-card__body--content">{{ content }}</p>

      <nuxt-link to="/blog/details">
        <Button class="btn-primary"> View Details </Button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    content: {
      type: String,
    },
    date: {
      type: String,
    },
    imgPath: {
      iconPath: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>