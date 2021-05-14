<template>
  <div class="auth-layout">
    <div class="container">
      <div class="row">
        <div class="header">
          <img
            src="~/assets/images/logo.png"
            alt="ilearnbock-logo"
            width="70px"
            height="70px"
          />
        </div>
        <div class="body">
          <h1>Learn amazing skills in Blockchain.</h1>
          <p>
            <nuxt-link to="/register" class="text-primary"> Sign Up </nuxt-link>
            to acquire a skill in Blockchain
          </p>
        </div>
      </div>
      <div class="row">
        <nuxt-child> </nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>