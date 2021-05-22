<template>
  <div class="indexpage">
    <div class="indexpage__banner">
      <div class="wrapper">
        <h1>
          Cryptocurrency for Beginners - The Leading Crypto Education Platform
        </h1>
        <p>Your Expert Guide Into The World Of Cryptocurrencies</p>
        <nuxt-link to="/about" class="btn-primary"> Learn more </nuxt-link>
      </div>
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

    <categories />

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
    <measurable-value> </measurable-value>
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
    <testimonial> </testimonial>
  </div>
</template>

<script>
export default {
  components: {
    Linetext: () => import("~/components/utilities/linetext"),
    Course: () => import("~/components/cards/course"),
    "market-card": () => import("~/components/cards/market"),
    "glossary-card": () => import("~/components/cards/glossary"),
    "measurable-value": () => import("~/components/measurableValue"),
    testimonial: () => import("~/components/testimonial"),
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>