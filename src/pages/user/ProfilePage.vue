<template>
  <div>
    <div class="mb-4 pb-4">
      <h2 class="mb-3 text-lg font-bold">Personal Information</h2>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
        <div class="xl:col-span-6">
          <label for="firstNameInput" class="inline-block mb-2 font-medium">First Name</label>
          <input type="text" id="firstNameInput" v-model="name"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            placeholder="Enter First Name" />
        </div>
        <!--end col-->
        <!-- <div class="xl:col-span-6">
        <label for="lastNameInput" class="inline-block mb-2 font-medium">Last Name</label>
        <input type="text" :value="userdata?.userById?.name" id="lastNameInput"
          class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="Enter Last Name" />
        </div> -->
        <!--end col-->
        <div class="xl:col-span-6">
          <label for="phoneNumberInput" class="inline-block mb-2 font-medium">Phone Number</label>
          <input type="text" v-model="phone" id="phoneNumberInput"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
        </div>
        <!--end col-->
        <div class="xl:col-span-6">
          <label for="emailAddressInput" class="inline-block mb-2 font-medium">Email Address</label>
          <input type="email" id="emailAddressInput" v-model="email"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            placeholder="Enter email" />
        </div>
        <!--end col-->
      </div>
      <button @click="submitUser()" :disabled="!isFormProfileValid"
        class="mt-6 w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
        Save Changes
      </button>
    </div>
    <div class="grid">
      <div class="xl:col-span-8">
        <div class="bg-white rounded-lg p-5 mb-5 shadow">
          <div class="flex item-center justify-between">
            <h2 class="text-lg font-bold">Saved Address</h2>
            <button
              class="rounded-md bg-yellow-300 px-2 p-1 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-ou"
              @click="openModal(null)">
              Add Address
            </button>
          </div>
          <p v-if="addressData?.addressByUserId == undefined"
            class="text-gray-500 min-h-5 flex items-center justify-center">
            No address found!
          </p>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
            <div class="xl:col-span-6 p-3 mb-2 flex items-start justify-around shadow hover:bg-gray-50 hover:shadow-md rounded-lg"
              v-for="x in addressData?.addressByUserId" :key="x.id">
              <!-- <input type="radio" :value="x.id" v-model="selectedAddressId" class="mr-4" /> -->
              <div class="flex-1" style="cursor: pointer;">
                <div>
                  <label class="inline-block mb-2 font-medium">{{ x.receiverName }}</label>
                  <button v-if="x.isHome" class="ml-2 rounded-xl p-1 px-2 text-xs text-gray-600 bg-gray-200">
                    Home
                  </button>
                  <button v-else-if="x.isOther" class="ml-4 rounded-xl p-1 px-2 text-xs text-gray-600 bg-gray-200">
                    Office
                  </button>
                </div>
                <p class="mb-1 text-slate-500 text-s">
                  <span class="text-slate-800">{{ x.completeAddress }}, {{ x.locality }},</span>
                </p>
                <p class="mb-1 text-slate-500 text-s">
                  <span class="text-slate-800">{{ x.city }}, {{ x.state }} - {{ x.pincode }}</span>
                </p>
                <p class="mb-1 text-slate-500 text-s">
                  <span class="text-slate-800">{{ x.receiverMobileNo }}</span>
                </p>
              </div>
              <button
                class="rounded-md p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-200 transition duration-200 ease-out"
                @click="openModal(x)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke-width="1.5"
                  stroke="currentColor" class="size-4">
                  <path
                    d="M16.318 6.11l-3.536-3.535 1.415-1.414c.63-.63 2.073-.755 2.828 0l.707.707c.755.755.631 2.198 0 2.829L16.318 6.11zm-1.414 1.415l-9.9 9.9-4.596 1.06 1.06-4.596 9.9-9.9 3.536 3.536z">
                  </path>
                </svg>
              </button>
              <button
                class="rounded-md p-2 text-gray-400 hover:text-red-600 hover:bg-red-200 transition duration-200 ease-out"
                @click="RemoveAddress(x.id)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-4">
                  <path d="M3 6h18v2H3V6zm3 3h12v12H6V9zm3 2v8h2v-8H9zm4 0v8h2v-8h-2zm-2-7h4v2h-4V4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="my-4 py-4">
      <h2 class="mb-3 text-lg font-bold">Add Address</h2>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
        <div class="xl:col-span-12">
          <label for="streetAddressInput" class="inline-block mb-2 font-medium">Door No., Apartment Name, Street
            Name</label>
          <input type="text" v-model="fullAddress" id="streetAddressInput"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            placeholder="Street address" />
        </div>
        <div class="xl:col-span-12">
          <label for="townCityInput" class="inline-block mb-2 font-medium">Town/City</label>
          <input type="text" v-model="city" id="townCityInput"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            placeholder="Town/City" />
        </div>
        <div class="xl:col-span-12">
          <label for="townCityInput" class="inline-block mb-2 font-medium">Locality</label>
          <input type="text" v-model="locality" id="townCityInput"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            placeholder="Town/City" />
        </div>
        <div class="xl:col-span-4">
          <label for="stateInput" class="inline-block mb-2 font-medium">State</label>
          <input type="text" v-model="state" id="stateInput"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            placeholder="State" />
        </div>
        <div class="xl:col-span-4">
          <label for="zipcodeInput" class="inline-block mb-2 font-medium">ZipCode</label>
          <input type="text" v-model="pinCode" required id="zipcodeInput"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            placeholder="ZipCode" />
        </div>
      </div>
      <div class="xl:col-span-6">
        <button @click="addAddress()" :disabled="!isFormValid"
          class="mt-6 w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
          Add Address
        </button>
      </div>
    </div> -->

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div class="flex item-center justify-between">
          <h2 v-if="!addressId" class="mb-3 text-lg font-bold">Add Address</h2>
          <h2 v-else class="mb-3 text-lg font-bold">Update Address</h2>
          <button class="rounded-md text-gray-400 hover:text-gray-800 transition duration-200 ease-out"
            @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke-width="1.2"
              stroke="currentColor" class="size-6">
              <path
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z">
              </path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
          <div class="xl:col-span-6">
            <label for="firstNameInput" class="inline-block mb-2 font-medium">First Name</label>
            <input type="text" id="receivername" v-model="receivername"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Enter First Name" />
          </div>
          <div class="xl:col-span-6">
            <label for="phoneNumberInput" class="inline-block mb-2 font-medium">Phone Number</label>
            <input type="text" v-model="receiverphone" id="receiverphone"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Enter First PhoneNo" />
          </div>
          <div class="xl:col-span-12">
            <label for="streetAddressInput" class="inline-block mb-2 font-medium">Door No., Apartment Name, Street
              Name</label>
            <input type="text" v-model="fullAddress" id="fulladdress"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Street address" />
          </div>

          <div class="xl:col-span-12">
            <label for="localityInput" class="inline-block mb-2 font-medium">Locality</label>
            <input type="text" v-model="locality" id="locality"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Locality" />
          </div>
          <div class="xl:col-span-12">
            <label for="townCityInput" class="inline-block mb-2 font-medium">Town/City</label>
            <input type="text" v-model="city" id="city"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Town/City" />
          </div>
          <div class="xl:col-span-4">
            <label for="stateInput" class="inline-block mb-2 font-medium">State</label>
            <input type="text" v-model="state" id="state"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="State" />
          </div>
          <div class="xl:col-span-4">
            <label for="zipcodeInput" class="inline-block mb-2 font-medium">PinCode</label>
            <input type="text" v-model="pinCode" required id="pinCode"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="PinCode" />
          </div>
          <div class="xl:col-span-12">
            <label for="zipcodeInput" class="inline-block mb-2 font-medium">Address Type</label>
            <div class="flex gap-5">
              <div class="flex items-center">
                <input type="radio" name="address" value="home" v-model="selectedType" class="peer absolute opacity-0"
                  id="home" checked />
                <label for="home"
                  class="group flex px-3 py-2 bg-white border border-gray-400 rounded-md text-sm peer-checked:bg-yellow-100 peer-checked:border-yellow-500">
                  <span
                    class="border border-gray-400 rounded-full mr-2 w-4 h-4 mt-0.5 peer-checked:group-[]:border-yellow-900 peer-checked:group-[]:bg-yellow-900"></span>
                  <h5 class="text-sm text-gray-800 peer-checked:group-[]:font-bold">Home</h5>
                </label>
              </div>
              <div class="flex">
                <input type="radio" value="office" v-model="selectedType" name="address"
                  class="peer absolute w-px h-px opacity-0" id="office" />
                <label for="office"
                  class="group flex p-3 bg-white border border-gray-400 rounded-md text-sm peer-checked:bg-yellow-100 peer-checked:border-yellow-500">
                  <span
                    class="border border-gray-400 rounded-full mr-2 w-4 h-4 mt-0.5 peer-checked:group-[]:border-yellow-900 peer-checked:group-[]:bg-yellow-900"></span>
                  <h5 class="text-sm text-gray-800 peer-checked:group-[]:font-bold">Office</h5>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class=" mt-4">
          <button v-if="!addressId" @click="addAddress()" :disabled="!isFormValid" class="my-4 w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out
            disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed">
            Add Address
          </button>
          <button v-else @click="UpdateAddress()" :disabled="!isFormValid"
            class="my-4 w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
            Save Address
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PaperClipIcon } from '@heroicons/vue/20/solid'
import { useRouter } from 'vue-router'
import RedirectPage from '../../utility/redirect'
import { useGetUserById, UpdateUser } from '../../api/user/user'
import { useAuthStore } from '../../stores/authstore'
import type { AuthStoreType } from '../../types/user/authStore'
import { onMounted, ref, watch, defineEmits, computed } from 'vue'
import { GetAddressByUser } from '../../api/user/address'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
const router = useRouter()
const authstore = useAuthStore()
const showModal = ref(false);
const addressId = ref<any>();
const selectedType = ref('home');

