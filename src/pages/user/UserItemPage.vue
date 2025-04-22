<template>
  <div class="mx-auto w-full 2xl:container bg-white pb-8 px-4">
    <BreadCrumComponent :item="product" />
    <div class="bg-white mb-4 md:mb-10">
      <div class="mx-auto w-full 2xl:container relative rounded-xl overflow-hidden"
        @click="RedirectToItemPage('price', '10')">
        <!-- <img  src="../../assets/banners/7-rupee-sale-preline.in.webp" alt=""
          class="w-full h-full object-cover cursor-pointer" /> -->
        <img :src="`${imageBannerPath}${bannerImage.path}`" alt="" class="w-full h-full object-cover cursor-pointer" />
      </div>
    </div>
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
                          @change="FilterBrand(x)"  :value="x.id" :checked="checkedBrand.includes(x.id)" 
                          class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                        <label :for="`brand-check-${index}`" class="pl-3">{{ x.name }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
            <div class="py-1 px-4 md:px-0">
              <details class="group" :open="true">
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
              <details class="group" :open="true">
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
              <details class="group" :open="true">
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
       
        <section v-if="filterDataUpdate" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ itemsByFilter?.itemsByFilters.length }} items</span>
            <div v-if="itemsByFilter?.itemsByFilters.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortAgeItemList"
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
        <section v-else-if="ageUpdated" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ itemsByAge?.itemsByAge.length }} items</span>
            <div v-if="itemsByAge?.itemsByAge.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortAgeItemList"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <!-- <option>A-Z</option>
                <option>Z-A</option> -->
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>

          <div v-if="itemsByAge?.itemsByAge.length != 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of itemFilterAgeData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
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

        <section v-else-if="categoryTypeUpdated" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ itemsByCategoryType?.itemsByCategoryTypeOffer.length }} items</span>
            <div v-if="itemsByCategoryType?.itemsByCategoryTypeOffer.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortItemList"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <!-- <option>A-Z</option>
                <option>Z-A</option> -->
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>

          <div v-if="itemsByCategoryType?.itemsByCategoryTypeOffer.length != 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of itemFilterData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
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

        <section v-else-if="offerUpdated" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ itemsByOffer?.itemsByOffer.length }} items</span>
            <div v-if="itemsByOffer?.itemsByOffer.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortAgeItemList"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <!-- <option>A-Z</option>
                <option>Z-A</option> -->
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
          <div v-if="itemsByOffer?.itemsByOffer.length != 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of itemFilterAgeData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
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

        <section v-else-if="itemUpdated" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ items?.itemsByPage.length }} items</span>
            <div v-if="items?.itemsByPage.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortItemsFilterList"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <!-- <option>A-Z</option>
                <option>Z-A</option> -->
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
          <div v-if="items?.itemsByPage.length != 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of itemsFilterList" :key="x" :item="x" :brand="x.brand"></ItemComponent>
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

        <section v-else-if="itemTodayOfferUpdated" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ itemsByTodayOffer?.itemsByTodayOffer.length }} items</span>
            <div v-if="itemsByTodayOffer?.itemsByTodayOffer.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortItemsFilterList"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
          <div v-if="updatedItemsByTodayOfferData.length > 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of updatedItemsByTodayOfferData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
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

        <section v-else-if="categoryIdUpdated" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ itemsByCategory?.itemsByCategoryId?.length }} items</span>
            <div v-if="itemsByCategory?.itemsByCategoryId?.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortItemList"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
          <div v-if="updatedItemsByCategoryData.length > 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of updatedItemsByCategoryData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
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

        <section v-else-if="subCategoryTypeUpdated" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ itemsBySubCategoryType?.itemsByCategoryTypeId?.length }} items</span>
            <div v-if="itemsBySubCategoryType?.itemsByCategoryTypeId?.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortItemsSubCategoryFilterList"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
          <div v-if="itemsBySubCategoryType?.itemsByCategoryTypeId?.length != 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of itemsSubCatFilterList" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <!-- <div class="center">
            <div class="flex flex-wrap my-6">
              <a href="#"
                class="flex-initial px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md"
                @click.prevent="prevPage">❮❮ Prev</a>
              <a v-for="page in totalPages" :key="page" href="#"
                :class="[page === pageNo + 1 ? 'border-gray-600 text-gray-800' : '', 'flex-initial px-3 py-2 text-gray-600 border-2 border-transparent hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md']"
                @click.prevent="goToPage(page)">
                {{ page }}
              </a>
              <a href="#"
                class="flex-initial px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md"
                @click.prevent="nextPage">Next ❯❯</a>
            </div>
          </div> -->
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

        <section v-else-if="branIdupated" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ itemsByBrandId?.itemsByBrandId.length }} items</span>
            <div v-if="itemsByBrandId?.itemsByBrandId.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortItemList"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <!-- <option>A-Z</option>
                <option>Z-A</option> -->
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>

          <div v-if="updatedItemsByBrandData.length != 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of updatedItemsByBrandData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
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

        <section v-else-if="priceUpated" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ itemsByPrice?.itemsByPrice.length }} items</span>
            <div v-if="itemsByPrice?.itemsByPrice.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortAgeItemList"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <!-- <option>A-Z</option>
                <option>Z-A</option> -->
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
          <div v-if="itemsByPrice?.itemsByPrice.length != 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 pt-3">
              <ItemComponent v-for="x of itemFilterAgeData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <!-- <div class="md:flex justify-end items-center space-x-4 my-6">
            <button :disabled="pageNo == 0" @click="prevPage"
              class="px-1 py-1 font-medium rounded-full bg-yellow-300 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
            <div class="font-semibold text-center mx-4">{{ pageNo + 1 }}</p>
            <button v-if="itemFilterAgeData.length != 0" @click="nextPage"
              class="px-1 py-1 font-medium rounded-full bg-yellow-300 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div> -->

            <!-- old pagination -->
            <!-- <div class="center">
            <div class="flex flex-wrap my-6">
              <a href="#"
                class="flex-initial px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md"
                @click.prevent="prevPage">❮❮ Prev</a>
              <a v-for="page in totalPages" :key="page" href="#"
                :class="[page === pageNo + 1 ? 'border-gray-600 text-gray-800' : '', 'flex-initial px-3 py-2 text-gray-600 border-2 border-transparent hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md']"
                @click.prevent="goToPage(page)">
                {{ page }}
              </a>
              <a href="#"
                class="flex-initial px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md"
                @click.prevent="nextPage">Next ❯❯</a>
            </div>
          </div> -->

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

        <section v-else-if="rentalItemUpdated" class="relative">
          <div class="md:flex justify-between items-center mb-3">
            <span class="font-semibold">Showing {{ rentalitems?.itemsByRental.length }} items</span>
            <div v-if="rentalitems?.itemsByRental.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortItemsRentalFilterList"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <!-- <option>A-Z</option>
                <option>Z-A</option> -->
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>
          <div v-if="rentalitems?.itemsByRental.length != 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
              <ItemComponent v-for="x of itemsFilterRentalList" :key="x" :item="x" :brand="x.brand"></ItemComponent>
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

        <section v-else-if="bestItemSellingUpdated" class="relative md:pl-4">
          <div class="md:flex justify-between items-center mb-6">
            <span class="font-semibold">Showing {{ bestSellingItems?.itemsByBestSelling.length }} items</span>
            <div v-if="bestSellingItems?.itemsByBestSelling.length != 0" class="md:flex items-center"
              :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' : 'flex']">
              <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
              <select v-model="shortItem" @change="sortItemsFilterList"
                class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                <option>Newest</option>
                <option>Price: Low-High</option>
                <option>Price: High-Low</option>
              </select>
            </div>
          </div>

          <div v-if="updatedItemsByBestSellData.length != 0">
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
               <ItemComponent v-for="x of updatedItemsByBestSellData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
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
      </div>
    </div>

    <!-- <div class="bg-white py-24">
      <div class="mx-auto w-full 2xl:container grid grid-cols-2 gap-8">
        <img @click="RedirectToItemPage('category', null)" src="../../assets/banners/offer-4.jpeg" alt="" />
        <img @click="RedirectToItemPage('category', null)" src="../../assets/banners/offer-5.jpeg" alt="" />
      </div>
    </div> -->
    <div class="bg-white py-10 md:py-24">
      <div class="mx-auto w-full 2xl:container px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <img @click="RedirectToItemPage('offer', '75')" src="../../assets/banners/offer-1.png" alt=""
            class="rounded-lg" />
          <img @click="RedirectToItemPage('offer', '75')" src="../../assets/banners/offer-2.png" alt=""
            class="rounded-lg" />
          <img @click="RedirectToItemPage('offer', '75')" src="../../assets/banners/offer-3.png" alt=""
            class="rounded-lg" />
          <img @click="RedirectToItemPage('category', '0125624d-66bb-4a75-8096-7110ab485c7d')"
            src="../../assets/banners/offer-4.jpeg" alt="" class="rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ItemComponent } from '../../components/user/index'
