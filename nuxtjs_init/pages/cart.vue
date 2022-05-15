<template>
    <div class="cart-d-container">
        <h1 class="cart-d-title">담긴 상품 목록</h1>
        <div class="cart-d-listWrapper">
            <ul>
                <li v-for="cart in carts" :key="cart.id" class="cart-li-item">
                    <img class="cart-img-thumbnail" :src="cart.imageUrl" :alt="cart.name" />
                    <div class="cart-d-description">
                        <p>{{ cart.name }}</p>
                        <span>{{ cart.price }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="cart-d-extraPanel">
            <button>구매하기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartPage',
    async asyncData({ store }) {
        await store.dispatch('fetchCarts');
    },
    computed: {
        carts() { return this.$store.state.carts; },
    },
}
</script>

<style scoped>
    .cart-d-container {
        margin: 2rem 10rem;
    }
    .cart-d-title {
        font-weight: 700;
        font-size: 1.4rem;
    }
    .cart-d-listWrapper {
        margin: 0.4rem 0;
    }
    .cart-li-item {
        display: flex;
    }
    .cart-img-thumbnail {
        width: 100px;
        height: 100px;
    }
    .cart-d-description {
        padding: 2rem 1rem;
    }
    .cart-d-extraPanel {
        text-align: right;
        padding: 0.2rem 0;
    }
</style>
