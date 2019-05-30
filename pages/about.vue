<template>
  <section class="container">
    <div>
      <h1 class="title">
        Cryptocurrency price tracker using Nuxt.Js and Firestore
      </h1>
      <logo />
      <div class="links">
        <md-button class="md-raised md-primary">
          Documentation
        </md-button>

        <md-button href="https://github.com/anujdatar/crypto-price-tracker" target="_blank" class="md-raised md-accent">
          GitHub
        </md-button>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  padding: 20px;
}

logo {
  // height: 120px;
  transform: scale(0.5);
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 32px;
  // color: #50575e;
  letter-spacing: 1px;
  line-height: 32px;
}
</style>
