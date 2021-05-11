<template>
  <nuxt-link to="/cryptography">
    <div class="categories-card">
      <p>Cryptography</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.categories-card {
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding: 2rem 5rem;
  display: inline-block;
  cursor: pointer;
  p {
    color: #bdbdbd;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
  &:hover {
    background: #ff9100;
    border: 1px solid #ff9100;
    p {
      //   font-weight: 700;
      color: white;
    }
  }
}
</style>