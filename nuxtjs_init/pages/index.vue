<template>
    <div class="index-d-main">
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
    </div>
</template>

<script>
import { fetchProducts } from '@/api/index';

export default {
    name: 'IndexPage',
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
    methods: {
        routeToProductPage(id) {
            this.$router.push(`/product/${id}`)
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
</style>
