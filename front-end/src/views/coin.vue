<template>
  <main>
    <p><a href="/">Cryptocurrencies</a> / {{coin.name}}</p>
    
    <section>
      <h1 class="hidden">{{coin.name}} market summary</h1>

      <div>
        <div id="coinHead">
          <img :src="`${coin.image.small}`" alt="Currency logo" >
          <h2><a :href="`${coin.links.homepage}`" target="_blank" rel="noopener noreferrer">{{coin.name}}</a></h2>  
        </div>
        <div>
          <h2 id="currentPrice"><bold>${{coin.market_data.current_price.cad}}</bold> - <small>CAD</small></h2>  
          <h4>{{coin.market_data.price_change_percentage_24h_in_currency.cad}}%</h4>
        </div>
      </div>
      
      <div id="coinInfo">
        <ul>
          <li>
            <div>
              <h3>Market Cap</h3>
              <div>
                <h4>${{coin.market_data.market_cap.cad}}</h4>
                <h5>{{coin.market_data.market_cap_change_percentage_24h}}%</h5>
              </div>
            </div>
          </li>
          <li>
            <div>
              <h3>Total Volume</h3>
              <div>
                <h4>${{coin.market_data.total_volume.cad}}</h4>
              </div>
            </div>
          </li>
          <li>
            <div>
              <h3>Price Change</h3>
              <div>
                <h4>${{coin.market_data.price_change_24h_in_currency.cad}}</h4>
                <h5>{{coin.market_data.price_change_percentage_24h_in_currency.cad}}%</h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
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
    },
    
  }
</script>

<style lang="scss">
  #currentPrice{
    color: #313131;
    font-family: futura-pt-bold, sans-serif;
    font-weight: 800;
    font-size: 42px;
  }
</style>