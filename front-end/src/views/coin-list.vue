<template>
<main>
    <h1 class="hidden">Welcome to the Meta World, find all the latest market changes and news stories!</h1>

    <section id="landing">
        <h2>You're watching the top 25 Cryptocurrencies market price change in real time!</h2>
        <p>Cryptocurrencies / CAD / Top 25</p>
    </section>
    

    <section>
        <h3 class="hidden">Live Crypto Market</h3>
        <div id="table">
            <table>
                <thead>
                    <th>Rank ▴</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th class="webOnly">% Change</th>
                </thead>
                <tbody>
                    <tr v-for="coin in coins" v-bind:key="coin" class="listItem">
                        <td>{{coin.market_cap_rank}}</td>
                        <td class="coinName"><router-link :to="`/cryptocurrencies/${coin.id}`" class="coinHover"><img :src="`${coin.image}`" alt="Currency logo" class="coinLogo">{{coin.name}}</router-link></td>
                        <td>${{coin.current_price}}</td>
                        <td class="webOnly">{{coin.price_change_percentage_24h}} %</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    </section>
    <button id="homeBtn"><router-link :to="`/`">VIEW ALL COINS</router-link></button>

    <!-- <news></news> -->
    
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