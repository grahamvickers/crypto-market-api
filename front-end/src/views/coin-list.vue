<template>
<main>
    <h1 class="hidden">Welcome to the Meta World, find all the latest market changes and news stories!</h1>
    <h2>Watch the top 25 Cryptocurrencies value change in real time!</h2>
    <p>Cryptocurrencies / CAD</p>

    <section>
        <h3 class="hidden">Live Crypto Market</h3>
        <div id="table">
            <table>
                <thead>
                    <th>Rank ▴</th>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    <tr v-for="coin in coins" v-bind:key="coin" class="listItem">
                        <td>{{coin.market_cap_rank}}</td>
                        <td class="coinName"><router-link :to="`/cryptocurrencies/${coin.id}`" class="coinHover"><img :src="`${coin.image}`" alt="Currency logo" class="coinLogo">{{coin.name}}</router-link></td>
                        <td>${{coin.current_price}}</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    </section>
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