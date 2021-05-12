<template>
  <div class="indexpage">
    <div class="indexpage__banner">
      <client-only>
        <carousel
          :per-page="1"
          :mouse-drag="true"
          :loop="true"
          autoPlayDirection="backward"
          :autoplay="true"
        >
          <slide class="indexpage__banner--slide"> Slide 1 Content </slide>
          <slide class="indexpage__banner--slide"> Slide 2 Content </slide>
          <slide class="indexpage__banner--slide"> Slide 2 Content </slide>
        </carousel>
      </client-only>
    </div>
    <div class="indexpage__intro">
      <a-row>
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 8 }">
          <section>
            <div class="img">
              <img
                src="~/assets/icons/infinity.svg"
                alt="unlimited-access-image"
                width="80%"
                height="80%"
                style="margin-top: 12px"
              />
            </div>
            <h2>Unlimited Access</h2>
            <p>
              Choose what you'd like to learn from our extensive subscription
              library
            </p>
          </section>
        </a-col>
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 8 }">
          <section>
            <div class="img">
              <img
                src="~/assets/icons/mortarboard.svg"
                alt="expert-teachers"
                width="100%"
                height="100%"
              />
            </div>
            <h2>Expert Teachers</h2>
            <p>Learn from industry expert who are passionate about teaching</p>
          </section>
        </a-col>
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 8 }">
          <section>
            <div class="img">
              <img
                src="~/assets/icons/any.svg"
                alt="learn-anywhere"
                width="100%"
                height="100%"
              />
            </div>
            <h2>Learn Anywhere</h2>
            <p>Switch between your computer, tablet, or mobile device</p>
          </section>
        </a-col>
      </a-row>
    </div>
    <div class="indexpage__intro2">
      <div class="indexpage__intro2--left">
        <img
          src="~/assets/images/dash.svg"
          alt="dash-image"
          width="70px"
          height="70px"
        />
        <img
          src="~/assets/images/ltecoin.svg"
          alt="ltecoin-image"
          width="70px"
          height="70px"
        />
        <img
          src="~/assets/images/bitcoin.svg"
          alt="bitcoin-image"
          width="120px"
          height="120px"
        />
      </div>
      <h1>
        Blockchain demand is booming and the market is expected to grow at over
        60% per year
      </h1>
      <div class="indexpage__intro2--right">
        <img
          src="~/assets/images/trx.svg"
          alt="trx-image"
          width="70px"
          height="70px"
        />
        <img
          src="~/assets/images/capt.svg"
          alt="capt-image"
          width="70px"
          height="70px"
        />
        <img
          src="~/assets/images/eth2.svg"
          alt="eth2-image"
          width="70px"
          height="70px"
        />
        <img
          src="~/assets/images/eth.svg"
          alt="eth-image"
          width="120px"
          height="120px"
        />
      </div>
    </div>
    <div class="indexpage__separate">
      <linetext bg="white">
        <img src="~/assets/images/logo2.png" alt="" width="70" height="70" />
      </linetext>
    </div>
    <div class="indexpage__courses">
      <h1>Courses</h1>
      <div class="indexpage__courses--container">
        <Course />
      </div>
      <div class="indexpage__courses--pagination">
        <a-pagination
          v-model="current"
          :total="50"
          show-less-items
          @change="onChange"
        />
      </div>
    </div>
    <div class="indexpage__categories">
      <linetext bg="#141519" line="#767679">
        <img src="~/assets/images/logo2.png" alt="" width="70" height="70" />
      </linetext>
      <h1 class="text-white">Categories</h1>
      <div class="indexpage__categories--container">
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
    <div class="indexpage__market">
      <h1 class="indexpage__market--title">Market updates</h1>
      <p class="indexpage__market--subtitle">
        Get latest updates on cryptocurrency in the crypto-space
      </p>
      <div class="indexpage__market--container">
        <div class="cards">
          <market-card> </market-card>
          <market-card> </market-card>
          <market-card> </market-card>
        </div>
        <div class="btn">
          <nuxt-link to="/more-feedbacks" class="btn-link">
            View more feedbacks
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="indexpage__measurable">
      <h1 class="indexpage__measurable--title">Providing Measurable Value</h1>
      <p class="indexpage__measurable--subtitle">
        There are many of passages of Lorem Ispum available, but the majority
        have suffered alterations in some form, by inject humor
      </p>
      <div class="indexpage__measurable--container">
        <section>
          <img
            src="~/assets/icons/school.svg"
            alt="image-here"
            width="88.883"
            height="75.558"
          />
          <h2>2,400+</h2>
          <p>Online course</p>
        </section>
        <section>
          <img
            src="~/assets/icons/man.svg"
            alt="image-here"
            width="64.054"
            height="72"
          />
          <h2>99,854+</h2>
          <p>Enroll student</p>
        </section>
        <section>
          <img
            src="~/assets/icons/mortarboard2.svg"
            alt="image-here"
            width="78.607"
            height="74.337"
          />
          <h2>650+</h2>
          <p>Expert Instructor</p>
        </section>
        <section>
          <img
            src="~/assets/icons/man.svg"
            alt="image-here"
            width="64.054"
            height="72"
          />
          <h2>1820+</h2>
          <p>Profile Review</p>
        </section>
      </div>
    </div>
    <div class="indexpage__glossary">
      <h1 class="indexpage__glossary--title">Glossary</h1>
      <p class="indexpage__glossary--subtitle">
        Understand key terms in cryptocurrency
      </p>
      <div class="indexpage__glossary--container">
        <glossary-card> </glossary-card>
        <glossary-card> </glossary-card>
        <glossary-card> </glossary-card>
        <glossary-card> </glossary-card>
        <glossary-card> </glossary-card>
        <glossary-card> </glossary-card>
        <glossary-card> </glossary-card>
        <glossary-card> </glossary-card>
      </div>

      <div class="btn">
        <nuxt-link to="/glossary" class="btn-link">
          View more Glossary</nuxt-link
        >
      </div>
    </div>

    <div class="indexpage__testimonial">
      <h1 class="indexpage__testimonial--title">Student's feedback</h1>
      <p class="indexpage__testimonial--subtitle">Read our latest news</p>
      <div class="indexpage__testimonial--container">
        <testimonial-card> </testimonial-card>
        <testimonial-card> </testimonial-card>
      </div>

      <div class="btn">
        <nuxt-link to="/testimonial" class="btn-link">
          View more Feedbacks</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Linetext: () => import("~/components/utilities/linetext"),
    Course: () => import("~/components/cards/course"),
    "categories-card": () => import("~/components/cards/categories"),
    "market-card": () => import("~/components/cards/market"),
    "glossary-card": () => import("~/components/cards/glossary"),
    "testimonial-card": () => import("~/components/cards/testimonial"),
  },
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