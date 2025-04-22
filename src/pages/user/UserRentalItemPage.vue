<template>
    <div id="itemsSection" class="mx-auto w-full 2xl:container bg-white pb-8 px-4">
      <BreadCrumComponent :item="breadcrumDetails" />
      <div class="bg-white mb-4 md:mb-10">
        <div class="mx-auto w-full 2xl:container relative rounded-xl overflow-hidden">
          <img @click="RedirectToItemPage('price', '1')" src="../../assets/banners/7-rupee-sale-preline.in.webp" alt=""
            class="w-full h-full object-cover cursor-pointer" />
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
              <button type="button" class="text-base w-full font-medium p-3 border-l border-t" :class="[mobSorting ? 'border-t-white' : '']" @click="toggleMobileSorting">Sort by</button>
            </div>
          </div>
          <div
            class="md:flex flex-col md:py-4 px-4 md:rounded-md md:border md:border-gray-200 md:sticky md:top-4"
            :class="[mobFilter ? 'flex' : 'hidden', isMobile ? 'bg-white fixed top-0 left-0 w-full h-full z-[999] pb-20' :'flex']">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-medium py-3">Filters</h3>
              <a class="cursor-pointer text-xs py-3">Clear all</a>
            </div>
            <div class="w-full grid divide-y divide-neutral-200 max-w-xl mx-auto md:mt-8" :class="[mobFilter ? 'overflow-auto' : '']">
              <div class="py-1">
  
                <details class="group" :open="isMobile">
                  <summary
                    class="flex justify-between items-center font-medium cursor-pointer list-none py-2 text-xs font-medium uppercase py-2 text-xs font-medium uppercase">
                    <span>Brands</span>
                    <span class="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div class="text-neutral-600 mb-4 group-open:animate-fadeIn">
                    <ul class="list-none mt-2 max-h-52 overflow-auto">
                      <li class="ms-0" v-for="(x, index) of brandsData?.brands" :key="x.id">
                        <div class="flex h-6 items-center group/check">
                          <input :id="`brand-check-${index}`" :name="`brand-check-${index}`" type="checkbox"
                            @change="RedirectToItemPage('brand', x.id)"
                            class="h-4 w-4 rounded border-gray-300 text-gray-700 group-hover/check:border-gray-500 focus:ring-gray-600">
                          <label :for="`brand-check-${index}`" class="pl-3">{{ x.name }}</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div class="py-1">
                <details class="group" :open="isMobile">
                  <summary
                    class="flex justify-between items-center font-medium cursor-pointer list-none py-2 text-xs font-medium uppercase">
                    <span>Age</span>
                    <span class="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <ul class="list-none mt-2 mb-3 flex flex-wrap gap-2 px-4">
                      <li class="inline"><a
                          class="w-20 h-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 hover:border-slate-200 hover:no-underline hover:bg-slate-200"
                          @click="RedirectToItemPage('age', 0)">0-6 M</a></li>
                      <li class="inline"><a
                          class="p-2 h-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 hover:border-slate-200 hover:no-underline hover:bg-slate-200"
                          @click="RedirectToItemPage('age', 2)">2-4 Y</a></li>
                      <li class="inline"><a
                          class="p-2 h-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 hover:border-slate-200 hover:no-underline hover:bg-slate-200"
                          @click="RedirectToItemPage('age', 4)">4-6 Y</a></li>
                      <li class="inline"><a
                          class="p-2 h-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 hover:border-slate-200 hover:no-underline hover:bg-slate-200"
                          @click="RedirectToItemPage('age', 6)">6-8 Y</a></li>
                      <li class="inline"><a
                          class="p-2 h-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 hover:border-slate-200 hover:no-underline hover:bg-slate-200"
                          @click="RedirectToItemPage('age', 8)">8+ Y</a></li>
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
              <button type="button" class="w-full border border-transparent bg-yellow-300 text-yellow-900 px-6 py-3 text-base font-bold shadow-md hover:bg-yellow-400 hover:bg-yellow-1000 hover:shadow-lg hover:no-underline" @click="toggleMobileFilter">Apply</button>
            </div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-9 md:col-span-8">
          <section v-if="ageUpdated" class="relative md:pl-4">
            <div class="md:flex justify-between items-center mb-6">
              <span class="font-semibold">Showing {{ itemsByAge?.itemsByAge.length }} items</span>
              <div class="md:flex items-center" :class="[mobSorting ? 'flex' : '', isMobile ? 'flex bg-white fixed bottom-0 left-0 w-full h-full z-[999] pb-[50px]' :'']">
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
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
              <ItemComponent v-for="x of itemFilterAgeData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <div class="center">
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
            </div>
          </section>
  
          <section v-else-if="categoryTypeUpdated" class="relative md:pl-4">
            <div class="md:flex justify-between items-center mb-6">
              <span class="font-semibold">Showing {{ itemsByCategoryType?.itemsByCategoryTypeOffer.length }} items</span>
              <div class="md:flex items-center" :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' :'flex']">
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
  
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
              <ItemComponent v-for="x of itemFilterData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <div class="center">
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
            </div>
          </section>
  
          <section v-if="offerUpdated" class="relative md:pl-4">
            <div class="md:flex justify-between items-center mb-6">
              <span class="font-semibold">Showing {{ itemsByOffer?.itemsByOffer.length }} items</span>
              <div class="md:flex items-center" :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' :'flex']">
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
  
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
              <ItemComponent v-for="x of itemFilterAgeData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <div class="center">
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
            </div>
          </section>
  
          <section v-else-if="itemUpdated" class="relative md:pl-4">
            <div class="md:flex justify-between items-center mb-6">
              <span class="font-semibold">Showing {{ items?.itemsByPage.length }} items</span>
              <div class="md:flex items-center" :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' :'flex']">
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
  
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
              <ItemComponent v-for="x of itemsFilterList" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <div class="center">
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
            </div>
          </section>
  
          <section v-else-if="itemTodayOfferUpdated" class="relative md:pl-4">
            <div class="md:flex justify-between items-center mb-6">
              <span class="font-semibold">Showing {{ itemsByTodayOffer?.itemsByTodayOffer.length }} items</span>
              <div class="md:flex items-center" :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' :'flex']">
                <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
                <select v-model="shortItem" @change="sortItemsFilterList"
                  class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                  <option>Newest</option>
                  <option>Price: Low-High</option>
                  <option>Price: High-Low</option>
                </select>
              </div>
            </div>
  
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
              <ItemComponent v-for="x of itemsFilterList" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <div class="center">
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
            </div>
          </section>
  
          <section v-else-if="categoryIdUpdated" class="relative md:pl-4">
            <div class="md:flex justify-between items-center mb-6">
              <span class="font-semibold">Showing {{ itemsByCategory?.itemsByCategoryId?.length }} items</span>
              <div class="md:flex items-center" :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' :'flex']">
                <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
                <select v-model="shortItem" @change="sortItemList"
                  class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                  <option>Newest</option>
                  <option>Price: Low-High</option>
                  <option>Price: High-Low</option>
                </select>
              </div>
            </div>
  
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
              <ItemComponent v-for="x of itemFilterData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <div class="center">
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
            </div>
          </section>
  
          <section v-else-if="subCategoryTypeUpdated" class="relative md:pl-4">
            <div class="md:flex justify-between items-center mb-6">
              <span class="font-semibold">Showing {{ itemsBySubCategoryType?.itemsByCategoryTypeId?.length }} items</span>
              <div class="md:flex items-center" :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' :'flex']">
                <label class="font-semibold md:me-2" :class="[mobSorting ? 'hidden' : '']">Sort by:</label>
                <select v-model="shortItem" @change="sortItemsSubCategoryFilterList"
                  class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                  <option>Newest</option>
                  <option>Price: Low-High</option>
                  <option>Price: High-Low</option>
                </select>
              </div>
            </div>
  
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
              <ItemComponent v-for="x of itemsSubCatFilterList" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <div class="center">
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
            </div>
          </section>
  
          <section v-else-if="branIdupated" class="relative md:pl-4">
            <div class="md:flex justify-between items-center mb-6">
              <span class="font-semibold">Showing {{ itemsByBrandId?.itemsByBrandId.length }} items</span>
              <div class="md:flex items-center" :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' :'flex']">
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
  
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
              <ItemComponent v-for="x of itemFilterData" :key="x" :item="x" :brand="x.brand"></ItemComponent>
            </div>
            <div class="center">
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
            </div>
          </section>
  
          <section v-else-if="priceUpated" class="relative md:pl-4">
            <div class="md:flex justify-between items-center mb-6">
              <span class="font-semibold">Showing {{ itemsByPrice?.itemsByPrice.length }} items</span>
              <div class="md:flex items-center" :class="[mobSorting ? 'flex' : 'hidden', isMobile ? 'bg-white fixed bottom-0 left-0 w-full z-[998] pt-4 px-4 pb-[66px] border-t' :'flex']">
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
  
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
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
            <div class="center">
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
  import { onMounted, ref, watch, computed, watchEffect, onBeforeUnmount } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useGetBrand } from '../../api/user/home'
  import { BreadCrumComponent } from '../../components/user/index'
  import gql from 'graphql-tag'
  import { useQuery } from '@vue/apollo-composable'
  
  const route = useRoute()
  const router = useRouter()
  const type = ref(route.query.type as string)
  const rerender = ref('')
  const currentTime = ref()
  const breadcrumDetails = ref(['Item', route.query.type])
  const brandId = ref('')
  const branIdupated = computed(() => (brandId.value != '' ? true : false))
  const age = ref('')
  const ageUpdated = computed(() => (age.value !== '' ? true : false))
  const categoryId = ref('')
  const categoryIdUpdated = computed(() => (categoryId.value != '' ? true : false))
  const offer = ref('')
  const offerUpdated = computed(() => (offer.value != '' ? true : false))
  const categoryType = ref('')
  const categoryTypeUpdated = computed(() => (categoryType.value !== '' ? true : false))
  const subCategoryType = ref('')
  const subCategoryTypeUpdated = computed(() => (subCategoryType.value !== '' ? true : false))
  const item = ref('')
  const itemUpdated = computed(() => (item.value != '' ? true : false))
  const itemTodayOffer = ref('')
  const itemTodayOfferUpdated = computed(() => (itemTodayOffer.value != '' ? true : false))
  const price = ref('')
  const priceUpated = computed(() => (price.value != '' ? true : false))
  const itemFilterData = ref<any[]>([])
  const itemFilterAgeData = ref<any[]>([])
  const itemsFilterList = ref<any[]>([])
  const itemsSubCatFilterList = ref<any[]>([])
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
  
  watch([itemsByBrandId, itemsByCategory], () => {
    if (itemsByBrandId.value) {
      itemFilterData.value = [...(itemsByBrandId.value.itemsByBrandId || [])];
      itemFilterData.value.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      itemFilterData.value = [...itemFilterData.value];
    }
    if (itemsByCategory.value) {
      itemFilterData.value = [...(itemsByCategory.value.itemsByCategoryId || [])];
      itemFilterData.value.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      itemFilterData.value = [...itemFilterData.value];
    }
  
  });
  
  watch([itemsByAge, itemsByOffer, itemsByPrice], () => {
    if (itemsByAge.value) {
      itemFilterAgeData.value = [...(itemsByAge.value.itemsByAge || [])];
      itemFilterAgeData.value.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      itemFilterAgeData.value = [...itemFilterAgeData.value];
    }
    if (itemsByOffer.value) {
      itemFilterAgeData.value = [...(itemsByOffer.value.itemsByOffer || [])];
      itemFilterAgeData.value.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      itemFilterAgeData.value = [...itemFilterAgeData.value];
    }
  
    if (itemsByPrice.value) {
      itemFilterAgeData.value = [...(itemsByPrice.value.itemsByPrice || [])];
      itemFilterAgeData.value.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      itemFilterAgeData.value = [...itemFilterAgeData.value];
    }
  
  })
  
  watch([items, itemsByTodayOffer, itemsByCount], () => {
    if (items.value) {
      itemsFilterList.value = [...(items.value.itemsByPage || [])];
      itemsFilterList.value.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      itemsFilterList.value = [...itemsFilterList.value];
    }
    if (itemsByTodayOffer.value) {
      itemsFilterList.value = [...(itemsByTodayOffer.value.itemsByTodayOffer || [])];
      itemsFilterList.value.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      itemsFilterList.value = [...itemsFilterList.value];
    }
    if (itemsByCount.value) {
      const count = itemsByCount.value.itemsByPageCount || 0;
      totalPages.value = Math.ceil(count / 20);
    }
  })
  
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
      itemsSubCatFilterList.value = [...(itemsBySubCategoryType.value.itemsByCategoryTypeId || [])];
      itemsSubCatFilterList.value.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateB.getTime() - dateA.getTime();
      });
      itemsSubCatFilterList.value = [...itemsSubCatFilterList.value];
    }
    else {
      itemsSubCatFilterList.value = [...(itemsBySubCategoryType.value.itemsByCategoryTypeId || [])];
      itemsSubCatFilterList.value.sort((a: any, b: any) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return dateA.getDate() - dateB.getDate();
      });
      itemsSubCatFilterList.value = [...itemsSubCatFilterList.value];
    }
  })
  
  const { result: brandsData } = useGetBrand()
  onMounted(() => {
    //alert('')
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
      refetchItemsByCategory()
      refetchItemsByCount()
    }
    if (type.value === 'offer') {
      itemAmount.value = route.query.offer as string
      offer.value = route.query.offer as string
      age.value = '';
      brandId.value = '';
      categoryId.value = '';
      refetchItemsByOffer()
      refetchItemsByCount()
    }
  
    if (type.value === 'page') {
      price.value = '';
      //url = `/item?type=${type}&price=${data}`
      age.value = '';
      brandId.value = '';
      offer.value = '';
      item.value = route.query.page as string;
      refetchItems();
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
      refetchItemsBySubCategoryType()
      refetchItemsByCount()
    }
    if (type.value === 'todayoffer') {
      price.value = '';
      age.value = '';
      brandId.value = '';
      offer.value = '';
      itemTodayOffer.value = route.query.page as string;
      refetchItemsByTodayOffer();
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
    if (types === 'brand') {
      type.value = types
      brandId.value = data
      age.value = ''
      price.value = ''
      offer.value = '';
      item.value = '';
      categoryId.value = '';
      subCategoryType.value = '';
      itemTodayOffer.value ='';
      refetchItemsByBrandId()
      refetchItemsByCount()
    } else if (types === 'age') {
      type.value = types
      age.value = data
      price.value = ''
      brandId.value = ''
      offer.value = '';
      item.value = '';
      categoryId.value = '';
      subCategoryType.value = '';
      itemTodayOffer.value ='';
      refetchItemsByAge()
    } else if (types === 'price') {
      type.value = types
      itemAmount.value = data
      price.value = data
      age.value = ''
      brandId.value = ''
      offer.value = '';
      item.value = '';
      categoryId.value = '';
      subCategoryType.value = '';
      itemTodayOffer.value ='';
      refetchItemsByPrice();
      // refetchItemsByCount();
    } else if (types === 'offer') {
      type.value = types
      itemAmount.value = data
      price.value = '';
      age.value = '';
      brandId.value = '';
      offer.value = data;
      item.value = '';
      categoryId.value = '';
      subCategoryType.value = '';
      itemTodayOffer.value ='';
      refetchItemsByOffer();
      refetchItemsByCount()
    } else if (types === 'page') {
      type.value = types
      price.value = '';
      age.value = '';
      brandId.value = '';
      offer.value = '';
      item.value = data;
      categoryId.value = '';
      subCategoryType.value = '';
      itemTodayOffer.value ='';
      refetchItems();
      refetchItemsByCount();
    }
    else if (types === 'category') {
      type.value = types
      price.value = '';
      categoryId.value = data;
      age.value = '';
      brandId.value = '';
      offer.value = '';
      item.value = data;
      subCategoryType.value = '';
      itemTodayOffer.value ='';
      refetchItemsByCategory();
      refetchItemsByCount();
    }
    else if (types === 'categorytype') {
      type.value = types
      price.value = '';
      categoryId.value = '';
      age.value = '';
      brandId.value = '';
      offer.value = '';
      item.value = data;
      subCategoryType.value = data;
      itemTodayOffer.value ='';
      refetchItemsBySubCategoryType();
      refetchItemsByCount();
    }else if (types === 'todayoffer') {
      type.value = types
      price.value = '';
      categoryId.value = '';
      age.value = '';
      brandId.value = '';
      offer.value = '';
      item.value = data;
      subCategoryType.value = '';
      itemTodayOffer.value = data;
      refetchItemsByTodayOffer();
      refetchItemsByCount();
    }
    // router.push(url)
    //location.href=url;
  }
  
  watch(
    () => route?.query?.categoryid,
    (newId, oldId) => {
      // react to route changes...
      if (oldId !== newId) {
        categoryId.value = newId as string;
        refetchItemsByCategory();
      }
    }
  )
  
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
  
  </script>
  
  <style>
  .center {
    text-align: center;
  }
  </style>