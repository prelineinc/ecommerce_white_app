<template>
  <div id="itemsSection" class="mx-auto w-full 2xl:container bg-white pb-8 px-4">
    <BreadCrumComponent :item="product" />
    <BannerComponent />
    <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
      <div class="lg:col-span-3 md:col-span-4">
        <!-- filters and sorting block for mobile -->
        <div class="md:hidden bg-white w-full fixed bottom-0 left-0 z-[999]">
          <div class="flex">
            <button type="button" class="text-base w-full font-medium p-3 border-t" @click="toggleMobileFilter">
              Filters
            </button>
            <button type="button" class="text-base w-full font-medium p-3 border-l border-t"
              :class="[mobSorting ? 'border-t-white' : '']" @click="toggleMobileSorting">Sort by</button>
          </div>
        </div>
        <div class="md:flex flex-col md:pb-8 md:pr-4 max-h-screen md:sticky md:top-0 "
          :class="[mobFilter ? 'flex' : 'hidden', isMobile ? 'bg-white fixed top-0 left-0 w-full h-full z-[999] pb-20' : 'flex']">
          <div class="flex items-center justify-between py-2 px-4 md:px-0">
            <h3 class="text-xl font-medium">Filters</h3>
            <a class="cursor-pointer text-xs text-red-600" @click="ClearFilterCombination">Clear all</a>
          </div>
          <div class="w-full grid divide-y divide-neutral-200 max-w-xl mx-auto md:mt-4"
            :class="[mobFilter ? 'overflow-auto' : '']">
            <div class="py-1 px-4 md:px-0">

              <details class="group" :open="true">
                <summary
                  class="flex justify-between items-center font-medium cursor-pointer list-none py-2 text-xs font-medium uppercase py-2 text-xs font-medium uppercase">
                  <span class="font-bold">Brands</span>
                  <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div class="text-neutral-600 mb-4 group-open:animate-fadeIn">
                  <ul class="list-none mt-2 max-h-52 pl-2 overflow-auto">
                    <li class="ms-0" v-for="(x, index) of brandsData?.brands" :key="x.id">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`brand-check-${index}`" :name="`brand-check-${index}`" type="checkbox"
                          @change="FilterBrand(x)" :value="x.id" :checked="checkedBrand.includes(x.id)"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`brand-check-${index}`" class="pl-3">{{ x.name }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
            <div class="py-1 px-4 md:px-0">
              <details class="group">
                <summary
                  class="flex justify-between items-center font-medium cursor-pointer list-none py-2 text-xs font-medium uppercase">
                  <span class="font-bold">Age</span>
                  <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div class="text-neutral-600 my-3 group-open:animate-fadeIn">
                  <ul class="list-none mt-2 max-h-52 pl-2 overflow-auto">
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`age-check-0`" :name="`age-check-0`" type="checkbox" @change="FilterCombination()"
                          :value="0" v-model="checkedAge"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`age-check-0`" class="pl-3">0-6 M</label>
                      </div>
                    </li>
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`age-check-2`" :name="`age-check-2`" type="checkbox" @change="FilterCombination()"
                          :value="1" v-model="checkedAge"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`age-check-2`" class="pl-3">2-4 Y</label>
                      </div>
                    </li>
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`age-check-4`" :name="`age-check-4`" type="checkbox" @change="FilterCombination()"
                          :value="2" v-model="checkedAge"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`age-check-4`" class="pl-3">4-6 Y</label>
                      </div>
                    </li>
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`age-check-6`" :name="`age-check-6`" type="checkbox" @change="FilterCombination()"
                          :value="3" v-model="checkedAge"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`age-check-6`" class="pl-3">6-8 Y</label>
                      </div>
                    </li>
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`age-check-8`" :name="`age-check-8`" type="checkbox" @change="FilterCombination()"
                          :value="4" v-model="checkedAge"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`age-check-8`" class="pl-3">8+ Y</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
            <div class="py-1 px-4 md:px-0">
              <details class="group">
                <summary
                  class="flex justify-between items-center font-medium cursor-pointer list-none py-2 text-xs font-medium uppercase">
                  <span class="font-bold">PRICE</span>
                  <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div class="text-neutral-600 my-3 group-open:animate-fadeIn">
                  <ul class="list-none mt-2 max-h-52 pl-2 overflow-auto">
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`price-check-100`" :name="`price-check-100`" type="checkbox"
                          @change="FilterCombination()" :value="'100'" v-model="checkedPrice"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`price-check-100`" class="pl-3"> Below ₹ 100 </label>
                      </div>
                    </li>
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`price-check-200`" :name="`price-check-200`" type="checkbox"
                          @change="FilterCombination()" :value="'200'" v-model="checkedPrice"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`price-check-200`" class="pl-3">Below ₹ 300</label>
                      </div>
                    </li>


                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`price-check-500`" :name="`price-check-500`" type="checkbox"
                          @change="FilterCombination()" :value="'500'" v-model="checkedPrice"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`price-check-500`" class="pl-3">Below ₹ 500</label>
                      </div>
                    </li>

                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`price-check-700`" :name="`price-check-700`" type="checkbox"
                          @change="FilterCombination()" :value="'700'" v-model="checkedPrice"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`price-check-700`" class="pl-3">Below ₹ 700</label>
                      </div>
                    </li>
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`price-check-1000`" :name="`price-check-1000`" type="checkbox"
                          @change="FilterCombination()" :value="'1000'" v-model="checkedPrice"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`price-check-1000`" class="pl-3">Below ₹ 1000</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
            <div class="py-1 px-4 md:px-0">
              <details class="group">
                <summary
                  class="flex justify-between items-center font-medium cursor-pointer list-none py-2 text-xs font-medium uppercase">
                  <span class="font-bold">Discount</span>
                  <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div class="text-neutral-600 my-3 group-open:animate-fadeIn">

                  <!-- <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
  <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"> -->

                  <ul class="list-none mt-2 max-h-52 pl-2 overflow-auto">
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`price-check-1000`" :name="`price-check-1000`" type="checkbox"
                          @change="FilterCombination()" :value="'20'" v-model="checkedDiscount"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`price-check-1000`" class="pl-3">upto 20%</label>
                      </div>
                    </li>
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`price-check-1000`" :name="`price-check-1000`" type="checkbox"
                          @change="FilterCombination()" :value="'30'" v-model="checkedDiscount"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`price-check-1000`" class="pl-3">upto 40%</label>
                      </div>
                    </li>
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`price-check-1000`" :name="`price-check-1000`" type="checkbox"
                          @change="FilterCombination()" :value="'40'" v-model="checkedDiscount"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`price-check-1000`" class="pl-3">upto 60%</label>
                      </div>
                    </li>
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`price-check-1000`" :name="`price-check-1000`" type="checkbox"
                          @change="FilterCombination()" :value="'50'" v-model="checkedDiscount"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`price-check-1000`" class="pl-3">upto 80%</label>
                      </div>
                    </li>
                    <li class="ms-0">
                      <div class="flex h-6 items-center group/check">
                        <input :id="`price-check-1000`" :name="`price-check-1000`" type="checkbox"
                          @change="FilterCombination()" :value="'60'" v-model="checkedDiscount"
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`price-check-1000`" class="pl-3">upto 100%</label>
                      </div>
                    </li>

                  </ul>
                </div>
              </details>
            </div>
          </div>
          <div class="bg-white mt-auto fixed bottom-0 left-0 w-full md:hidden z-[998]">
            <div class="flex">
              <button type="button" class="text-base w-full font-medium p-3 border-t" @click="toggleMobileFilter">
                Close
              </button>
              <button type="button"
                class="w-full border border-transparent bg-yellow-300 text-yellow-900 px-6 py-3 text-base font-bold shadow-md hover:bg-yellow-400 hover:bg-yellow-1000 hover:shadow-lg hover:no-underline"
                @click="toggleMobileFilter">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-9 md:col-span-8">

        <section v-if="filterDataUpdate && !isMobile" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ updatedItemsFiltersData.length }} items</span>
            <div v-if="updatedItemsFiltersData.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 border-t' : 'flex', isMobile ? (!mobile_app_info ? 'pb-[120px]' : 'pb-[66px]') : 'pb-0']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <!-- <option>A-Z</option>
                  <option>Z-A</option> -->
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
          <div v-if="allItemCombinedFillter.length > 0">
            <div class="flex items-center mb-4">
              <div v-for="(chip, index) in allItemCombinedFillter" :key="index"
                class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-gray-800 bg-gray-50 border border-gray-600">
                <div class="text-xs font-normal leading-none max-w-full flex-initial">
                  {{ chip }}
                </div>
                <div class="flex flex-auto flex-row-reverse">
                  <div @click="removeFilter(chip)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="cursor-pointer hover:text-red-400 rounded-full w-4 h-4 ml-2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="updatedItemsFiltersData.length > 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of updatedItemsFiltersData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <div class="center">
              <div class="flex flex-wrap my-6 justify-end">
                <a href="#"
                  class="flex-initial px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md"
                  :class="{ 'opacity-50 cursor-not-allowed pointer-events-none': pageNo === 0 }"
                  @click.prevent="pageNo > 0 && prevPage()">
                  ❮❮ Prev
                </a>
                <a v-for="page in visiblePages" :key="page" href="#" :class="[
                  page === pageNo + 1 ? 'bg-gray-800 text-white font-bold cursor-not-allowed' : 'text-gray-600',
                  page === '...' ? 'cursor-not-allowed text-gray-400' : '',
                  'flex-initial px-3 py-2 border-2 border-transparent rounded-md',
                  'hover:no-underline hover:text-gray-800 hover:bg-gray-100',
                  'transition duration-300 ease-in-out'
                ]" @click.prevent="page !== '...' && page !== pageNo + 1 && goToPage(page)">
                  {{ page }}
                </a>
                <a href="#"
                  class="flex-initial px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md"
                  :class="{ 'opacity-50 cursor-not-allowed pointer-events-none': pageNo === totalPages - 1 }"
                  @click.prevent="pageNo < totalPages - 1 && nextPage()">
                  Next ❯❯
                </a>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="text-center">
              <p class="text-xl font-bold text-gray-400">No more items found!</p>
            </div>
          </div>
        </section>
        <section v-else-if="filterDataUpdate && isMobile" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ updatedItemsMobileFiltersData.length }} items</span>
            <div v-if="updatedItemsMobileFiltersData.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 border-t' : 'flex', isMobile ? (!mobile_app_info ? 'pb-[120px]' : 'pb-[66px]') : 'pb-0']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortMobileItem"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option disabled>Default</option>
                <option>Newest</option>
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
          <div v-if="allItemCombinedFillter.length > 0">
            <div class="flex items-center mb-4">
              <div v-for="(chip, index) in allItemCombinedFillter" :key="index"
                class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-gray-800 bg-gray-50 border border-gray-600">
                <div class="text-xs font-normal leading-none max-w-full flex-initial">
                  {{ chip }}
                </div>
                <div class="flex flex-auto flex-row-reverse">
                  <div @click="removeFilter(chip)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="cursor-pointer hover:text-red-400 rounded-full w-4 h-4 ml-2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="updatedItemsMobileFiltersData.length > 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of updatedItemsMobileFiltersData" :key="x" :item="x" :brand="x.brand">
              </ItemComponent>
            </div>
            <div v-if="visiblePages.length > pageNo + 1" class="mt-6 flex justify-center">
              <button @click="loadMore"
                class="text-gray-900 border border-sm  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
                View more items
              </button>
            </div>
          </div>
          <div v-else>
            <div class="text-center">
              <p class="text-xl font-bold text-gray-400">No more items found!</p>
            </div>
          </div>
        </section>

        <section v-else-if="priceUpated && !isMobile" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ updatedPriceFiltersData.length }} items</span>
            <div v-if="updatedPriceFiltersData.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 border-t' : 'flex', isMobile ? (!mobile_app_info ? 'pb-[120px]' : 'pb-[66px]') : 'pb-0']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <!-- <option>A-Z</option>
                  <option>Z-A</option> -->
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
          <div v-if="updatedPriceFiltersData.length != 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of updatedPriceFiltersData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <!-- new pagination -->
            <div class="center">
              <div class="flex flex-wrap my-6 justify-end">
                <a href="#"
                  class="flex-initial px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md"
                  :class="{ 'opacity-50 cursor-not-allowed pointer-events-none': pageNo === 0 }"
                  @click.prevent="pageNo > 0 && prevPage()">
                  ❮❮ Prev
                </a>
                <a v-for="page in visiblePages" :key="page" href="#" :class="[
                  page === pageNo + 1 ? 'bg-gray-800 text-white font-bold cursor-not-allowed' : 'text-gray-600',
                  page === '...' ? 'cursor-not-allowed text-gray-400' : '',
                  'flex-initial px-3 py-2 border-2 border-transparent rounded-md',
                  'hover:no-underline hover:text-gray-800 hover:bg-gray-100',
                  'transition duration-300 ease-in-out'
                ]" @click.prevent="page !== '...' && page !== pageNo + 1 && goToPage(page)">
                  {{ page }}
                </a>
                <a href="#"
                  class="flex-initial px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md"
                  :class="{ 'opacity-50 cursor-not-allowed pointer-events-none': pageNo === totalPages - 1 }"
                  @click.prevent="pageNo < totalPages - 1 && nextPage()">
                  Next ❯❯
                </a>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="text-center">
              <p class="text-xl font-bold text-gray-400">No more items found!</p>
            </div>
          </div>
        </section>
        <section v-else-if="priceUpated && isMobile" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ updatedMobilePriceFiltersData.length }} items</span>
            <div v-if="updatedMobilePriceFiltersData.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 border-t' : 'flex', isMobile ? (!mobile_app_info ? 'pb-[120px]' : 'pb-[66px]') : 'pb-0']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortMobileItem"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option disabled>Default</option>
                <option>Newest</option>
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
          <div v-if="updatedMobilePriceFiltersData.length != 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of updatedMobilePriceFiltersData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <!-- new pagination -->
            <div v-if="visiblePages.length > pageNo + 1" class="mt-6 flex justify-center">
              <button @click="loadMore"
                class="text-gray-900 border border-sm  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
                View more items
              </button>
            </div>
          </div>
          <div v-else>
            <div class="text-center">
              <p class="text-xl font-bold text-gray-400">No more items found!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <ItemBottomComponent />
  </div>
