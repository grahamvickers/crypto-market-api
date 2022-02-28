<template>
<main>
    <h2 class="hidden">Watch the top 25 Cryptocurrencies value change in real time!</h2>
    <p>Cryptocurrencies /</p>

    <section>
        <h3 class="hidden">Live Crypto Market</h3>
        <div id="table">
            <table>
                <thead>
                    <th>Rank ▴</th>
                    <th>Name</th>
                    <th>Price - CAD</th>
                </thead>
                <tbody>
                    <tr v-for="coin in coins" v-bind:key="coin" class="listItem">
                        <td>{{coin.market_cap_rank}}</td>
                        <td><img :src="`${coin.image}`" alt="Currency logo" class="coinLogo"><router-link :to="`/cryptocurrencies/${coin.id}`">{{coin.name}}</router-link></td>
                        <td>${{coin.current_price}}</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    </section>
    <news></news>
</main>
</template>

<script>
    import news from '../components/news.vue'
    
    export default {
        props: ['coins'],
        components: {
            'news': news
        }
    }
</script>

<style lang="scss" scoped>
    tr{
        margin-bottom: 25px !important;
    }
</style>