//const { mutate: updateUserMutation, onDone } = useMutation(UpdateUser);


const { result: userdata, refetch: refetchUser } = useGetUserById(
  authstore.$state.recentAuth?.id
)
const { result: addressData, refetch: refetchNewAddress } = GetAddressByUser(
  authstore.$state.recentAuth?.id
)

const name = ref<string>('')
const phone = ref<string>('')
const email = ref<string>('')
const fullAddress = ref<string>('')
const locality = ref<string>('')
const city = ref<string>('')
const state = ref<string>('')
const pinCode = ref<string>('')
const isHome = ref(false)
const isOffice = ref(false)
const receivername = ref<string>('')
const receiverphone = ref<string>('')

watch(userdata, (newVal) => {
  if (newVal) {
    if (!name.value) {
      name.value = newVal.userById?.name || '';
    }
    if (!phone.value) {
      phone.value = newVal.userById?.contactNo || '';
    }
    if (!email.value) {
      email.value = newVal.userById?.email || '';
    }
  }
});

const openModal = (data: any) => {
  if (data == null) {
    addressId.value = '';
    receivername.value = '';
    receiverphone.value = ''
    fullAddress.value = '';
    locality.value = '';
    city.value = '';
    state.value = '';
    pinCode.value = '';
    isHome.value = true;
    isOffice.value = false;
    selectedType.value = 'home'
  }
  else {
    addressId.value = data.id;
    receivername.value = data.receiverName;
    receiverphone.value = data.receiverMobileNo;
    fullAddress.value = data.completeAddress;
    locality.value = data.locality;
    city.value = data.city;
    state.value = data.state;
    pinCode.value = data.pincode
    isHome.value = data.isHome;
    isOffice.value = data.isOther;
    selectedType.value = data.isHome ? 'home' : 'office'
    console.log(addressId.value)
  }

  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}


