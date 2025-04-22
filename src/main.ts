import './assets/main.css'

import { createApp, provide, h, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { useAuthStore } from './stores/authstore'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://white.prelinehealthcare.com/graphql/'
})

// Cache implementation
const cache = new InMemoryCache()
//const authStore = useAuthStore();
// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

const pinia = createPinia()

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(pinia);
app.use(router.router)

app.mount('#app')
