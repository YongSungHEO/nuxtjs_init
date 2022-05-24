<template>
    <div>
        <header class="title AppHeader-h-header">
            <NuxtLink to="/" class="AppHeader-nuxtLink-logo">{{ $t('APP_HEADER.TITLE') }}</NuxtLink>
        </header>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .AppHeader-h-header {
        height: 60px;
        display: flex;
        align-items: center;
        padding: 0 0.5rem;
    }
    .AppHeader-nuxtLink-logo {
        font-weight: 900;
    }
    .AppHeader-nuxtLink-logo:visited {
        color: inherit;
    }
</style>