//<--- correct code ---> //
// const UPDATE_PROFILE = gql`
//   mutation updateUserProfile($id: UUID!, $user: UserInput!) {
//     updateUserProfile(id: $id, user: $user)
//   }
// `

// const updateTodo = useMutation(UPDATE_PROFILE, {
//   optimisticResponse: {
//     updateUserProfile: true  // Optimistic assumption that the profile will be updated successfully
//   }
// })

// async function submit() {
//   console.log(name.value)
//   console.log(phone.value)
//   try {
//     const response = await updateTodo.mutate({
//       id: authstore.$state.recentAuth.id,  // Pass the UUID directly
//       user: {
//         id: authstore.$state.recentAuth.id,  // Include the user ID as well
//         name: name.value,           // Match the structure of UserInput on the backend
//         password: "12345",   // Include all necessary fields
//         contactNo: phone.value,
//         email: email.value,
//       },
//     });

//     // Check if the response indicates success
//     if (response?.data?.updateUserProfile) {
//       console.log("Profile updated successfully:", response);
//     } else {
//       console.log("Profile update failed.");
//     }
//   } catch (error) {
//     console.error("Error updating profile:", error);
//   }
// }
//<--- correct code ---> //


//method-3-start

const isFormProfileValid = computed(() => {
  return name.value && phone.value 
});

