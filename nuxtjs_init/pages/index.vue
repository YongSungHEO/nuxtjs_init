<template>
    <div class="index-d-main">
        <!-- :search-keyword="searchKeyword"
        @input="updateSearchKeyword" -->
        <SearchInput
            v-model="searchKeyword"
            @search="searchProducts">
        </SearchInput>
        <ul>
            <li
                v-for="item in products"
                :key="item.id"
                class="index-d-item"
                @click="routeToProductPage(item.id)">
                <img class="index-img-productImage" :src="item.imageUrl" :alt="item.name" />
                <p>{{ item.name }}</p>
                <span>{{ item.price }}</span>
            </li>
        </ul>
        <div class="index-d-cartWrapper">
            <button class="index-btn-toCart" @click="routeToCartPage">장바구니 바로가기</button>
        </div>
    </div>
</template>

<script>
import { fetchProducts } from '@/api/index';
import SearchInput from '@/components/SearchInput.vue';

export default {
    name: 'IndexPage',
    components: { SearchInput },
    async asyncData() {
        const response = await fetchProducts();
        const products = response.data.map(item => {
            return {
                ...item,
                imageUrl: `${item.imageUrl}?random=${Math.random()}`
            }
        });
        return { products }
    },
    data() {
        return {
            searchKeyword: '',
        }
    },
    methods: {
        routeToProductPage(id) {
            this.$router.push(`/product/${id}`);
        },
        async searchProducts() {
            const response = await fetchProducts(this.searchKeyword);
            this.products = response.data.map(item => {
                return {
                    ...item,
                    imageUrl: `${item.imageUrl}?random=${Math.random()}`
                }
            });
        },
        routeToCartPage() {
            this.$router.push(`/cart`);
        },
    }
}
</script>

<style scoped>
    .index-d-main {
        position: relative;
    }
    .index-d-item {
        display: flex;
        justify-content: center;
        display: inline-block;
        width: 400px;
        height: 300px;
        text-align: center;
        margin: 0 0.5rem;
        cursor: pointer;
    }
    .index-img-productImage {
        width: 400px;
        height: 250px;
    }
    .index-d-cartWrapper {
        position: sticky;
        float: right;
        bottom: 50px;
        right: 50px;
    }
    .index-d-cartWrapper .index-btn-toCart {
        display: inline-block;
        height: 40px;
        font-size: 1rem;
        font-weight: 500;
    }
</style>
