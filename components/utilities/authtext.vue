<template>
  <div class="auth--line-text">
    <span><slot> </slot></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$spacer-6: 2rem;
$gray-100: #e0e0e0;
$gray-300: #828282;
.auth--line-text {
  color: $gray-300;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid $gray-100;
  line-height: 0rem;
  margin: $spacer-6 0 $spacer-6 0;

  & > span {
    background: #fff;
    padding: 0 10px;
  }
}
</style>