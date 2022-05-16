<template>
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
</template>

<script>
export default {
    async fetch() {
        await this.$store.dispatch('fetchCarts');
    },
    computed: {
        carts() { return this.$store.state.carts; },
    },
}
</script>

<style scoped>
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
</style>
