<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50">
    <div class="flex items-center justify-center">
      <div class="flex flex-col justify-center p-12 p-lg-20 w-full max-w-md bg-white rounded-3xl">
        <form v-on:submit.prevent="submitOTP()">
          <div class="flex flex-col px-lg-10 pb-15">
            <div class="text-center mb-11">
              <h1 class="text-gray-900 text-3xl font-bold mb-4">Verify your mobile number</h1>

              <div class="text-gray-500">Enter OTP sent to +91 XXXXXX{{ user?.contactNo.substring(6) }}</div>
            </div>

            <div class="mb-4">
              <input type="text" id="otp" v-model="otp" name="otp" autocomplete="otp" placeholder="Enter 4 digit OTP"
                class="block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
                <p v-if="otpError" class="text-red-500 text-xs mt-1">{{ otpError }}</p>
            </div>

            <div class="d-grid mb-2">
              <button type="submit"
                class="text-yellow-900 bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-100 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full">
                Continue
              </button>
            </div>

            <div class="text-gray-500 text-center">
              <!-- Reduce this time to 0 and show resend button -->
              <span>Resend OTP in {{ formatTime(countdown) }} minutes</span>
              <!-- <span>Didn't receive OTP?</span> -->
              <!-- <button type="button" class="text-blue-600"> Resend </button> -->
            </div>
          </div>
        </form>

        <!-- <div class="flex justify-center mt-10">
          <div class="flex text-primary gap-5">
            <a href="#" class="text-blue-600" target="_blank" @click="RedirectPage('terms')">Terms</a>
            <a href="#" class="text-blue-600" target="_blank">Contact Us</a>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref,computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authstore';
import type { AuthStoreType } from '../types/user/authStore';
import { VerifyOtp } from '../api/user/login';
import RedirectPage from '../utility/redirect'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
const otp = ref('');
const finalotp = ref('');
const authstore = useAuthStore();
const router = useRouter();
const phone = ref('');
const user = ref();
const countdown = ref(180);
const otpError = ref('');

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const startCountdown = () => {
  const timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      clearInterval(timer);
    }
  }, 1000);
};
startCountdown();

//const { result: data, refetch: refetchOTP } = VerifyOtp(user?.value?.id,user?.value?.contactNo,otp.value);
const { result: data, refetch: refetchOTP, loading  } = useQuery(computed(()=>{
  if(finalotp.value.length >= 4){
    return gql`
  query {
          verifyUserByOtp(userid: "${user.value?.id}", mobileno: "${user.value?.contactNo}", otp: "${finalotp.value}"){
          id,
          name,
          email,
          accessToken,
      }
  }
`;
  }else{
    return gql`query { testString }`;
  }
}) )
onMounted(()=>{
  user.value = JSON.parse(sessionStorage.getItem("otp")!) ;
  })


const submitOTP = async ()=>{
  if(otp.value.length >= 4) {
    otpError.value = ''
    finalotp.value = otp.value;
    await refetchOTP();
  }
  else {
    otpError.value = 'Please enter a valid OTP.'
  }
}

watch(loading, (isLoading) => {
  if (!isLoading && data.value?.verifyUserByOtp) {
    //localStorage.setItem("user", JSON.stringify(data.value?.verifyUserByOtp));
    authstore.initialize(data.value?.verifyUserByOtp as AuthStoreType)
    sessionStorage.removeItem("otp");
    router.push('/');
  }
});
</script>

<style></style>