<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-[999] lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel class="relative w-full max-w-lg bg-white pb-12 shadow-xl">
              <div class="flex justify-between px-4 pb-3 pt-3">
                <button type="button"
                  class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="open = false">
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
                <div class="flex gap-2 items-center">
                  <a @click="open = false; RedirectToPage('/todays-offer?page=0')"
                    class="flex rounded-full block text-center px-3 py-2 bg-yellow-100 text-red-600">
                    <SparklesIcon class="w-5 mr-2 animate-pulse" aria-hidden="true" />
                    <span class="text-sm font-semibold">
                      Today's Top Deals
                    </span>
                    <ArrowRightIcon class="w-5 ml-auto" aria-hidden="true" />
                  </a>
                  <!-- <div v-if="!authstoreData" class="flow-root">
                    <a @click="RedirectLoginPage()" class="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">Sign
                      in</a>
                  </div> -->
                </div>
              </div>
              <TabGroup vertical as="div" class="bg-white flex h-[calc(100vh_-_64px)] relative">
                <TabList class="bg-gray-100 flex flex-col group py-3">
                  <div class="sticky top-0">
                    <Tab as="div" v-slot="{ selected }" v-for="category in navigation.categories" :key="category.name">
                      <button type="button"
                        class="w-full p-3 text-left text-xs text-gray-800 border-l-4 border-transparent"
                        :class="{ 'font-bold !border-yellow-500 bg-gradient-to-r from-yellow-200 to-white': selected, '': !selected }">
                        {{ category.name }}
                      </button>
                    </Tab>
                    <Tab as="div" v-slot="{ selected }">
                      <button type="button" @click="open = false; RedirectToPage('/best-seller?page=0')"
                        class="w-full p-3 text-left text-xs text-gray-800 border-l-4 border-transparent"
                        :class="{ 'font-bold !border-yellow-500 bg-gradient-to-r from-yellow-200 to-white': selected, '': !selected }">
                        Best Sellers
                      </button>
                    </Tab>
                    <Tab as="div" v-slot="{ selected }">
                      <button type="button" @click="open = false; RedirectToPage('/rental?page=0')"
                        class="w-full p-3 text-left text-xs text-gray-800 border-l-4 border-transparent"
                        :class="{ 'font-bold !border-yellow-500 bg-gradient-to-r from-yellow-200 to-white': selected, '': !selected }">
                        Rental
                      </button>
                    </Tab>
                  </div>
                </TabList>
                <TabPanels as="div" class="flex-1 px-4 py-3 h-[calc(100vh_-_64px)] overflow-auto text-sm text-gray-500">
                  <TabPanel v-for="category in navigation.categories" :key="category.name"
                    class="group relative flex text-sm pb-4">
                    <div class="flex-1">
                      <!-- <div class="flex gap-3">
                        <div class="flex-1 relative" v-for="item in category.featured" :key="item.name">
                          <div
                            class="aspect-h-4 aspect-w-4 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center" />
                          </div>
                          <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                            <span class="absolute inset-0 z-10" aria-hidden="true" />
                            {{ item.name }}
                          </a>
                          <p aria-hidden="true" class="mt-1">Shop now</p>
                        </div>
                      </div> -->

                      <div v-for="section in category.sections" :key="section.name" class="my-6">
                        <div v-if="section.name == 'Shop by Age'">
                          <p :id="`${category.id}-${section.id}-heading-mobile`" class="font-bold text-gray-600">
                            {{ section.name }}
                          </p>
                          <ul :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                            class="mt-3 flex flex-col space-y-3">
                            <li v-for="item in section.items" :key="item.name" class="flow-root">
                              <a :href="`/${category.route}/${item.id}?categoryid=${item.id}`"
                                class="flex items-center gap-2 text-gray-800">
                                <span class="text-base">{{ item.name }}</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div v-if="section.name != 'Shop by Age'">
                          <p :id="`${category.id}-${section.id}-heading-mobile`" class="font-bold text-gray-600">
                            {{ section.name }}
                          </p>
                          <ul :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                            class="mt-3 flex flex-col space-y-3">
                            <li v-for="item in section.items" :key="item.name" class="flow-root">
                              <a :href="`/${category.route}/${item.id}?categoryid=${item.id}`"
                                class="flex items-center gap-2 text-gray-800">
                                <img :src="`${categoryPath}${item.id}.jpg`" alt=""
                                  class="w-9 h-9 transition-all ease duration-200 hover:scale-95 bg-gray-100 object-cover" />
                                <span class="text-base">{{ item.name }}</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <!-- <p :id="`${category.id}-${section.id}-heading-mobile`" class="font-bold text-gray-600">
                          {{ section.name }}
                        </p>
                        <ul :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                          class="mt-3 flex flex-col space-y-3">
                          <li v-for="item in section.items" :key="item.name" class="flow-root">
                            <a :href="`/${category.route}/${item.id}?categoryid=${item.id}`"
                              class="-m-2 block p-2 text-gray-800">{{
                                item.name
                              }}</a>
                          </li>
                        </ul> -->
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!--Web Menu-->
    <header class="relative bg-white">
      <div class="border-b relative">
        <div class="mx-auto 2xl:container flex justify-between px-2 py-1 md:px-4 relative">
          <div class="flex space-x-6">
            <a @click="RedirectToPage('/todays-offer?page=0')"
              class="border-transparent group text-red-600 cursor-pointer hover:no-underline flex items-center font-medium transition-all duration-200 ease-out focus:outline-0">
              <SparklesIcon class="w-4 mr-1 animate-pulse" aria-hidden="true" />
              <span
                class="text-xs font-medium inline-block text-gray-800">
                Today's Top Deals
              </span>
            </a>
          </div>

          <div class="flex space-x-6">
            <div @click="RedirectToPage('/best-seller?page=0')"
              class="text-xs font-semibold hover:text-yellow-900 flex items-center font-medium transition-colors duration-200 ease-out cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              </svg>
              <span class="text-xs font-medium">Best Sellers</span>
            </div>
            <div @click="RedirectToPage('/rental?page=0')"
              class="hover:text-yellow-900 flex items-center font-medium transition-colors duration-200 ease-out cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

              <span class="text-xs font-medium">Rental</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto 2xl:container flex flex-wrap md:flex-nowrap items-center py-3 px-2 md:px-4 relative">
        <button type="button" class="relative rounded-md bg-white p-2 text-gray-800 lg:hidden" @click="open = true">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <!-- Logo -->
        <div class="flex items-center mr-auto md:mx-2 flex lg:ml-0 pr-3 shrink-0">
          <a href="#" class="flex-shrink-0">
            <span class="sr-only">Preline</span>
            <!-- <img class="h-6 sm:h-8 w-auto" src="/src/assets/preline-logo.svg" alt="" /> -->
            <img class="h-6 sm:h-8 w-auto" src="/src/assets/brands/preline-2025.svg" alt="" />
          </a>
          <div
            class="ml-0 md:ml-3 flex items-center justify-center gap-2 flex-[1_1_100%] grow shrink-0 md:flex-initial order-1 md:order-none">
            <Menu as="div" class="relative flex items-center justify-center">
              <MenuButton class="relative" @click="openStoryModal()">
                <div
                  class="absolute inset-0 rounded-full border-3 border-pink-500 animate-pulse ring-2 ring-yellow-400/60 shadow-lg ">
                </div>
                <img class="h-12 w-12 md:w-14 md:h-14 sm:h-10 sm:w-10 rounded-full p-[2px] bg-white object-cover z-10 relative"
                  src="/src/assets/brands/favicon.svg" alt="story" />
              </MenuButton>
            </Menu>
          </div>
        </div>
        <div class="flex items-center gap-4 flex-[1_1_100%] grow shrink-0 md:flex-initial order-1 md:order-none">
          <Menu as="div"
            class="relative flex items-center shrink-0 gap-4 bg-white border border-gray-300 rounded-full mx-auto">
            <MenuButton
              class="inline-flex  shrink-0 p-[1px] pr-4 group/link gap-2 text-gray-600 items-center cursor-pointer hover:text-gray-800 hover:no-underline">
              <img :src="`src/assets/categories/${selectedCategory.toLowerCase()}.webp`" alt=""
                class="w-full max-w-[32px] lg:max-w-[36px] rounded-full transition-all ease duration-200 ring-1 ring-transparent ring-offset-transparent ring-offset-1 group-hover/link:ring-white group-hover/link:scale-95" />
              <span class="inline-flex flex-col text-left shrink-0">
                <span class="text-gray-800 text-[10px] shrink-0">Shop for</span>
                <span class="md:font-semibold text-xs md:text-sm inline-flex items-center">
                  <span class="font-bold pr-1">{{ selectedCategory }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </span>
            </MenuButton>

            <MenuItems class="absolute z-[999] left-[-12px] top-[100%] mt-2 w-60 bg-white rounded-lg shadow-lg border">
              <MenuItem v-slot="{ active }" v-if="selectedCategory !== 'All'">
              <a class="flex items-center px-4 py-2 group/link gap-2 text-gray-600 items-center cursor-pointer hover:text-gray-800 hover:no-underline"
                :class="{ 'bg-gray-200': active }" @click="selectCategory('All')">
                <img src="../../assets/categories/all.webp" alt=""
                  class="w-full max-w-[40px] rounded-full transition-all ease duration-200 ring-1 ring-transparent ring-offset-transparent ring-offset-2 group-hover/link:ring-white group-hover/link:scale-95" />
                <span>
                  <span class="font-semibold text-sm">All</span>
                </span>
              </a>
              </MenuItem>
              <MenuItem v-slot="{ active }">
              <a class="flex items-center px-4 py-2 group/link gap-2 text-gray-600 items-center cursor-pointer hover:text-gray-800 hover:no-underline"
                :class="{ 'bg-gray-200': active }" @click="selectCategory('Baby Care')">
                <img src="../../assets/categories/baby.webp" alt=""
                  class="w-full max-w-[40px] rounded-full transition-all ease duration-200 ring-1 ring-transparent ring-offset-transparent ring-offset-2 group-hover/link:ring-white group-hover/link:scale-95" />
                <span class="font-semibold text-sm">Baby</span>
              </a>
              </MenuItem>
              <MenuItem v-slot="{ active }">
              <a class="flex items-center px-4 py-2 group/link gap-2 text-gray-600 items-center cursor-pointer hover:text-gray-800 hover:no-underline"
                :class="{ 'bg-gray-200': active }" @click="selectCategory('Girls')">
                <img src="../../assets/categories/girl.webp" alt=""
                  class="w-full max-w-[40px] rounded-full transition-all ease duration-200 ring-1 ring-transparent ring-offset-transparent ring-offset-2 group-hover/link:ring-white group-hover/link:scale-95" />
                <span class="font-semibold text-sm">Girl</span>
              </a>
              </MenuItem>
              <MenuItem v-slot="{ active }">
              <a class="flex items-center px-4 py-2 group/link gap-2 text-gray-600 items-center cursor-pointer hover:text-gray-800 hover:no-underline"
                :class="{ 'bg-gray-200': active }" @click="selectCategory('Boys')">
                <img src="../../assets/categories/boy.webp" alt=""
                  class="w-full max-w-[40px] rounded-full transition-all ease duration-200 ring-1 ring-transparent ring-offset-transparent ring-offset-2 group-hover/link:ring-white group-hover/link:scale-95" />
                <span class="font-semibold text-sm">Boy</span>
              </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        <!-- <div :class="[
          'absolute top-0 left-0 z-[5] max-w-full p-3 md:p-0 bg-white md:relative w-full md:max-w-72 lg:max-w-96',
          showSearch ? 'flex' : 'hidden',
          'md:flex'
        ]">
          <button @click="toggleSearch"
            class="group flex md:hidden items-center text-gray-800 p-2 rounded-md font-bold hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <div
            class="relative flex items-center w-full h-10 rounded-lg ring-gray-600 focus-within:shadow-lg focus-within:bg-white focus-within:ring-2 overflow-hidden bg-gray-100">
            <div class="grid place-items-center h-full basis-12 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <input class="peer h-full flex-1 border-0 outline-none text-sm text-gray-700 bg-transparent focus:ring-0"
              type="text" id="search" :autofocus="showSearch" v-model="searchInput"
              placeholder="What are you looking for today?" />


            <button type="button" class="grid place-items-center h-full basis-12 text-gray-400" v-if="showClearButton"
              @click="clearSearch">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div
            class="hidden md:block absolute top-[42px] z-[9999] w-full max-h-20vh overflow-auto rounded shadow-md bg-white">
            <ul role=" list" class="divide-y divide-gray-100 rounded-b-lg">
              <li v-for="x of allItemCombined" :key="x.id" class="border-b border-gray-200">
                <a @click="redirectToItemPage(x.id, x)"
                  class="flex items-center text-gray-800 block p-2 group cursor-pointer hover:text-gray-700 hover:no-underline">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-500 group-hover:text-yellow-600 transition duration-200 ease" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span class="flex-1 mx-5">
                    <template v-for="(part, index) in highlightText(x.name, searchInput)" :key="index">
                      <span :class="{ 'font-bold': index % 2 !== 1 }">{{ part }}</span>
                    </template>