</template>

<script setup lang="ts">
import { ItemComponent, BannerComponent, ItemBottomComponent } from '../../components/user/index'
import { onMounted, ref, watch, computed, watchEffect, onBeforeUnmount, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGetBrand } from '../../api/user/home'
import { BreadCrumComponent } from '../../components/user/index'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const route = useRoute()

const product = computed(() => {
  return {
    name: route?.params?.price !== undefined ? `${route?.params?.price}` : 'Best Offers',
    subname: '',
    href: route?.fullPath,
    breadcrumbs: [
      { id: 1, name: 'Home', href: '#' },
      { id: 2, name: route.name, href: '#' }
    ]
  }
});

const price = ref('')
const priceUpated = computed(() => (price.value != '' ? true : false))
const shortItem = ref('Newest')
const shortMobileItem = ref('Default')
const pageNo = ref(0)
const itemId = ref('00000000-0000-0000-0000-000000000000')
const categoryTypeId = ref('2')
// const totalPages = 6;
const totalPages = ref(0)
const less1 = ref(false);
const less6 = ref(false);
const great6 = ref(false);

const isMobile = ref(false);
const mobFilter = ref(false);
const mobSorting = ref(false);

const checkedBrand = ref<any[]>([]);
const checkedAge = ref([]);
const checkedPrice = ref([]);
const checkedDiscount = ref([]);
const allItemCombinedFillter = ref<any[]>([]);
const brandName = ref<any[]>([]);
const is_mobile_app_info = ref(false);
const allFetchedFilterItems = ref<any[]>([]);
const allFetchedItems = ref<any[]>([]);
const isLoadMore = ref(false)

