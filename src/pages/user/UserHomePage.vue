<template>
  <!-- <div class="px-4 py-4 md:py-5 lg:py-8">
    <div class="w-full mx-auto 2xl:container relative isolate">
      <div class="home-main-slider lg:rounded-2xl overflow-hidden">
        <swiper-container :slides-per-view="1" :centered-slides="true" :loop="true" :pagination="true"
          :navigation="true">
          <swiper-slide v-for="image of filteredBanners" :key="image.id">
            <div @click="RedirectToItemPage('offer', image.price)" class="cursor-pointer">
              <img class="w-full" :src="`${imageBannerPath}${image.path}`" alt="" />
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div> -->
  <div v-if="filteredBanners !== undefined && filteredBanners.length != 0">
    <div class="px-4 py-4 md:py-5 lg:py-8 ">
      <div class="mx-auto 2xl:container grid grid-cols-12 gap-3 md:gap-4 lg:gap-5">
        <div class="col-span-6 lg:col-span-3 order-1 lg:order-none flex flex-col gap-3 md:gap-4 lg:gap-5">
          <div class="aspect-w-5 aspect-h-4 bg-red-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer"
            @click="RedirectBannerItemPage(1, 1)">
            <img :src="getimages(1, 1)" alt=""
              class="h-full w-full aspect-square object-cover object-center">
          </div>
          <div
            class="aspect-w-insta aspect-h-1 bg-amber-100  relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer cursor-pointer">
            <img @click="RedirectBannerItemPage(1, 2)"
            :src="getimages(1, 2)" class="h-full w-full object-cover object-center">
          </div>
          <div
            class="aspect-w-4 aspect-h-5 bg-pink-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img
              @click="RedirectBannerItemPage(1, 3)"
              :src="getimages(1, 3)" alt=""
              class="h-full w-full object-cover object-center">
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 flex flex-col gap-3 md:gap-4 lg:gap-5">
          <div class="bg-emerald-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <div @click="RedirectBannerItemPage(1, 4)"
            class="aspect-w-16 aspect-h-9">
              <img :src="getimages(1, 4)" alt=""
                class="h-full w-full object-cover object-center">
            </div>
          </div>

          <div class="grid grid-cols-12 gap-3 md:gap-4 lg:gap-5">
            <div
              class="col-span-6 aspect-w-1 aspect-h-1 bg-orange-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(1, 5)"
                :src="getimages(1, 5)" alt=""
                class="h-full w-full object-cover object-center">
            </div>
            <div
              class="col-span-6 aspect-w-1 bg-sky-200 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img @click="RedirectBannerItemPage(1, 6) "
              :src="getimages(1, 6)" alt=""
                class="h-full w-full object-cover object-center">
            </div>
            <div
              class="col-span-12 aspect-w-5 aspect-h-1 bg-yellow-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer"
              @click="RedirectBannerItemPage(1, 7)">
              <img :src="getimages(1, 7)" alt=""
                class="h-full w-full object-cover object-center">
            </div>
          </div>
        </div>

        <div class="col-span-6 lg:col-span-3 order-1 lg:order-none flex flex-col gap-3 md:gap-4 lg:gap-5">
          <div
            class="aspect-w-insta aspect-h-1 bg-violet-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer"
            @click="RedirectBannerItemPage(1, 8)">
            <img :src="getimages(1, 8)"
              class="h-full w-full object-cover object-center">
          </div>
          <div
            class="aspect-w-4 aspect-h-5 bg-cyan-100 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer"
            @click="RedirectBannerItemPage(1, 9)">
            <img :src="getimages(1, 9)" alt=""
              class="h-full w-full aspect-square object-cover object-center">
          </div>
          <div
            class="aspect-w-5 aspect-h-4 bg-rose-100 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer"
            @click="RedirectBannerItemPage(1, 10) ">
            <img :src="getimages(1, 10)" alt=""
              class="h-full w-full object-cover object-center">
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 py-4 md:py-5 lg:py-8">
      <div class="mx-auto 2xl:container grid grid-cols-12">
        <div class="col-span-12">
          <h2 class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Today's Offer</h2>
          <swiper-container :slides-per-view="4" :space-between="24" :navigation="true"
            :breakpoints="prodBreakpoints()">
            <swiper-slide v-for="(x, index) of itemByTodayOffer?.itemsByTodayOffer" :key="x"
              class="bg-white p-2 rounded-xl">
              <div class="group relative cursor-pointer">
                <div class="bg-white w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
                  <img :src="`${imagePath}${x.imagePath}`" alt=""
                    class="h-full w-full aspect-square object-contain object-center group-hover:scale-105 transition duration-100" />
                </div>
                <div class="mt-4">
                  <p class="mt-0 mb-2">
                    <span class="text-xs lg:text-sm text-gray-900 font-bold mr-2">Rs.{{ x?.amount
                      }}</span>
                    <span class="text-xs lg:text-sm text-gray-500 line-through">Rs.{{ x?.mrp }}</span>
                  </p>
                  <h3 class="text-xs lg:text-sm text-gray-700">
                    <a class="group-hover:text-gray-900 group-hover:no-underline font-medium"
                      @click="RedirectToItemDetails(x.id)">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ x.name }}
                    </a>
                  </h3>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>

    <!-- Container LC2: 2 slots -> 1.91x1(50%) + 1.91x1(50%) -->
    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="grid grid-cols-12 gap-4 justify-center items-center ">
          <div
            class="col-span-12 md:col-span-6 aspect-w-insta aspect-h-1 bg-amber-100 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img @click="RedirectBannerItemPage(2, 1)"
              :src="getimages(2, 1)"
              class="h-full w-full object-cover object-center">
          </div>
          <div
            class="col-span-12 md:col-span-6 aspect-w-insta aspect-h-1 bg-amber-100 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img @click="RedirectBannerItemPage(2, 2)" :src="getimages(2, 2)"
              class="h-full w-full object-cover object-center">
          </div>
        </div>
      </div>
    </div>



    <!-- Container LC3: 3 slots -> 9x16(25.8131%) + 1x1(46.0542%) + 9x16(25.8131%) -->
    <!-- <div class="p-4">
    <div class="mx-auto 2xl:container">
      <div class="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center">
        <div class="w-full md:w-[50%] lg:w-[25.8131%] order-1 md:order-none">
          <div class="relative aspect-w-9 aspect-h-16 overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img src="../../assets/banners/gomini-electric_16x9.webp" class="h-full w-full object-cover object-center">
          </div>
        </div>
        <div class="w-full lg:w-[46.0542%]">
          <div class="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img src="../../assets/banners/r-for-rabbit-diapers-1x1.webp"
              class="h-full w-full object-cover object-center">
          </div>
        </div>
        <div class="w-full md:w-[50%] lg:w-[25.8131%] order-1 md:order-none">
          <div class="relative aspect-w-9 aspect-h-16 overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img src="../../assets/banners/spout-cups_16x9.webp" class="h-full w-full object-cover object-center">
          </div>
        </div>
      </div>
    </div>
  </div> -->

    <div class="bg-white p-4">
      <div class="w-full mx-auto 2xl:container">
        <div class="flex flex-wrap md:flex-nowrap gap-4">
          <div
            @click="RedirectBannerItemPage(3, 1)"
            class="w-full grow-0 shrink relative">
            <img :src="getimages(3, 1)" alt="" class="rounded-xl" />
          </div>
          <div
            @click="RedirectBannerItemPage(3, 2)"
            class="w-full relative grow order-1 md:order-none">
            <img :src="getimages(3, 2)" alt="" class="rounded-xl" />
          </div>
          <div
            @click="RedirectBannerItemPage(3, 3)"
            class="w-full grow-0 shrink relative">
            <img :src="getimages(3, 3)" alt="" class="rounded-xl" />
          </div>
        </div>
      </div>
    </div>

    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="w-full rounded-xl bg-slate-100 p-4 md:p-5 lg:p-8">
          <h2 class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Best Sellers</h2>
          <swiper-container :slides-per-view="3" :space-between="16" :navigation="true" :auto-height="false"
            :breakpoints="prodBreakpoints()">
            <swiper-slide v-for="(x, index) of itemData?.itemsByPage" :key="x"
              class="bg-white h-full p-3 shadow group-hover:shadow-lg rounded-md duration-300">
              <div class="group relative cursor-pointer">
                <div class="relative overflow-hidden">
                  <div class="aspect-h-4 aspect-w-4 w-full max-h-60">
                    <img :src="`${imagePath}${x.imagePath}`" class="h-full w-full object-contain object-center" />
                  </div>
                </div>
                <div class="mt-3">
                  <p class="mt-0 mb-2">
                    <span class="text-xs lg:text-sm text-gray-900 font-bold mr-2">Rs.{{ x?.amount }}</span>
                    <span class="text-xs lg:text-sm text-gray-500 line-through">Rs.{{ x?.mrp }}</span>
                  </p>
                  <h3 class="text-xs lg:text-sm font-medium min-h-12">
                    <a @click="RedirectToItemDetails(x.id)" class="group-hover:text-gray-900 group-hover:no-underline">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ x.name }}
                    </a>
                  </h3>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>

    <div class="bg-white p-4">
      <div class="mx-auto 2xl:container grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
          <div class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Girls Wardrobe</div>
          <div
            class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 justify-items-center">
            <div v-for="item in updatedGirls" :key="item.id" @click="RedirectToItemPage('girls', item)"
              class="cursor-pointer relative w-full">
              <div class="bg-white rounded-xl aspect-w-1 aspect-h-1 overflow-hidden">
                <img :src="`${categoryPath}${item.imagePath}`"
                  class="h-full w-full aspect-square object-contain object-center" />
              </div>
              <div class="text-gray-800 text-center text-sm mt-1">
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 md:col-span-6 lg:col-span-4">
          <div class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Boys Wardrobe</div>
          <div
            class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 justify-items-center">
            <div v-for="item in updatedBoys" :key="item.id" @click="RedirectToItemPage('boys', item)"
              class="cursor-pointer relative w-full">
              <div class="bg-white rounded-xl aspect-w-1 aspect-h-1 overflow-hidden">
                <img :src="`${categoryPath}${item.imagePath}`"
                  class="h-full w-full aspect-square object-contain object-center" />
              </div>
              <div class="text-gray-800 text-center text-sm mt-1">
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-12 lg:col-span-4">
          <div class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Baby Care</div>
          <div
            class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 justify-items-center">
            <!-- First 11 items -->
            <div v-for="item in updatedBabyCare.slice(0, 11)" :key="item.id"
              @click="RedirectToItemPage('babycare', item)" class="cursor-pointer relative w-full">
              <div class="bg-white rounded-xl aspect-w-1 aspect-h-1 overflow-hidden">
                <img :src="`${categoryPath}${item.imagePath}`"
                  class="h-full w-full aspect-square object-contain object-center" />
              </div>
              <div class="text-gray-800 text-center text-sm mt-1">
                <span>{{ item.name }}</span>
              </div>
            </div>

            <!-- 12th item: View All -->
            <div 
            @click="RedirectToCategoryPage(updatedBabyCare[0]?.categoryTypeId)"
              class="cursor-pointer relative w-full">
              <div class="bg-gray-100 rounded-xl aspect-w-1 aspect-h-1 overflow-hidden">
                <span class=" flex items-center justify-center">
                  <span class="text-gray-600 font-semibold">View All</span>
                </span>
              </div>
              <div class="text-center text-sm mt-1 text-transparent">
                <span>.</span> <!-- Keeps layout spacing consistent -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Container LC4: 1 slot -> 1500 x 150px -->
    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="w-full rounded-xl overflow-hidden relative"
          @click="RedirectBannerItemPage(4, 1)">
          <img :src="getimages(4, 1)"
            class="w-full h-full object-center object-cover" />
        </div>
      </div>
    </div>

    <!-- Container LC4: 3 slots -> 16x9(45.5610%) + 1x1(25.9741%) + 1x1(25.9741%) -->
    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center">
          <div class="w-full lg:w-[47.0064%]">
            <div class="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 1)"
                :src="getimages(5, 1)"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 2)"
                :src="getimages(5, 2)"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 3)"
                :src="getimages(5, 3)"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4" v-if="itemByPrice?.itemsByPrice.length > 0">
      <div class="mx-auto 2xl:container">
        <div class="w-full rounded-xl bg-slate-100 p-4 md:p-5 lg:p-8">
          <h2 class="sm:text-xl lg:text-2xl text-lg font-bold text-gray-800 mb-6">Below 199</h2>
          <swiper-container :slides-per-view="3" :space-between="16" :navigation="true"
            :breakpoints="prodBreakpoints()">
            <swiper-slide v-for="(x, index) of itemByPrice?.itemsByPrice" :key="x">
              <div class="group relative cursor-pointer">
                <div class="relative overflow-hidden shadow group-hover:shadow-lg rounded-md duration-300">
                  <div class="aspect-h-4 aspect-w-4 w-full max-h-60 overflow-hidden rounded-md bg-white">
                    <img :src="`${imagePath}${x.imagePath}`" class="h-full w-full object-contain object-center" />
                  </div>
                </div>
                <div class="mt-3">
                  <p class="mt-0 mb-2">
                    <span class="text-xs lg:text-sm text-gray-900 font-bold mr-2">Rs.{{ x?.amount }}</span>
                    <span class="text-xs lg:text-sm text-gray-500 line-through">Rs.{{ x?.mrp }}</span>
                  </p>
                  <h3 class="text-xs lg:text-sm font-medium min-h-12">
                    <a @click="RedirectToItemDetails(x.id)" class="group-hover:text-gray-900 group-hover:no-underline">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ x.name }}
                    </a>
                  </h3>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>

    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="w-full rounded-xl bg-slate-100 p-4 md:p-5 lg:p-8">
          <h2 class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Trending Now</h2>
          <swiper-container :slides-per-view="3" :space-between="16" :navigation="true"
            :breakpoints="prodBreakpoints()">
            <swiper-slide v-for="(x, index) of itemByCategoryType?.itemsByCategoryTypeOffer" :key="x"
              class="bg-white h-full p-3 shadow group-hover:shadow-lg rounded-md duration-300">
              <div class="group relative cursor-pointer">
                <div class="relative overflow-hidden">
                  <div class="aspect-h-4 aspect-w-4 w-full max-h-60">
                    <img :src="`${imagePath}${x.imagePath}`" class="h-full w-full object-contain object-center" />
                  </div>
                </div>
                <div class="mt-3">
                  <p class="mt-0 mb-2">
                    <span class="text-xs lg:text-sm text-gray-900 font-bold mr-2">Rs.{{ x?.amount }}</span>
                    <span class="text-xs lg:text-sm text-gray-500 line-through">Rs.{{ x?.mrp }}</span>
                  </p>
                  <h3 class="text-xs lg:text-sm font-medium min-h-12">
                    <a @click="RedirectToItemDetails(x.id)" class="group-hover:text-gray-900 group-hover:no-underline">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ x.name }}
                    </a>
                  </h3>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
    
    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center">
          <!-- <div class="w-full lg:w-[47.0064%]">
            <div class="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 1)"
                src="../../assets/banners/little-kids-sweater_16x9.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div> -->
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 2)"
                src="../../assets/banners/superbottoms-products-1x1.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 3)"
                src="../../assets/banners/r-for-rabbit-diapers-1x1.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 2)"
                src="../../assets/banners/superbottoms-products-1x1.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 3)"
                src="../../assets/banners/r-for-rabbit-diapers-1x1.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
        </div>
      </div>
    </div> 
   
    <div class="p-4">
      <div class="bg-white w-full mx-auto 2xl:container">
        <!-- <h2 class="sm:text-3xl text-xl text-center font-bold text-gray-800 mb-6">Shop by Category</h2> -->
        <div class="grid grid-cols-4 xl:grid-cols-7 gap-4 justify-center items-center">
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('categorytype', { id: '1', name: 'Girls' })"><img
              src="../../assets/categories/girl.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Girls</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('categorytype', { id: '2', name: 'Boys' })">
            <img src="../../assets/categories/boy.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Boys</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('categorytype', { id: '4', name: 'Baby Care' })">
            <img src="../../assets/categories/baby-care.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Baby Care</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('categorytype', { id: '5', name: 'Toys' })">
            <img src="../../assets/categories/toy.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Toys</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('category', { id: 'ff320753-c3ed-440f-8e15-110910c58523', name: 'Learn' })">
            <img src="../../assets/categories/learn.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Learn</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('categorytype', { id: '3', name: 'Mom' })">
            <img src="../../assets/categories/women.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Women</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer" @click="RedirectToItemPage('rental', null)">
            <img src="../../assets/categories/rental.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Rental</span>
          </a>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center">
          <!-- <div class="w-full lg:w-[47.0064%]">
            <div class="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 1)"
                src="../../assets/banners/little-kids-sweater_16x9.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div> -->
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 2)"
                src="../../assets/banners/superbottoms-products-1x1.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 3)"
                src="../../assets/banners/r-for-rabbit-diapers-1x1.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 2)"
                src="../../assets/banners/superbottoms-products-1x1.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 3)"
                src="../../assets/banners/r-for-rabbit-diapers-1x1.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="w-full rounded-xl bg-gradient-to-b from-sky-200 to-green-100 p-4 md:p-5 lg:p-8">
          <h2 class="sm:text-xl md:text-2xl text-lg text-center font-bold text-gray-800 mb-6">
            Shop by Kids Age
          </h2>

          <div class="grid grid-cols-3 md:grid-cols-5 gap-4 mt-4 justify-center">
            <div class="cursor-pointer inline-flex justify-center">
              <img @click="RedirectToItemPage('age', 0)" src="../../assets/banners/age-6-24.png" alt="" />
            </div>
            <div class="cursor-pointer inline-flex justify-center">
              <img @click="RedirectToItemPage('age', 2)" src="../../assets/banners/age-2-4.png" alt="" />
            </div>
            <div class="cursor-pointer inline-flex justify-center">
              <img @click="RedirectToItemPage('age', 2)" src="../../assets/banners/age-4-6.png" alt="" />
            </div>
            <div class="cursor-pointer inline-flex justify-center">
              <img @click="RedirectToItemPage('age', 7)" src="../../assets/banners/age-6-8.png" alt="" />
            </div>
            <div class="cursor-pointer inline-flex justify-center">
              <img @click="RedirectToItemPage('age', 7)" src="../../assets/banners/age-8plus.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="grid grid-cols-12 gap-4 justify-center items-center ">
          <div
            class="col-span-6 md:col-span-3 bg-amber-100 order-1 lg:order-none relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img @click="RedirectBannerItemPage(6, 1)"
            :src="getimages(6, 1)" class="h-full w-full object-cover object-center">
          </div>
          <div
            class="col-span-12 md:col-span-6 bg-amber-100 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img @click="RedirectBannerItemPage(6, 2)"
            :src="getimages(6, 2)" class="h-full w-full object-cover object-center">
          </div>
          <div
            class="col-span-6 md:col-span-3 bg-amber-100 order-1 lg:order-none relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img @click="RedirectBannerItemPage(6, 3)" 
            :src="getimages(6, 3)"
              class="h-full w-full object-cover object-center">
          </div>
        </div>

      </div>
    </div>
    <div class="px-4 py-8 md:py-16 xl:py-20 bg-slate-50 wave-top">
      <div class="2xl:container mx-auto">
        <h3 class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Shop by Brands</h3>
        <div class="grid xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-4 grid-cols-3">
          <div class="p-3 rounded-xl bg-white border border-slate-100"
            v-for="x of brandsData?.brands.filter((x: any) => x.logo != null)" :key="x.id">
            <a v-if="x.logo !== null" @click="RedirectToItemPage('brand', x)"
              class="cursor-pointer w-full h-full flex justify-center items-center hover:scale-110">
              <img :src="`${imageBrandPath}${x.logo}`" :alt="`${x.name}`" class="w-24 h-24 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="discount-banner w-full bg-yellow-100 flex justify-center items-center">
      <div class="2xl:container w-full mx-auto">
        <div
          class="w-full flex flex-wrap justify-center lg:justify-between flex-row px-4 py-8 md:py-16 xl:py-20 sm:py-32">
          <div class="item flex-1 min-w-[250px] p-4">
            <div class="flex space-x-5 items-center">
              <div>
                <span>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H5.63636V24.1818H35" stroke="#202020" stroke-width="2" stroke-miterlimit="10"
                      stroke-linecap="square"></path>
                    <path
                      d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                      stroke="#202020" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                    <path
                      d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                      stroke="#202020" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                    <path d="M34.9982 1H11.8164V18H34.9982V1Z" stroke="#202020" stroke-width="2" stroke-miterlimit="10"
                      stroke-linecap="square"></path>
                    <path d="M11.8164 7.18164H34.9982" stroke="#202020" stroke-width="2" stroke-miterlimit="10"
                      stroke-linecap="square"></path>
                  </svg>
                </span>
              </div>
              <div>
                <p class="text-lg text-black font-bold tracking-wide mb-1">Free Shipping</p>
                <!-- <p class="text-sm text-gray-800">When ordering over Rs.1000</p> -->
              </div>
            </div>
          </div>
          <div class="item flex-1 min-w-[250px] p-4">
            <div class="flex space-x-5 items-center">
              <div>
                <span>
                  <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                      stroke="#202020" stroke-width="2" stroke-miterlimit="10"></path>
                    <path d="M30.7 2L29.5 10.85L20.5 9.65" stroke="#202020" stroke-width="2" stroke-miterlimit="10"
                      stroke-linecap="square"></path>
                  </svg>
                </span>
              </div>
              <div>
                <p class="text-lg text-black font-bold tracking-wide mb-1">Free Return</p>
                <!-- <p class="text-sm text-gray-800">Get Return within 30 days</p> -->
              </div>
            </div>
          </div>
          <div class="item flex-1 min-w-[250px] p-4">
            <div class="flex space-x-5 items-center">
              <div>
                <span>
                  <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z" stroke="#202020" stroke-width="2"
                      stroke-miterlimit="10" stroke-linecap="square"></path>
                    <path
                      d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                      stroke="#202020" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                    <path d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                      stroke="#202020" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                  </svg>
                </span>
              </div>
              <div>
                <p class="text-lg text-black font-bold tracking-wide mb-1">Secure Payment</p>
                <p class="text-sm text-gray-800">100% Secure Online Payment</p>
              </div>
            </div>
          </div>
          <div class="item flex-1 min-w-[250px] p-4">
            <div class="flex space-x-5 items-center">
              <div>
                <span>
                  <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7" stroke="#202020" stroke-width="2"
                      stroke-miterlimit="10"></path>
                    <path d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25" stroke="#202020" stroke-width="2"
                      stroke-miterlimit="10"></path>
                    <path d="M16 28V22" stroke="#202020" stroke-width="2" stroke-miterlimit="10"></path>
                    <path d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z" stroke="#202020"
                      stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                    <path d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z" stroke="#202020" stroke-width="2"
                      stroke-miterlimit="10" stroke-linecap="square"></path>
                  </svg>
                </span>
              </div>
              <div>
                <p class="text-lg text-black font-bold tracking-wide mb-1">Best Quality</p>
                <p class="text-sm text-gray-800">Original Product Guarenteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="px-4 py-4 md:py-5 lg:py-8 ">
      <div class="mx-auto 2xl:container grid grid-cols-12 gap-3 md:gap-4 lg:gap-5">
        <div class="col-span-6 lg:col-span-3 order-1 lg:order-none flex flex-col gap-3 md:gap-4 lg:gap-5">
          <div class="aspect-w-5 aspect-h-4 bg-red-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer"
            @click="RedirectBannerItemPage(1, 1)">
            <img src="../../assets/banners/babysafe-casuals-5x4.webp" alt=""
              class="h-full w-full aspect-square object-cover object-center">
          </div>
          <div
            class="aspect-w-insta aspect-h-1 bg-amber-100  relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer cursor-pointer">
            <img @click="RedirectBannerItemPage(1, 2)"
            src="../../assets/banners/rc-cars_1.91x1.webp" class="h-full w-full object-cover object-center">
          </div>
          <div
            class="aspect-w-4 aspect-h-5 bg-pink-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img
              @click="RedirectBannerItemPage(1, 3)"
              src="../../assets/banners/spring-2025-16_9.webp" alt=""
              class="h-full w-full object-cover object-center">
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 flex flex-col gap-3 md:gap-4 lg:gap-5">
          <div class="bg-emerald-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <div @click="RedirectBannerItemPage(1, 4)"
            class="aspect-w-16 aspect-h-9">
              <img src="../../assets/banners/spring-2025-16_9.webp" alt=""
                class="h-full w-full object-cover object-center">
            </div>
          </div>

          <div class="grid grid-cols-12 gap-3 md:gap-4 lg:gap-5">
            <div
              class="col-span-6 aspect-w-1 aspect-h-1 bg-orange-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(1, 5)"
                src="../../assets/banners/cetaphil-products-1x1.webp" alt=""
                class="h-full w-full object-cover object-center">
            </div>
            <div
              class="col-span-6 aspect-w-1 bg-sky-200 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img @click="RedirectBannerItemPage(1, 6) "
              src="../../assets/banners/sebamed-products-1x1.webp" alt=""
                class="h-full w-full object-cover object-center">
            </div>
            <div
              class="col-span-12 aspect-w-5 aspect-h-1 bg-yellow-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer"
              @click="RedirectBannerItemPage(1, 7)">
              <img src="../../assets/banners/rental-banner.webp" alt=""
                class="h-full w-full object-cover object-center">
            </div>
          </div>
        </div>

        <div class="col-span-6 lg:col-span-3 order-1 lg:order-none flex flex-col gap-3 md:gap-4 lg:gap-5">
          <div
            class="aspect-w-insta aspect-h-1 bg-violet-200 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer"
            @click="RedirectBannerItemPage(1, 8)">
            <img src="../../assets/banners/pampers-diapers_1.91x1.webp"
              class="h-full w-full object-cover object-center">
          </div>
          <div
            class="aspect-w-4 aspect-h-5 bg-cyan-100 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer"
            @click="RedirectBannerItemPage(1, 9)">
            <img src="../../assets/banners/r-for-rabbit-4-in-1-carry-cot_4x5.webp" alt=""
              class="h-full w-full aspect-square object-cover object-center">
          </div>
          <div
            class="aspect-w-5 aspect-h-4 bg-rose-100 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer"
            @click="RedirectBannerItemPage(1, 10) ">
            <img src="../../assets/banners/redtag-baby-set-5x4.webp" alt=""
              class="h-full w-full object-cover object-center">
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 py-4 md:py-5 lg:py-8">
      <div class="mx-auto 2xl:container grid grid-cols-12">
        <div class="col-span-12">
          <h2 class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Today's Offer</h2>
          <swiper-container :slides-per-view="4" :space-between="24" :navigation="true"
            :breakpoints="prodBreakpoints()">
            <swiper-slide v-for="(x, index) of itemByTodayOffer?.itemsByTodayOffer" :key="x"
              class="bg-white p-2 rounded-xl">
              <div class="group relative cursor-pointer">
                <div class="bg-white w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
                  <img :src="`${imagePath}${x.imagePath}`" alt=""
                    class="h-full w-full aspect-square object-contain object-center group-hover:scale-105 transition duration-100" />
                </div>
                <div class="mt-4">
                  <p class="mt-0 mb-2">
                    <span class="text-xs lg:text-sm text-gray-900 font-bold mr-2">Rs.{{ x?.amount
                      }}</span>
                    <span class="text-xs lg:text-sm text-gray-500 line-through">Rs.{{ x?.mrp }}</span>
                  </p>
                  <h3 class="text-xs lg:text-sm text-gray-700">
                    <a class="group-hover:text-gray-900 group-hover:no-underline font-medium"
                      @click="RedirectToItemDetails(x.id)">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ x.name }}
                    </a>
                  </h3>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>

    <!-- Container LC2: 2 slots -> 1.91x1(50%) + 1.91x1(50%) -->
    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="grid grid-cols-12 gap-4 justify-center items-center ">
          <div
            class="col-span-12 md:col-span-6 aspect-w-insta aspect-h-1 bg-amber-100 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img @click="RedirectBannerItemPage(2, 1)"
              src="../../assets/banners/smartivity-mini-football_1.91x1.webp"
              class="h-full w-full object-cover object-center">
          </div>
          <div
            class="col-span-12 md:col-span-6 aspect-w-insta aspect-h-1 bg-amber-100 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img @click="RedirectBannerItemPage(2, 2)" src="../../assets/banners/big-kid-sale-offer_1.91x1.webp"
              class="h-full w-full object-cover object-center">
          </div>
        </div>
      </div>
    </div>


    <!-- Container LC3: 3 slots -> 9x16(25.8131%) + 1x1(46.0542%) + 9x16(25.8131%) -->
    <!-- <div class="p-4">
    <div class="mx-auto 2xl:container">
      <div class="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center">
        <div class="w-full md:w-[50%] lg:w-[25.8131%] order-1 md:order-none">
          <div class="relative aspect-w-9 aspect-h-16 overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img src="../../assets/banners/gomini-electric_16x9.webp" class="h-full w-full object-cover object-center">
          </div>
        </div>
        <div class="w-full lg:w-[46.0542%]">
          <div class="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img src="../../assets/banners/r-for-rabbit-diapers-1x1.webp"
              class="h-full w-full object-cover object-center">
          </div>
        </div>
        <div class="w-full md:w-[50%] lg:w-[25.8131%] order-1 md:order-none">
          <div class="relative aspect-w-9 aspect-h-16 overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img src="../../assets/banners/spout-cups_16x9.webp" class="h-full w-full object-cover object-center">
          </div>
        </div>
      </div>
    </div>
  </div> -->

    <div class="bg-white p-4">
      <div class="w-full mx-auto 2xl:container">
        <div class="flex flex-wrap md:flex-nowrap gap-4">
          <div
            @click="RedirectBannerItemPage(3, 1)"
            class="w-full grow-0 shrink relative">
            <img src="../../assets/banners/gomini-electric_16x9.webp" alt="" class="rounded-xl" />
          </div>
          <div
            @click="RedirectBannerItemPage(3, 2)"
            class="w-full relative grow order-1 md:order-none">
            <img src="../../assets/banners/spout-cups_16x9.webp" alt="" class="rounded-xl" />
          </div>
          <div
            @click="RedirectBannerItemPage(3, 3)"
            class="w-full grow-0 shrink relative">
            <img src="../../assets/banners/laundry-detergent_16x9.webp" alt="" class="rounded-xl" />
          </div>
        </div>
      </div>
    </div>

    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="w-full rounded-xl bg-slate-100 p-4 md:p-5 lg:p-8">
          <h2 class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Best Sellers</h2>
          <swiper-container :slides-per-view="3" :space-between="16" :navigation="true" :auto-height="false"
            :breakpoints="prodBreakpoints()">
            <swiper-slide v-for="(x, index) of itemData?.itemsByPage" :key="x"
              class="bg-white h-full p-3 shadow group-hover:shadow-lg rounded-md duration-300">
              <div class="group relative cursor-pointer">
                <div class="relative overflow-hidden">
                  <div class="aspect-h-4 aspect-w-4 w-full max-h-60">
                    <img :src="`${imagePath}${x.imagePath}`" class="h-full w-full object-contain object-center" />
                  </div>
                </div>
                <div class="mt-3">
                  <p class="mt-0 mb-2">
                    <span class="text-xs lg:text-sm text-gray-900 font-bold mr-2">Rs.{{ x?.amount }}</span>
                    <span class="text-xs lg:text-sm text-gray-500 line-through">Rs.{{ x?.mrp }}</span>
                  </p>
                  <h3 class="text-xs lg:text-sm font-medium min-h-12">
                    <a @click="RedirectToItemDetails(x.id)" class="group-hover:text-gray-900 group-hover:no-underline">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ x.name }}
                    </a>
                  </h3>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>

    <div class="bg-white p-4">
      <div class="mx-auto 2xl:container grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
          <div class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Girls Wardrobe</div>
          <div
            class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 justify-items-center">
            <div v-for="item in updatedGirls" :key="item.id" @click="RedirectToItemPage('girls', item)"
              class="cursor-pointer relative w-full">
              <div class="bg-white rounded-xl aspect-w-1 aspect-h-1 overflow-hidden">
                <img :src="`${categoryPath}${item.imagePath}`"
                  class="h-full w-full aspect-square object-contain object-center" />
              </div>
              <div class="text-gray-800 text-center text-sm mt-1">
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 md:col-span-6 lg:col-span-4">
          <div class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Boys Wardrobe</div>
          <div
            class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 justify-items-center">
            <div v-for="item in updatedBoys" :key="item.id" @click="RedirectToItemPage('boys', item)"
              class="cursor-pointer relative w-full">
              <div class="bg-white rounded-xl aspect-w-1 aspect-h-1 overflow-hidden">
                <img :src="`${categoryPath}${item.imagePath}`"
                  class="h-full w-full aspect-square object-contain object-center" />
              </div>
              <div class="text-gray-800 text-center text-sm mt-1">
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-12 lg:col-span-4">
          <div class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Baby Care</div>
          <div
            class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 justify-items-center">
            <!-- First 11 items -->
            <div v-for="item in updatedBabyCare.slice(0, 11)" :key="item.id"
              @click="RedirectToItemPage('babycare', item)" class="cursor-pointer relative w-full">
              <div class="bg-white rounded-xl aspect-w-1 aspect-h-1 overflow-hidden">
                <img :src="`${categoryPath}${item.imagePath}`"
                  class="h-full w-full aspect-square object-contain object-center" />
              </div>
              <div class="text-gray-800 text-center text-sm mt-1">
                <span>{{ item.name }}</span>
              </div>
            </div>

            <!-- 12th item: View All -->
            <div 
            @click="RedirectToCategoryPage(updatedBabyCare[0]?.categoryTypeId)"
              class="cursor-pointer relative w-full">
              <div class="bg-gray-100 rounded-xl aspect-w-1 aspect-h-1 overflow-hidden">
                <span class=" flex items-center justify-center">
                  <span class="text-gray-600 font-semibold">View All</span>
                </span>
              </div>
              <div class="text-center text-sm mt-1 text-transparent">
                <span>.</span> <!-- Keeps layout spacing consistent -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Container LC4: 1 slot -> 1500 x 150px -->
    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="w-full rounded-xl overflow-hidden relative"
          @click="RedirectBannerItemPage(4, 1)">
          <img src="../../assets/banners/banner-toys-games-2025.webp"
            class="w-full h-full object-center object-cover" />
        </div>
      </div>
    </div>

    <!-- Container LC4: 3 slots -> 16x9(45.5610%) + 1x1(25.9741%) + 1x1(25.9741%) -->
    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center">
          <div class="w-full lg:w-[47.0064%]">
            <div class="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 1)"
                src="../../assets/banners/little-kids-sweater_16x9.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 2)"
                src="../../assets/banners/superbottoms-products-1x1.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="w-[calc(50%_-_8px)] lg:w-[26.4968%]">
            <div class="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
              <img
                @click="RedirectBannerItemPage(5, 3)"
                src="../../assets/banners/r-for-rabbit-diapers-1x1.webp"
                class="h-full w-full object-cover object-center">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4" v-if="itemByPrice?.itemsByPrice.length > 0">
      <div class="mx-auto 2xl:container">
        <div class="w-full rounded-xl bg-slate-100 p-4 md:p-5 lg:p-8">
          <h2 class="sm:text-xl lg:text-2xl text-lg font-bold text-gray-800 mb-6">Below 199</h2>
          <swiper-container :slides-per-view="3" :space-between="16" :navigation="true"
            :breakpoints="prodBreakpoints()">
            <swiper-slide v-for="(x, index) of itemByPrice?.itemsByPrice" :key="x">
              <div class="group relative cursor-pointer">
                <div class="relative overflow-hidden shadow group-hover:shadow-lg rounded-md duration-300">
                  <div class="aspect-h-4 aspect-w-4 w-full max-h-60 overflow-hidden rounded-md bg-white">
                    <img :src="`${imagePath}${x.imagePath}`" class="h-full w-full object-contain object-center" />
                  </div>
                </div>
                <div class="mt-3">
                  <p class="mt-0 mb-2">
                    <span class="text-xs lg:text-sm text-gray-900 font-bold mr-2">Rs.{{ x?.amount }}</span>
                    <span class="text-xs lg:text-sm text-gray-500 line-through">Rs.{{ x?.mrp }}</span>
                  </p>
                  <h3 class="text-xs lg:text-sm font-medium min-h-12">
                    <a @click="RedirectToItemDetails(x.id)" class="group-hover:text-gray-900 group-hover:no-underline">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ x.name }}
                    </a>
                  </h3>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>

    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="w-full rounded-xl bg-slate-100 p-4 md:p-5 lg:p-8">
          <h2 class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Trending Now</h2>
          <swiper-container :slides-per-view="3" :space-between="16" :navigation="true"
            :breakpoints="prodBreakpoints()">
            <swiper-slide v-for="(x, index) of itemByCategoryType?.itemsByCategoryTypeOffer" :key="x"
              class="bg-white h-full p-3 shadow group-hover:shadow-lg rounded-md duration-300">
              <div class="group relative cursor-pointer">
                <div class="relative overflow-hidden">
                  <div class="aspect-h-4 aspect-w-4 w-full max-h-60">
                    <img :src="`${imagePath}${x.imagePath}`" class="h-full w-full object-contain object-center" />
                  </div>
                </div>
                <div class="mt-3">
                  <p class="mt-0 mb-2">
                    <span class="text-xs lg:text-sm text-gray-900 font-bold mr-2">Rs.{{ x?.amount }}</span>
                    <span class="text-xs lg:text-sm text-gray-500 line-through">Rs.{{ x?.mrp }}</span>
                  </p>
                  <h3 class="text-xs lg:text-sm font-medium min-h-12">
                    <a @click="RedirectToItemDetails(x.id)" class="group-hover:text-gray-900 group-hover:no-underline">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ x.name }}
                    </a>
                  </h3>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="grid grid-cols-12 gap-4 justify-center items-center ">
          <div
            class="col-span-6 md:col-span-3 bg-amber-100 order-1 lg:order-none relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img @click="RedirectBannerItemPage(6, 1)"
            src="../../assets/banners/women-poster-1.webp" class="h-full w-full object-cover object-center">
          </div>
          <div
            class="col-span-12 md:col-span-6 bg-amber-100 relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img @click="RedirectBannerItemPage(6, 2)"
            src="../../assets/banners/women-poster-4.webp" class="h-full w-full object-cover object-center">
          </div>
          <div
            class="col-span-6 md:col-span-3 bg-amber-100 order-1 lg:order-none relative overflow-hidden rounded-md lg:rounded-xl cursor-pointer">
            <img @click="RedirectBannerItemPage(6, 3)" 
            src="../../assets/banners/women-poster-3.webp"
              class="h-full w-full object-cover object-center">
          </div>
        </div>

      </div>
    </div>
    <div class="p-4">
      <div class="bg-white w-full mx-auto 2xl:container">
        <!-- <h2 class="sm:text-3xl text-xl text-center font-bold text-gray-800 mb-6">Shop by Category</h2> -->
        <div class="grid grid-cols-4 xl:grid-cols-7 gap-4 justify-center items-center">
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('categorytype', { id: '1', name: 'Girls' })"><img
              src="../../assets/categories/girl.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Girls</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('categorytype', { id: '2', name: 'Boys' })">
            <img src="../../assets/categories/boy.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Boys</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('categorytype', { id: '4', name: 'Baby Care' })">
            <img src="../../assets/categories/baby-care.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Baby Care</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('categorytype', { id: '5', name: 'Toys' })">
            <img src="../../assets/categories/toy.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Toys</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('category', { id: 'ff320753-c3ed-440f-8e15-110910c58523', name: 'Learn' })">
            <img src="../../assets/categories/learn.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Learn</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer"
            @click="RedirectToItemPage('categorytype', { id: '3', name: 'Mom' })">
            <img src="../../assets/categories/women.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Women</span>
          </a>
          <a class="inline-flex flex-col mb-3 text-center cursor-pointer" @click="RedirectToItemPage('rental', null)">
            <img src="../../assets/categories/rental.webp" alt=""
              class="w-full md:max-w-[220px] rounded-full transition-all ease duration-200 hover:scale-95 bg-gray-100" />
            <span class="font-bold uppercase mt-1 md:mt-3 text-xs md:text-base lg:text-lg">Rental</span>
          </a>
        </div>
      </div>
    </div>

    <div class="p-4">
      <div class="mx-auto 2xl:container">
        <div class="w-full rounded-xl bg-gradient-to-b from-sky-200 to-green-100 p-4 md:p-5 lg:p-8">
          <h2 class="sm:text-xl md:text-2xl text-lg text-center font-bold text-gray-800 mb-6">
            Shop by Kids Age
          </h2>

          <div class="grid grid-cols-3 md:grid-cols-5 gap-4 mt-4 justify-center">
            <div class="cursor-pointer inline-flex justify-center">
              <img @click="RedirectToItemPage('age', 0)" src="../../assets/banners/age-6-24.png" alt="" />
            </div>
            <div class="cursor-pointer inline-flex justify-center">
              <img @click="RedirectToItemPage('age', 2)" src="../../assets/banners/age-2-4.png" alt="" />
            </div>
            <div class="cursor-pointer inline-flex justify-center">
              <img @click="RedirectToItemPage('age', 2)" src="../../assets/banners/age-4-6.png" alt="" />
            </div>
            <div class="cursor-pointer inline-flex justify-center">
              <img @click="RedirectToItemPage('age', 7)" src="../../assets/banners/age-6-8.png" alt="" />
            </div>
            <div class="cursor-pointer inline-flex justify-center">
              <img @click="RedirectToItemPage('age', 7)" src="../../assets/banners/age-8plus.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 py-8 md:py-16 xl:py-20 bg-slate-50 wave-top">
      <div class="2xl:container mx-auto">
        <h3 class="sm:text-xl md:text-2xl text-lg font-bold text-gray-800 mb-6">Shop by Brands</h3>
        <div class="grid xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-4 grid-cols-3">
          <div class="p-3 rounded-xl bg-white border border-slate-100"
            v-for="x of brandsData?.brands.filter((x: any) => x.logo != null)" :key="x.id">
            <a v-if="x.logo !== null" @click="RedirectToItemPage('brand', x)"
              class="cursor-pointer w-full h-full flex justify-center items-center hover:scale-110">
              <img :src="`${imageBrandPath}${x.logo}`" :alt="`${x.name}`" class="w-24 h-24 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="discount-banner w-full bg-yellow-100 flex justify-center items-center">
      <div class="2xl:container w-full mx-auto">
        <div
          class="w-full flex flex-wrap justify-center lg:justify-between flex-row px-4 py-8 md:py-16 xl:py-20 sm:py-32">
          <div class="item flex-1 min-w-[250px] p-4">
            <div class="flex space-x-5 items-center">
              <div>
                <span>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H5.63636V24.1818H35" stroke="#202020" stroke-width="2" stroke-miterlimit="10"
                      stroke-linecap="square"></path>
                    <path
                      d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                      stroke="#202020" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                    <path
                      d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                      stroke="#202020" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                    <path d="M34.9982 1H11.8164V18H34.9982V1Z" stroke="#202020" stroke-width="2" stroke-miterlimit="10"
                      stroke-linecap="square"></path>
                    <path d="M11.8164 7.18164H34.9982" stroke="#202020" stroke-width="2" stroke-miterlimit="10"
                      stroke-linecap="square"></path>
                  </svg>
                </span>
              </div>
              <div>
                <p class="text-lg text-black font-bold tracking-wide mb-1">Free Shipping</p>
                <!-- <p class="text-sm text-gray-800">When ordering over Rs.1000</p> -->
              </div>
            </div>
          </div>
          <div class="item flex-1 min-w-[250px] p-4">
            <div class="flex space-x-5 items-center">
              <div>
                <span>
                  <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                      stroke="#202020" stroke-width="2" stroke-miterlimit="10"></path>
                    <path d="M30.7 2L29.5 10.85L20.5 9.65" stroke="#202020" stroke-width="2" stroke-miterlimit="10"
                      stroke-linecap="square"></path>
                  </svg>
                </span>
              </div>
              <div>
                <p class="text-lg text-black font-bold tracking-wide mb-1">Free Return</p>
                <!-- <p class="text-sm text-gray-800">Get Return within 30 days</p> -->
              </div>
            </div>
          </div>
          <div class="item flex-1 min-w-[250px] p-4">
            <div class="flex space-x-5 items-center">
              <div>
                <span>
                  <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z" stroke="#202020" stroke-width="2"
                      stroke-miterlimit="10" stroke-linecap="square"></path>
                    <path
                      d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                      stroke="#202020" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                    <path d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                      stroke="#202020" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                  </svg>
                </span>
              </div>
              <div>
                <p class="text-lg text-black font-bold tracking-wide mb-1">Secure Payment</p>
                <p class="text-sm text-gray-800">100% Secure Online Payment</p>
              </div>
            </div>
          </div>
          <div class="item flex-1 min-w-[250px] p-4">
            <div class="flex space-x-5 items-center">
              <div>
                <span>
                  <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7" stroke="#202020" stroke-width="2"
                      stroke-miterlimit="10"></path>
                    <path d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25" stroke="#202020" stroke-width="2"
                      stroke-miterlimit="10"></path>
                    <path d="M16 28V22" stroke="#202020" stroke-width="2" stroke-miterlimit="10"></path>
                    <path d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z" stroke="#202020"
                      stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                    <path d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z" stroke="#202020" stroke-width="2"
                      stroke-miterlimit="10" stroke-linecap="square"></path>
                  </svg>
                </span>
              </div>
              <div>
                <p class="text-lg text-black font-bold tracking-wide mb-1">Best Quality</p>
                <p class="text-sm text-gray-800">Original Product Guarenteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@vue/apollo-composable'
