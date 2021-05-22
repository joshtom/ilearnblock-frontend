<template>
  <div class="cat">
    <div class="cat__categories">
      <linetext bg="#141519" line="#767679">
        <img src="~/assets/images/logo2.png" alt="" width="70" height="70" />
      </linetext>
      <h1 class="text-white">Categories</h1>
      <div class="cat__categories--container">
        <categories-card v-for="cat of getCategory" :key="cat.title">
          {{ cat.title }}
        </categories-card>
      </div>
      <a-pagination
        v-model="current"
        :defaultCurrent="3"
        :total="category.length"
        :defaultPageSize="3"
        show-less-items
        @change="onChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      minValue: 0,
      maxValue: 4,
      numEachPage: 4,
      category: [
        { title: "Cryptography" },
        { title: "Community Management" },
        { title: "Blockchain Development" },
        { title: "Token e-commerce" },
        { title: "Crypto currency trading" },
        { title: "Technical Analysis" },
        { title: "Defi" },
        { title: "Economics" },
        { title: "Wallet" },
      ],
    };
  },
  components: {
    "categories-card": () => import("~/components/cards/categories"),
    Linetext: () => import("~/components/utilities/linetext"),
  },
  methods: {
    onChange(value) {
      this.minValue = (value - 1) * this.numEachPage;
      this.maxValue = value * this.numEachPage;
    },
  },
  computed: {
    getCategory() {
      return this.category.slice(this.minValue, this.maxValue);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>