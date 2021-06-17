<template>
  <div class="measurable">
    <h1 class="measurable--title">Providing Measurable Value</h1>
    <p class="measurable--subtitle">
      There are many of passages of Lorem Ispum available, but the majority have
      suffered alterations in some form, by inject humor
    </p>
    <div class="measurable--container">
      <a-row :gutter="[8]">
        <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 6 }">
          <section>
            <img
              src="~/assets/icons/school.svg"
              alt="image-here"
              width="88.883"
              height="75.558"
            />
            <h2 class="online-course">2,400+</h2>
            <p class="online-course">Online course</p>
          </section>
        </a-col>

        <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 6 }">
          <section>
            <img
              src="~/assets/icons/man.svg"
              alt="image-here"
              width="64.054"
              height="72"
            />
            <h2 class="enroll">99,854+</h2>
            <p class="enroll">Enroll student</p>
          </section>
        </a-col>

        <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 6 }">
          <section>
            <img
              src="~/assets/icons/mortarboard2.svg"
              alt="image-here"
              width="78.607"
              height="74.337"
            />
            <h2 class="expert">650+</h2>
            <p class="expert">Expert Instructor</p>
          </section>
        </a-col>

        <a-col :xs="{ span: 12 }" :md="{ span: 12 }" :lg="{ span: 6 }">
          <section>
            <img
              src="~/assets/icons/man.svg"
              alt="image-here"
              width="64.054"
              height="72"
            />
            <h2 class="profile">1820+</h2>
            <p class="profile">Profile Review</p>
          </section>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>