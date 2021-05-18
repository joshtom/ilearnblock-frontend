<template>
  <div class="about">
    <div class="about__hero">
      <h1>About Us</h1>
      <p>
        We're a building a better decentralized world by bringing blockchain and
        cryptocurrency education to everyone.
      </p>
    </div>
    <div class="about__container">
      <div class="about">
        <div class="col">
          <img
            src="~/assets/images/about.svg"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div class="col">
          <h1 class="text-secondary">About ILB</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            maximus libero in dapibus consequat. Nulla rhoncus eros nunc, nec
            fermentum ex sagittis dapibus. Sed metus felis, dignissim id dictum
            non, tristique consequat arcu. <br />
            <br />Etiam dapibus metus a pellentesque suscipit. Donec metus
            lorem, commodo non tortor sed, finibus ultricies metus. Nunc nibh
            felis, porta id sagittis volutpat, blandit vel urna.
          </p>
        </div>
      </div>
      <div class="mission">
        <div class="col">
          <h1 class="text-secondary text-bold">Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            maximus libero in dapibus consequat. Nulla rhoncus eros nunc, nec
            fermentum ex sagittis dapibus. Sed metus felis, dignissim id dictum
            non, tristique consequat arcu. <br />
            <br />Etiam dapibus metus a pellentesque suscipit. Donec metus
            lorem, commodo non tortor sed, finibus ultricies metus. Nunc nibh
            felis, porta id sagittis volutpat, blandit vel urna.
          </p>
        </div>
        <div class="col">
          <img
            src="~/assets/images/mission.svg"
            alt="mission-image"
            width="100%"
            height="100%"
          />
        </div>
        <div class="row">
          <linetext bg="#f7f7f7" line="#EAEAEA">
            <img
              src="~/assets/images/logo2.png"
              alt=""
              width="70"
              height="70"
            />
          </linetext>
        </div>
      </div>
      <div class="services">
        <!-- <linetext bg="#ffffff" line="#EAEAEA" class="line-text">
          <img src="~/assets/images/logo2.png" alt="" width="70" height="70" />
        </linetext> -->
        <h1 class="text-secondary text-bold">Our Service</h1>
        <a-row :gutter="[32, 32]" type="flex" justify="center" align="middle">
          <a-col :xs="{ span: 24 }" :md="{ span: 8 }" :lg="{ span: 8 }">
            <div class="service">
              <img
                src="~/assets/icons/training.svg"
                alt=""
                width="131.709"
                height="95.054"
              />
              <h3 class="text-bold">Training</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                maximus libero in dapibus consequat.
              </p>
            </div>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 8 }" :lg="{ span: 8 }">
            <div class="service">
              <img
                src="~/assets/icons/percent.svg"
                alt=""
                width="89"
                height="90.054"
              />
              <h3 class="text-bold">Trade cryptocurrency</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                maximus libero in dapibus consequat.
              </p>
            </div>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 8 }" :lg="{ span: 8 }">
            <div class="service">
              <img
                src="~/assets/icons/investment.svg"
                alt=""
                width="71.058"
                height="90.054"
              />
              <h3 class="text-bold">Investment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                maximus libero in dapibus consequat.
              </p>
            </div>
          </a-col>
        </a-row>
      </div>
      <measurable-value> </measurable-value>

      <div class="team">
        <h1 class="team--title">Our Team</h1>
        <p class="team--subtitle">Our expert team is made up of creatives</p>
        <a-row :gutter="[16, 16]">
          <a-col :xs="{ span: 24 }" :md="{ span: 8 }" :lg="{ span: 8 }">
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <h2 class="title text-bold">Nuel Page</h2>
                <p class="subtitle">Chief Executive Officer, ILB</p>
                <div class="social">
                  <img
                    src="~/assets/icons/google.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                  <img
                    src="~/assets/icons/twitter.svg"
                    alt=""
                    width="27"
                    height="22"
                  />
                  <img
                    src="~/assets/icons/whatsapp.svg"
                    alt=""
                    width="23"
                    height="24"
                  />
                </div>
              </div>
            </div>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 8 }" :lg="{ span: 8 }">
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <h2 class="title text-bold">Nuel Page</h2>
                <p class="subtitle">Chief Executive Officer, ILB</p>
                <div class="social">
                  <img
                    src="~/assets/icons/google.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                  <img
                    src="~/assets/icons/twitter.svg"
                    alt=""
                    width="27"
                    height="22"
                  />
                  <img
                    src="~/assets/icons/whatsapp.svg"
                    alt=""
                    width="23"
                    height="24"
                  />
                </div>
              </div>
            </div>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 8 }" :lg="{ span: 8 }">
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <h2 class="title text-bold">Nuel Page</h2>
                <p class="subtitle">Chief Executive Officer, ILB</p>
                <div class="social">
                  <img
                    src="~/assets/icons/google.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                  <img
                    src="~/assets/icons/twitter.svg"
                    alt=""
                    width="27"
                    height="22"
                  />
                  <img
                    src="~/assets/icons/whatsapp.svg"
                    alt=""
                    width="23"
                    height="24"
                  />
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>

      <testimonial> </testimonial>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Linetext: () => import("~/components/utilities/linetext"),
    "measurable-value": () => import("~/components/measurableValue"),
    testimonial: () => import("~/components/testimonial"),
  },
};
</script>

<style lang="scss" scoped>
</style>