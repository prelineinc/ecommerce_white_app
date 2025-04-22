<template>
  <div class="bg-white-100 dark:bg-white-800 pb-8 md:pb-24 px-4">
    <div class="2xl:container mx-auto">
      <BreadCrumComponent :item="productbreadcrum" />
    </div>
    <div class="2xl:container mx-auto mt-5">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="col-span-1 md:col-span-6 xl:col-span-8">
          <div v-if="itemimage !== undefined" class="block md:hidden">
            <swiper-container :slides-per-view="1" :centered-slides="true" :space-between="10" :scrollbar="true">
              <swiper-slide v-if="itemimage?.path1 !== null" @click="openProdGalleryModal">
                <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200">
                  <img class="w-full h-full object-cover"
                    :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path1}`" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide v-if="itemimage?.path2 !== null" @click="openProdGalleryModal">
                <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200">
                  <img class="w-full h-full object-cover"
                    :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path2}`" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide v-if="itemimage?.path3 !== null" @click="openProdGalleryModal">
                <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200">
                  <img class="w-full h-full object-cover"
                    :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path3}`" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide v-if="itemimage?.path4 !== null" @click="openProdGalleryModal">
                <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200">
                  <img class="w-full h-full object-cover"
                    :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path4}`" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide v-if="itemimage?.path5 !== null" @click="openProdGalleryModal">
                <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200">
                  <img class="w-full h-full object-cover"
                    :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path5}`" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide v-if="itemimage?.path6 !== null" @click="openProdGalleryModal">
                <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200">
                  <img class="w-full h-full object-cover"
                    :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path6}`" alt="" />
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
          <div v-else class="block md:hidden">
            <swiper-container :slides-per-view="1" :centered-slides="true" :space-between="10" :scrollbar="true">
              <swiper-slide @click="openProdGalleryModal">
                <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200">
                  <img class="w-full h-full object-cover" :src="`${imagePath}${itemIdUpdated?.item.imagePath}`"
                    alt="" />
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
          <div v-if="itemimage !== undefined" class="hidden md:grid grid-col-1 xl:grid-cols-12 gap-2">
            <div v-if="itemimage?.path1 !== null" class="col-span-1 xl:col-span-6">
              <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200" @click="openProdGalleryModal">
                <img class="w-full h-full object-cover"
                  :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path1}`" alt="" />
              </div>
            </div>
            <div v-if="itemimage?.path2 !== null" class="col-span-1 xl:col-span-6">
              <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200" @click="openProdGalleryModal">
                <img class="w-full h-full object-cover"
                  :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path2}`" alt="" />
              </div>
            </div>
            <div v-if="itemimage?.path3 !== null" class="col-span-1 xl:col-span-6">
              <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200" @click="openProdGalleryModal">
                <img class="w-full h-full object-cover"
                  :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path3}`" alt="" />
              </div>
            </div>
            <div v-if="itemimage?.path4 !== null" class="col-span-1 xl:col-span-6">
              <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200" @click="openProdGalleryModal">
                <img class="w-full h-full object-cover"
                  :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path4}`" alt="" />
              </div>
            </div>
            <div v-if="itemimage?.path5 !== null" class="col-span-1 xl:col-span-6">
              <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200" @click="openProdGalleryModal">
                <img class="w-full h-full object-cover"
                  :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path5}`" alt="" />
              </div>
            </div>
            <div v-if="itemimage?.path6 !== null" class="col-span-1 xl:col-span-6">
              <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200" @click="openProdGalleryModal">
                <img class="w-full h-full object-cover"
                  :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path6}`" alt="" />
              </div>
            </div>
            <a class="p-3 cursor-pointer hover:text-blue-600" title="Similar Items" @click="scrollToSimilarItems">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
              </svg>
            </a>
          </div>
          <div v-else class="hidden md:grid grid-col-1 xl:grid-cols-12 gap-2">
            <div class="col-span-1 xl:col-span-6">
              <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200" @click="openProdGalleryModal">
                <img class="w-full h-full object-cover" :src="`${imagePath}${itemIdUpdated?.item.imagePath}`" alt="" />
              </div>
            </div>
            <div class="col-span-1 xl:col-span-6">
              <div class="md:aspect-h-5 md:aspect-w-5 bg-gray-100 border border-gray-200" @click="openProdGalleryModal">
                <img class="w-full h-full object-cover" :src="`${imagePath}${itemIdUpdated?.item.imagePath}`" alt="" />
              </div>
            </div>
            <div class="col-span-1 xl:col-span-6 text-right">
              <a class="inline-flex p-3 cursor-pointer hover:text-blue-600" title="Similar Items"
                @click="scrollToSimilarItems">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- full screen modal for zoomable images -->
        <transition name="modal">
          <div v-if="showModal"
            class="fixed w-full h-screen inset-0 bg-black/95 flex items-center justify-center pt-10 z-[999]">
            <div v-if="itemimage !== undefined" class="bg-white relative rounded-t-2xl w-full h-full">
              <swiper-container :slides-per-view="1" :centered-slides="true" :navigation="true" :zoom="true"
                :space-between="10" class="absolute inset-0 w-auto h-auto">
                <swiper-slide v-if="itemimage?.path1 !== null">
                  <div class="swiper-zoom-container">
                    <img class="max-w-full max-h-full object-contain"
                      :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path1}`" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide v-if="itemimage?.path2 !== null">
                  <div class="swiper-zoom-container">
                    <img class="max-w-full max-h-full object-contain"
                      :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path2}`" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide v-if="itemimage?.path3 !== null">
                  <div class="swiper-zoom-container">
                    <img class="max-w-full max-h-full object-contain"
                      :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path3}`" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide v-if="itemimage?.path4 !== null">
                  <div class="swiper-zoom-container">
                    <img class="max-w-full max-h-full object-contain"
                      :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path4}`" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide v-if="itemimage?.path5 !== null">
                  <div class="swiper-zoom-container">
                    <img class="max-w-full max-h-full object-contain"
                      :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path5}`" alt="" />
                  </div>
                </swiper-slide>
                <swiper-slide v-if="itemimage?.path6 !== null">
                  <div class="swiper-zoom-container">
                    <img class="max-w-full max-h-full object-contain"
                      :src="`${itemImagePath}${itemimage?.itemId}/${itemimage?.path6}`" alt="" />
                  </div>
                </swiper-slide>
              </swiper-container>
            </div>
            <div v-if="itemimage === undefined" class="bg-white relative rounded-t-2xl w-full h-full">
              <swiper-container :slides-per-view="1" :centered-slides="true" :navigation="true" :zoom="true"
                :space-between="10" class="absolute inset-0 w-auto h-auto">
                <swiper-slide>
                  <div class="swiper-zoom-container">
                    <img class="max-w-full max-h-full object-contain"
                      :src="`${imagePath}${itemIdUpdated?.item.imagePath}`" alt="" />
                  </div>
                </swiper-slide>
              </swiper-container>
            </div>
            <button class="absolute top-0 right-0 p-2 text-white bg-black rounded-md" @click="closeProdGalleryModal()">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </transition>
        <div class="col-span-1 md:col-span-6 xl:col-span-4 relative md:max-w-[500px] lg:max-w-none">
          <div class="sticky top-0">
            <h1 class="text-2xl font-bold text-gray-800 mb-2">
              {{ itemIdUpdated?.item.brand.name }} - {{ itemIdUpdated?.item.name }}
            </h1>
            <div class="flex items-baseline mb-2">
              <div class="mr-3">
                <span v-if="!itemIdUpdated?.item?.isRental" class="text-2xl font-bold text-gray-800">&#8377;{{
                  itemIdUpdated?.item.amount}} </span>
                <span v-else class="text-2xl font-bold text-gray-800">&#8377;{{ ((itemIdUpdated?.item.mrp * 5) /
                  100).toFixed() }} </span>
              </div>
              <div class="mr-3">
                <span class="text-xl line-through text-gray-400">&#8377;{{ itemIdUpdated?.item.mrp }}</span>
              </div>

              <div v-if="!itemIdUpdated?.item?.isRental" class="mr-3">
                <span class="text-sm font-bold uppercase text-red-600">({{ itemIdUpdated?.item.offer }}% OFF)
                </span>
              </div>
            </div>
            <div class="my-1">
              <span class="text-xs text-gray-400">MRP inclusive of all taxes</span>
            </div>
            <div>
              <span v-if="itemIdUpdated?.totalCount !== 0 && !itemIdUpdated?.item?.isRental"
                class="text-orange-600">Only
                <span class="font-bold text-orange-600">{{ itemIdUpdated?.totalCount }}</span> left!
                Grab yours now&nbsp;</span>
              <span v-else-if="itemIdUpdated?.totalCount === 0" class="text-orange-600">Out of Stock</span>
            </div>
            <div class="my-4">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center gap-1">
                <span>{{ averagerating }}</span>
                <span class="text-yellow-500 text-lg">★</span>&VerticalLine;
                <a v-if="itemfeedback?.length == 0" style="cursor: pointer" data-ripple-light="true" data-dialog-target="dialog"
                  class="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-800">
                  <!-- <span class="inline-flex items-center mr-1">
                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[
                      itemfeedback?.length > rating
                        ? 'text-yellow-500'
                        : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0'
                    ]" aria-hidden="true" />
                  </span>
                  <span class="sr-only">{{ reviews.average }} out of 5 stars</span>
                  <span v-if="itemfeedback?.length == 0">0 reviews</span>
                  <span v-else onclick="openModal('modelConfirm')">{{ itemfeedback?.length }}
                    reviews</span> -->
                  <span>0 Review</span>
                </a>
                <a v-else style="cursor: pointer" data-ripple-light="true" data-dialog-target="dialog"
                  class="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-800" 
                  onclick="openModal('modelConfirm')">
                  <span>{{ itemfeedback?.length || 0 }} Reviews</span>
                </a>
              </div>
            </div>
            <!-- <div class="my-4">
              <h3 class="font-bold text-gray-800">Select Color</h3>
              <ul class="list-none mt-2 flex flex-wrap gap-2">
                <li class="inline mr-2">
                  <a class="size-6 rounded-full ring-2 ring-gray-800 ring-offset-2 inline-flex bg-white" title="White"
                    href="#">
                  </a>
                </li>
                <li class="inline mr-2">
                  <a class="size-6 rounded-full ring-1 ring-gray-200 ring-offset-2 inline-flex bg-orange-600"
                    title="Orange" href="#">
                  </a>
                </li>
              </ul>
            </div> -->
            <div class="my-4">
              <div class="row">
                <div class="flex justify-between">
                  <h3 class="font-bold text-gray-800">Select Size</h3>
                  <button type="button" class="underline text-gray-800 hover:text-blue-700 cursor-pointer"
                    onclick="openModal('modelSizeChart')">Size Chart
                  </button>
                </div>
              </div>

              <div class="flex flex-wrap justify-start items-start mt-2">
                <div className="flex flex-col items-center"
                  v-if="itemIdUpdated?.size1Count !== null && itemIdUpdated?.size1Count !== 0">
                  <button @click="selectSize(itemIdUpdated?.size1Navigation, itemIdUpdated?.size1Count)"
                    class="border border-gray-300 py-2 px-4 rounded-full font-bold m-1 text-[13px] lg:text-md" :class="[
                      itemIdUpdated?.size1Navigation?.id === selectedItem
                        ? 'bg-gray-800 text-white'
                        : 'bg-white text-gray-800 hover:bg-gray-300'
                    ]">
                    {{ itemIdUpdated?.size1Navigation?.size }}
                  </button>

                  <div v-if="itemIdUpdated?.size1Count <= 5" className="text-xs text-red-600">
                    <div>{{ itemIdUpdated?.size1Count }} left</div>
                  </div>
                </div>
                <div className="flex flex-col items-center"
                  v-if="itemIdUpdated?.size2Count !== null && itemIdUpdated?.size2Count !== 0">
                  <button @click="selectSize(itemIdUpdated?.size2Navigation, itemIdUpdated?.size2Count)" :class="[
                      itemIdUpdated?.size2Navigation?.id === selectedItem
                        ? 'bg-gray-800 text-white'
                        : 'bg-white text-gray-800 hover:bg-gray-300'
                    ]" class="border border-gray-300 py-2 px-4 rounded-full font-bold m-1 text-[13px] lg:text-md">
                    {{ itemIdUpdated?.size2Navigation?.size }}
                  </button>

                  <div v-if="itemIdUpdated?.size2Count <= 5" className="text-xs text-red-600">
                    <div>{{ itemIdUpdated?.size2Count }} left</div>
                  </div>
                </div>
                <div className="flex flex-col items-center"
                  v-if="itemIdUpdated?.size3Count !== null && itemIdUpdated?.size3Count !== 0">
                  <button @click="selectSize(itemIdUpdated?.size3Navigation, itemIdUpdated?.size3Count)" :class="[
                    itemIdUpdated?.size3Navigation?.id === selectedItem
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-300'
                  ]" class="border border-gray-300 py-2 px-4 rounded-full font-bold m-1 text-[13px] lg:text-md">
                    {{ itemIdUpdated?.size3Navigation?.size }}
                  </button>

                  <div v-if="itemIdUpdated?.size3Count <= 5" className="text-xs text-red-600">
                    <div>{{ itemIdUpdated?.size3Count }} left</div>
                  </div>
                </div>

                <div className="flex flex-col items-center"
                  v-if="itemIdUpdated?.size4Count !== null && itemIdUpdated?.size4Count !== 0">
                  <button @click="selectSize(itemIdUpdated?.size4Navigation, itemIdUpdated?.size4Count)" :class="[
                    itemIdUpdated?.size4Navigation?.id === selectedItem
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-300'
                  ]" class="border border-gray-300 py-2 px-4 rounded-full font-bold m-1 text-[13px] lg:text-md">
                    {{ itemIdUpdated?.size4Navigation?.size }}
                  </button>

                  <div v-if="itemIdUpdated?.size4Count <= 5" className="text-xs text-red-600">
                    <div>{{ itemIdUpdated?.size4Count }} left</div>
                  </div>
                </div>

                <div className="flex flex-col items-center"
                  v-if="itemIdUpdated?.size5Count !== null && itemIdUpdated?.size5Count !== 0">
                  <button @click="selectSize(itemIdUpdated?.size5Navigation, itemIdUpdated?.size5Count)" :class="[
                    itemIdUpdated?.size5Navigation?.id === selectedItem
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-300'
                  ]" class="border border-gray-300 py-2 px-4 rounded-full font-bold m-1 text-[13px] lg:text-md">
                    {{ itemIdUpdated?.size5Navigation?.size }}
                  </button>

                  <div v-if="itemIdUpdated?.size5Count <= 5" className="text-xs text-red-600">
                    <div>{{ itemIdUpdated?.size5Count }} left</div>
                  </div>
                </div>

                <div className="flex flex-col items-center"
                  v-if="itemIdUpdated?.size6Count !== null && itemIdUpdated?.size6Count !== 0">
                  <button @click="selectSize(itemIdUpdated?.size6Navigation, itemIdUpdated?.size6Count)" :class="[
                    itemIdUpdated?.size6Navigation?.id === selectedItem
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-300'
                  ]" class="border border-gray-300 py-2 px-4 rounded-full font-bold m-1 text-[13px] lg:text-md">
                    {{ itemIdUpdated?.size6Navigation?.size }}
                  </button>

                  <div v-if="itemIdUpdated?.size6Count <= 5" className="text-xs text-red-600">
                    <div>{{ itemIdUpdated?.size6Count }} left</div>
                  </div>
                </div>

                <div className="flex flex-col items-center"
                  v-if="itemIdUpdated?.size7Count !== null && itemIdUpdated?.size7Count !== 0">
                  <button @click="selectSize(itemIdUpdated?.size7Navigation, itemIdUpdated?.size7Count)" :class="[
                    itemIdUpdated?.size7Navigation?.id === selectedItem
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-300'
                  ]" class="border border-gray-300 py-2 px-4 rounded-full font-bold m-1 text-[13px] lg:text-md">
                    {{ itemIdUpdated?.size7Navigation?.size }}
                  </button>

                  <div v-if="itemIdUpdated?.size7Count <= 5" className="text-xs text-red-600">
                    <div>{{ itemIdUpdated?.size7Count }} left</div>
                  </div>
                </div>

                <div className="flex flex-col items-center"
                  v-if="itemIdUpdated?.size8Count !== null && itemIdUpdated?.size8Count !== 0">
                  <button @click="selectSize(itemIdUpdated?.size8Navigation, itemIdUpdated?.size8Count)" :class="[
                    itemIdUpdated?.size8Navigation?.id === selectedItem
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-300'
                  ]" class="border border-gray-300 py-2 px-4 rounded-full font-bold m-1 text-[13px] lg:text-md">
                    {{ itemIdUpdated?.size8Navigation?.size }}
                  </button>

                  <div v-if="itemIdUpdated?.size8Count <= 5" className="text-xs text-red-600">
                    <div>{{ itemIdUpdated?.size8Count }} left</div>
                  </div>
                </div>

                <div className="flex flex-col items-center"
                  v-if="itemIdUpdated?.size9Count !== null && itemIdUpdated?.size9Count !== 0">
                  <button @click="selectSize(itemIdUpdated?.size9Navigation, itemIdUpdated?.size9Count)" :class="[
                    itemIdUpdated?.size9Navigation?.id === selectedItem
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-300'
                  ]" class="border border-gray-300 py-2 px-4 rounded-full font-bold m-1 text-[13px] lg:text-md">
                    {{ itemIdUpdated?.size9Navigation?.size }}
                  </button>

                  <div v-if="itemIdUpdated?.size9Count <= 5" className="text-xs text-red-600">
                    <div>{{ itemIdUpdated?.size9Count }} left</div>
                  </div>
                </div>

                <div className="flex flex-col items-center"
                  v-if="itemIdUpdated?.size10Count !== null && itemIdUpdated?.size10Count !== 0">
                  <button @click="selectSize(itemIdUpdated?.size10Navigation, itemIdUpdated?.size10Count)" :class="[
                    itemIdUpdated?.size10Navigation?.id === selectedItem
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-300'
                  ]" class="border border-gray-300 py-2 px-4 rounded-full font-bold m-1 text-[13px] lg:text-md">
                    {{ itemIdUpdated?.size10Navigation?.size }}
                  </button>

                  <div v-if="itemIdUpdated?.size10Count <= 5" className="text-xs text-red-600">
                    <div>{{ itemIdUpdated?.size10Count }} left</div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="itemIdUpdated?.item?.isRental">
              <div class="sm:col-span-2 sm:col-start-1">
                <label for="pincode" class="block text-sm font-medium leading-6 text-gray-500">
                  Check rental availability
                </label>
                <form v-on:submit.prevent="verifyPincode()">
                  <div class="relative mt-2">
                    <input type="text" v-model="pincode" name="pincode" id="pincode" autocomplete="address-level2"
                      placeholder="Enter your pincode"
                      class="block w-full rounded-md border-0 py-2 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" />
                    <button type="submit"
                      class="absolute inset-y-0 right-0 flex items-center rounded-md pl-3 pr-3 bg-yellow-300 text-yellow-700 font-bold border-y border-r border-yellow-500 focus:outline-none hover:text-yellow-900 shadow-md hover:bg-yellow-200 hover:shadow-lg transition-all duration-200 ease-out">
                      Check
                    </button>
                  </div>
                </form>
                <div v-if="isAvailable" class="text-end">
                  <p class="mt-3 text-sm leading-6 text-green-400">
                    &#x2713; Available
                  </p>
                </div>
              </div>
            </div>
            <div v-if="itemIdUpdated?.item?.isRental && isAvailable" class="flex date-range">
              <h4>
                <label for="fromDate" class="block text-sm leading-6 text-gray-500">
                  From:
                </label>
                <input type="date" placeholder="Enter a material" class="placeholder:text-gray-400" id="fromDate"
                  v-model="fromDate" :min="minDate" />
              </h4>
              <h4>
                <label for="fromDate" class="block text-sm leading-6 text-gray-500">
                  To:
                </label>
                <input type="date" id="toDate" v-model="toDate" :min="toMinDate" :max="maxDate" :disabled="!fromDate" />
              </h4>
            </div>

            <div v-if="itemIdUpdated?.item?.isRental && expectedreturn && isAvailable"
              className="m-2 pt-3 text-xs text-gray-500">
              <p className="font-bold text-xs text-gray-700 mb-2">
                Delivery Info
              </p>
              <ul className="list-disc pl-5">
                <li>You have rented the item for {{ days }} days.</li>
                <li>
                  Your order will be delivered on
                  {{ new Date(fromDate).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  }) }}
                  after 12:00 PM.
                </li>
                <li>
                  The item will be collected on
                  {{ new Date(expectedreturn).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  }) }}
                  after 12:00 PM.
                </li>
              </ul>
            </div>

            <div class="flex -mx-2 py-4 bg-white sticky top-0">
              <div class="w-full xl:w-1/2 p-2" v-if="itemIdUpdated?.totalCount > 0">
                <button v-if="!isCart"
                  @click="!itemIdUpdated?.item?.isRental ? AddToCart(itemIdUpdated?.item) : AddToRentalCart(itemIdUpdated?.item)"
                  class="w-full h-12 lg:h-16 inline-flex items-center justify-center bg-yellow-300 text-yellow-900 border border-yellow-500 py-2 px-4 rounded-full font-bold shadow-md hover:bg-yellow-200 hover:text-yellow-1000 hover:shadow-lg transition-all duration-200 ease-out">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6 flex-shrink-0">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z">
                      </path>
                    </svg>
                  </span>
                  <span class="font-bold pl-3">Add to Bag</span>
                </button>
                <button v-else @click="ShowCartItem"
                  class="w-full h-12 lg:h-16 inline-flex items-center justify-center group bg-yellow-200 text-yellow-800 border border-yellow-300 py-2 px-4 rounded-full font-bold shadow-md hover:bg-yellow-200 hover:text-yellow-800 hover:border-yellow-500 transition-colors duration-200 ease-out">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true" data-slot="icon"
                      class="h-6 w-6 fill-yellow-500 flex-shrink-0">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z">
                      </path>
                    </svg>
                  </span>
                  <span class="font-bold pl-3">Go to Bag</span>
                </button>
              </div>
              <div class="w-full xl:w-1/2 p-2">
                <button v-if="!isWishlisted" @click="RemoveWishlist(itemIdUpdated?.item)"
                  class="w-full h-12 lg:h-16 inline-flex items-center justify-center bg-orange-100 group border border-orange-300 text-orange-800 py-2 px-4 rounded-full font-bold shadow-md hover:bg-orange-50 hover:text-orange-1000 hover:shadow-lg transition-colors duration-200 ease-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 group-hover:fill-orange-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  <span class="font-bold pl-3">Add to Wishlist</span>
                </button>
                <button v-else @click="RemoveWishlist(itemIdUpdated?.item)"
                  class="w-full h-12 lg:h-16 inline-flex items-center justify-center group border border-orange-300 bg-orange-200 text-orange-800 py-2 px-4 rounded-full font-bold shadow-md hover:bg-orange-200 hover:text-orange-800 hover:border-orange-500 transition-colors duration-200 ease-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 fill-orange-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  <span class="font-bold pl-3">Wishlisted</span>
                </button>
              </div>
            </div>

            <div v-if="!itemIdUpdated?.item?.isRental" class="my-4">
              <h3 class="font-bold text-gray-800 mb-3">Available Offers (1)</h3>
              <ul class="flex flex-col gap-2">
                <!-- <li class="text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    data-lucide="tag"
                    class="lucide lucide-tag inline-block w-4 h-4 text-green-500 ltr:mr-1 rtl:ml-1 fill-green-200 dark:fill-green-500/20">
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                    <path d="M7 7h.01"></path>
                  </svg>
                  <span class="font-semibold pl-2">Bank Offer</span> 10% Instant Discount on Paypal,
                  up to &#8377;1250 on orders of &#8377;5,000 and above
                  <a href="#" class="underline">T&amp;C</a>
                </li>
                <li class="text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    data-lucide="tag"
                    class="lucide lucide-tag inline-block w-4 h-4 text-green-500 ltr:mr-1 rtl:ml-1 fill-green-200 dark:fill-green-500/20">
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                    <path d="M7 7h.01"></path>
                  </svg>
                  <span class="font-semibold pl-2">Special Price</span> Get at flat &#8377;199
                  <a href="#" class="underline">T&amp;C</a>
                </li> -->
                <li class="text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    data-lucide="tag"
                    class="lucide lucide-tag inline-block w-4 h-4 text-green-500 ltr:mr-1 rtl:ml-1 fill-green-200 dark:fill-green-500/20">
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                    <path d="M7 7h.01"></path>
                  </svg>
                  <span class="font-semibold pl-2">Online Payment:</span>
                  A fee &#8377;50 applies for Cash on Delivery orders. Avoid the fee by paying online and enjoy a
                  seamless checkout experience.
                  <a href="/termscondition" class="underline">T&amp;C</a>
                </li>
              </ul>
            </div>
            <div v-else className="bg-white ">
              <div className="mb-1">
                <h3 className="font-bold text-gray-800 mb-2">Rental Guidelines</h3>
                <ul className="list-disc text-gray-600 text-sm pl-5">
                  <!-- {/* <li>The rental amount is calculated as 5% of the MRP per day.</li> */} -->
                  <li>
                    An advance payment of 50% of the product's total amount is
                    required.
                  </li>
                  <li>
                    If any damage occurs upon return, the cost of the damage will be
                    charged based on the extent of the damage.
                  </li>
                </ul>
              </div>
            </div>

            <div class="my-8">
              <h3 class="font-bold text-gray-800 mb-2">Description</h3>
              <p class="text-gray-600 text-sm mb-3" :style="{ whiteSpace: 'pre-line' }">
                <span>{{ productDetails?.details }}</span><br />
              </p>
            </div>
            <div class="my-8">
              <h3 class="font-bold text-gray-800 mb-2">Features</h3>
              <table class="w-full text-start">
                <tbody>
                  <!-- <tr class="bg-white dark:bg-slate-900">
                    <td class="text-slate-500 font-semibold pb-3" style="width: 100px;">Color</td>
                    <td class="text-slate-500 pb-3">{{ itemIdUpdated?.item?.color }}</td>
                  </tr> -->
                  <tr v-if="productDetails?.material" class="border-t border-gray-100">
                    <td class="text-slate-500 font-semibold pt-3">Material</td>
                    <td class="text-slate-500 pt-3 pl-3">{{ productDetails?.material }}</td>
                  </tr>
                  <tr v-if="itemIdUpdated?.item?.fit" class="border-t border-gray-100">
                    <td class="text-slate-500 font-semibold pt-3">Fit</td>
                    <td class="text-slate-500 pt-3 pl-3">{{ itemIdUpdated?.item?.fit }}</td>
                  </tr>
                  <tr class="border-t border-gray-100" v-if="productDetails?.care">
                    <td class="text-slate-500 font-semibold pt-3">Care</td>
                    <td class="text-slate-500 pt-3 pl-3">{{ productDetails?.care }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="my-8">
              <h3 class="font-bold text-gray-800 mb-2">Shipping and Returns</h3>
              <p class="text-gray-600 text-sm">
                Free return for all qualifying orders within 7 days of your order delivery date.
                Visit our
                <a :href="'/returnpolicy'" class="text-gray-800 underline">Return Policy</a> for
                more information.
              </p>
            </div>

            <div class="my-8">
              <div class="flex items-center justify-between">
                <h3 class="font-bold text-gray-800 my-2">Ratings & Reviews</h3>
                <div
                  class="px-3.5 py-1.5 inline-flex items-center gap-3 text-xs font-medium rounded-full border bg-slate-100 border-slate-100 text-slate-500 dark:bg-zink-800 dark:text-zink-400 dark:border-zink-800">
                  <!-- <span class="inline-flex items-center mr-3">
                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[
                      itemfeedback?.length > rating
                        ? 'text-yellow-500'
                        : 'text-slate-300',
                      'h-4 w-4 flex-shrink-0'
                    ]" aria-hidden="true" />
                  </span> -->
                  <span class="text-yellow-500 text-lg">★</span>
                  <span>{{ averagerating }} / 5 rating</span>&VerticalLine;
                  <span>{{ itemfeedback?.length }} reviews</span>
                </div>
              </div>
              <div class="mt-8">
                <div v-for="feedback of itemfeedback" :key="feedback?.id" class="mb-4 border-b pb-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <img src="../../assets/user-1.jpg" class="h-8 w-8 rounded-full border" alt="" />
                      <div class="ms-3 flex-1 text-left">
                        <a class="font-semibold">{{ feedback.user.name }}</a>
                        <!-- <p class="text-xs text-gray-400">13th March 2024 at 01:00 pm</p> -->
                        <p class="text-xs text-gray-400">{{ formatDate(feedback.createdOn) }}</p>
                      </div>
                    </div>
                    <div>
                      <span class="inline-flex items-center ml-3">
                        <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[
                          feedback.rating > rating
                            ? 'text-yellow-500'
                            : 'text-gray-200',
                          'h-4 w-4 flex-shrink-0'
                        ]" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div class="mt-4">
                    <p class="text-gray-500 italic">
                      " {{ feedback.comments }}"
                    </p>
                  </div>
                </div>

                <div class="mt-5 flex justify-between">
                  <template v-if="itemIdUpdated?.item?.feedbacks?.length > 4">
                    <button type="button"
                      class="bg-gray-100 font-bold text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 hover:text-gray-600 transition duration-200 ease-out">
                      View all reviews
                    </button>
                  </template>
                  <!-- <button type="button"
                    class="bg-gray-100 font-bold text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 hover:text-gray-900 transition duration-200 ease-out">
                    Write a review
                  </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="bg-white">
    <div class="mx-auto container px-4 py-4 sm:py-12">
      <h2 class="sm:text-3xl text-xl font-bold text-gray-800 mb-6">Similar products</h2>

      <swiper-container
        :slides-per-view="6"
        :space-between="16"
        :navigation="true"
        :breakpoints="prodBreakpoints()"
      >
        <swiper-slide v-for="(x, index) of itemByOffer?.itemsByOffer" :key="x">
          <div class="group relative cursor-pointer">
            <div
              class="relative overflow-hidden shadow group-hover:shadow-lg rounded-md duration-300"
            >
              <div
                class="aspect-h-4 aspect-w-4 w-full max-h-60 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75"
              >
                <img
                  :src="`${imagePath}${x.imagePath}`"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-xs lg:text-sm xl:text-base font-medium">
                <a
                  @click="RedirectToItemDetails(x.id)"
                  class="group-hover:text-blue-600 group-hover:no-underline"
                >
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ x.name }}
                </a>
              </h3>
              <p class="mt-2 mb-0">
                <span class="text-xs lg:text-sm text-gray-900 font-bold mr-2"
                  >Rs.{{ x?.amount }}</span
                >
                <span class="text-xs lg:text-sm text-gray-500 line-through">Rs.{{ x?.mrp }}</span>
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div> -->

  <div v-if="itemsByCategory?.itemsByCategoryId.length > 0" id="similarItemsSection" class="bg-gray-50">
    <div class="2xl:container mx-auto px-4 py-4 sm:py-12">
      <h3 class="sm:text-1xl text-xl font-bold text-gray-800 mb-6">Similar Items</h3>

      <swiper-container :slides-per-view="3" :space-between="16" :navigation="true" :breakpoints="prodBreakpoints()">
        <swiper-slide v-for="(x, index) of itemsByCategory?.itemsByCategoryId" :key="x">
          <div class="group relative cursor-pointer">
            <div class="relative overflow-hidden shadow group-hover:shadow-lg rounded-md duration-300">
              <div
                class="aspect-h-4 aspect-w-4 w-full max-h-60 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img :src="`${imagePath}${x.imagePath}`" class="h-full w-full object-cover object-center" />
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-xs lg:text-sm xl:text-base font-medium">
                <a @click="RedirectToItemDetails(x.id)" class="group-hover:text-blue-600 group-hover:no-underline">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ x.name }}
                </a>
              </h3>
              <p class="mt-2 mb-0">
                <span class="text-xs lg:text-sm text-gray-900 font-bold mr-2">Rs.{{ x?.amount }}</span>
                <span class="text-xs lg:text-sm text-gray-500 line-through">Rs.{{ x?.mrp }}</span>
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>

  <div v-if="recommendedItemDetails.length > 0" class="bg-gray-50">
    <div class="2xl:container mx-auto px-4 py-4 sm:py-12">
      <h3 class="sm:text-1xl text-xl font-bold text-gray-800 mb-6">Recently Viewed</h3>

      <swiper-container :slides-per-view="3" :space-between="16" :navigation="true" :breakpoints="prodBreakpoints()">
        <swiper-slide v-for="(x) of recommendedItemDetails" :key="x">
          <div class="group relative cursor-pointer">
            <div class="relative overflow-hidden shadow group-hover:shadow-lg rounded-md duration-300">
              <div
                class="aspect-h-4 aspect-w-4 w-full max-h-60 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img :src="`${imagePath}${x.item.imagePath}`" class="h-full w-full object-cover object-center" />
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-xs lg:text-sm xl:text-base font-medium">
                <a @click="RedirectToItemDetails(x.item.id)" class="group-hover:text-blue-600 group-hover:no-underline">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ x.item.name }}
                </a>
              </h3>
              <p class="mt-2 mb-0">
                <span class="text-xs lg:text-sm text-gray-900 font-bold mr-2">Rs.{{ x.item.amount }}</span>
                <span class="text-xs lg:text-sm text-gray-500 line-through">Rs.{{ x.item.mrp }}</span>
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>

  <div id="modelConfirm" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
    <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
      <div class="flex justify-end p-2">
        <button onclick="closeModal('modelConfirm')" type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>

      <div class="py-2 text-center">
        <div>
          <div class="mb-4 border-b pb-3">
            <swiper-container :slides-per-view="1" :space-between="15" :navigation="true"
              :breakpoints="customBreakpoints()">
              <swiper-slide v-for="(x, index) of itemfeedback" :key="x">
                <div class="mb-6 px-7 flex items-center justify-between text-left">
                  <div class="flex items-center">
                    <img src="../../assets/user-1.jpg" class="h-8 w-8 rounded-full border" alt="" />
                    <div class="ms-3 flex-1 text-left">
                      <a class="font-semibold">{{ x.user.name }}</a>
                      <p class="text-xs text-gray-400">{{ formatDate(x.createdOn) }}</p>
                    </div>
                  </div>
                  <div>
                    <span class="inline-flex items-center ml-3">
                      <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[
                        x.rating > rating
                          ? 'text-yellow-500'
                          : 'text-gray-200',
                        'h-4 w-4 flex-shrink-0'
                      ]" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div class="mt-4">
                  <p class="text-gray-500 italic">
                    " {{ x.comments }}"
                  </p>
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="modelSizeChart"
    class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
    <div class="relative custom-height mx-auto shadow-xl rounded-md bg-white custom-size">
      <div class="flex justify-between items-center p-4">
        <div class="font-bold text-base">Size Chart</div>
        <button onclick="closeModal('modelSizeChart')" type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>

      <div class="p-4 pt-0">
        <!-- <p class="text-gray-500 italic">
              {{itemIdUpdated}}
            </p> -->
        <p class="mb-3 text-gray-700"><strong>Not sure about your size?</strong> Use our size chart to find the perfect
          fit.</p>
        <div class="max-w-full overflow-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-200">
              <tr>
                <th scope="col" class="px-3 py-3 text-start text-xs font-medium text-gray-700 uppercase">size </th>
                <th v-if="itemIdUpdated?.size1Navigation?.waist !== null" scope="col"
                  class="px-3 py-3 text-start text-xs font-medium text-gray-700 uppercase">waist </th>
                <th v-if="itemIdUpdated?.size1Navigation?.inseam !== null" scope="col"
                  class="px-3 py-3 text-start text-xs font-medium text-gray-700 uppercase">inseam </th>
                <th v-if="itemIdUpdated?.size1Navigation?.rise !== null" scope="col"
                  class="px-3 py-3 text-start text-xs font-medium text-gray-700 uppercase">rise </th>
                <th v-if="itemIdUpdated?.size1Navigation?.outseam !== null" scope="col"
                  class="px-3 py-3 text-start text-xs font-medium text-gray-700 uppercase">outseam </th>
                <th v-if="itemIdUpdated?.size1Navigation?.skirt !== null" scope="col"
                  class="px-3 py-3 text-start text-xs font-medium text-gray-700 uppercase">skirt </th>
                <th v-if="itemIdUpdated?.size1Navigation?.bust !== null" scope="col"
                  class="px-3 py-3 text-start text-xs font-medium text-gray-700 uppercase">bust </th>
                <th v-if="itemIdUpdated?.size1Navigation?.hip !== null" scope="col"
                  class="px-3 py-3 text-start text-xs font-medium text-gray-700 uppercase">hip </th>
                <th v-if="itemIdUpdated?.size1Navigation?.front !== null" scope="col"
                  class="px-3 py-3 text-start text-xs font-medium text-gray-700 uppercase">front </th>
                <th v-if="itemIdUpdated?.size1Navigation?.kidsHeight !== null" scope="col"
                  class="px-3 py-3 text-start text-xs font-medium text-gray-700 uppercase">kids Height </th>
                <th v-if="itemIdUpdated?.size1Navigation?.kidsWeight !== null" scope="col"
                  class="px-3 py-3 text-start text-xs font-medium text-gray-700 uppercase">kids Weight </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-if="itemIdUpdated?.size1Navigation !== null">
                <td class="px-3 py-4 font-medium text-start text-sm text-gray-800">{{
                  itemIdUpdated?.size1Navigation?.size
                  }}</td>
                <td v-if="itemIdUpdated?.size1Navigation?.waist !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size1Navigation?.waist }}</td>
                <td v-if="itemIdUpdated?.size1Navigation?.inseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size1Navigation?.inseam }}</td>
                <td v-if="itemIdUpdated?.size1Navigation?.rise !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size1Navigation?.rise }}</td>
                <td v-if="itemIdUpdated?.size1Navigation?.outseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size1Navigation?.outseam }}</td>
                <td v-if="itemIdUpdated?.size1Navigation?.skirt !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size1Navigation?.skirt }}</td>
                <td v-if="itemIdUpdated?.size1Navigation?.bust !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size1Navigation?.bust }}</td>
                <td v-if="itemIdUpdated?.size1Navigation?.hip !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size1Navigation?.hip }}</td>
                <td v-if="itemIdUpdated?.size1Navigation?.front !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size1Navigation?.front }}</td>
                <td v-if="itemIdUpdated?.size1Navigation?.kidsHeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size1Navigation?.kidsHeight }}</td>
                <td v-if="itemIdUpdated?.size1Navigation?.kidsWeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size1Navigation?.kidsWeight }}</td>
              </tr>
              <tr v-if="itemIdUpdated?.size2Navigation !== null">
                <td class="px-3 py-4 font-medium text-start text-sm text-gray-800">{{
                  itemIdUpdated?.size2Navigation?.size
                  }}</td>
                <td v-if="itemIdUpdated?.size2Navigation?.waist !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size2Navigation?.waist }}</td>
                <td v-if="itemIdUpdated?.size2Navigation?.inseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size2Navigation?.inseam }}</td>
                <td v-if="itemIdUpdated?.size2Navigation?.rise !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size2Navigation?.rise }}</td>
                <td v-if="itemIdUpdated?.size2Navigation?.outseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size2Navigation?.outseam }}</td>
                <td v-if="itemIdUpdated?.size2Navigation?.skirt !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size2Navigation?.skirt }}</td>
                <td v-if="itemIdUpdated?.size2Navigation?.bust !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size2Navigation?.bust }}</td>
                <td v-if="itemIdUpdated?.size2Navigation?.hip !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size2Navigation?.hip }}</td>
                <td v-if="itemIdUpdated?.size2Navigation?.front !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size2Navigation?.front }}</td>
                <td v-if="itemIdUpdated?.size2Navigation?.kidsHeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size2Navigation?.kidsHeight }}</td>
                <td v-if="itemIdUpdated?.size2Navigation?.kidsWeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size2Navigation?.kidsWeight }}</td>

              </tr>
              <tr v-if="itemIdUpdated?.size3Navigation !== null">
                <td class="px-3 py-4 font-medium text-start text-sm text-gray-800">{{
                  itemIdUpdated?.size3Navigation?.size
                  }}</td>
                <td v-if="itemIdUpdated?.size3Navigation?.waist !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size3Navigation?.waist }}</td>
                <td v-if="itemIdUpdated?.size3Navigation?.inseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size3Navigation?.inseam }}</td>
                <td v-if="itemIdUpdated?.size3Navigation?.rise !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size3Navigation?.rise }}</td>
                <td v-if="itemIdUpdated?.size3Navigation?.outseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size3Navigation?.outseam }}</td>
                <td v-if="itemIdUpdated?.size3Navigation?.skirt !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size3Navigation?.skirt }}</td>
                <td v-if="itemIdUpdated?.size3Navigation?.bust !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size3Navigation?.bust }}</td>
                <td v-if="itemIdUpdated?.size3Navigation?.hip !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size3Navigation?.hip }}</td>
                <td v-if="itemIdUpdated?.size3Navigation?.front !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size3Navigation?.front }}</td>
                <td v-if="itemIdUpdated?.size3Navigation?.kidsHeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size3Navigation?.kidsHeight }}</td>
                <td v-if="itemIdUpdated?.size3Navigation?.kidsWeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size3Navigation?.kidsWeight }}</td>
              </tr>
              <tr v-if="itemIdUpdated?.size4Navigation !== null">
                <td class="px-3 py-4 font-medium text-start text-sm text-gray-800">{{
                  itemIdUpdated?.size4Navigation?.size
                  }}</td>
                <td v-if="itemIdUpdated?.size4Navigation?.waist !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size4Navigation?.waist }}</td>
                <td v-if="itemIdUpdated?.size4Navigation?.inseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size4Navigation?.inseam }}</td>
                <td v-if="itemIdUpdated?.size4Navigation?.rise !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size4Navigation?.rise }}</td>
                <td v-if="itemIdUpdated?.size4Navigation?.outseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size4Navigation?.outseam }}</td>
                <td v-if="itemIdUpdated?.size4Navigation?.skirt !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size4Navigation?.skirt }}</td>
                <td v-if="itemIdUpdated?.size4Navigation?.bust !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size4Navigation?.bust }}</td>
                <td v-if="itemIdUpdated?.size4Navigation?.hip !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size4Navigation?.hip }}</td>
                <td v-if="itemIdUpdated?.size4Navigation?.front !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size4Navigation?.front }}</td>
                <td v-if="itemIdUpdated?.size4Navigation?.kidsHeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size4Navigation?.kidsHeight }}</td>
                <td v-if="itemIdUpdated?.size4Navigation?.kidsWeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size4Navigation?.kidsWeight }}</td>
              </tr>
              <tr v-if="itemIdUpdated?.size5Navigation !== null">
                <td class="px-3 py-4 font-medium text-start text-sm text-gray-800">{{
                  itemIdUpdated?.size5Navigation?.size
                  }}</td>
                <td v-if="itemIdUpdated?.size5Navigation?.waist !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size5Navigation?.waist }}</td>
                <td v-if="itemIdUpdated?.size5Navigation?.inseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size5Navigation?.inseam }}</td>
                <td v-if="itemIdUpdated?.size5Navigation?.rise !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size5Navigation?.rise }}</td>
                <td v-if="itemIdUpdated?.size5Navigation?.outseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size5Navigation?.outseam }}</td>
                <td v-if="itemIdUpdated?.size5Navigation?.skirt !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size5Navigation?.skirt }}</td>
                <td v-if="itemIdUpdated?.size5Navigation?.bust !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size5Navigation?.bust }}</td>
                <td v-if="itemIdUpdated?.size5Navigation?.hip !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size5Navigation?.hip }}</td>
                <td v-if="itemIdUpdated?.size5Navigation?.front !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size5Navigation?.front }}</td>
                <td v-if="itemIdUpdated?.size5Navigation?.kidsHeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size5Navigation?.kidsHeight }}</td>
                <td v-if="itemIdUpdated?.size5Navigation?.kidsWeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size5Navigation?.kidsWeight }}</td>
              </tr>
              <tr v-if="itemIdUpdated?.size6Navigation !== null">
                <td class="px-3 py-4 font-medium text-start text-sm text-gray-800">{{
                  itemIdUpdated?.size6Navigation?.size
                  }}</td>
                <td v-if="itemIdUpdated?.size6Navigation?.waist !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size6Navigation?.waist }}</td>
                <td v-if="itemIdUpdated?.size6Navigation?.inseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size6Navigation?.inseam }}</td>
                <td v-if="itemIdUpdated?.size6Navigation?.rise !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size6Navigation?.rise }}</td>
                <td v-if="itemIdUpdated?.size6Navigation?.outseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size6Navigation?.outseam }}</td>
                <td v-if="itemIdUpdated?.size6Navigation?.skirt !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size6Navigation?.skirt }}</td>
                <td v-if="itemIdUpdated?.size6Navigation?.bust !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size6Navigation?.bust }}</td>
                <td v-if="itemIdUpdated?.size6Navigation?.hip !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size6Navigation?.hip }}</td>
                <td v-if="itemIdUpdated?.size6Navigation?.front !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size6Navigation?.front }}</td>
                <td v-if="itemIdUpdated?.size6Navigation?.kidsHeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size6Navigation?.kidsHeight }}</td>
                <td v-if="itemIdUpdated?.size6Navigation?.kidsWeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size6Navigation?.kidsWeight }}</td>
              </tr>
              <tr v-if="itemIdUpdated?.size7Navigation !== null">
                <td class="px-3 py-4 font-medium text-start text-sm text-gray-800">{{
                  itemIdUpdated?.size7Navigation?.size
                  }}</td>
                <td v-if="itemIdUpdated?.size7Navigation?.waist !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size7Navigation?.waist }}</td>
                <td v-if="itemIdUpdated?.size7Navigation?.inseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size7Navigation?.inseam }}</td>
                <td v-if="itemIdUpdated?.size7Navigation?.rise !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size7Navigation?.rise }}</td>
                <td v-if="itemIdUpdated?.size7Navigation?.outseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size7Navigation?.outseam }}</td>
                <td v-if="itemIdUpdated?.size7Navigation?.skirt !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size7Navigation?.skirt }}</td>
                <td v-if="itemIdUpdated?.size7Navigation?.bust !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size7Navigation?.bust }}</td>
                <td v-if="itemIdUpdated?.size7Navigation?.hip !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size7Navigation?.hip }}</td>
                <td v-if="itemIdUpdated?.size7Navigation?.front !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size7Navigation?.front }}</td>
                <td v-if="itemIdUpdated?.size7Navigation?.kidsHeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size7Navigation?.kidsHeight }}</td>
                <td v-if="itemIdUpdated?.size7Navigation?.kidsWeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size7Navigation?.kidsWeight }}</td>
              </tr>
              <tr v-if="itemIdUpdated?.size8Navigation !== null">
                <td class="px-3 py-4 font-medium text-start text-sm text-gray-800">{{
                  itemIdUpdated?.size8Navigation?.size
                  }}</td>
                <td v-if="itemIdUpdated?.size8Navigation?.waist !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size8Navigation?.waist }}</td>
                <td v-if="itemIdUpdated?.size8Navigation?.inseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size8Navigation?.inseam }}</td>
                <td v-if="itemIdUpdated?.size8Navigation?.rise !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size8Navigation?.rise }}</td>
                <td v-if="itemIdUpdated?.size8Navigation?.outseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size8Navigation?.outseam }}</td>
                <td v-if="itemIdUpdated?.size8Navigation?.skirt !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size8Navigation?.skirt }}</td>
                <td v-if="itemIdUpdated?.size8Navigation?.bust !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size8Navigation?.bust }}</td>
                <td v-if="itemIdUpdated?.size8Navigation?.hip !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size8Navigation?.hip }}</td>
                <td v-if="itemIdUpdated?.size8Navigation?.front !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size8Navigation?.front }}</td>
                <td v-if="itemIdUpdated?.size8Navigation?.kidsHeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size8Navigation?.kidsHeight }}</td>
                <td v-if="itemIdUpdated?.size8Navigation?.kidsWeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size8Navigation?.kidsWeight }}</td>
              </tr>
              <tr v-if="itemIdUpdated?.size9Navigation !== null">
                <td class="px-3 py-4 font-medium text-start text-sm text-gray-800">{{
                  itemIdUpdated?.size9Navigation?.size
                  }}</td>
                <td v-if="itemIdUpdated?.size9Navigation?.waist !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size9Navigation?.waist }}</td>
                <td v-if="itemIdUpdated?.size9Navigation?.inseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size9Navigation?.inseam }}</td>
                <td v-if="itemIdUpdated?.size9Navigation?.rise !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size9Navigation?.rise }}</td>
                <td v-if="itemIdUpdated?.size9Navigation?.outseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size9Navigation?.outseam }}</td>
                <td v-if="itemIdUpdated?.size9Navigation?.skirt !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size9Navigation?.skirt }}</td>
                <td v-if="itemIdUpdated?.size9Navigation?.bust !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size9Navigation?.bust }}</td>
                <td v-if="itemIdUpdated?.size9Navigation?.hip !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size9Navigation?.hip }}</td>
                <td v-if="itemIdUpdated?.size9Navigation?.front !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size9Navigation?.front }}</td>
                <td v-if="itemIdUpdated?.size9Navigation?.kidsHeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size9Navigation?.kidsHeight }}</td>
                <td v-if="itemIdUpdated?.size9Navigation?.kidsWeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size9Navigation?.kidsWeight }}</td>
              </tr>
              <tr v-if="itemIdUpdated?.size10Navigation !== null">
                <td class="px-3 py-4 font-medium text-start text-sm text-gray-800">{{
                  itemIdUpdated?.size10Navigation?.size }}</td>
                <td v-if="itemIdUpdated?.size10Navigation?.waist !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size10Navigation?.waist }}</td>
                <td v-if="itemIdUpdated?.size10Navigation?.inseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size10Navigation?.inseam }}</td>
                <td v-if="itemIdUpdated?.size10Navigation?.rise !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size10Navigation?.rise }}</td>
                <td v-if="itemIdUpdated?.size10Navigation?.outseam !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size10Navigation?.outseam }}</td>
                <td v-if="itemIdUpdated?.size10Navigation?.skirt !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size10Navigation?.skirt }}</td>
                <td v-if="itemIdUpdated?.size10Navigation?.bust !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size10Navigation?.bust }}</td>
                <td v-if="itemIdUpdated?.size10Navigation?.hip !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size10Navigation?.hip }}</td>
                <td v-if="itemIdUpdated?.size10Navigation?.front !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size10Navigation?.front }}</td>
                <td v-if="itemIdUpdated?.size10Navigation?.kidsHeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size10Navigation?.kidsHeight }}</td>
                <td v-if="itemIdUpdated?.size10Navigation?.kidsWeight !== null"
                  class="px-3 py-4 whitespace-nowrap text-sm text-start text-gray-800">
                  {{ itemIdUpdated?.size10Navigation?.kidsWeight }}</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div id="modalSelectSize"
    class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
    <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
      <div class="flex justify-between items-center p-4">
        <div class="font-bold text-base">{{ modelheader }}</div>
        <button onclick="closeModal('modalSelectSize')" type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>

      <div class="px-4 pb-5">
        <div class="flex items-center">
          <ExclamationCircleIcon class="w-6 h-6 text-orange-600" aria-hidden="true" />
          <div class="flex-1 pt-1 pl-2 text-gray-800">
            {{ modelmessage }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="modalRemove" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
    role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" tabindex="-1">
    <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
      <div class="flex justify-between items-center p-4">
        <div class="font-bold text-lg text-gray-900">Please confirm</div>
        <button onclick="closeModal('modalRemove')" type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>

      <div class="flex items-center">
        <div class="ml-4 text-gray-800">
          If you want to clear the cart, please confirm!
        </div>
      </div>
      <div class="flex justify-end items-center p-4 gap-2">
        <div class="flex justify-end items-center p-4 gap-2">
          <button onclick="closeModal('modalRemove')" type="button"
            class="text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm px-4 py-2">
            No, keep it
          </button>
          <button onclick="handleClearCart(), closeModal('modalRemove')" type="button"
            class="text-white bg-red-600 hover:bg-red-700 rounded-lg text-sm px-4 py-2">
            Yes, Clear
          </button>
        </div>
      </div>
    </div>
  </div>
  <CartComponent :openModal="isCartCheckout" :key="currentTime" />
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, watch, watchEffect } from 'vue'
import { ExclamationCircleIcon, StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { useRoute, useRouter } from 'vue-router'
import { useGetItemAvailableById, useGetUserRecommendedItem } from '../../api/user/item'
import type { Item } from '../../types/user/item'
import { useGetItemByOffer, useGetItems } from '../../api/user/item'
import { imagePath, itemImagePath } from '../../constant/commonPath'
import { useCartStore } from '../../stores/user/cartstore'
import { useWishlistStore } from '../../stores/user/wishliststore'
import { CartStoreType } from '../../types/user/cartStore'
import { WishlistStoreType } from '../../types/user/wishlistStore'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { register } from 'swiper/element/bundle'
import { BreadCrumComponent } from '../../components/user/index'
import CartComponent from '@/components/user/CartComponent.vue'
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@vue/apollo-composable'
import { formatDate } from '../../utility/dateFormat';
import { useAuthStore } from '../../stores/authstore';
import { useGetWishListByUserId } from '@/api/user/wishlist'
const authstore = useAuthStore();
const showModal = ref(false)
const currentSlide = ref(null)
const isCartCheckout = ref(false)

const firstModal = ref(true)
const pincode = ref('');
const checkPin = ref('')
const isAvailable = ref(false)
const today = new Date().toISOString().split('T')[0];
const modelheader = ref('')
const modelmessage = ref('')
const fromDate = ref<string>('')
const toDate = ref<string>('')
const days = ref<string>('')
const expectedreturn = ref<string>('')
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1);
const minDate: string = currentDate.toISOString().split('T')[0];
const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0];

const theme = ref('bg-gray-800')
register()
const source = ref([
  '/Images/Example.jpg',
  'https://i.imgur.com/fsyrScY.jpg',
  'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
])

// alert(source.value);
const { result: itemData } = useGetItems(1)

const route = useRoute()
console.log('route', route.params.id)
const router = useRouter()
const thumbsSwiper = ref(null)
const modules = ref([FreeMode, Navigation, Thumbs])
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const $mq = (query) => {
  console.log(window.matchMedia(query))
  return window.matchMedia(query).matches
}

const { result: data, refetch: refetchItemById, loading } = useGetItemAvailableById(route.params.id)
const { result: recommendeddata, refetch: refetchRecommendedItem, loading: recommendedloading } = useGetUserRecommendedItem(authstore?.$state?.recentAuth.id)
const { result: wishlistData, refetch: refetchWishlistData, loading: wishlistLoading } = useGetWishListByUserId(authstore?.$state?.recentAuth.id)
console.log('itemdata', data)
const itemIdUpdated = computed(() => data?.value?.itemAvailablesByItemId)
console.log('itemdataupdate', itemIdUpdated)
const categoryId = computed(() => itemIdUpdated.value?.item?.category?.id)
const productDetails = ref(null)
const recommendedItemDetails = ref<any>([])
const itemimage = computed(() => itemIdUpdated.value?.item?.itemImages[0])
console.log('itemimage', itemimage)

const itemfeedback = computed(() => itemIdUpdated.value?.item?.feedbacks)
console.log('itemfeedback', itemfeedback)
const averagerating = computed(() => {
  const feedbacks = itemfeedback?.value || [];
  let total = 0
  feedbacks.map((x) => {
    total = total + (x.rating || 0)
  })

  return (total / feedbacks.length) || 0
})

const category = ref('')
const isWishlisted = ref(false)

const toMinDate = computed(() => {
  if (!fromDate.value) return null;
  const nextDay = new Date(fromDate.value);
  nextDay.setDate(nextDay.getDate() + 1);
  return nextDay.toISOString().split("T")[0];
});

// Watch changes in fromDate and toDate
watch([fromDate, toDate], ([newFromDate, newToDate]) => {
  if (newFromDate && newToDate) {
    const startDate = new Date(newFromDate);
    const endDate = new Date(newToDate);
    const timeDiff = endDate.getTime() - startDate.getTime();
    days.value = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    expectedreturn.value = new Date(new Date(newToDate).setDate(new Date(newToDate).getDate() + 1)).toISOString().split('T')[0].toString()
  }
});

onMounted(async () => {
  console.log(itemIdUpdated)
  if (itemIdUpdated.value.size2Navigation == null) {
    selectSize(itemIdUpdated.value.size1Navigation, itemIdUpdated.value.size1Count)
  }
})

watch([loading, wishlistLoading, recommendedloading], ([isLoading, isWishlistloading, isRecommendedloading]) => {
  if (!isLoading && data?.value?.itemAvailablesByItemId) {
    console.log('data', data?.value?.itemAvailablesByItemId)
    try {
      // Parse the productDetail and assign it to productDetails
      productDetails.value = JSON.parse(data?.value?.itemAvailablesByItemId.item?.productDetail)
      category.value = data?.value?.itemAvailablesByItemId.item?.category.id
      console.log('Parsed productDetails:', productDetails.value)
      refetchItemsByCategory()
      
      if(data?.value?.itemAvailablesByItemId.size2Navigation == null) {
        selectSize(data?.value?.itemAvailablesByItemId.size1Navigation, data?.value?.itemAvailablesByItemId.size1Count)
      }
    } catch (error) {
      console.error('Failed to parse productDetail:', error)
    }
    //     const productDetail = ref((itemIdUpdated.value?.item?.productDetail !== undefined ? JSON.parse(itemIdUpdated.value?.item?.productDetail) : {}) as abccc);
    // console.log(productDetail)
  }

  if (wishlistData?.value?.wishListsByUserId && data?.value?.itemAvailablesByItemId) {
    const wishlist = wishlistData?.value?.wishListsByUserId
    const itemid = data?.value?.itemAvailablesByItemId.item?.id
    isWishlisted.value = wishlist.find((item: any) => item.itemId === itemid) ? true : false
  }

  if (!isRecommendedloading && recommendeddata?.value?.recommendedItemsByUser) {
    console.log('recommendeddata', recommendeddata?.value?.recommendedItemsByUser)
    try {
      recommendedItemDetails.value = recommendeddata?.value?.recommendedItemsByUser
    } catch (error) {
      console.error('Failed to parse productDetail:', error)
    }
  }
})

const isCart = computed(() => {
  return store.recentCart.filter((x) => x.id === route.params.id).length > 0 ? true : false
})

const isWishlist = computed(() => {
  return wishliststore.recentWishlist.filter((x) => x.id === route.params.id).length > 0
    ? true
    : false
})

const product = {
  name: itemIdUpdated?.value?.name,
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' }
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.'
    }
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true }
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton'
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
}
const reviews = { href: '#', average: 4, totalCount: 117 }

const selectedSize = ref(product.sizes[2])

// onMounted(() => {
//   //console.log('route.params.id', route.params.id)
// })

// fetch the user information when params change
// watch(
//   () => route.params.id,
//   async (data) => {
//     await refetchItemById()
//   }
// )
const { result: itemByOffer, refetch: refetchItemByOffer } = useGetItemByOffer('70', 1)

const { result: itemsByCategory, refetch: refetchItemsByCategory } = useQuery(
  computed(() => {
    return gql`
  query  GetItemsByCategoryId{
    itemsByCategoryId(categoryid: "${itemIdUpdated.value?.item?.category?.id}", page: ${0}) {
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

console.log('itemsByCategory', itemsByCategory)
const store = useCartStore()
const wishliststore = useWishlistStore()
const AddToCart = (cart: any) => {
  let data = {
    id: cart.id,
    amount: cart.amount,
    name: cart.name,
    imagePath: cart.imagePath,
    mrp: cart.mrp,
    isActive: cart.isActive,
    offer: cart.offer,
    fit: cart.fit,
    count: 1,
    // size: selectedItem.value,
    selectedSize: selectedItem.value,
    selectSizeCount: selectedCount.value,
    selectQuantity: 1,
    size: [
      { sizedata: itemIdUpdated.value.size1Navigation, sizecount: itemIdUpdated.value.size1Count },
      { sizedata: itemIdUpdated.value.size2Navigation, sizecount: itemIdUpdated.value.size2Count },
      { sizedata: itemIdUpdated.value.size3Navigation, sizecount: itemIdUpdated.value.size3Count },
      { sizedata: itemIdUpdated.value.size4Navigation, sizecount: itemIdUpdated.value.size4Count },
      { sizedata: itemIdUpdated.value.size5Navigation, sizecount: itemIdUpdated.value.size5Count },
      { sizedata: itemIdUpdated.value.size6Navigation, sizecount: itemIdUpdated.value.size6Count },
      { sizedata: itemIdUpdated.value.size7Navigation, sizecount: itemIdUpdated.value.size7Count },
      { sizedata: itemIdUpdated.value.size8Navigation, sizecount: itemIdUpdated.value.size8Count },
      { sizedata: itemIdUpdated.value.size9Navigation, sizecount: itemIdUpdated.value.size9Count },
      { sizedata: itemIdUpdated.value.size10Navigation, sizecount: itemIdUpdated.value.size10Count }
    ],
    selectedBrandSize: selectBrandSize.value,
    isRental: false,
    days: null,
    dates: null,
    categoryType: [1,2,3].includes(cart.categoryType.id) ? 1 : cart.categoryType.id,
    gst: cart.gst
  } as CartStoreType
  if (selectedItem.value !== '' && store.recentCart[0]?.isRental) {
    document.getElementById('modalRemove').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
  } else if(selectedItem.value !== '' && !store.recentCart[0]?.isRental) {
    store.addCart(data)
  } else {
    modelheader.value = 'Please Select Size'
    modelmessage.value = 'Choose your size to complete your order.'
    document.getElementById('modalSelectSize').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
  }

  console.log('AddToCart', cart)
}

const AddToRentalCart = (cart: any) => {
  let data = {
    id: cart.id,
    amount: Number(((cart.mrp * 5) / 100).toFixed()),
    name: cart.name,
    imagePath: cart.imagePath,
    mrp: cart.mrp,
    isActive: cart.isActive,
    offer: cart.offer,
    fit: cart.fit,
    count: 1,
    // size: selectedItem.value,
    selectedSize: selectedItem.value,
    selectSizeCount: selectedCount.value,
    selectQuantity: 1,
    categoryType: 0,
    size: [
      { sizedata: itemIdUpdated.value.size1Navigation, sizecount: itemIdUpdated.value.size1Count },
      { sizedata: itemIdUpdated.value.size2Navigation, sizecount: itemIdUpdated.value.size2Count },
      { sizedata: itemIdUpdated.value.size3Navigation, sizecount: itemIdUpdated.value.size3Count },
      { sizedata: itemIdUpdated.value.size4Navigation, sizecount: itemIdUpdated.value.size4Count },
      { sizedata: itemIdUpdated.value.size5Navigation, sizecount: itemIdUpdated.value.size5Count },
      { sizedata: itemIdUpdated.value.size6Navigation, sizecount: itemIdUpdated.value.size6Count },
      { sizedata: itemIdUpdated.value.size7Navigation, sizecount: itemIdUpdated.value.size7Count },
      { sizedata: itemIdUpdated.value.size8Navigation, sizecount: itemIdUpdated.value.size8Count },
      { sizedata: itemIdUpdated.value.size9Navigation, sizecount: itemIdUpdated.value.size9Count },
      { sizedata: itemIdUpdated.value.size10Navigation, sizecount: itemIdUpdated.value.size10Count }
    ],
    selectedBrandSize: selectBrandSize.value,
    isRental: true,
    days: days.value,
    dates: {from: fromDate.value, to: toDate.value},
    gst: cart.gst
  } as CartStoreType

  if (store.recentCart[0]?.isRental != undefined) {
    document.getElementById('modalRemove').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
    } else if (!isAvailable.value) {
    modelheader.value = 'Please Check Availability!'
    modelmessage.value = 'Check your availability in your location'
    document.getElementById('modalSelectSize').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
  } else if (isAvailable.value && !fromDate.value && !toDate.value && !selectedItem.value) {
    modelheader.value = 'Please Select Size & Slots'
    modelmessage.value = 'Choose your size & slots to complete your order.'
    document.getElementById('modalSelectSize').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
  } else if (isAvailable.value && !fromDate.value && !toDate.value && selectedItem.value) {
    modelheader.value = 'Please Select Dates'
    modelmessage.value = 'Select your rental date.'
    document.getElementById('modalSelectSize').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
  } else if (isAvailable.value && fromDate.value && toDate.value && selectedItem.value) {
    if (store.recentCart[0]?.isRental == undefined) {
      store.addCart(data)
    } else if (!store.recentCart[0]?.isRental) {
      document.getElementById('modalRemove').style.display = 'block'
      document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
    } 
    // else {
    //   store.addCart(data)
    // }
  }
}

const removeAllCartItems = () => {
    for (let i = 0; i < store.recentCart?.length; i++) {
      store.removeCart(store.recentCart[i].id) 
    }
  };

window.handleClearCart = function () {
  removeAllCartItems();
  window.closeModal('modalRemove');
};

const CREATE_WISHLIST = gql`
  mutation CreateWishList($wishList: WishListInput!) {
    createWishList(wishList: $wishList)
  }
`
const createWishList = useMutation(CREATE_WISHLIST, {
  optimisticResponse: {
    createWishList: true
  }
})

const AddToWishlist = async (item: any) => {
    try {
      const response = await createWishList.mutate({
        wishList: {
        id: '00000000-0000-0000-0000-000000000000',
        itemId: item.id,
        userId: authstore.$state.recentAuth.id,
        isActive: true,
      }
      })

      if (response?.data?.createWishList) {
         isWishlisted.value = true
      } else {
        console.log('Wishlist added failed.')
      }
    } catch (error) {
      console.error('Error create wishlist:', error)
    }
}

// const AddToWishlist = (item: any) => {
//   let data = {
//     id: item.id,
//     amount: item.amount,
//     name: item.name,
//     imagePath: item.imagePath,
//     mrp: item.mrp,
//     isActive: item.isActive,
//     offer: item.offer,
//     fit: item.fit,
//     brand: item.brand.name
//   } as WishlistStoreType
//   wishliststore.addCart(data)
//   //console.log('AddTowishlist', item)
// }
const RemoveCart = (id: string) => {
  store.removeCart(id)
  //console.log('RemoveCart', id)
}

// const RemoveWishlist = (item: any) => {
//   wishliststore.removeCart(item.id)
//   //console.log('RemoveCart', item.id)
// }

const UPDATE_WISHLIST = gql`
  mutation UpdateWishList($wishList: WishListInput!) {
    updateWishList(wishList: $wishList)
  }
`
const updateWishList = useMutation(UPDATE_WISHLIST, {
  optimisticResponse: {
    updateWishList: true
  }
})

const RemoveWishlist = async (item: any) => {
  console.log(authstore.$state.recentAuth.id)
  if (authstore.$state.recentAuth.id == "") {
    router.push('/login')
  }
  else {
    try {
      const response = await updateWishList.mutate({
        wishList: {
          id: '00000000-0000-0000-0000-000000000000',
          itemId: item.id,
          userId: authstore.$state.recentAuth.id,
          isActive: isWishlisted.value ? false : true,
        }
      })

      if (response?.data?.updateWishList) {
        isWishlisted.value = isWishlisted.value ? false : true
      } else {
        AddToWishlist(item)
      }
    } catch (error) {
      console.error('Error Updated wishlist:', error)
    }
  }
}
const selectedItem = ref('')
const selectedCount = ref(0)
const selectBrandSize = ref('')
const selectSize = (selectedIndex: any, count: any) => {
  console.log(selectedIndex)
  selectedItem.value = selectedIndex.id
  selectedCount.value = count
  selectBrandSize.value = selectedIndex.size
  console.log('selectitem', selectedItem.value, selectedCount.value, selectBrandSize.value)
}

// const imageA = computed(()=>{
//   return imageDetail.value;
// })
// const imageDetail =ref('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080');

// const ChangeImageDetails = (src:string)=>{
//   alert(src)
//   imageDetail.value = src;
// }

const RedirectToItemDetails = (id: string) => {
  router.push(`/item/${id}`)
}
const Test = () => {
  firstModal.value = true
}

window.openModal = function (modalId) {
  document.getElementById(modalId).style.display = 'block'
  document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
}

window.closeModal = function (modalId) {
  document.getElementById(modalId).style.display = 'none'
  document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
}

export type abccc = {
  details?: string
  size?: string
  material?: string
  care?: string
  note?: string
  manufacturer?: string
  marketing?: string
}

const RedirectToPage = (itemId: any) => {
  router.push(`/feedback/${itemId}`)
}

const breadcrumDetails = computed(() => {
  return ['Item', `${itemIdUpdated.value?.item?.brand?.name} - ${itemIdUpdated.value?.item.name}`]
})

const productbreadcrum = computed(() => {
  return {
    name: `${itemIdUpdated.value?.item?.brand?.name} - ${itemIdUpdated.value?.item.name}`,
    href: route?.fullPath,
    breadcrumbs: [
      { id: 1, name: 'Home', href: '#' },
      // { id: 2, name: route.query.type, href: '#' }
    ]
  }
});

watch([itemsByCategory], () => {
  console.log('itemsByCategory', itemsByCategory)
})
// Swipers configurations
function prodBreakpoints() {
  return {
    640: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 16
    },
    1536: {
      slidesPerView: 6,
      spaceBetween: 16
    }
  }
}

function customBreakpoints() {
  return {
    640: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    1280: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    1536: {
      slidesPerView: 1,
      spaceBetween: 16
    }
  }
}
const openProdGalleryModal = () => {
  showModal.value = true
  currentSlide.value = 0
}

const closeProdGalleryModal = () => {
  showModal.value = false
}

const currentTime = ref(new Date().getTime())

const ShowCartItem = () => {
  isCartCheckout.value = true
  currentTime.value = new Date().getTime()
}

const similarItems = (id: any) => {
  console.log('id', id)
  router.push(`/item?type=category&categoryid=${id}`)
}

const scrollToSimilarItems = () => {
  const similarItemsSection = document.getElementById('similarItemsSection');
  if (similarItemsSection) {
    similarItemsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const { result: locationAvailble, refetch: refetchLocationAvailble, loading: locationLoading, error: locationError } = useQuery(
  gql`
    query GetLocationByPincode($pincode: String!) {
      locationByPincode(pincode: $pincode) {
        id
        state
        city
        pincode
        createdOn
      }
    }
  `,
  computed(() => ({
    pincode: checkPin.value,
  }))
  // {
  //   skip: true,
  // }
);

const updatedItemsFiltersData = computed(() => {
  console.log('Computed Location Data:', locationAvailble.value?.locationByPincode);
  return locationAvailble.value?.locationByPincode;
});

watch([locationAvailble, locationError], ([newData, newError]) => {
    if (newData) {
    isAvailable.value = true;
  }
  else if (newError && checkPin.value != '') {
    isAvailable.value = false;
    modelheader.value = 'Not Available!';
    modelmessage.value = 'Rental item not available for this location.';
    document.getElementById('modalSelectSize').style.display = 'block';
    document.body.classList.remove('overflow-y-hidden');
  }
});

const verifyPincode = async () => {
  try {
    checkPin.value = pincode.value
    await refetchLocationAvailble();
  } catch (error) {
    console.error('Error fetching location:', error);
  }
};

</script>


<style scoped>
.custom-size {
  max-width: 40rem !important;
  height: 30rem !important;
}

.custom-height {
  top: 5rem !important;
}

.date-range {
  display: flex;
  gap: 20px;
  align-items: center;
}

input[type="date"] {
  margin-left: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h4 {
  font-weight: normal;
  font-size: 10px;
  margin: 0;
}
</style>