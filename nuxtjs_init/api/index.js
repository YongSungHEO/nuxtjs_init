import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.baseURL,
});

function fetchProducts(keyword = '') {
    const params = {
        name_like: keyword
    };
    return instance.get(`/products`, { params });
}

function fetchProductById(id) {
    return instance.get(`/products/${id}`);
}

// carts
function fetchCartItems() {
    return instance.get('/carts');
}

function createCartItem(cartItem) {
    return instance.post('/carts', cartItem);
}

export {
    fetchProducts,
    fetchProductById,
    fetchCartItems,
    createCartItem,
}
