<template>
  <nuxt-link to="/cryptography">
    <div class="categories-card">
      <p><slot /></p>
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
  padding: 2rem;
  width: 300px;
  max-height: 90px;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    color: #bdbdbd;
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin: auto;
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