import {
  useUserItemDetails,
  useGetItemByCategory,
  useGetItemByBrand,
  useGetItems,
  useGetProductByPrice,
  useGetItemByOffer,
  useGetItemByCategoryType,
  useGetItemByAge,
  useGetItemByTodayOffer
} from '../../api/user/item'
import { GetCategory } from '../../api/user/category'
import { useGetBrand, GetImageByHome } from '../../api/user/home'
import { ref, computed } from "vue";
import { createRouter, useRouter } from 'vue-router'
import { register } from 'swiper/element/bundle'
import { imageBannerPath, imagePath, imageBrandPath, categoryPath } from '../../constant/commonPath'
import { useAuthStore } from '../../stores/authstore';
import type { GraphQLAbstractType, GraphQLDirective } from 'graphql'

register();
const authstore = useAuthStore();
const { result: itemData } = useGetItems(1)
const { result: brandsData } = useGetBrand()
console.log('brandsData', brandsData)
const { result: itemByPrice, refetch: refetchData } = useGetProductByPrice('100', 1)

const { result: itemByOffer, refetch: refetchItemByOffer } = useGetItemByOffer('70', 1)

const { result: itemByTodayOffer, refetch: refetchItemByTodayOffer } = useGetItemByTodayOffer(0)

const { result: itemByCategoryType, refetch: refetchItemByCategoryType } = useGetItemByCategoryType(
  '2',
  '500',
  1
)

