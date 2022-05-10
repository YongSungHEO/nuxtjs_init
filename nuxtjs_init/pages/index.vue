<template>
    <!-- <Tutorial /> -->
    <div>
        {{ products }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'IndexPage',
    async asyncData() {
        const res = await axios.get('http://localhost:3000/products');
        const products = res.data;
        return { products }
    },
}
</script>