const filterDataUpdate = computed(() => {
  return ((checkedAge.value.length > 0) || (checkedBrand.value.length > 0) || (checkedPrice.value.length > 0) || (checkedDiscount.value.length > 0)) ? true : false;
})

const isMobileScreenSize = computed(() => {
  return window.innerWidth < 768;
});
const toggleMobileFilter = () => {
  mobFilter.value = !mobFilter.value;
  document.body.classList.toggle('overflow-hidden');
};
const toggleMobileSorting = () => {
  mobSorting.value = !mobSorting.value;
  updateMobileAppInfo();
};

//fetch branddata
const { result: brandsData } = useGetBrand()

//fetch itemcount
const { result: itemsByCount, refetch: refetchItemsByCount } = useQuery(
  computed(() => {
    return gql`
      query  GetItemsByPageCount{
        itemsByPageCount(id: "${itemId.value}", amount: "${price.value}", less1: ${less1.value}, less6: ${less6.value}, greater6: ${great6.value} categorytypeid: "${categoryTypeId.value}",  name: "price")
      }
     `
  })
)

//fetch filteritemcount
const { result: filterItemsByCount, refetch: refetchFilterItemsByCount } = useQuery(
  computed(() => {
    return gql`
      query  GetItemsByFilterPageCount{
        itemsByFilterPageCount(brandids:${JSON.stringify(checkedBrand.value)},ages: ${JSON.stringify(checkedAge.value)},
                   prices: ${JSON.stringify(checkedPrice.value)},discounts: ${JSON.stringify(checkedDiscount.value)})
      }
     `
  })
)

