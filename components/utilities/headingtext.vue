<template>
  <div class="headingtext">
    <h1 class="headingtext--title">
      <slot> </slot>
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.headingtext {
  &--title {
    position: relative;
    color: #004ac2;
    font-weight: bold;
    text-align: center;

    &::after {
      position: absolute;
      content: "";
      background-color: #004ac2;
      margin: auto;
      height: 4px;
      width: 50px;
      margin: auto;
      bottom: -10px;
      left: 0;
      right: 0;
    }
  }
}
</style>