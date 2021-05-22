<template>
  <div class="competency">
    <div class="learn">
      <div class="container">
        <img
          src="~/assets/images/about.svg"
          alt="about-image"
          width="300"
          height="300"
        />
        <div class="container--col">
          <div class="tag">Beginner</div>
          <h1 class="text-secondary text-bold">Learn Cryptoeconomics</h1>
          <p>
            Dive into all things in Cryptocurrency with ILEARNBLOCK! From the
            beginner to more in-depth and advanced crypto tutorials, you're sure
            to find the course that is right for you in our vast online library
            below.
          </p>
        </div>
      </div>
    </div>
    <div class="specialization">
      <h1 class="title text-secondary text-bold">
        There are 4 courses under this specialization
      </h1>
      <a-row>
        <a-col span="24" v-for="course of courses" :key="course.id">
          <div class="specialization-card">
            <div class="video">
              <!-- <img
                src="~/assets/images/about.svg"
                alt="about-image"
                width="100%"
                height="100%"
              /> -->
            </div>
            <div class="right">
              <h3 class="text-secondary">Course 1</h3>
              <h3 class="text-secondary text-bold">
                Intro to Cryptoeconomics: Overview
              </h3>
              <div class="rating">
                <a-rate v-model="value" class="star-rating" :disabled="true" />
                <h3>4.5</h3>
                <span>200 ratings</span>
                <span class="review">110 reviews</span>
              </div>
              <p>
                Dive into all things in Cryptocurrency with ILEARNBLOCK! From
                the beginner to more in-depth and advanced crypto tutorials
              </p>
              <div class="footer">
                <Button class="btn-primary"> Take Course </Button>
                <p>25 min</p>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="take-quiz">
      <div class="quiz-card">
        <h2 class="text-secondary">Cryptoconomics Quiz</h2>
        <p>
          Check your understanding! <br />
          Earn additional $20 ILB and proceed to the intermediate level by
          completing the Quiz. <br />
          Rewards for tasks will be credited within 24- 48 hours
        </p>
        <nuxt-link to="/quiz" class="btn-primary"> Go to Quiz </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
      courses: [
        {
          id: 1,
        },
        {
          id: 1,
        },
        {
          id: 1,
        },
        {
          id: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>