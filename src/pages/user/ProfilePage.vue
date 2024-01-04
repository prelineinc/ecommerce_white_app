<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="q-ma-xl">
      <q-item class="column">
        <div class="text-h5">Account</div>
        <div class="text-subtitle1">John</div>
      </q-item>
      <q-separator spaced inset></q-separator>
      <div class="row">
        <div class="col-3 q-pa-md" style="max-width: 500px">
          <q-list>
            <q-item clickable @click="selectChange('overview')">
              <q-item-section>
                <q-item-label class="text-body1">Overview</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset></q-separator>
            <q-item>
              <q-item-section>
                <q-item-label caption class="q-my-md">ORDERS</q-item-label>
                <q-item-label class="text-body1">Order</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset></q-separator>
            <q-item>
              <q-item-section>
                <q-item-label caption class="q-my-md">CREDITS</q-item-label>
                <q-item-label class="text-body1">Coupons</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset></q-separator>
            <q-item>
              <q-item-section>
                <q-item-label caption class="q-my-md">ACCOUNT</q-item-label>
                <q-item-label clickable class="text-body1" @click="selectChange('profile')">Profile</q-item-label>
                <q-item-label class="text-body1" @click="selectChange('address')">Addresses</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset></q-separator>
            <q-item>
              <q-item-section>
                <q-item-label caption class="q-my-md">LEGAL</q-item-label>
                <q-item-label class="text-body1">Terms of Use</q-item-label>
                <q-item-label class="text-body1">Privacy Policy</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
          <q-separator vertical></q-separator>

        </div>
        <div class="col-9 q-pa-md" style="max-width: 800px">
          <q-card v-if="click == 'profile'">
            <q-card-section class="q-ma-lg">
              <q-item class="text-h6">
                Profile Details
              </q-item>
              <q-separator spaced inset></q-separator>
              <q-item class="row justify-between q-mx-xl">
                <div class="text-body1 text-weight-light ">
                  Full name
                </div>
                <div class="text-body1 text-weight-light ">
                  John
                </div>
              </q-item>
              <q-item class="row justify-between q-mx-xl">
                <div class="text-body1 text-weight-light ">
                  Mobile Number
                </div>
                <div class="text-body1 text-weight-light ">
                  9638527410
                </div>
              </q-item>
              <q-item class="row justify-between q-mx-xl">
                <div class="text-body1 text-weight-light ">
                  Email ID
                </div>
                <div class="text-body1 text-weight-light ">
                  jonh@gmail.com
                </div>
              </q-item>
              <q-item class="q-mx-xl">
                <q-btn class="full-width" style="background: #FF0080; color: white" label="Edit" icon="edit"
                  no-caps></q-btn>
              </q-item>

            </q-card-section>

          </q-card>

          <div v-if="click == 'overview'">
            <div class="overview">
              <q-avatar square size="150px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              <q-btn size="sm" outline color="black" label="Edit Profile" no-caps/>
            </div>
            <div class="row q-my-md q-gutter-lg">
              <div class="col-3">
                <q-card flat bordered class="my-card " style="width: 200px">
                  <q-card-section class="overview-card-section">
                    <div class="q-mb-md">
                      <q-icon name="inventory_2" size="3rem" color="grey-7"></q-icon>
                    </div>
                    <div class="text-body2 text-weight-bold">
                      Order
                    </div>
                    <div class="text-caption">
                      Check your order status
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-3">
                <q-card flat bordered class="my-card " style="width: 200px">
                  <q-card-section class="overview-card-section">
                    <div class="q-mb-md">
                      <q-icon name="favorite" size="3rem" color="grey-7"></q-icon>
                    </div>
                    <div class="text-body2 text-weight-bold">
                      Wishlist
                    </div>
                    <div class="text-caption">
                      Product Collection
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-3">
                <q-card flat bordered class="my-card" style="width: 200px">
                  <q-card-section class="overview-card-section">
                    <div class="q-mb-md">
                      <q-icon name="post_add" size="3rem" color="grey-7"></q-icon>
                    </div>
                    <div class="text-body2 text-weight-bold">
                      Coupons
                    </div>
                    <div class="text-caption text-center">
                      Check Coupons discounts
                    </div>
                  </q-card-section>

                </q-card>
              </div>
            </div>
            <div class="row q-my-md q-gutter-lg">
              <div class="col-3">
                <q-card flat bordered class="my-card " style="width: 200px">
                  <q-card-section class="overview-card-section">
                    <div class="q-mb-md">
                      <q-icon name="person" size="3rem" color="grey-7"></q-icon>
                    </div>
                    <div class="text-body2 text-weight-bold">
                      Profile
                    </div>
                    <div class="text-caption">
                      Change your Profile Details
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-3">
                <q-card flat bordered class="my-card " style="width: 200px">
                  <q-card-section class="overview-card-section">
                    <div class="q-mb-md">
                      <q-icon name="location_on" size="3rem" color="grey-7"></q-icon>
                    </div>
                    <div class="text-body2 text-weight-bold">
                      Address
                    </div>
                    <div class="text-caption">
                      Save Address
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div class="row q-my-md q-gutter-lg">
              <div class="col-3">
                <q-btn size="md" class="full-width" color="red-12" no-caps>
                Logout
              </q-btn>
              </div>
            </div>
          </div>

          <div v-if="click == 'address'">
            <div class="address-header">
              <div class="text-h6">
                Saved Address

              </div>
              <q-btn outline color="black" icon="add" no-caps>
                Add adress
              </q-btn>
            </div>
            <div class="text-caption">
              Default Address
            </div>
            <q-card flat bordered class="my-card ">
              <q-card-section>
                <div class="address-header">
                  <div class="text-body1 text-weight-bold">
                  John
                </div>
                <div class="bg-grey-3 q-px-sm" style="font-size: 12px; border-radius: 10px;">
                  Home
                </div>
                </div>
                <div class="q-my-md">
                  <div class="text-body2">
                    2/112
                  </div>
                  <div class="text-body2">
                    North Street
                  </div>
                  <div class="text-body2">
                    Chennai - 600 054
                  </div>
                  <div class="text-body2">
                    Tamil Nadu
                  </div>
                </div>

                <div class="q-my-md text-body2">
                  Mobile No : 9876543210
                </div>

              </q-card-section>

            </q-card>
          </div>
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'ProfilePage',
  setup() {
    const click = ref('profile');

    const selectChange = (name: any) => {
      click.value = name
      console.log(click.value)
    }

    return {click, selectChange}
  },

})
</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #e0e0e091;
  padding: 20px;
}

.overview-card-section {
  display: grid;
  justify-items: center;
  padding: 20px;
}

.address-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