const { result: itemByAge, refetch: refetchItemByAge } = useGetItemByAge(false, false, true, '2', 1)
const { result: bannerResult, refetch: refetchBanner } = GetImageByHome();
const router = useRouter()
const filteredBanners = computed(() => {
  return bannerResult.value?.imagesByHome?.filter((image: any) => image.section) || [];
});
 console.log('banner', filteredBanners);

const { result: categoryData, loading } = GetCategory();

//girls wardrobe
const updatedGirls = computed(() => {
  let catdata = categoryData?.value?.category || [];
  return catdata.filter((item: any) => item.categoryTypeId == "1");
})

//boys wardrobe
const updatedBoys = computed(() => {
  let catdata = categoryData?.value?.category || [];
  return catdata.filter((item: any) => item.categoryTypeId == "2");
})
//Baby Care 
const updatedBabyCare = computed(() => {
  let catdata = categoryData?.value?.category || [];
  return catdata.filter((item: any) => item.categoryTypeId == "4");
})
function RedirectToItemPage(type: string, data: any) {
  let url = ''
  if (type === 'brand') {
    url = `/brand/${data.id}`;
  } else if (type === 'age') {
    url = `/by-age/${data}`;
  } else if (type === 'offer') {
    url = `/offer-discount/${data}`;
  } else if (type === 'price') {
    url = `/offer-price/${data}`;
  } else if (type === 'page') {
    url = `/item?type=${type}&page=${0}`;
  }
  else if (type === 'categorytype') {
    url = `/category-type?categorytype=${data.id}`;
  }
  else if (type === 'girls') {
    url = `/girls/${data.id}`;
  }
  else if (type === 'boys') {
    url = `/boys/${data.id}`;
  }
  else if (type === 'toys') {
    url = `/toys/${data.id}`;
  }
  else if (type === 'women') {
    url = `/women/${data.id}`;
  }
  else if (type === 'babycare') {
    url = `/baby-care/${data.id}`;
  }
  else if (type === 'rental') {
    url = `/rental?page=${0}`;
  }

  router.push(url)
}