import {
  //useGetItemByCategory,
  //useGetItemByBrand,
  useGetItems,
  // useGetProductByPrice,
  useGetItemByOffer,
  useGetItemByCategoryType,
  //useGetItemByAge
} from '../../api/user/item'
import { onMounted, ref, watch, computed, watchEffect, onBeforeUnmount, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGetBrand } from '../../api/user/home'
import { BreadCrumComponent } from '../../components/user/index'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { GetImageByTrending } from '../../api/user/trending'
import { imageBannerPath } from '../../constant/commonPath'

const route = useRoute()
const router = useRouter()
const type = ref(route.query.type as string)
const rerender = ref('')
const currentTime = ref()
const breadcrumDetails = ref(['Item', route.query.type])
console.log('category', route.query);
const product = computed(() => {
  return {
    name: route?.query?.name !== undefined ? `${route?.query?.name?.charAt(0).toUpperCase()}${route?.query?.name?.slice(1)}` : 'Best Offers',
    subname: '',
    href: route?.fullPath,
    breadcrumbs: [
      { id: 1, name: 'Home', href: '#' },
      // { id: 2, name: route.query.type, href: '#' }
    ]
  }
});
const brandId = ref('')
const branIdupated = computed(() => (brandId.value != '' ? true : false))
const age = ref('0')
const ageUpdated = computed(() => ((age.value !== '' && age.value !== '0') ? true : false))
const categoryId = ref('0')
const categoryIdUpdated = computed(() => ((categoryId.value != '' && categoryId.value !== '0') ? true : false))
const offer = ref('')
const offerUpdated = computed(() => (offer.value != '' ? true : false))
const categoryType = ref('')
const categoryTypeUpdated = computed(() => (categoryType.value !== '' ? true : false))
const subCategoryType = ref('')
const subCategoryTypeUpdated = computed(() => (subCategoryType.value !== '' ? true : false))
const item = ref('')
const itemUpdated = computed(() => (item.value != '' ? true : false))
const rental = ref()
const rentalItemUpdated = computed(() => (rental.value != '' ? true : false))
const itemTodayOffer = ref('')
const itemTodayOfferUpdated = computed(() => (itemTodayOffer.value != '' ? true : false))
const bestselling = ref('')
const bestItemSellingUpdated = computed(() => (bestselling.value != '' ? true : false))
const price = ref('')
const priceUpated = computed(() => (price.value != '' ? true : false))
const itemFilterData = ref<any[]>([])
const itemFilterAgeData = ref<any[]>([])
const itemsFilterList = ref<any[]>([])
const itemsSubCatFilterList = ref<any[]>([])
const itemsFilterRentalList = ref<any[]>([])
const shortItem = ref('Newest')
const pageNo = ref(0)
const itemId = ref('00000000-0000-0000-0000-000000000000')
const itemAmount = ref('0')
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

