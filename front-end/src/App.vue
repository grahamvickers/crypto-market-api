<template>
<div>
  <header>
    <a href="/"><img src="./assets/images/logo-v1.svg" alt="Meta World Logo"></a>
    <img src="./assets/images/nav-btn.svg" alt="Menu Button">
  </header>
    <router-view v-bind:coins="theCoins"/>
  <footer>
    <p>Testing application, D&D by Graham Vickers</p>
  </footer>
</div>
</template>

<script>
  export default {
    data() {
      return {
        theCoins: []
      }
    },
    created: function() {
      let vm = this;
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24`)
      .then(function(response){
        return response.json();
      }).then(function(data){
        vm.theCoins = data;
      })
    }
  }
</script>

