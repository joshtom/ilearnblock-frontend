<template>
  <div class="cat">
    <div class="cat__categories">
      <linetext bg="#f7f7f7" line="#eaeaea">
        <img src="~/assets/images/logo2.png" alt="" width="70" height="70" />
      </linetext>
      <h1 class="text-secondary">Categories</h1>
      <div class="cat__categories--container">
        <a-row :gutter="[16, 32]">
          <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 8 }">
            <section class="card">
              <div class="rectangle"></div>
              <p>Cryptography</p>
            </section>
          </a-col>

          <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 8 }">
            <section class="card">
              <div class="rectangle"></div>
              <p>Community Management</p>
            </section>
          </a-col>

          <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 8 }">
            <section class="card">
              <div class="rectangle"></div>
              <p>Blockchain Development</p>
            </section>
          </a-col>

          <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 8 }">
            <section class="card">
              <div class="rectangle"></div>
              <p>Token e-commerce</p>
            </section>
          </a-col>

          <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 8 }">
            <section class="card">
              <div class="rectangle"></div>
              <p>Crypto currency trading</p>
            </section>
          </a-col>

          <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 8 }">
            <section class="card">
              <div class="rectangle"></div>
              <p>Technical Analysis</p>
            </section>
          </a-col>
        </a-row>
      </div>
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