</span>
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke-width="2"
  stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</a>
</li>
</ul>
</div>
</div> -->
        <div :class="[
          'grow shrink absolute top-0 left-0 z-[5] px-3 lg:relative',
          showSearch ? 'flex' : 'hidden',
          'lg:flex'
        ]">
          <button @click="toggleSearch"
            class="group flex lg:hidden items-center text-gray-800 p-2 rounded-md font-bold hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>

          <div
            class="relative flex items-center w-full h-10 rounded-full ring-1 ring-gray-600 focus-within:shadow-lg focus-within:bg-white focus-within:ring-2 overflow-hidden">
            <div class="grid place-items-center h-full basis-12 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <input
              class="peer h-full flex-1 border-0 outline-none text-sm text-gray-700 bg-transparent focus:ring-0 pl-0"
              type="text" id="search" :autofocus="showSearch" v-model="searchInput" @keydown.down.prevent="moveDown"
              @keydown.up.prevent="moveUp" @keydown.enter.prevent="selectItem"
              placeholder="What are you looking for today?" />

            <!-- Clear Search -->
            <button type="button" class="grid place-items-center h-full basis-12 text-gray-400" v-if="showClearButton"
              @click="clearSearch">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div v-if="filteredItems.length > 0"
            class="hidden lg:block absolute top-[42px] z-[9999] w-full overflow-auto rounded shadow-md bg-white">
            <ul role="list" class="divide-y divide-gray-100 rounded-b-lg">
              <li v-for="(x, index) in filteredItems" :key="x.id" :class="{ 'bg-gray-200': index === selectedIndex }"
                class="border-b border-gray-200 hover:bg-gray-200">
                <a @click="redirectToItemPage(x.id, x)"
                  class="flex items-center text-gray-800 block px-3 py-2 group cursor-pointer  hover:no-underline">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition duration-200 ease" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span class="flex-1 mx-4">
                    <template v-for="(part, idx) in highlightText(x.name, searchInput)" :key="idx">
                      <span :class="{ 'font-bold': idx % 2 !== 1 }">{{ part }}</span>
                    </template>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-transparent group-hover:text-gray-600"
                    fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex shrink-0 items-center">

          <div class="relative flow-root lg:hidden block">
            <button @click="toggleSearch"
              class="group inline-flex items-center text-gray-800 p-2 rounded-md font-bold hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <!-- <div v-if="authstoreData" class="relative flow-root">
            <button @click="redirectTrackPage()" class="group flex items-center text-gray-800 p-2 rounded-md font-bold hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 2C8.13 2 5 5.13 5 9c0 4.97 7 11 7 11s7-6.03 7-11c0-3.87-3.13-7-7-7zM12 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
            </button>
          </div> -->
          <div v-if="authstoreData" class="relative flow-root hidden lg:block">
            <button @click="redirectWishlistPage()"
              class="group flex items-center text-gray-800 p-2 rounded-md font-bold hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <span v-if="updatedWishlistCount > 0"
                class="absolute right-[-2px] top-[-2px] z-[1] h-5 min-w-5 inline-flex items-center justify-center text-xs rounded-full px-1 bg-red-500 text-white font-bold">
                {{ updatedWishlistCount}}
              </span>
            </button>
          </div>
          <!-- Cart -->
          <div class="relative flow-root md:block hidden">
            <a @click="ShowCartItem()"
              class="group cursor-pointer rounded-md flex items-center text-gray-800 p-2 font-bold hover:bg-gray-100 hover:no-underline">
              <ShoppingBagIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
              <Transition name="bounce">
                <span v-if="store.isCartExist.length > 0"
                  class="absolute right-[-2px] top-[-2px] z-[1] h-5 min-w-5 inline-flex items-center justify-center text-xs rounded-full px-1 bg-red-500 text-white font-bold">
                  {{ store.isCartExist.length }}</span>
              </Transition>
              <span class="sr-only">items in cart, view bag</span>
            </a>
          </div>
          <div v-if="!authstoreData" class="flex items-center justify-end">
            <button type="button" @click="RedirectLoginPage()"
              class="group flex items-center text-gray-800 p-2 rounded-md font-bold hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="grow shrink-0 size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span class="hidden md:block ml-2 grow shrink-0">Sign in</span>
            </button>
          </div>
          <Menu as="div" v-else class="relative inline-block">
            <div>
              <MenuButton class="group flex items-center text-gray-800 p-2 rounded-md font-bold hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <MenuItems
                class="absolute right-0 z-[99] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                  <button @click="RedirectToPage('/account/profile')" :class="[
                    active ? 'bg-gray-100 text-gray-700' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]">
                    My Account
                  </button>
                  </MenuItem>
                  <MenuItem @click="RedirectToPage('/account/orders')" v-slot="{ active }">
                  <button :class="[
                    active ? 'bg-gray-100 text-gray-700' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]">
                    My Orders
                  </button>
                  </MenuItem>
                </div>
                <div class="px-1 py-1">
                  <MenuItem @click="RedirectToPage('/account/support')" v-slot="{ active }">
                  <button :class="[
                    active ? 'bg-gray-100 text-gray-700' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]">
                    Help & Support
                  </button>
                  </MenuItem>
                  <MenuItem @click="Logout()" v-slot="{ active }">
                  <button :class="[
                    active ? 'bg-red-100 text-red-600' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]">
                    Logout
                  </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>

      <nav style="z-index: -1000" aria-label="Header Navigation"
        class="bg-yellow-200 shadow-sm hidden lg:block border-t border-b">
        <div class="mx-auto 2xl:container px-4 flex h-12 items-center">
          <!-- Flyout menus -->
          <PopoverGroup class="flex h-full items-center space-x-8">
            <Popover v-for="category in navigation.categories" :key="category.name" v-slot="{ open, close }">
              <PopoverButton :class="[
                    open
                      ? 'border-yellow-800 text-yellow-900'
                      : 'border-transparent text-gray-900 hover:text-yellow-900',
                    'mb-px flex items-center border-b-2 py-2 font-medium transition-colors duration-200 ease-out focus:outline-0'
                  ]">{{ category.name }}</PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100" leave-to-class="opacity-0">
                <PopoverPanel
                  class="absolute inset-x-0 max-h-[520px] overflow-auto top-full shadow text-sm text-gray-500 z-[999]">
                  <div class="relative bg-white">
                    <div class="mx-auto container">
                      <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-10 px-4">
                        <div v-if="category.sections" class="grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                          <div v-for="section in category.sections" :key="section.name">
                            <p :id="`${section.name}-heading`" class="uppercase text-sm font-medium text-gray-500">
                              {{ section.name }}
                            </p>
                            <ul :aria-labelledby="`${section.name}-heading`"
                              class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li v-for="item in section?.items.slice(0, 10)" :key="item?.name" class="flex">
                                <a @click="Redirect(category.route, item, item?.age, close)"
                                  class="cursor-pointer text-gray-800 hover:text-yellow-700">{{
                                  item?.name
                                  }}</a>
                              </li>
                              <li v-if="section.items.length > 10" class="flex items-center">
                                <button @click="RedirectToCategoryPage(section.items[0].categoryTypeId, close)"
                                  class="cursor-pointer text-gray-800 hover:text-yellow-800">More
                                  Items...</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div v-if="category.featured" class="grid grid-cols-3 gap-x-8 gap-y-10">
                          <div v-for="item in category.featured" :key="item.name"
                            class="group relative text-base sm:text-sm">
                            <div
                              class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center" />
                            </div>
                            <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                              <span class="absolute inset-0 z-10" aria-hidden="true" />
                              {{ item.name }}
                            </a>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <a v-for="page in navigation.pages" :key="page.name" :href="page.href"
              class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>
            <div @click="RedirectToPage('/best-seller?page=0')"
              class="hover:text-yellow-900 flex items-center font-medium transition-colors duration-200 ease-out cursor-pointer">
              Best Sellers
            </div>
            <div @click="RedirectToPage('/rental?page=0')"
              class="hover:text-yellow-900 flex items-center font-medium transition-colors duration-200 ease-out cursor-pointer">
              Rental
            </div>

          </PopoverGroup>
          <div class="flex ml-auto">
            <a @click="RedirectToPage('/todays-offer?page=0')"
              class="border-transparent border h-8 rounded-full px-3 bg-white text-red-600 cursor-pointer hover:border-red-600 hover:bg-yellow-50 flex items-center font-medium transition-colors duration-200 ease-out focus:outline-0">
              <SparklesIcon class="w-5 mr-2 animate-pulse" aria-hidden="true" />
              <span class="text-sm font-semibold">
                Today's Top Deals
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
    <div :class="[
      'fixed top-[64px] left-0 right-0 w-full h-[calc(100vh_-_64px)] lg:h-auto lg:max-w-72 lg:max-w-96 lg:max-h-100 mx-auto shadow-md z-[99999] bg-white',
      showSearch ? 'block' : 'hidden', 'lg:hidden', 'max-h-[calc(100vh_-_64px)] overflow-y-auto']">
      <ul role="list" class="divide-y divide-gray-100 rounded-b-lg px-3">
        <li v-for="x of allItemCombined" :key="x.id" class="border-b border-gray-200 ml-[1rem]">
          <a @click="redirectToItemPage(x.id, x)"
            class="flex items-center text-gray-800 block p-2 group cursor-pointer hover:text-gray-700 hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-800 group-hover:text-yellow-600 transition duration-200 ease" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span class="flex-1 mx-4">
              <template v-for="(part, index) in highlightText(x.name, searchInput)" :key="index">
                <span :class="{ 'font-bold': index % 2 !== 1 }">{{ part }}</span>
              </template>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <!-- Mobile bottom navigation -->
    <div class="fixed bottom-0 z-[999] w-full bg-white border-t border-gray-300 block md:hidden">
      <!-- Mobile App Lead -->

      <div v-if="!mobile_app_info"
        class="flex items-center justify-between overflow-hidden bg-gradient-to-r from-yellow-100 to-green-100 px-4 py-1">
        <div class="flex-1 text-center">
          <a href="https://play.google.com/store/apps/details?id=preline.in" target="_blank"
            class="text-sm font-semibold text-gray-900 block">For a better experience, <span
              class="underline font-semibold ">use our app.</span>
          </a>
        </div>
        <button type="button" @click="close_mobile_app_info();" class="px-3 p-2 focus-visible:outline-offset-[-4px]">
          <span class="sr-only">Dismiss</span>
          <XMarkIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
      <nav class="flex w-full">
        <a href="#" aria-label="home" title="home"
          class="flex-1 flex items-center justify-center text-gray-800 px-2 py-4 rounded-md font-bold hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </a>
        <button aria-label="Catogories" title="Catogories" @click="open = true"
          class="flex-1 flex items-center justify-center text-gray-800 px-2 py-4 rounded-md font-bold hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 -960 960 960" fill="currentColor">
            <path
              d="M653.85-160q-60.45 0-103.5-43-43.04-43-43.04-103.39 0-60.38 43-103.34t103.38-42.96q60.39 0 103.35 42.93Q800-366.83 800-306.54q0 22.59-6.39 42.72-6.38 20.13-18.15 37.36l96.15 95.92q4.47 3.75 6.7 9.38 2.23 5.62 2.23 11.31t-2.23 11.08q-2.23 5.38-6.7 10-3.69 3.78-9.23 6.04-5.55 2.27-11.46 2.27-6.13 0-11.49-2.27-5.37-2.26-9.97-6.04l-96.15-95.15q-17.23 11.76-37.35 17.84-20.11 6.08-42.11 6.08Zm-427.7.38q-60.28 0-103.22-42.96Q80-245.54 80-306.54q0-60.29 42.93-103.22 42.94-42.93 103.22-42.93 61 0 103.97 42.93 42.96 42.93 42.96 103.22 0 61-42.96 103.96-42.97 42.96-103.97 42.96Zm0-60q36.47 0 61.7-25.23 25.23-25.23 25.23-61.69 0-35.54-25.23-60.85-25.23-25.3-61.7-25.3-35.53 0-60.84 25.3Q140-342.08 140-306.54q0 36.46 25.31 61.69 25.31 25.23 60.84 25.23Zm427.7 0q35.53 0 60.84-25.23Q740-270.08 740-306.54q0-35.54-25.31-60.85-25.31-25.3-60.84-25.3-36.47 0-61.7 25.3-25.23 25.31-25.23 60.85 0 36.46 25.23 61.69 25.23 25.23 61.7 25.23Zm-427.7-366.92q-60.28 0-103.22-42.96Q80-672.46 80-733.46q0-60.29 42.93-103.22 42.94-42.93 103.22-42.93 61 0 103.97 42.93 42.96 42.93 42.96 103.22 0 61-42.96 103.96-42.97 42.96-103.97 42.96Zm427.7 0q-61 0-103.97-42.96-42.96-42.96-42.96-103.96 0-60.29 42.96-103.22 42.97-42.93 103.97-42.93 60.28 0 103.22 42.93Q800-793.75 800-733.46q0 61-42.93 103.96-42.94 42.96-103.22 42.96Zm-427.7-60q36.47 0 61.7-25.23 25.23-25.23 25.23-61.69 0-35.54-25.23-60.85-25.23-25.31-61.7-25.31-35.53 0-60.84 25.31Q140-769 140-733.46q0 36.46 25.31 61.69 25.31 25.23 60.84 25.23Zm427.7 0q35.53 0 60.84-25.23Q740-697 740-733.46q0-35.54-25.31-60.85-25.31-25.31-60.84-25.31-36.47 0-61.7 25.31-25.23 25.31-25.23 60.85 0 36.46 25.23 61.69 25.23 25.23 61.7 25.23ZM226.54-306.15Zm0-426.93Zm426.92 0Z" />
          </svg>
        </button>
        <a @click="ShowCartItem()" aria-label="Shopping Bag" title="Shopping Bag"
          class="group relative cursor-pointer rounded-md flex-1 flex items-center justify-center text-gray-800 p-2 font-bold hover:bg-gray-100 hover:no-underline">
          <ShoppingBagIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
          <Transition name="bounce">
            <span v-if="store.isCartExist.length > 0"
              class="absolute right-4 top-2 z-[1] h-5 min-w-5 inline-flex items-center justify-center text-xs rounded-full px-1 bg-red-500 text-white font-bold">
              {{ store.isCartExist.length }}</span>
          </Transition>
          <span class="sr-only">items in cart, view bag</span>
        </a>
        <button v-if="authstoreData" type="button" @click="redirectWishlistPage()" aria-label="Wishlist"
          title="Wishlist"
          class="relative flex-1 flex items-center justify-center text-gray-800 px-2 py-4 rounded-md font-bold hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <span v-if="updatedWishlistCount > 0"
            class="absolute right-4 top-2  z-[1] h-5 min-w-5 inline-flex items-center justify-center text-xs rounded-full px-1 bg-red-500 text-white font-bold">
            {{ updatedWishlistCount}}
          </span>
        </button>
        <button type="button" v-if="!authstoreData" @click="RedirectLoginPage()" aria-label="Account" title="Account"
          class="flex-1 flex items-center justify-center text-gray-800 px-2 py-4 rounded-md font-bold hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>
      </nav>
    </div>
    <CartComponent :openModal="isCart" :key="currentTime" />
    <div id="modalStory"
      class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 py-4">
      <div
        class="relative w-full max-w-md md:max-w-lg mx-auto shadow-xl rounded-md bg-white p-2 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center border-b pb-3">
          <h2 class="font-bold text-lg text-gray-800"></h2>
          <button onclick="closeModal('modalStory')" class="text-gray-500 hover:text-gray-800 p-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="mt-4 max-h-[90vh] ">
          <video id="storyVideo" controls autoplay
            class="rounded-md w-full max-w-full h-auto max-h-[70vh] mx-auto block">
            <source src="/src/assets/video/story-1.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, computed, watch, nextTick, onMounted } from 'vue'