//fetch itemfilterdata
const { result: itemsByFilter, refetch: refetchItemsByFilter } = useQuery(computed(() => {
  return gql`
    query{
    itemsByFilters(brandids:${JSON.stringify(checkedBrand.value)},ages: ${JSON.stringify(checkedAge.value)},
                   prices: ${JSON.stringify(checkedPrice.value)},discounts: ${JSON.stringify(checkedDiscount.value)},
                   page:${pageNo.value} )
    {
      id,
        name,
        description,
        imagePath,
        material,
        amount,
        offer,
        mrp,
        fit,
        createdOn,
        brand {
        id,
        name
        }
        feedbacks{
          rating
        }
        itemAvailables {
        id,
        totalCount
        }
    }
  }`
}))

//fetch itempricedata
const { result: itemsByPrice, refetch: refetchItemsByPrice } = useQuery(
  computed(() => {
    return gql`
    query  GetItemsByPrice{
      itemsByPrice(amount: "${price.value}", page: ${pageNo.value}) {
        id,
        name,
        description,
        imagePath,
        material
        amount,
        offer,
        mrp,
        fit,
        createdOn,
        brand {
        id,
        name
        }
        feedbacks{
          rating
        }
        itemAvailables {
          id,
          totalCount
        }
      }
    }
  `
  })
)

