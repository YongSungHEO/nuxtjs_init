<template>
  <div>
    <div class="product-d-container">
        <div>
            <img
                class="product-img-image"
                :src="product.imageUrl"
                :alt="product.name" />
        </div>
        <div class="product-d-sidePanel">
            <p class="name">{{ product.name }}</p>
            <p class="price">{{ product.price }}</p>
            <button type="button" @click="addToCart">Add to Cart</button>
        </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById, createCartItem } from '@/api/index';

export default {
    async asyncData({ params }) {
        const response = await fetchProductById(params.id)
        return { product: response.data };
    },
    head() {
        return {
            title: `Product Detail Page - ${this.product.name}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Page Description Content',
                },
            ],
        }
    },
    methods: {
        async addToCart() {
            await createCartItem(this.product);
            this.$store.dispatch('addItemToCart', this.product);
            this.$router.push('/cart');
        },
    },
}
</script>

<style scoped>
    .product-d-container {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
    }
    .product-img-image {
        width: 500px;
        height: 375px;
    }
    .product-d-sidePanel {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 220px;
        text-align: center;
        padding: 0 1rem;
    }
</style>
