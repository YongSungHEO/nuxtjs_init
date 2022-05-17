<template>
    <div>
        <AppHeader></AppHeader>
        <Nuxt></Nuxt>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
    name: 'DefaultLayout',
    components: { AppHeader }
}
</script>

<style>
</style>
