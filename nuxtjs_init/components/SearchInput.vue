<template>
    <div class="searchInput-d-wrapper">
        <input
            type="text"
            class="searchInput-i-input"
            :value="value"
            @input="$emit('input', $event.target.value)" />
        <button
            type="button"
            class="searchInput-b-search"
            @click="$emit('search')">search
        </button>
    </div>
</template>

<script>
export default {
    name: 'SearchInput',
    props: {
        value: {
            default: () => '',
            type: String,
        },
    },
}
</script>

<style scoped>
    .searchInput-d-wrapper {
        display: flex;
        justify-content: center;
        height: 40px;
        margin: 1rem 0;
    }
    .searchInput-i-input {
        width: 200px;
        font-size: 1.2rem;
        font-weight: 500;
    }
    .searchInput-b-search {
        font-size: 1.2rem;
        font-weight: 500;
    }
</style>
