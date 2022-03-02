<template>
  <section>
    <h2>Explore trending articles</h2>
    <h3>{{news}}</h3>
  </section>
</template>

<script>
export default {
  data() {
    return {
      news: {}
    }
  },
  created: function() {
    let vm = this;
    fetch('https://api.coinstats.app/public/v1/news/trending?skip=0&limit=10')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      // vm.news = data[Math.floor(Math.random()*10)].description

    })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
