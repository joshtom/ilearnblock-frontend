<template>
  <div
    class="utilities--line-text"
    :style="{ 'border-bottom': `1px solid ${lineColor}` }"
  >
    <span :style="{ background: `${bgColor}` }"><slot> </slot></span>
  </div>
</template>

<script>
export default {
  props: ["bg", "line"],
  computed: {
    bgColor() {
      return `${this.bg}`;
    },
    lineColor() {
      return `${this.line}`;
    },
  },
};
</script>

<style lang="scss">
$spacer-6: 2rem;
$gray-100: #e0e0e0;
$gray-300: #828282;
.utilities--line-text {
  position: relative;
  color: $gray-300;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid $gray-100;
  height: 35px;
  //   margin: $spacer-6 auto $spacer-6 auto;

  & > span {
    padding: 0px 30px;
    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>