const filterDataUpdate = computed(() => {
   return ((checkedAge.value.length > 0) || (checkedBrand.value.length > 0) || (checkedPrice.value.length > 0) || (checkedDiscount.value.length > 0)) ? true : false;
})

const updatedcheckedBrand = computed(() => checkedBrand.value);



const isMobileScreenSize = computed(() => {
  return window.innerWidth < 768;
});
const toggleMobileFilter = () => {
  mobFilter.value = !mobFilter.value;
  document.body.classList.toggle('overflow-hidden');
};
const toggleMobileSorting = () => {
  mobSorting.value = !mobSorting.value;
};
// const totalPages = computed(() => Math.ceil(50 / 20));
// console.log(totalPages)


//const { result: itemsByAge, refetch: refetchItemsByAge } =  useGetItemByAge((route.query?.age !== null && route.query?.age <= '1' )?true:false, false, true, '2', 1);
//const { result: itemsByPrice, refetch: refetchItemsByPrice } = useGetProductByPrice('100', 1)
// const { result: itemsByCategory, refetch: refetchItemsByCategory } = useGetItemByCategory(
//   `"${route.query.categoryid}"`,
//   0
// )
//const { result: itemsByBrandId, refetch: refetchItemsByBrandId } =  useGetItemByBrand(route.query.brandid, 1);
//const { result: itemsByOffer, refetch: refetchItemsByOffer } = useGetItemByOffer('70', 1)
const { result: bannerResult, refetch: refetchBanner } = GetImageByTrending();
const bannerImage = computed(() => {
  return bannerResult.value?.imagesByTrending?.[0] || null;
});

const { result: itemsByCategoryType, refetch: refetchItemsByCategoryType } =
  useGetItemByCategoryType('2', '500', 1)
//const { result: items, refetch: refetchItems } = useGetItems(1)

//fetch itemcount
const { result: itemsByCount, refetch: refetchItemsByCount } = useQuery(
  computed(() => {
    return gql`
    query  GetItemsByPageCount{
      itemsByPageCount(id: "${itemId.value}", amount: "${itemAmount.value}", less1: ${less1.value}, less6: ${less6.value}, greater6: ${great6.value} categorytypeid: "${categoryTypeId.value}",  name: "${type.value}")
    }
   `
  })
)

const { result: itemsByBrandId, refetch: refetchItemsByBrandId } = useQuery(
  computed(() => {
    return gql`
  query  GetItemsByBrandId{
    itemsByBrandId(brandid: "${brandId.value}", page: ${pageNo.value}) {
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
  }
`
  })
)

watchEffect(() => {
  if (parseInt(age.value) > 0 && parseInt(age.value) < 4) {
    less1.value = true;
    less6.value = great6.value = false;
  } else if (parseInt(age.value) > 4 && parseInt(age.value) < 6) {
    less6.value = true;
    less1.value = great6.value = false;
  } else if (parseInt(age.value) > 6) {
    great6.value = true;
    less1.value = less6.value = false;
  }
});

