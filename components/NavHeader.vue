<template>
  <div>
    <md-toolbar>
      <h3 class="md-title" style="flex: 1">
        <img src="~/assets/img/bitcoin.png" alt="bitcoin-icon" width="24">
        Crypto Price Tracker
      </h3>
      <md-button to="/">
        Home
      </md-button>
      <md-button to="/about">
        About
      </md-button>
      <v-spacer />
      <md-button href="https://github.com/anujdatar/crypto-price-tracker" class="md-icon-button" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" />
      </md-button>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: 'NavHeader'
}
</script>

<style scoped lang="scss">
</style>
