<template>
  <main>
    <p><a href="/">Cryptocurrencies</a> / {{coin.name}}</p>
    <div>
      <img :src="`${coin.image.small}`" alt="Currency logo">
      <h2>{{coin.name}}</h2>  
    </div>
    
    <p><span v-html="coin.description.en"></span></p>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        coin: {},
      }
    },
    created() {
      let vm = this;
      let id = this.$route.params.id;
      console.log(id);
      fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        vm.coin = data;
      })
    }
  }
</script>