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
    <div class="course-container">
      <div class="indexpage__separate">
        <linetext bg="#f7f7f7">
          <img src="~/assets/images/logo2.png" alt="" width="70" height="70" />
        </linetext>
      </div>
      <client-only>
        <br />
        <headingtext> Courses </headingtext>
        <br />
        <!-- <carousel
          :per-page="1"
          :mouse-drag="true"
          :paginationEnabled="false"
          :navigationEnabled="true"
          :touch-drag="true"
          :per-page-custom="[
            [1024, 4],
            [960, 3],
            [780, 2],
            [640, 2],
            [320, 1],
          ]"
          class="indexpage__courses"
        >
          <slide>
            <Course />
          </slide>
          <slide>
            <Course />
          </slide>
          <slide>
            <Course />
          </slide>
          <slide>
            <Course />
          </slide>
          <slide>
            <Course />
          </slide>
          <slide>
            <Course />
          </slide>
        </carousel> -->

        <swiper class="swiper indexpage__courses" :options="swiperOption">
          <swiper-slide><Course /></swiper-slide>
          <swiper-slide><Course /></swiper-slide>
          <swiper-slide><Course /></swiper-slide>
          <swiper-slide><Course /></swiper-slide>
          <swiper-slide><Course /></swiper-slide>
          <swiper-slide><Course /></swiper-slide>
          <swiper-slide><Course /></swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-prev"></div>
          <!-- <div class="arrow-left">
            <left-arrow />
          </div>
          <div class="arrow-right">
            <right-arrow />
          </div> -->
        </swiper>
      </client-only>
    </div>

    <swiper class="swiper indexpage__coin" :options="swiperOption">
      <swiper-slide>
        <div class="card">
          <img
            src="~/assets/images/bitcoin.svg"
            alt="bitcoin-image"
            class="img"
            width="100"
            height="100"
          />
          <h3>Ethereum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            maximus libero in dapibus consequat.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img
            src="~/assets/images/bitcoin.svg"
            alt="bitcoin-image"
            class="img"
            width="100"
            height="100"
          />
          <h3>Bitcoin</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            maximus libero in dapibus consequat.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img
            src="~/assets/images/bitcoin.svg"
            alt="bitcoin-image"
            class="img"
            width="100"
            height="100"
          />
          <h3>Binance</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            maximus libero in dapibus consequat.
          </p>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="card">
          <img
            src="~/assets/images/bitcoin.svg"
            alt="bitcoin-image"
            class="img"
            width="100"
            height="100"
          />
          <h3>Dodgecoin</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            maximus libero in dapibus consequat.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img
            src="~/assets/images/bitcoin.svg"
            alt="bitcoin-image"
            class="img"
            width="100"
            height="100"
          />
          <h3>Dodgecoin</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            maximus libero in dapibus consequat.
          </p>
        </div>
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-prev"></div>
    </swiper>

    <!-- <div class="indexpage__coin">
      <div class="card">
        <img
          src="~/assets/images/bitcoin.svg"
          alt="bitcoin-image"
          class="img"
          width="100"
          height="100"
        />
        <h3>Ethereum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          maximus libero in dapibus consequat.
        </p>
      </div>

      <div class="card">
        <img
          src="~/assets/images/bitcoin.svg"
          alt="bitcoin-image"
          class="img"
          width="100"
          height="100"
        />
        <h3>Bitcoin</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          maximus libero in dapibus consequat.
        </p>
      </div>

      <div class="card">
        <img
          src="~/assets/images/bitcoin.svg"
          alt="bitcoin-image"
          class="img"
          width="100"
          height="100"
        />
        <h3>Binance</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          maximus libero in dapibus consequat.
        </p>
      </div>

      <div class="card">
        <img
          src="~/assets/images/bitcoin.svg"
          alt="bitcoin-image"
          class="img"
          width="100"
          height="100"
        />
        <h3>Dodgecoin</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          maximus libero in dapibus consequat.
        </p>
      </div>
    </div> -->

    <categories />

    <div class="indexpage__market">
      <h1 class="indexpage__market--title">Market updates</h1>
      <p class="indexpage__market--subtitle">
        Get latest updates on cryptocurrency in the crypto-space
      </p>
      <div class="indexpage__market--container">
        <swiper class="swiper cards" :options="marketSwiperOption">
          <swiper-slide> <market-card> </market-card> </swiper-slide>
          <swiper-slide> <market-card> </market-card> </swiper-slide>
          <swiper-slide> <market-card> </market-card> </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-prev"></div>
        </swiper>
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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Linetext: () => import("~/components/utilities/linetext"),
    Course: () => import("~/components/cards/course"),
    "market-card": () => import("~/components/cards/market"),
    "glossary-card": () => import("~/components/cards/glossary"),
    "measurable-value": () => import("~/components/measurableValue"),
    testimonial: () => import("~/components/testimonial"),
    headingtext: () => import("~/components/utilities/headingtext.vue"),
    "left-arrow": () => import("~/assets/icons/icon-left"),
    "right-arrow": () => import("~/assets/icons/icon-right"),
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
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
      marketSwiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
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
.swiperBox {
  width: 100%;
  position: relative;
}
.swiper_btn {
  position: absolute;
}
.swiper-button-prev {
  width: 0.36rem;
  height: 0.28rem;
  // background: url("path") no-repeat;
  background-size: 100% 100%;
}
.swiper-button-next {
  width: 0.36rem;
  height: 0.28rem;
  // background: url("path") no-repeat;
  background-size: 100% 100%;
}
</style>