const { result: itemsByAge, refetch: refetchItemsByAge } = useQuery(
  computed(() => {

    // let less1=false;
    // let less6=false;
    // let great6=false;
    // if(parseInt(age.value) > 0 && parseInt(age.value) < 4){
    //   less1 = true;
    //       less6.value = great6.value = false;
    // }else if(parseInt(age.value) > 4 && parseInt(age.value) < 6){
    //   less6.value = true;
    //       less1.value = great6.value = false;
    // }else if(parseInt(age.value) > 6){
    //   great6.value = true;
    //       less1.value = less6.value = false;
    // }
    return gql`
  query  ItemsByAge{
    itemsByAge(less1: ${less1.value}, less6: ${less6.value}, greater6: ${great6.value} categorytypeid: "${categoryTypeId.value}", page: ${pageNo.value}) {
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

const { result: itemsByCategory, refetch: refetchItemsByCategory } = useQuery(
  computed(() => {
    return gql`
  query  GetItemsByCategoryId{
    itemsByCategoryId(categoryid: "${categoryId.value}", page: ${pageNo.value}) {
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
  }
`
  })
)

// const { result: itemData } = useGetItems(1)
// const { result: itemByPrice, refetch: refetchData } =  useGetProductByPrice('100', 1);
// const { result: itemByCategory, refetch: refetchitemByCategory } = useGetItemByCategory(
//   '8ebf090e-7374-448e-b7a8-4faab8da83bd',
//   1
// )
// const { result: itemByBrand, refetch: refetchItemByBrand } = useGetItemByBrand(
//   '650a9d48-09dd-40a0-af0d-d2dd6f5d7471',
//   1
// )

// const { result: itemByOffer, refetch: refetchItemByOffer } = useGetItemByOffer(
//   '70',
//   1
// )

// const { result: itemByCategoryType, refetch: refetchItemByCategoryType } = useGetItemByCategoryType('2','500',1);

// const { result: itemByAge, refetch: refetchItemByAge } = useGetItemByAge(false,false,true,'2',1);

const { result: itemsByOffer, refetch: refetchItemsByOffer } = useQuery(
  computed(() => {
    return gql`
  query  GetItemsByOffer{
    itemsByOffer(offer: "${offer.value}", page: ${pageNo.value}) {
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


const { result: items, refetch: refetchItems } = useQuery(
  computed(() => {
    return gql`
  query GetProduct {
    itemsByPage(page: ${pageNo.value}) {
      id
      name
      description
      imagePath
      material
      amount
      offer
      mrp
      fit
      createdOn
      brand {
        id
        name
      }
      feedbacks {
        rating
      }
      itemAvailables {
        id
        totalCount
      }
    }
  }
`
  })
)

const { result: bestSellingItems, refetch: refetchBestItems } = useQuery(
  computed(() => {
    return gql`
  query GetBestSellingProduct {
    itemsByBestSelling(page: ${pageNo.value}) {
      id
      name
      description
      imagePath
      material
      amount
      offer
      mrp
      fit
      createdOn
      viewCount
      brand {
        id
        name
      }
      feedbacks {
        rating
      }
      itemAvailables {
        id
        totalCount
      }
    }
  }
`
  })
)

const { result: rentalitems, refetch: refetchRentalItems } = useQuery(
  computed(() => {
    return gql`
  query GetItemsByRental {
    itemsByRental(page: ${pageNo.value}) {
      id
      name
      description
      imagePath
      material
      amount
      offer
      mrp
      fit
      createdOn
      isRental
      brand {
        id
        name
      }
      feedbacks {
        rating
      }
      itemAvailables {
        id
        totalCount
      }
    }
  }
`
  })
)

const { result: itemsByTodayOffer, refetch: refetchItemsByTodayOffer } = useQuery(
  computed(() => {
    return gql`
  query GetItemsByTodayOffer {
    itemsByTodayOffer(page: ${pageNo.value}) {
      id
      name
      description
      imagePath
      material
      amount
      offer
      mrp
      fit
      createdOn
      brand {
        id
        name
      }
      feedbacks {
        rating
      }
      itemAvailables {
        id
        totalCount
      }
    }
  }
`
  })
)

const { result: itemsByFilter, refetch: refetchItemsByFilter } = useQuery(computed(() => {
  console.log('aaaaa', JSON.stringify(updatedcheckedBrand.value));
  return gql`
  query{
  itemsByFilters(brandids:${JSON.stringify(checkedBrand.value)},ages: ${JSON.stringify(checkedAge.value)},
                 prices: ${JSON.stringify(checkedPrice.value)},discounts: ${JSON.stringify(checkedDiscount.value)},
                 page:0 )
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

const updatedItemsFiltersData = computed(() => {
 let itemFilterAgeData = [...(itemsByFilter.value?.itemsByFilters  || [])];
    itemFilterAgeData.sort((a: any, b: any) => {
      const dateA = new Date(a.createdOn);
      const dateB = new Date(b.createdOn);
      return dateB.getTime() - dateA.getTime();
    });
    return [...itemFilterAgeData];
})

const updatedItemsByBrandData = computed(() => {
  let itemFilter = [...(itemsByBrandId.value?.itemsByBrandId || [])];
  itemFilter.sort((a: any, b: any) => {
      const dateA = new Date(a.createdOn);
      const dateB = new Date(b.createdOn);
      return dateB.getTime() - dateA.getTime();
    });
    return [...itemFilter];
})

const updatedItemsByCategoryData = computed(() => {
  let itemFilter = [...(itemsByCategory.value?.itemsByCategoryId || [])];
  itemFilter.sort((a: any, b: any) => {
      const dateA = new Date(a.createdOn);
      const dateB = new Date(b.createdOn);
      return dateB.getTime() - dateA.getTime();
    });
    return [...itemFilter];
})


watch([itemsByBrandId, itemsByCategory], () => {
  if (itemsByBrandId.value) {
    // itemFilterData.value = [...(itemsByBrandId.value?.itemsByBrandId || [])];
    // itemFilterData.value.sort((a: any, b: any) => {
    //   const dateA = new Date(a.createdOn);
    //   const dateB = new Date(b.createdOn);
    //   return dateB.getTime() - dateA.getTime();
    // });
    // itemFilterData.value = [...itemFilterData.value];
  }
  if (itemsByCategory.value) {
    // itemFilterData.value = [...(itemsByCategory.value?.itemsByCategoryId || [])];
    // itemFilterData.value.sort((a: any, b: any) => {
    //   const dateA = new Date(a.createdOn);
    //   const dateB = new Date(b.createdOn);
    //   return dateB.getTime() - dateA.getTime();
    // });
    // itemFilterData.value = [...itemFilterData.value];
  }

});



watch([itemsByAge, itemsByOffer, itemsByPrice], () => {
  if (itemsByAge.value) {
    itemFilterAgeData.value = [...(itemsByAge.value?.itemsByAge || [])];
    itemFilterAgeData.value.sort((a: any, b: any) => {
      const dateA = new Date(a.createdOn);
      const dateB = new Date(b.createdOn);
      return dateB.getTime() - dateA.getTime();
    });
    itemFilterAgeData.value = [...itemFilterAgeData.value];
  }
  if (itemsByOffer.value) {
    // itemFilterAgeData.value = [...(itemsByOffer.value.itemsByOffer || [])];
    // itemFilterAgeData.value.sort((a: any, b: any) => {
    //   const dateA = new Date(a.createdOn);
    //   const dateB = new Date(b.createdOn);
    //   return dateB.getTime() - dateA.getTime();
    // });
    // itemFilterAgeData.value = [...itemFilterAgeData.value];
    itemFilterAgeData.value = itemsByOffer.value?.itemsByOffer;
  }

  if (itemsByPrice.value) {
    // itemFilterAgeData.value = [...(itemsByPrice.value.itemsByPrice || [])];
    // itemFilterAgeData.value.sort((a: any, b: any) => {
    //   const dateA = new Date(a.createdOn);
    //   const dateB = new Date(b.createdOn);
    //   return dateB.getTime() - dateA.getTime();
    // });
    // itemFilterAgeData.value = [...itemFilterAgeData.value];
    itemFilterAgeData.value = itemsByPrice.value?.itemsByPrice;
  }
  // if(itemsByFilter.value){
  //   itemFilterAgeData.value = itemsByFilter.value?.itemsByFilter;
  // }
})

const updatedItemsByTodayOfferData = computed(() => {
  let itemFilter = [...(itemsByTodayOffer.value?.itemsByTodayOffer || [])];
  itemFilter.sort((a: any, b: any) => {
      const dateA = new Date(a.createdOn);
      const dateB = new Date(b.createdOn);
      return dateB.getTime() - dateA.getTime();
    });
    return [...itemFilter];
})


const updatedItemsByBestSellData = computed(() => {
  let itemFilter =[...(bestSellingItems.value?.itemsByBestSelling || [])];
  itemFilter.sort((a: any, b: any) => {
      const dateA = new Date(a.createdOn);
      const dateB = new Date(b.createdOn);
      return dateB.getTime() - dateA.getTime();
    });
    return [...itemFilter];
})
watch([items, itemsByTodayOffer, bestSellingItems], () => {
  if (items.value && type.value == 'page') {
    console.log(items.value)
    itemsFilterList.value = [...(items.value?.itemsByPage || [])];
    itemsFilterList.value.sort((a: any, b: any) => {
      const dateA = new Date(a.createdOn);
      const dateB = new Date(b.createdOn);
      return dateB.getTime() - dateA.getTime();
    });
    itemsFilterList.value = [...itemsFilterList.value];
  }
  else if (itemsByTodayOffer.value && type.value == 'todayoffer') {
    // itemsFilterList.value = [...(itemsByTodayOffer.value?.itemsByTodayOffer || [])];
    // itemsFilterList.value.sort((a: any, b: any) => {
    //   const dateA = new Date(a.createdOn);
    //   const dateB = new Date(b.createdOn);
    //   return dateB.getTime() - dateA.getTime();
    // });
    // itemsFilterList.value = [...itemsFilterList.value];
  }
  // else if (rentalitems.value && type.value == 'rental') {
  //   console.log(rentalitems.value)
  //   itemsFilterRentalList.value = [...(rentalitems.value?.itemsByRental || [])];
  //   itemsFilterRentalList.value.sort((a: any, b: any) => {
  //     const dateA = new Date(a.createdOn);
  //     const dateB = new Date(b.createdOn);
  //     return dateB.getTime() - dateA.getTime();
  //   });
  //   itemsFilterRentalList.value = [...itemsFilterRentalList.value];
  // } 
  else if (bestSellingItems.value && type.value == 'bestselling') {
    
    // itemsFilterList.value = [...(bestSellingItems.value?.itemsByBestSelling || [])];
    // itemsFilterList.value.sort((a: any, b: any) => {
    //   const dateA = new Date(a.createdOn);
    //   const dateB = new Date(b.createdOn);
    //   return dateB.getTime() - dateA.getTime();
    // });
    // itemsFilterList.value = [...itemsFilterList.value];
  }
  // if (itemsByCount.value) {
  //   const count = itemsByCount.value.itemsByPageCount || 0;
  //   totalPages.value = Math.ceil(count / 20);
  // }
})

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

const { result: itemsBySubCategoryType, refetch: refetchItemsBySubCategoryType } = useQuery(
  computed(() => {
    return gql`
  query  GetItemsByCategoryTypeId{
    itemsByCategoryTypeId (categorytypeid: "${subCategoryType.value}", page: ${pageNo.value}) {
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
  }
`
  })
)

watch(itemsBySubCategoryType, () => {
  if (itemsBySubCategoryType.value && type.value != 'newarrival') {
    itemsSubCatFilterList.value = [...(itemsBySubCategoryType.value?.itemsByCategoryTypeId || [])];
    itemsSubCatFilterList.value.sort((a: any, b: any) => {
      const dateA = new Date(a.createdOn);
      const dateB = new Date(b.createdOn);
      return dateB.getTime() - dateA.getTime();
    });
    itemsSubCatFilterList.value = [...itemsSubCatFilterList.value];
  }
  else {
    itemsSubCatFilterList.value = [...(itemsBySubCategoryType.value?.itemsByCategoryTypeId || [])];
    itemsSubCatFilterList.value.sort((a: any, b: any) => {
      const dateA = new Date(a.createdOn);
      const dateB = new Date(b.createdOn);
      return dateA.getDate() - dateB.getDate();
    });
    itemsSubCatFilterList.value = [...itemsSubCatFilterList.value];
  }
})

watchEffect(() => {
  itemsFilterRentalList.value = [...(rentalitems.value?.itemsByRental || [])];
  itemsFilterRentalList.value.sort((a: any, b: any) => {
    const dateA = new Date(a.createdOn);
    const dateB = new Date(b.createdOn);
    return dateB.getTime() - dateA.getTime();
  });

  if (itemsByCount.value) {
    const count = itemsByCount.value.itemsByPageCount || 0;
    totalPages.value = Math.ceil(count / 20);
  }
});

const { result: brandsData } = useGetBrand()
onMounted(() => {
  //alert('')
  itemTodayOffer.value = '';
  if (type.value === 'brand') {
    itemId.value = route.query.brandid as string
    brandId.value = route.query.brandid as string
    age.value = ''
    price.value = ''
    refetchItemsByBrandId()
    refetchItemsByCount()
  }
  if (type.value === 'age') {
    age.value = route.query.age as string
    categoryTypeId.value = route.query.categorytype as string || '2'
    price.value = '';
    brandId.value = '';
    rental.value = ''
    refetchItemsByAge()
    refetchItemsByCount()
  }
  if (type.value === 'price') {
    itemAmount.value = route.query.price as string
    price.value = route.query.price as string
    age.value = '';
    brandId.value = '';
    refetchItemsByPrice()
    refetchItemsByCount()
  }
  if (type.value === 'category') {
    itemId.value = route.query.categoryid as string
    categoryId.value = route.query.categoryid as string
    age.value = ''
    brandId.value = '';
    offer.value = '';
    rental.value = '';
    bestselling.value = '';
    refetchItemsByCategory()
    refetchItemsByCount()
  }
  if (type.value === 'offer') {
    itemAmount.value = route.query.offer as string
    offer.value = route.query.offer as string
    age.value = '';
    brandId.value = '';
    categoryId.value = '';
    rental.value = '';
    bestselling.value = '';
    refetchItemsByOffer()
    refetchItemsByCount()
  }

  if (type.value === 'page') {
    price.value = '';
    //url = `/item?type=${type}&price=${data}`
    age.value = '';
    brandId.value = '';
    offer.value = '';
    //rental.value = '';
    rental.value = ''
    item.value = route.query.page as string;
    bestselling.value = ''
    refetchItems();
    refetchItemsByCount();
  }
  if (type.value === 'bestselling') {
    price.value = '';
    age.value = '';
    brandId.value = '';
    offer.value = '';
    //rental.value = '';
    rental.value = ''
    item.value = '';
    bestselling.value = route.query.page as string;
    refetchBestItems();
    refetchItemsByCount();
  }
  if (type.value === 'categorytype') {
    console.log('cat', route.query.categorytype as string)
    subCategoryType.value = route.query.categorytype as string;
    categoryTypeId.value = route.query.categorytype as string;
    categoryId.value = ''
    age.value = ''
    brandId.value = '';
    offer.value = '';
    rental.value = '';
    bestselling.value = '';
    refetchItemsBySubCategoryType()
    refetchItemsByCount()
  }
  if (type.value === 'newarrival') {
    subCategoryType.value = route.query.categorytype as string;
    categoryTypeId.value = route.query.categorytype as string;
    categoryId.value = ''
    age.value = ''
    brandId.value = '';
    offer.value = '';
    rental.value = '';
    bestselling.value = '';
    refetchItemsBySubCategoryType()
    refetchItemsByCount()
  }
  if (type.value === 'todayoffer') {
    price.value = '';
    age.value = '';
    brandId.value = '';
    offer.value = '';
    rental.value = '';
    bestselling.value = '';
    itemTodayOffer.value = route.query.page as string;
    refetchItemsByTodayOffer();
    refetchItemsByCount();
  }
  if (type.value === 'rental') {
    price.value = '';
    age.value = '';
    brandId.value = '';
    offer.value = '';
    item.value = '';
    itemTodayOffer.value = '';
    rental.value = route.query.page as string;
    bestselling.value = '';
    refetchRentalItems();
    refetchItemsByCount();
  }
  if (isMobileScreenSize.value) {
    isMobile.value = true;
  }
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});

function RedirectToItemPage(types: string, data: any) {
  let url = ''
  rerender.value = data
  type.value = '';
  brandId.value = '';
  age.value = '';
  price.value = '';
  offer.value = '';
  item.value = '';
  categoryId.value = '';
  subCategoryType.value = '';
  itemTodayOffer.value = '';
  rental.value = '';
  bestselling.value = '';
  itemAmount.value = '';
  if (types === 'brand') {
    type.value = types
    brandId.value = data
    refetchItemsByBrandId()
    refetchItemsByCount()
  } else if (types === 'age') {
    type.value = types
    age.value = data
    refetchItemsByAge()
  } else if (types === 'price') {
    type.value = types
    //itemAmount.value = data
    price.value = data
    refetchItemsByPrice();
    url = `/item?type=${types}&price=${data}`;
    router.push(url)
    // refetchItemsByCount();
  } else if (types === 'offer') {
    type.value = types
    //itemAmount.value = data
    offer.value = data;
    refetchItemsByOffer();
    refetchItemsByCount()
  } else if (types === 'page') {
    type.value = types
    item.value = data;
    refetchItems();
    refetchItemsByCount();
  }
  else if (types === 'bestselling') {
    type.value = types
    bestselling.value = data;
    refetchBestItems();
    refetchItemsByCount();
  }
  else if (types === 'category') {
    type.value = types
    categoryId.value = data;
    item.value = data;
    refetchItemsByCategory();
    refetchItemsByCount();
  }
  else if (types === 'categorytype') {
    type.value = types
    item.value = data;
    subCategoryType.value = data;
    refetchItemsBySubCategoryType();
    refetchItemsByCount();
  } else if (types === 'todayoffer') {
    type.value = types
    item.value = data;
    itemTodayOffer.value = data;
    refetchItemsByTodayOffer();
    refetchItemsByCount();
  }
  else if (types === 'rental') {
    type.value = types
    // price.value = '';
    // age.value = '';
    // brandId.value = '';
    // offer.value = '';
    item.value = data;
    // itemTodayOffer.value = '';
    rental.value = data
    refetchRentalItems();
    refetchItemsByCount();
  }
  // router.push(url)
  //location.href=url;
}

const FilterBrand = (data: any) => {
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
};

const FilterCombination = () => {
  console.log('brands', checkedBrand.value);
  console.log('age', checkedAge.value);
  console.log('price', checkedPrice.value);
  console.log('discount', checkedDiscount.value);
  refetchItemsByFilter();
  allItemCombinedFillter.value = [
    ...(brandName.value || []),
    ...(checkedAge.value || []),
    ...(checkedPrice.value || []),
    ...(checkedDiscount.value || [])
  ];
}

const removeFilter = (chip: any) => {
  allItemCombinedFillter.value = allItemCombinedFillter.value.filter((item: any) => item !== chip);
  const index = brandName.value.indexOf(chip);
  if (index !== -1) {
    brandName.value.splice(index, 1);
    checkedBrand.value.splice(index, 1);
  }
  checkedAge.value = checkedAge.value.filter((item) => item !== chip);
  checkedPrice.value = checkedPrice.value.filter((item) => item !== chip);
  checkedDiscount.value = checkedDiscount.value.filter((item) => item !== chip);
};

const ClearFilterCombination = () => {
  allItemCombinedFillter.value = [];
  brandName.value = []
  checkedBrand.value = []
  checkedAge.value = []
  checkedPrice.value = []
  checkedDiscount.value = []
}

watch(
  () => route?.query?.categoryid,
  (newId, oldId) => {
    // react to route changes...
    itemTodayOffer.value = '';
    if (oldId !== newId) {
      categoryId.value = newId as string;
      refetchItemsByCategory();
    }
  }
)

watch([route], () => {
  if (route?.query?.type === 'brand') {
    type.value = route?.query?.type;
    brandId.value = route?.query?.brandid as string;
    age.value = '';
    price.value = '';
    offer.value = '';
    item.value = '';
    categoryId.value = '';
    subCategoryType.value = '';
    itemTodayOffer.value = '';
    rental.value = '';
    bestselling.value = '';
    refetchItemsByBrandId()
    refetchItemsByCount()
  }
  else if (route?.query?.type === 'bestselling') {
    price.value = '';
    age.value = '';
    brandId.value = '';
    offer.value = '';
    //rental.value = '';
    rental.value = ''
    item.value = '';
    bestselling.value = route.query.page as string;
    refetchBestItems();
    refetchItemsByCount();
  }
  else if(route?.query?.type === 'todayoffer'){
    price.value = '';
    age.value = '';
    brandId.value = '';
    offer.value = '';
    rental.value = '';
    bestselling.value = '';
    itemTodayOffer.value = route.query.page as string;
    refetchItemsByTodayOffer();
    refetchItemsByCount();
  }
 
})
const sortItemList = () => {
  const sortedItems = [...itemFilterData.value];

  switch (shortItem.value) {
    case 'Price: Low-High':
      sortedItems.sort((a: any, b: any) => a.amount - b.amount);
      break;
    case 'Price: High-Low':
      sortedItems.sort((a: any, b: any) => b.amount - a.amount);
      break;
    default:
      sortedItems.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      break;
  }
  itemFilterData.value = sortedItems;
};

const sortAgeItemList = () => {
  const sortedItems = [...itemFilterAgeData.value];

  switch (shortItem.value) {
    case 'Price: Low-High':
      sortedItems.sort((a: any, b: any) => a.amount - b.amount);
      break;
    case 'Price: High-Low':
      sortedItems.sort((a: any, b: any) => b.amount - a.amount);
      break;
    default:
      sortedItems.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      break;
  }
  itemFilterAgeData.value = sortedItems;
};

const sortItemsFilterList = () => {
  const sortedItems = [...itemsFilterList.value];
  console.log(sortedItems)

  switch (shortItem.value) {
    case 'Price: Low-High':
      sortedItems.sort((a: any, b: any) => a.amount - b.amount);
      break;
    case 'Price: High-Low':
      sortedItems.sort((a: any, b: any) => b.amount - a.amount);
      break;
    default:
      //sortedItems.sort((a: any, b: any) => new Date(b.createdOn) - new Date(a.createdOn));
      sortedItems.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      break;
  }
  itemsFilterList.value = sortedItems;
};

const sortItemsSubCategoryFilterList = () => {
  const sortedItems = [...itemsSubCatFilterList.value];
  console.log(sortedItems)

  switch (shortItem.value) {
    case 'Price: Low-High':
      sortedItems.sort((a: any, b: any) => a.amount - b.amount);
      break;
    case 'Price: High-Low':
      sortedItems.sort((a: any, b: any) => b.amount - a.amount);
      break;
    default:
      sortedItems.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      break;
  }
  itemsSubCatFilterList.value = sortedItems;
};

const sortItemsRentalFilterList = () => {
  const sortedItems = [...itemsFilterRentalList.value];

  switch (shortItem.value) {
    case 'Price: Low-High':
      sortedItems.sort((a: any, b: any) => a.amount - b.amount);
      break;
    case 'Price: High-Low':
      sortedItems.sort((a: any, b: any) => ((b.mrp * 5) / 100) - ((a.mrp * 5) / 100));
      break;
    default:
      sortedItems.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      break;
  }
  itemsFilterRentalList.value = sortedItems;
};


const nextPage = () => {
  pageNo.value = pageNo.value + 1
  console.log('pageno', pageNo.value)

}
const prevPage = () => {
  pageNo.value = pageNo.value - 1
  console.log('pageno', pageNo.value)

}

const goToPage = (page: any) => {
  pageNo.value = page - 1;
};

</script>

<style>
.center {
  text-align: center;
}
</style>