const RedirectBannerItemPage = (section: any, order: any) => {
  let url = ''
  const banner = filteredBanners?.value?.find((x: any) => x?.section === section && x?.order === order);
  console.log(banner)
  if (banner) {
    if (banner?.categoryType === 'offer-discount') {
      url = `/offer-discount/${banner?.price}`;
    } else if (banner?.categoryType === 'offer-price') {
      url = `/offer-price/${banner?.price}`;
    } else if (banner?.categoryType === 'category-type') {
      url = `/category-type?categorytype=${banner?.category}`;
    } else if (banner?.categoryType === 'brand') {
      url = `/brand/${banner?.brandId}`;
    } else if (banner?.categoryType === 'rental') {
      url = `/rental?page=${0}`;
    } else if (banner?.categoryType === 'age') {
      url = `/by-age/${banner?.price}`;
    } else {
      url = `/${banner?.categoryType}/${banner?.categoryId}`;
    }
    router?.push(url);
  }
};


const handleCateClick = (item: any, category: string) => {
  console.log("Clicked:", category, item);
  // Implement navigation or any other action
};
const RedirectToItemDetails = (id: string) => {
  UpdateViewCount(id)
  router.push(`/item/${id}`)
}

const UPDATE_VIEWCOUNT = gql`
  mutation UpdateItemViewCount($itemdetails: ItemInput!) {
    updateItemViewCount(itemdetails: $itemdetails)
  }
`;