import {
  Tab, TabGroup, TabList, TabPanel, TabPanels,
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu, MenuButton, MenuItem, MenuItems,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  ChevronDownIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'
import CartComponent from '../../components/user/CartComponent.vue'
import { GetCategory } from '../../api/user/category'
import { useRouter } from 'vue-router';
import RedirectPage from '../../utility/redirect';
import { useCartStore } from '../../stores/user/cartstore';
import { useAuthStore } from '../../stores/authstore';
import { useGetBrandSearch } from '../../api/user/home';
import { useWishlistStore } from '../../stores/user/wishliststore';
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@vue/apollo-composable'
import { isMobile } from "../../utility/utils";
import { categoryPath, controllerUrlPath } from '../../constant/commonPath'
const showSearch = ref(false);
const allItemCombined = ref()

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
}
const searchTerm = ref('');
const wishlist = ref([])

const router = useRouter()
const store = useCartStore();
const authstore = useAuthStore();
const wishliststore = useWishlistStore();
const { result: categoryData, loading } = GetCategory()

const QUERY_GET_WISHLIST = gql`
query GetWishListByUserId($userId: UUID!) {
  wishListsByUserId(userid: $userId) {
    id
    itemId
    item {
      id
      name
      description
      amount
      mrp
      offer
      imagePath
      brand{
        name
      }
      itemAvailables {
        totalCount
      }
    }
  }
}
`;

