<template>
  <div class="utilities--line-text">
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
.utilities--line-text {
  position: relative;
  color: $gray-300;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid $gray-100;
  height: 20px;
  margin: $spacer-6 auto $spacer-6 auto;

  & > span {
    background: white;
    padding: 0px 30px;
  }
}
</style>