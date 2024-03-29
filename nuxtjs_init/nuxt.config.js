import i18n from './assets/locales';

export default {
    dev: process.env.NODE_ENV !== 'production',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxtjs_init',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'NuxtJS Init' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/reset.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/i18n',
            {
                locales: ['en', 'ko'],
                defaultLocale: 'en',
                vueI18n: {
                    fallbackLocale: 'en',
                    messages: {
                        en: i18n.en,
                        ko: i18n.ko,
                    }
                }
            },
        ]
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // Server setting
    server: {
        port: process.env.NODE_ENV === 'production' ? null : 5000
    },

    // env config
    env: {
        baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'
    }
}