const { result: wishListData, refetch: refetchWishListData } = useQuery(QUERY_GET_WISHLIST, {
  userId: authstore?.$state?.recentAuth.id,
});

const updatedWishlistCount = computed(() => {
    let wishlistCount = (wishListData?.value?.wishListsByUserId || []);
    return wishlistCount.length;
})

const isCatMenuOpen = ref(false)

const selectedCategory = ref("All") // Default text

// Function to update selected category and store in localStorage
function selectCategory(category: string) {
  if (category === 'Girls') {
    selectedCategory.value = 'Girl';
  } else if (category === 'Boys') {
    selectedCategory.value = 'Boy';
  } else if (category === 'Baby Care') {
    selectedCategory.value = 'Baby';
  } else {
    selectedCategory.value = category;
  }
  localStorage.setItem('selectedCategory', selectedCategory.value);
  isCatMenuOpen.value = false; // Close the dropdown
  if (category !== 'All') {
    let categoryId = '';
    if (category === 'Girls') {
      categoryId = '1';
    } else if (category === 'Boys') {
      categoryId = '2';
    } else if (category === 'Baby Care') {
      categoryId = '4';
    } else if (category === 'Women') {
      categoryId = '3';
    }
    let url = `/category-type?categorytype=${categoryId}`;
    router.push(url)
    //RedirectToItemPage('categorytype', { id: categoryId, name: category });
  } else {
    RedirectToPage('/');
  }
}

