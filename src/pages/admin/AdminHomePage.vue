<template>

  <div class="mx-auto mt-5">
    <div class="flex flex-col">




      <div class="min-h-screen">

        <div class="">

          <div class="mt-12">
            <!-- first col -->
            <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    Today's Sales</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {{ updateOrderCount?.todaysSales || 0 }}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateOrderCount?.todaysSalePercentage < 0" class="text-red-500">{{updateOrderCount?.todaysSalePercentage}}%</strong>
                    <strong v-else class="text-green-500">+{{updateOrderCount?.todaysSalePercentage}}%</strong>
                    &nbsp;than last day
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-red-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="w-6 h-6 text-white">
                    <path fill-rule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clip-rule="evenodd"></path>
                  </svg> -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path
                      d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  </svg>


                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    Today's Orders</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {{updateOrderCount?.todaysCount || 0}}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateOrderCount?.percentageChanges < 0" class="text-red-500">{{updateOrderCount?.percentageChanges}}%</strong>
                    <strong v-else class="text-green-500">{{updateOrderCount?.percentageChanges}}%</strong>&nbsp;than yesterday
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path
                      d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                    <path
                      d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                    <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                  </svg>


                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Todays
                    Deliverd</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {{ updateOrderCount?.todaysDeliveryCount || 0 }}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateOrderCount?.todaysDeliveryPercentage < 0" class="text-red-500">{{updateOrderCount?.todaysDeliveryPercentage}}%</strong>
                    <strong v-else class="text-red-500">+{{updateOrderCount?.todaysDeliveryPercentage}}%</strong>
                    &nbsp;than yesterday
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                      clip-rule="evenodd" />
                  </svg>

                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Todays
                    Late
                  </p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    0</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong class="text-green-500">+0%</strong>&nbsp;than yesterday
                  </p>
                </div>
              </div>
            </div>

            <!-- second col -->
            <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-yellow-600 to-yellow-400 text-white shadow-yellow-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path
                      d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
                  </svg>

                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-yellow-gray-600">
                    Today's Offer</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-yellow-gray-900">
                    {{updateItemCount?.todaysTrendCount || 0}}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateItemCount?.todaysTrendPercentage < 0" class="text-red-500">{{updateItemCount?.todaysTrendPercentage}}%</strong>
                    <strong v-else class="text-green-500">+{{updateItemCount?.todaysTrendPercentage}}%</strong>
                    &nbsp;than last day
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="w-6 h-6 text-white">
                    <path fill-rule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    Today's Rental</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {{ updateItemCount?.todaysRentalCount || 0 }}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateItemCount?.todaysRentalPercentage < 0" class="text-red-500">{{updateItemCount?.todaysRentalPercentage}}%</strong>
                    <strong v-else class="text-green-500">+{{updateItemCount?.todaysRentalPercentage}}%</strong>
                    &nbsp;than last month
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-600 to-gray-400 text-white shadow-gray-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="w-6 h-6 text-white">
                    <path
                      d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z">
                    </path>
                  </svg>
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">New
                    Users</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {{updateUserCount?.todaysCount || 0}}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateUserCount?.percentageChanges < 0" class="text-red-500">{{updateUserCount?.percentageChanges}}%</strong>
                    <strong v-else class="text-green-500">+{{updateUserCount?.percentageChanges}}%</strong>
                    &nbsp;than yesterday
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-beige-600 to-beige-400 text-white shadow-beige-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path
                      d="M6 3a3 3 0 0 0-3 3v1.5a.75.75 0 0 0 1.5 0V6A1.5 1.5 0 0 1 6 4.5h1.5a.75.75 0 0 0 0-1.5H6ZM16.5 3a.75.75 0 0 0 0 1.5H18A1.5 1.5 0 0 1 19.5 6v1.5a.75.75 0 0 0 1.5 0V6a3 3 0 0 0-3-3h-1.5ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM4.5 16.5a.75.75 0 0 0-1.5 0V18a3 3 0 0 0 3 3h1.5a.75.75 0 0 0 0-1.5H6A1.5 1.5 0 0 1 4.5 18v-1.5ZM21 16.5a.75.75 0 0 0-1.5 0V18a1.5 1.5 0 0 1-1.5 1.5h-1.5a.75.75 0 0 0 0 1.5H18a3 3 0 0 0 3-3v-1.5Z" />
                  </svg>


                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">User
                    Views
                  </p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {{ updateItemCount?.userViewCount || 0}}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateItemCount?.userViewPercentage < 0" class="text-red-500">{{updateItemCount?.userViewPercentage}}%</strong>
                    <strong v-else class="text-green-500">+{{updateItemCount?.userViewPercentage}}%</strong>&nbsp;than yesterday
                  </p>
                </div>
              </div>
            </div>

            <!-- third col -->
            <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path
                      d="M6 3a3 3 0 0 0-3 3v1.5a.75.75 0 0 0 1.5 0V6A1.5 1.5 0 0 1 6 4.5h1.5a.75.75 0 0 0 0-1.5H6ZM16.5 3a.75.75 0 0 0 0 1.5H18A1.5 1.5 0 0 1 19.5 6v1.5a.75.75 0 0 0 1.5 0V6a3 3 0 0 0-3-3h-1.5ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM4.5 16.5a.75.75 0 0 0-1.5 0V18a3 3 0 0 0 3 3h1.5a.75.75 0 0 0 0-1.5H6A1.5 1.5 0 0 1 4.5 18v-1.5ZM21 16.5a.75.75 0 0 0-1.5 0V18a1.5 1.5 0 0 1-1.5 1.5h-1.5a.75.75 0 0 0 0 1.5H18a3 3 0 0 0 3-3v-1.5Z" />
                  </svg>

                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    Most Views</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {{ updateItemCount?.mostViewCount || 0 }}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateItemCount?.mostViewPercentage < 0" class="text-red-500">{{updateItemCount?.mostViewPercentage}}%</strong>
                    <strong v-else class="text-green-500">+{{updateItemCount?.mostViewPercentage}}%</strong>&nbsp;than last day
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="w-6 h-6 text-white">
                    <path fill-rule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    Today's Orders</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {{ updateOrderCount?.todaysCount }}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateOrderCount?.percentageChanges < 0" class="text-red-500">{{updateOrderCount?.percentageChanges}}%</strong>
                    <strong v-else class="text-green-500">+{{updateOrderCount?.percentageChanges}}%</strong>&nbsp;than last month
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd"
                      d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                      clip-rule="evenodd" />
                    <path
                      d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                  </svg>

                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Todays
                    Trend</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {{ updateItemCount?.todaysTrendCount || 0 }}
                  </h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateItemCount?.todaysTrendPercentage < 0" class="text-red-500">{{updateItemCount?.todaysTrendPercentage}}%</strong>
                    <strong v-else class="text-green-500">+{{updateItemCount?.todaysTrendPercentage}}%</strong>
                    &nbsp;than yesterday
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path
                      d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>

                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Best
                    Seller
                  </p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {{updateItemCount?.userViewCount || 0}}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateItemCount?.userViewPercentage < 0" class="text-red-500">{{updateItemCount?.userViewPercentage}}%</strong>
                    <strong class="text-green-500">+{{updateItemCount?.userViewPercentage}}%</strong>&nbsp;than yesterday
                  </p>
                </div>
              </div>
            </div>

            <!-- forth col -->
            <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="w-6 h-6 text-white">
                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                    <path fill-rule="evenodd"
                      d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                      clip-rule="evenodd"></path>
                    <path
                      d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z">
                    </path>
                  </svg>
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    Today's COD's</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {{updateOrderCount?.todaysCodCount || 0}}
                  </h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateOrderCount?.todaysCodPrecentage < 0" class="text-red-500">{{updateOrderCount?.todaysCodPrecentage}}%</strong>
                    <strong v-else class="text-green-500">+{{updateOrderCount?.todaysCodPrecentage}}%</strong>
                    &nbsp;than last day
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                    <path fill-rule="evenodd"
                      d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      clip-rule="evenodd" />
                  </svg>

                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    Today's RazorPay</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {{updateOrderCount?.todaysRazorPayCount || 0}}
                  </h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateOrderCount?.todaysRazorPayPercentage < 0" class="text-red-500">{{updateOrderCount?.todaysRazorPayPercentage}}%</strong>
                    <strong v-else class="text-green-500">+{{updateOrderCount?.todaysRazorPayPercentage}}%</strong>
                    &nbsp;than last month
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path
                      d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>

                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total
                    Users</p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {{ updateUserCount?.totalCount || 0 }}
                  </h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateUserCount?.percentageChanges < 0"
                      class="text-red-500">{{updateUserCount?.percentageChanges}}%</strong>
                    <strong v-else class="text-green-500">+{{updateUserCount?.percentageChanges}}%</strong>
                    &nbsp;than yesterday
                  </p>
                </div>
              </div>
              <div @click="RedirectDetailPage()" style="cursor: pointer;"
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div
                  class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd"
                      d="M3.75 3.375c0-1.036.84-1.875 1.875-1.875H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375Zm10.5 1.875a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Zm-4.5 5.25a.75.75 0 0 0 0 1.5h.375c.769 0 1.43.463 1.719 1.125H9.75a.75.75 0 0 0 0 1.5h2.094a1.875 1.875 0 0 1-1.719 1.125H9.75a.75.75 0 0 0-.53 1.28l2.25 2.25a.75.75 0 0 0 1.06-1.06l-1.193-1.194a3.382 3.382 0 0 0 2.08-2.401h.833a.75.75 0 0 0 0-1.5h-.834A3.357 3.357 0 0 0 12.932 12h1.318a.75.75 0 0 0 0-1.5H10.5c-.04 0-.08.003-.12.01a3.425 3.425 0 0 0-.255-.01H9.75Z"
                      clip-rule="evenodd" />
                  </svg>

                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total
                    Sales
                  </p>
                  <h4
                    class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {{ updateOrderCount?.totalSale || 0 }}
                  </h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong v-if="updateOrderCount?.totalSalesPercentage < 0" class="text-red-500">{{updateOrderCount?.totalSalesPercentage}}%</strong>
                    <strong v-else class="text-green-500">+{{updateOrderCount?.totalSalesPercentage}}%</strong>
                    &nbsp;than yesterday
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userDetails, orderDetails, itemDetails } from '../../api/admin/home'
import type RedirectPage from '@/utility/redirect'
import { useRouter } from 'vue-router'
import { computed } from 'vue';
const router = useRouter();

const { result: usersData } = userDetails()
const { result: ordersData } = orderDetails()
const { result: itemsData } = itemDetails()
const people = ref([
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
])

const updateUserCount = computed(() => {
  return usersData?.value?.usersCountByAdmin;
})

const updateOrderCount = computed(() => {
  return ordersData?.value?.paymentsCountByAdmin;
})

const updateItemCount = computed(() => {
  return itemsData?.value?.itemsCountByAdmin;
})

const RedirectDetailPage = () => {
  router.push('/admin/dashboard/llllll')
}
</script>

<style></style>