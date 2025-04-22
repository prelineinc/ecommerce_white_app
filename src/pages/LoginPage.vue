<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50">
    <div class="flex items-center justify-center">
      <div class="flex flex-col justify-center p-12 p-lg-20 w-full max-w-md bg-white rounded-3xl">
        <form v-on:submit.prevent="Login()">
          <div class="flex flex-col px-lg-10 pb-15">
            <div class="text-center mb-11">
              <h1 class="text-gray-900 text-3xl font-bold mb-4">Sign In</h1>

              <div class="text-gray-500">to continue to your account</div>
            </div>

            <div class="mb-4">
              <input type="text" v-model="phone" required placeholder="Enter your phone number" name="phone"
                autocomplete="off"
                class="block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
              <p v-if="phoneError" class="text-red-500 text-xs mt-1">{{ phoneError }}</p>
            </div>

            <div class="d-grid mb-10">
              <button 
                type="submit"
                class="text-yellow-900 bg-yellow-400 hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full">
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useAuthStore } from '../stores/authstore'
import type { AuthStoreType } from '../types/user/authStore'
import { VerifyUser } from '../api/user/login'
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
const router = useRouter()
const authstore = useAuthStore()
const phone = ref('')
const phoneNo = ref('')
const phoneError = ref('');
// const { result: data, refetch: refetchLogin } = VerifyUser(phone.value)
const { result: data, refetch: refetchLogin, loading } = useQuery(
  computed(() => {
  if (phoneNo.value.length === 10) {
    return gql`
      query {
        verifyUserByContactNo(mobileno: "${phoneNo.value}") {
          id,
          contactNo
        }
      }
    `;
  } else {
    return gql`
      query {
        testString
      }
    `;
  }
})
)

const UserLogin = () => {
  const authData = {
    accessToken: '1234',
    name: '33333',
    email: '343@gmail.com',
    id: '9798u889',
    userType:1 
  } as AuthStoreType
  authstore.addUser(authData)
}

// const Login = () => {
//   const validate = /^[0-9]{10}$/;
//   const validatePhoneNumber = validate.test(phone.value);
//   if (!validatePhoneNumber) {
//     phoneError.value = 'Please enter a valid phone number';
//   } else {
//     phoneError.value = ''
//     refetchLogin()
//     if (data) {
//     const user = {
//       id: data.value?.verifyUserByContactNo?.id,
//       contactNo: phone.value
//     }
//     sessionStorage.setItem('otp', JSON.stringify(user))
//     router.push('otp')
//   }
//   }
// }

const Login = async () => {
  const validate = /^[0-9]{10}$/;
  const validatePhoneNumber = validate.test(phone.value);

  if (!validatePhoneNumber) {
    phoneError.value = 'Please enter a valid phone number';
  } else {
    phoneError.value = '';
    phoneNo.value = phone.value;
    await refetchLogin();
   }
};

watch(loading, (isLoading) => {
    if (!isLoading && data.value?.verifyUserByContactNo) {
        const userdata = data.value?.verifyUserByContactNo;
        if(userdata) {
          const user = {
            id: userdata.id,
            contactNo: userdata.contactNo
          };
          sessionStorage.setItem('otp', JSON.stringify(user));
          router.push('otp');
        }      
    }
});
</script>

<style></style>