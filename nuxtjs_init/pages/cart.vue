<template>
    <div class="cart-d-container">
        <h1 class="cart-d-title">담긴 상품 목록</h1>
        <CartList></CartList>
        <div class="cart-d-extraPanel">
            <button>구매하기</button>
        </div>
    </div>
</template>

<script>
import CartList from '@/components/CartList.vue';

export default {
    name: 'CartPage',
    components: { CartList },
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
    .cart-d-extraPanel {
        text-align: right;
        padding: 0.2rem 0;
    }
</style>
