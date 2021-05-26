<template>
  <div class="blog">
    <a-row :gutter="[32, 32]" class="blog--container">
      <a-col
        :xs="{ span: 24 }"
        :md="{ span: 12 }"
        :lg="{ span: 8 }"
        v-for="(blog, index) in blogs"
        :key="index"
      >
        <blog-card
          :title="blog.title"
          :author="blog.author"
          :date="blog.date"
          imgPath="crypto-legality.png"
          :content="blog.slicedContent"
        />
      </a-col>
    </a-row>
    <a-row>
      <a-col class="text-center">
        <a-pagination
          v-model="current"
          :total="50"
          show-less-items
          @change="onChange"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: "The importance of cryptocurrency in Nigeria",
          author: "Adam Adams",
          slicedContent:
            "Lorem ipsum dolor sit met, wrg consetetur sadipscing elitr, sed didfam nonumy emo.",
          date: "Nov 17, 2019",
        },
        {
          title: "The importance of cryptocurrency in Nigeria",
          author: "Adam Adams",
          slicedContent:
            "Lorem ipsum dolor sit met, wrg consetetur sadipscing elitr, sed didfam nonumy emo.",
          date: "Nov 17, 2019",
        },
        {
          title: "The importance of cryptocurrency in Nigeria",
          author: "Adam Adams",
          slicedContent:
            "Lorem ipsum dolor sit met, wrg consetetur sadipscing elitr, sed didfam nonumy emo.",
          date: "Nov 17, 2019",
        },
        {
          title: "The importance of cryptocurrency in Nigeria",
          author: "Adam Adams",
          slicedContent:
            "Lorem ipsum dolor sit met, wrg consetetur sadipscing elitr, sed didfam nonumy emo.",
          date: "Nov 17, 2019",
        },
        {
          title: "The importance of cryptocurrency in Nigeria",
          author: "Adam Adams",
          slicedContent:
            "Lorem ipsum dolor sit met, wrg consetetur sadipscing elitr, sed didfam nonumy emo.",
          date: "Nov 17, 2019",
        },
        {
          title: "The importance of cryptocurrency in Nigeria",
          author: "Adam Adams",
          slicedContent:
            "Lorem ipsum dolor sit met, wrg consetetur sadipscing elitr, sed didfam nonumy emo.",
          date: "Nov 17, 2019",
        },
        {
          title: "The importance of cryptocurrency in Nigeria",
          author: "Adam Adams",
          slicedContent:
            "Lorem ipsum dolor sit met, wrg consetetur sadipscing elitr, sed didfam nonumy emo.",
          date: "Nov 17, 2019",
        },
        {
          title: "The importance of cryptocurrency in Nigeria",
          author: "Adam Adams",
          slicedContent:
            "Lorem ipsum dolor sit met, wrg consetetur sadipscing elitr, sed didfam nonumy emo.",
          date: "Nov 17, 2019",
        },
        {
          title: "The importance of cryptocurrency in Nigeria",
          author: "Adam Adams",
          slicedContent:
            "Lorem ipsum dolor sit met, wrg consetetur sadipscing elitr, sed didfam nonumy emo.",
          date: "Nov 17, 2019",
        },
      ],
    };
  },
  components: {
    "blog-card": () => import("~/components/cards/blog"),
  },
};
</script>

<style lang="scss" scoped>
</style>