const updateViewCount = useMutation(UPDATE_VIEWCOUNT, {
  optimisticResponse: {
    updateItemViewCount: true,
  },
});

const UpdateViewCount = async (itemid: any) => {
  if (authstore?.$state?.recentAuth.id) {
    CreateUserViewCount(itemid)
  }
  try {
    const response = await updateViewCount.mutate({
      itemdetails: {
        id: itemid,
      }
    })
    if (response?.data?.updateItemViewCount) {
      console.log('Item count upaded', response?.data?.updateItemViewCount)
    } else {
      console.log('Item count failed.')
    }
  } catch (error) {
    console.error('Error create wishlist:', error)
  }
}

const CREATE_USERVIEWCOUNT = gql`
  mutation CreateRecommendedItem($item: RecommendedItemInput!) {
    createRecommendedItem(item: $item)
  }
`;

const createRecommendedItem = useMutation(CREATE_USERVIEWCOUNT, {
  optimisticResponse: {
    createRecommendedItem: true,
  },
});

const CreateUserViewCount = async (itemid: any) => {
  try {
    const response = await createRecommendedItem.mutate({
      item: {
        id: '00000000-0000-0000-0000-000000000000',
        itemId: itemid,
        userId: authstore?.$state?.recentAuth.id,
        viewCount: 1
      }
    })
    if (response?.data?.createRecommendedItem) {
      console.log('User Item count upaded', response?.data?.createRecommendedItem)
    } else {
      console.log('User Item count failed.')
    }
  } catch (error) {
    console.error('Error create item:', error)
  }
}

function RedirectToCategoryPage(id: string) {
  router.push(`/subcategory/${id}`)
}

// Swipers configurations
function prodBreakpoints() {
  return {
    640: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    1536: {
      slidesPerView: 6,
      spaceBetween: 16,
    },
  }
}

const getimages = (section: any, order: any) => {
  const banner = filteredBanners?.value?.find((x: any) => x.section === section && x.order === order);
  // return  `/src/assets/bannerimg/${banner.id}.webp`;
  return `${imageBannerPath}/${banner.id}.webp`
};

</script>

<style>
:root {
  --swiper-theme-color: #222;
}
</style>