watchEffect(() => {
  let newItems = [...(itemsByFilter.value?.itemsByFilters || [])];
  let itemFilter = [...(itemsByPrice.value?.itemsByPrice || [])];

  if(!isLoadMore.value) {
    allFetchedFilterItems.value = []
    allFetchedItems.value = []
  }

  if (Array.isArray(newItems) && newItems.length > 0) {
    const existingIds = new Set(allFetchedFilterItems.value.map(item => item.id));
    const uniqueItems = newItems.filter(item => !existingIds.has(item.id));
    allFetchedFilterItems.value.push(...uniqueItems);
  }
  if (Array.isArray(itemFilter) && itemFilter.length > 0) {
    const existingIds = new Set(allFetchedItems.value.map(item => item.id));
    const uniqueItems = itemFilter.filter(item => !existingIds.has(item.id));
    allFetchedItems.value.push(...uniqueItems);
  }
});

const updatedItemsFiltersData = computed(() => {
  let itemFilter = [...(itemsByFilter.value?.itemsByFilters || [])];
  switch (shortItem.value) {
    case "Price: Low-High":
      itemFilter.sort((a, b) => a.amount - b.amount);
      break;
    case "Price: High-Low":
      itemFilter.sort((a, b) => b.amount - a.amount);
      break;
    default:
      itemFilter.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      break;
  }
  return [...itemFilter];
})

const updatedPriceFiltersData = computed(() => {
  let itemFilter = [...(itemsByPrice.value?.itemsByPrice || [])];
  switch (shortItem.value) {
    case "Price: Low-High":
      itemFilter.sort((a, b) => a.amount - b.amount);
      break;
    case "Price: High-Low":
      itemFilter.sort((a, b) => b.amount - a.amount);
      break;
    default:
      itemFilter.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      break;
  }
  return [...itemFilter];
})

const updatedItemsMobileFiltersData = computed(() => {
  let sortedData = [...allFetchedFilterItems.value];
  switch (shortMobileItem.value) {
    case "Price: Low-High":
      sortedData.sort((a, b) => a.amount - b.amount);
      break;
    case "Price: High-Low":
      sortedData.sort((a, b) => b.amount - a.amount);
      break;
    case "Newest":
      sortedData.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      break;
    default:
      sortedData
      break;
  }
  return sortedData;
});

const updatedMobilePriceFiltersData = computed(() => {
  let itemFilter = [...allFetchedItems.value];
  switch (shortMobileItem.value) {
    case "Price: Low-High":
      itemFilter.sort((a, b) => a.amount - b.amount);
      break;
    case "Price: High-Low":
      itemFilter.sort((a, b) => b.amount - a.amount);
      break;
    case "Newest":
      itemFilter.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      break;
    default:
      itemFilter
      break;
  }
  return [...itemFilter];
})

watchEffect(() => {
  if (!filterDataUpdate.value && itemsByCount?.value?.itemsByPageCount) {
    const count = itemsByCount?.value?.itemsByPageCount || 0;
    totalPages.value = Math.ceil(count / 20);
  }
  else if (filterDataUpdate.value && filterItemsByCount?.value?.itemsByFilterPageCount) {
    const count = filterItemsByCount?.value?.itemsByFilterPageCount || 0;
    totalPages.value = Math.ceil(count / 20);
  }
});

