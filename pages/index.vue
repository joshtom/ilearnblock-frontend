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
      <linetext>
        <img src="~/assets/images/logo2.png" alt="" width="40" height="40" />
      </linetext>
    </div>
    <div class="indexpage__courses">
      <h1>Courses</h1>
      <div class="indexpage__courses--container">
        <Course />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Linetext: () => import("~/components/utilities/linetext"),
    Course: () => import("~/components/cards/course"),
  },
};
</script>

<style lang="scss" scoped>
</style>