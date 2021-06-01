<template>
  <div class="main-header">
    <slot name="title" />
    <slot name="subtitle" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-header {
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
}
</style>