const visiblePages = computed(() => {
  let pages = [];
  const currentPage = pageNo.value + 1;

  if (totalPages.value <= 9) {
    pages = Array.from({ length: totalPages.value }, (_, i) => i + 1);
  } else {
    if (currentPage <= 4) {
      pages = [1, 2, 3, 4, 5, "...", totalPages.value];
    } else if (currentPage >= 4 && currentPage <= 10) {
      pages = [1, "...", 5, 6, 7, 8, 9, 10, "...", totalPages.value];
    } else if (currentPage >= totalPages.value - 3) {
      pages = [1, "...", totalPages.value - 5, totalPages.value - 4, totalPages.value - 3, totalPages.value - 2, totalPages.value - 1, totalPages.value];
    } else {
      pages = [1, "...", currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, "...", totalPages.value];
    }
  }
  return pages;
});

onMounted(() => {
  price.value = route.params.price as string
  refetchItemsByPrice()
  refetchItemsByCount()
  updateMobileAppInfo();
  if (isMobileScreenSize.value) {
    isMobile.value = true;
  }
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
})

const updateMobileAppInfo = () => {
  let data = sessionStorage.getItem("mobile_app_info");
  is_mobile_app_info.value = data === "true" ? true : false;
};

const mobile_app_info = computed(() => is_mobile_app_info.value);

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});

const FilterBrand = (data: any) => {
  pageNo.value = 0
  isLoadMore.value = false
  const brandId = data.id;
  const brandNameValue = data.name;
  const index = brandName.value.indexOf(brandNameValue);
  console.log(index)
  if (index === -1) {
    brandName.value.push(brandNameValue);
    checkedBrand.value.push(brandId);
  } else {
    brandName.value.splice(index, 1);
    checkedBrand.value.splice(index, 1);
  }
  allItemCombinedFillter.value = [
    ...brandName.value,
    ...checkedAge.value,
    ...checkedPrice.value,
    ...checkedDiscount.value
  ];
  document.getElementById('itemsSection')?.scrollIntoView({ behavior: 'smooth' });
};

const FilterCombination = () => {
  pageNo.value = 0
  isLoadMore.value = false
  refetchItemsByFilter();
  refetchFilterItemsByCount();
  allItemCombinedFillter.value = [
    ...(brandName.value || []),
    ...(checkedAge.value || []),
    ...(checkedPrice.value || []),
    ...(checkedDiscount.value || [])
  ];
  document.getElementById('itemsSection')?.scrollIntoView({ behavior: 'smooth' });
}

const removeFilter = (chip: any) => {
  pageNo.value = 0
  isLoadMore.value = false
  allItemCombinedFillter.value = allItemCombinedFillter.value.filter((item: any) => item !== chip);
  const index = brandName.value.indexOf(chip);
  if (index !== -1) {
    brandName.value.splice(index, 1);
    checkedBrand.value.splice(index, 1);
  }
  checkedAge.value = checkedAge.value.filter((item) => item !== chip);
  checkedPrice.value = checkedPrice.value.filter((item) => item !== chip);
  checkedDiscount.value = checkedDiscount.value.filter((item) => item !== chip);
  document.getElementById('itemsSection')?.scrollIntoView({ behavior: 'smooth' });
};

const ClearFilterCombination = () => {
  pageNo.value = 0
  isLoadMore.value = false
  allItemCombinedFillter.value = [];
  brandName.value = []
  checkedBrand.value = []
  checkedAge.value = []
  checkedPrice.value = []
  checkedDiscount.value = []
  document.getElementById('itemsSection')?.scrollIntoView({ behavior: 'smooth' });
}



const nextPage = () => {
  pageNo.value = pageNo.value + 1
  document.getElementById('itemsSection')?.scrollIntoView({ behavior: 'smooth' });
}
const prevPage = () => {
  pageNo.value = pageNo.value - 1
  document.getElementById('itemsSection')?.scrollIntoView({ behavior: 'smooth' });
}

const goToPage = (page: any) => {
  pageNo.value = page - 1;
  document.getElementById('itemsSection')?.scrollIntoView({ behavior: 'smooth' });
};

const loadMore = () => {
  isLoadMore.value = true
  pageNo.value = pageNo.value + 1
}

</script>

<style>
.center {
  text-align: center;
}
</style>