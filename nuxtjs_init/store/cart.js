import { fetchCartItems } from '@/api'

export const state = () => ({
    carts: [],
});

export const mutations = {
    addItemToCart(state, item) {
        state.carts.push(item);
    },
    setCarts(state, carts) {
        state.carts = carts;
    },
}

export const actions = {
    addItemToCart(context, cart) {
        const newCart = {
            ...cart,
            imageUrl: `${cart.imageUrl}?random=${Math.random()}`
        };
        context.commit('addItemToCart', newCart);
    },
    async fetchCarts(context) {
        const { data } = await fetchCartItems();
        const items = data.map((item) => ({
            ...item,
            imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        }));
        context.commit('setCarts', items);
    },
}
