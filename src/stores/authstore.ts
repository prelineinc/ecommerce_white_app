import { useGetUserById } from '@/api/user/user'
import { getItem, removeItem, setItem } from '../utility/sessionStorage'
import { defineStore } from 'pinia'

type AuthStoreType = {
  accessToken: string
  name: string
  email: string
  id: string
  //userType: string
}

const EMPTY_AUTH_STORE: AuthStoreType = {
  accessToken: '',
  name: '',
  email: '',
  id: '',
  //userType: ''
}

type TokenClaimsType = {
  iss: string;
  exp: string;
  nbf: string;
  aud: string;
  oid: string;
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  email?: string;
  tfp: string;
  nonce: string;
  scp: string;
  azp: string;
  ver: string;
  iat: number;
};
export type auth = {
  recentAuth: AuthStoreType
}

const redirectOnFailedLogin = (e: Error) => {
  //can't use vue router because it is not guaranteed to be loaded at this point
  // window.location.replace(
  //   ROUTE_PATHS.accessDenied + '?error=' + encodeURIComponent(e.message)
  // );
}

// export const useAuthStore = defineStore('auth', {
//   state: (): AuthStoreType => EMPTY_AUTH_STORE,
//   actions: {
//     setUser(this: AuthStoreType) {
//       setItem<string>('user', this.accessToken)
//     },
//     processToken(
//       this: AuthStoreType & {
//         setUser(): void
//       },
//       token: AuthStoreType
//     ) {
//       this.accessToken = token.accessToken
//       this.name = token.name || ''

//       // If the company was found in local storage or the cookie, set it

//       // add user details to logs sent to app insights
//     },
//     resetToken(this: AuthStoreType) {
//       this.accessToken = ''
//       this.name = ''
//       this.email = ''
//       this.userId = ''
//       removeItem('user')
//     },
//     async initialize() {
//       const { result } = useGetUserById('')
//       if (result) {
//         handleRedirectResponse
//       } else {
//         const e = new Error('No access token found when redirected')
//         redirectOnFailedLogin(e)
//       }

//       async function handleRedirectResponse(
//         this: { signInRedirect: () => void },
//         resp: AuthStoreType | null
//       ) {
//         try {
//           const { result } = useGetUserById('')

//           if (result) {
//             // const authStore = useAuthStore();
//             // authStore.processToken(token);
//             return result
//           } else {
//             const e = new Error('No access token found when redirected')

//             redirectOnFailedLogin(e)
//           }
//         } catch (e) {
//           // If the users session is expired the acquireTokenSilent will fail
//           // and the user must sign back in
//           if (e) {
//             await this?.signInRedirect()
//           } else {
//             const e = new Error('No access token found when redirected')
//             redirectOnFailedLogin(e)
//           }
//         }
//       }
//     },

//     // TODO: Make this a getter within the store.
//     isAllowedSupplyChainInsight() {
//       if (this.isAdmin) return true
//     },

//     isAllowedCustomerConnect() {
//       if (this.isAdmin) return true
//     },
//     async signInRedirect() {
//       const e = new Error('errString' as string)
//       redirectOnFailedLogin(e)
//     },

//     async signOutRedirect() {
//       const e = new Error('errString' as string)
//       redirectOnFailedLogin(e)
//     }
//   },
//   getters: {
//     isUserAuthorized: (state) => !!state.accessToken && state.accessToken !== ''
//   }
// })

export const useAuthStore = defineStore('auth', {
  state: (): auth => {

    const sessionAuth = getItem<AuthStoreType>('user',true) as AuthStoreType ?? EMPTY_AUTH_STORE;
    //sessionAuth.userType = parseJwt(sessionAuth.accessToken)?.is_admin;
       return { recentAuth: sessionAuth  }
  },
  actions: {
    setUser(this: AuthStoreType, authStore: AuthStoreType) {
      setItem('user', { recentAuth: [authStore] })
    },
    resetUser() {
      this.recentAuth = EMPTY_AUTH_STORE;
      removeItem('user')
    },
    async initialize(authStore: AuthStoreType) {
      this.recentAuth = authStore
      console.log('initilalalla authStore',authStore)
      setItem<AuthStoreType>('user', this.recentAuth,true);
      //const token = (this.recentAuth.accessToken as TokenClaimsType).email;
      //const [header, payload] = this.recentAuth.accessToken.split('.').map(part => atob(part));
      //console.log('payload',parseJwt(this.recentAuth.accessToken)?.is_admin); // Reads payload
      
    },
    
   // TODO: Make this a getter within the store.
    async addUser(authStore: AuthStoreType) {
      
      this.recentAuth = authStore;
      //setItem('user', JSON.stringify(this.recentAuth))
      //const e = new Error('errString' as string)
      //redirectOnFailedLogin(e)
    },
    signInRedirect(){
      const e = new Error('errString' as string)
      redirectOnFailedLogin(e)
    }
  },
  getters: {
    isUserExist: (state) =>
      state.recentAuth?.id
  }
})

// isCartExist: (state) => state.recentCart


