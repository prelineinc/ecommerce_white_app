// import { createApp, provide, h } from 'vue';
// //import { DefaultApolloClient } from '@vue/apollo-composable';
// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
// import App from './App.vue';
// import { httpClintConfig } from './constants/api';

// const httpLink = new HttpLink({
//   uri: 'https://localhost:7069/graphql/'
// });

// const apolloClient = new ApolloClient({
//   uri: httpLink,
//   cache: new InMemoryCache(),
//   connectToDevTools: true
// });

// // const app = createApp({
// //   setup () {
// //     provide( apolloClient)
// //   },

// //   render: () => h(App),
// // })
// Vue.config.productionTip = false

// Vue.use(VueApollo)

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
// })

// new Vue({
//   //el: '#app',
//   provide: apolloProvider.provide(),
//   render: h => h(App)
// }).$mount('#app')

// //app.mount('#q-app');

import ApolloClient from '@apollo/client/core'
import VueApollo from 'vue-apollo';
import App from './App.vue';

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'https://localhost:7069/graphql/'
  })
});

Vue.use(VueApollo); // use middleware

new Vue({
  el: '#app',
  apolloProvider, // add option
  render: h => h(App)
}).$mount('#app');