function RedirectToItemPage(type: string, data: any) {
  console.log(type, data)

  let url = ''
  console.log(type, data)
  if (type === 'brand') {
    url = `/item?type=${type}&brandid=${data.id}&name=${data.name}`;
  } else if (type === 'age') {
    url = `/item?type=${type}&age=${data}`;
  } else if (type === 'offer') {
    url = `/item?type=${type}&offer=${data}`;
  } else if (type === 'price') {
    url = `/item?type=${type}&price=${data}`;
  } else if (type === 'page') {
    url = `/item?type=${type}&page=${0}`;
  }
  else if (type === 'categorytype') {
    url = `/item?type=${type}&categorytype=${data.id}&name=${data.name}`;
  }
  else if (type === 'category') {
    url = `/item?type=${type}&categoryid=${data.id}&name=${data.name}`;
  }
  else if (type === 'rental') {
    url = `/item?type=${type}&page=${0}`;
  }

  router.push(url)
}

const navigation = ref({
  categories: [
    {
      id: 'Girls ',
      name: 'Girls',
      route:'girls',
      featured: [
        {
          name: 'New Arrivals',
          href: '/category-type?categorytype=1',
          imageSrc: 'src/assets/new-arrivals.jpg',
          imageAlt: 'New Arrivals'
        },
        {
          name: 'Best Sellers',
          href: '/best-seller?page=0',
          imageSrc: 'src/assets/best-sellers.jpg',
          imageAlt:
            'Best Sellers'
        }
      ],
      sections: [
        {
          "id": "clothing",
          "name": "Clothing",
          "items": [],
          "type": "category"
        },
        {
          "id": "shopByAge",
          "name": "Shop by Age",
          "items": [
            { "name": "6-24 Months", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '1', "age": '2' },
            { "name": "2-4 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '1', "age": '2' },
            { "name": "4-6 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '1', "age": '2' },
            { "name": "6-8 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '1', "age": '7' },
            { "name": "8+ Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '1', "age": '7' },
          ],
          "type": "age"
        },

      ]
    },
    {
      id: 'Boys',
      name: 'Boys',
      route:'boys',
      featured: [
        {
          name: 'New Arrivals',
          href: '/category-type?categorytype=2',
          imageSrc: 'src/assets/new-arrivals.jpg',
          imageAlt: 'New Arrivals'
        },
        {
          name: 'Best Sellers',
          href: '/best-seller?page=0',
          imageSrc: 'src/assets/best-sellers.jpg',
          imageAlt:
            'Best Sellers'
        }
      ],
      sections: [
        {
          "id": "clothing",
          "name": "Clothing",
          "items": [],
          "type": "category"
        },
        {
          "id": "shopByAge",
          "name": "Shop by Age",
          "items": [
            { "name": "6-24 Months", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '2', "age": '2' },
            { "name": "2-4 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '2', "age": '2' },
            { "name": "4-6 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '2', "age": '2' },
            { "name": "6-8 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '2', "age": '7' },
            { "name": "8+ Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '2', "age": '7' },
          ],
          "type": "age"
        },

      ]
    },
    {
      id: 'Baby Care',
      name: 'Baby Care',
      route:'baby-care',
      featured: [
        {
          name: 'New Arrivals',
          href: '/category-type?categorytype=4',
          imageSrc: 'src/assets/new-arrivals.jpg',
          imageAlt: 'New Arrivals'
        },
        {
          name: 'Best Sellers',
          href: '/best-seller?page=0',
          imageSrc: 'src/assets/best-sellers.jpg',
          imageAlt:
            'Best Sellers'
        }
      ],
      sections: [
        {
          "id": "clothing",
          "name": "Category",
          "items": [],
          "type": "category"
        },
        {
          "id": "shopByAge",
          "name": "Shop by Age",
          "items": [
            { "name": "6-24 Months", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '4', "age": '2' },
            { "name": "2-4 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '4', "age": '2' },
            { "name": "4-6 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '4', "age": '2' },
            { "name": "6-8 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '4', "age": '7' },
            { "name": "8+ Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '4', "age": '7' },
          ],
          "type": "age"
        },

      ]
    },
    {
      id: 'Toys',
      name: 'Toys',
      route:'toys',
      featured: [
        {
          name: 'New Arrivals',
          href: '/category-type?categorytype=5',
          imageSrc: 'src/assets/new-arrivals.jpg',
          imageAlt: 'New Arrivals'
        },
        {
          name: 'Best Sellers',
          href: '/best-seller?page=0',
          imageSrc: 'src/assets/best-sellers.jpg',
          imageAlt:
            'Best Sellers'
        }
      ],
      sections: [
        {
          "id": "clothing",
          "name": "Learn & Education Toys",
          "items": [],
          "type": "category"
        },
        {
          "id": "shopByAge",
          "name": "Shop by Age",
          "items": [
            { "name": "6-24 Months", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '5', "age": '2' },
            { "name": "2-4 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '5', "age": '2' },
            { "name": "4-6 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '5', "age": '2' },
            { "name": "6-8 Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '5', "age": '7' },
            { "name": "8+ Years", "href": "/item?type=category&categoryid=806ffa19-b5cd-4a36-a036-00558063e2d4", "id": '5', "age": '7' },
          ],
          "type": "age"
        },

      ]
    },
    {
      id: 'Women',
      name: 'Women',
      route:'women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/category-type?categorytype=3',
          imageSrc: 'src/assets/new-arrivals.jpg',
          imageAlt: 'New Arrivals'
        },
        {
          name: 'Best Sellers',
          href: '/best-seller?page=0',
          imageSrc: 'src/assets/best-sellers.jpg',
          imageAlt:
            'Best Sellers'
        }
      ],
      sections: [
        {
          "id": "clothing",
          "name": "Clothing",
          "items": [],
          "type": "category"
        }
      ]
    }

    // ,
    // {
    //   id: 'Todays Deal',
    //   name: 'Todays Deal',
    //   href: '/item?type=newarrival&categorytype=2',
    // },
  ]
})
watch(loading, (isLoading) => {
  if (!isLoading && categoryData.value?.category) {
    const catdata = categoryData.value.category;
  //console.log('aaa',catdata);
    navigation.value.categories[0].sections[0].items = catdata.filter((item: any) => item.categoryTypeId == "1");
    navigation.value.categories[1].sections[0].items = catdata.filter((item: any) => item.categoryTypeId == "2");
    navigation.value.categories[2].sections[0].items = catdata.filter((item: any) => item.categoryTypeId == "4");
    navigation.value.categories[3].sections[0].items = catdata.filter((item: any) => item.categoryTypeId == "5");
    navigation.value.categories[4].sections[0].items = catdata.filter((item: any) => item.categoryTypeId == "3");
  }

});
watch(showSearch, (newValue) => {
  if (newValue && isMobile()) {
    document.body.classList.add('overflow-hidden');
  } else if (!newValue && isMobile()) {
    document.body.classList.remove('overflow-hidden');
  }
});
const authstoreData = computed(() => {
  console.log('authstore.isUserExist', authstore.isUserExist);
  return (authstore.isUserExist !== '' && authstore.isUserExist !== null) ? true : false;
})


const open = ref(false);
const isCart = ref(false)
const isLogin = ref(false);
const currentTime = ref(new Date().getTime());
const ShowCartItem = () => {
  isCart.value = true;
  currentTime.value = new Date().getTime();
}
const searchInput = ref<string>('');
const selectedIndex = ref(-1);
const searchValue = computed(() => {

  return searchInput.value
});
const clearSearch = () => {
  searchInput.value = ''; // Set searchInput to an empty string
  allItemCombined.value = [];
};

const showClearButton = computed(() => {
  return searchInput.value.trim() !== '';
});

const limitCategories = computed(() => {
  return (section: { items: string | any[] }) => section.items.slice(0, 10);
});

const { result: data, refetch: refetchData } = useQuery(computed(() => {
  if (searchInput.value.length >= 3) {
    return gql`
   query GetBrandsByName {
    brandsByName (keyvalue: "${searchInput.value}"){
      id
      name
      logo
      description
    }
  }
`;
  } else {
    return gql`query { testString }`;
  }
}))

// const highlightText = (text: string, searchTerm: string) => {
//   const regex = new RegExp(`(${searchTerm})`, 'gi'); // Capture the search term in a group
//   const parts = text.split(regex);

//   return parts.map((part, index) => {
//     if (index % 2 === 0) {
//       // Even index: remaining text, bold it
//       return <span class="font-bold"> {part} </span>;
//     } else {
//       // Odd index: search term, keep it as is
//       return <span>{part} </span>;
//     }
//   }).join('');
// };
const highlightedParts = computed((searchInput) => {
  return (text: string) => {
    const regex = new RegExp(`(${searchInput})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      return {
        text: part,
        isBold: index % 2 === 1
      };
    });
  };
});
const highlightText = (text: string, searchTerm: any) => {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.split(regex);
};
const isMatch = (part: string, searchTerm: string) => {
  return part.toLowerCase().includes(searchTerm.toLowerCase());
};

//console.log('data',data)
const RedirectLoginPage = () => {
  router.push('/login');
}

watch(searchInput, async () => {
  //refetchData();
  if (searchInput.value.length >= 3) {
    try {
      //const url = `https://localhost:7069/api/home/getsearchdetails/${searchInput.value}`;
      const url = `${controllerUrlPath}getsearchdetails/${searchInput.value}`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        const item = data.items.slice(0, 10);
        allItemCombined.value = [
          ...data.brands,
          ...data.categories,
          ...data.categoryTypes,
          ...item,
        ]
      } else {
        console.error(`Failed to fetch data: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  else {
    allItemCombined.value = []
  }
});
const SearchItem = () => {
  refetchData();
}

const filteredItems = computed(() =>
  searchInput.value
    ? allItemCombined.value.filter((item: any) =>
      item.name.toLowerCase().includes(searchInput.value.toLowerCase())
    )
    : []
);

const moveDown = () => {
  if (selectedIndex.value < filteredItems.value.length - 1) {
    selectedIndex.value++;
  }
};

const moveUp = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }
};

const selectItem = () => {
  if (selectedIndex.value >= 0 && selectedIndex.value < filteredItems.value.length) {
    redirectToItemPage(filteredItems.value[selectedIndex.value].id, filteredItems.value[selectedIndex.value]);
  }
};


const redirectWishlistPage = () => {
  router.push('/account/wishlist');
}

const redirectTrackPage = () => {
  router.push('/track');
}

function redirectToItemPage(id: any, data: any) {
  searchInput.value = '';
  toggleSearch();
  clearSearch();
  document.body.classList.remove('overflow-hidden');
  if (data?.description === 'brand') {
    let url = `/brand/${id}`;
    router.push(url);
  }
  else if (data?.description === 'category') {
    //let url = `/item?type=category&categoryid=${id}&name=${data?.name}`;
    let url = `/girls/${id}`;
    router.push(url);
  }
  else if (data?.description === 'categorytype') {
   //let url = `/item?type=categorytype&categorytype=${id}&name=${data?.name}`;
   let url = `/category-type/${id}?page=0`;
   router.push(url);
  }
  else if (data?.description === 'item') {
    UpdateViewCount(id)
    router.push(`/item/${id}`);
  }

}

const Redirect = (type: any, item: any, data: any, close: any) => {
  let url = ''
  console.log(type, item, data, close)
  if (data == undefined) {
    const id = item.id
    url = `/${type}/${id}`;
  }
  else {
    url = `/by-age/${data}`
  }

  router.push(url);
  close();
}

const RedirectItem = (type: any, data: any, close: any) => {
  let url = `/item?type=${type}&age=${data}`;
  router.push(url);
  close();
}
const RedirectToPage = (path: string) => {
  router.push(path);
  close();
}

const Logout = () => {
  authstore.resetUser();
  router.push('/');
}

function RedirectToCategoryPage(id: any, close: any) {
  router.push(`/subcategory/${id}`)
  close();
}

function mounted() {
  throw new Error('Function not implemented.')
}
//const mobile_app_info_ref = ref();
const is_mobile_app_info = ref(false);
const mobile_app_info = computed(() => {
  return is_mobile_app_info.value;
})

onMounted(() => {
  let data = sessionStorage.getItem('mobile_app_info');
  if (data !== undefined && data === 'true') {
    is_mobile_app_info.value = true;
  } else {
    is_mobile_app_info.value = false;
  }

  const storedCategory = localStorage.getItem('selectedCategory');
  if (storedCategory) {
    selectedCategory.value = storedCategory;
  }
})

const close_mobile_app_info = () => {
  sessionStorage.setItem('mobile_app_info', 'true');
  is_mobile_app_info.value = true;
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

const UpdateViewCount = async (item: any) => {
  if (authstore?.$state?.recentAuth.id) {
    CreateUserViewCount(item)
  }
  try {
    const response = await updateViewCount.mutate({
      itemdetails: {
        id: item,
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
  console.log('userviewcount', authstore?.$state?.recentAuth.id)
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

window.closeModal = function (modalId) {
  document.getElementById(modalId).style.display = 'none'
  document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
  const video = document.getElementById('storyVideo');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

function openStoryModal() {
  document.getElementById('modalStory').style.display = 'block'
  document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
  // const video = document.getElementById('storyVideo');
  // if (video) {
  //   video.currentTime = 0;
  //   video.play();
  // }
}
</script>