const UPDATE_PROFILE = gql`
  mutation updateUser($user: UserInput!) {
    updateUser(userdetails: $user)
  }
`
const updateProfile = useMutation(UPDATE_PROFILE, {
  optimisticResponse: {
    updateUser: true
  }
})

async function submitUser() {
  console.log(name.value)
  console.log(phone.value)
  if(isFormProfileValid.value) {
    try {
    const response = await updateProfile.mutate({
      user: {
        id: authstore.$state.recentAuth.id,
        name: name.value,
        password: "12345",
        contactNo: phone.value,
        email: email.value,
      },
    });

    if (response?.data?.updateUser) {
      alert("Profile updated successfully")
      console.log("Profile updated successfully:", response);
    } else {
      alert("Profile update failed.")
      console.log("Profile update failed.");
    }
  } catch (error) {
    console.error("Error updating profile:", error);
  }
  }
  
}
//method-3-start-end

const CREATE_ADDRESS = gql`
  mutation CreateAddress($address: AddressInput!) {
    createAddress(address: $address)
  }
`

const createAddress = useMutation(CREATE_ADDRESS, {
  optimisticResponse: {
    createAddress: true
  }
});

const isFormValid = computed(() => {
  return receivername.value && receiverphone.value && fullAddress.value && city.value && locality.value && state.value && pinCode.value;
});

const addAddress = async () => {
  if (isFormValid.value) {
    try {
      const response = await createAddress.mutate({
        address: {
          id: "00000000-0000-0000-0000-000000000000",
          userId: authstore.$state.recentAuth?.id,
          receiverName: receivername.value || name.value,
          receiverMobileNo: receiverphone.value || phone.value,
          completeAddress: fullAddress.value,
          locality: locality.value,
          city: city.value,
          state: state.value,
          pincode: pinCode.value,
          isHome: selectedType.value == 'home' ? true : false,
          isOther: selectedType.value == 'office' ? true : false,
          isActive: true,
        },
      });

      if (response?.data?.createAddress) {
        alert("New address created successfully")
        console.log("New address created successfully:", response);
        refetchNewAddress()
        closeModal()
      } else {
        alert("New address created failed.")
        console.log("Profile update failed.");
      }
    } catch (error) {
      console.error("Error updating address:", error);
    }
  }
  else {
    alert('Please enter valid data!')
  }

}

const UPDATE_ADDRESS = gql`
  mutation UpdateAddress($address: AddressInput!) {
    updateAddress(address: $address)
  }
`

const updateAddress = useMutation(UPDATE_ADDRESS, {
  optimisticResponse: {
    updateAddress: true
  }
});

const UpdateAddress = async () => {
  console.log('update')
  try {
    const response = await updateAddress.mutate({
      address: {
        id: addressId.value,
        userId: authstore.$state.recentAuth?.id,
        receiverName: receivername.value,
        receiverMobileNo: receiverphone.value,
        completeAddress: fullAddress.value,
        locality: locality.value,
        city: city.value,
        state: state.value,
        pincode: pinCode.value,
        isHome: selectedType.value == 'home' ? true : false,
        isOther: selectedType.value == 'office' ? true : false,
        isActive: true,
      },
    });

    if (response?.data?.updateAddress) {
      alert("Address updated successfully")
      refetchNewAddress()
      closeModal()
    } else {
      alert("Address updated failed.")
    }
  } catch (error) {
    console.error("Error updating address:", error);
  }
}

const RemoveAddress = async (id: any) => {
  console.log('remove')
  try {
    const response = await updateAddress.mutate({
      address: {
        id: id,
        isActive: false,
      },
    });

    if (response?.data?.updateAddress) {
      alert("Address removed successfully")
      refetchNewAddress()
      closeModal()
    } else {
      alert("Address removed failed.")
    }
  } catch (error) {
    console.error("Error updating address:", error);
  }
}

</script>

<style></style>
