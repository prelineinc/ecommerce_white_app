<template>
    <div class="mx-auto mt-5">
        <div class="flex flex-col">
            <div class="flex item-center justify-between mb-2">
                <div style="max-width: 18rem;justify-content: left;"
                    class="relative flex items-center w-full h-10 rounded-lg ring-gray-600 focus-within:shadow-lg focus-within:bg-white focus-within:ring-2 overflow-hidden bg-gray-100">
                    <div class="grid place-items-center h-full basis-12 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        class="peer h-full flex-1 border-0 outline-none text-sm text-gray-700 bg-transparent focus:ring-0"
                        type="text" id="search" :autofocus="showSearch" v-model="searchInput"
                        placeholder="Search item" />
                    <button type="button" class="grid place-items-center h-full basis-12 text-gray-400"
                        v-if="showClearButton" @click="clearSearch">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <button @click="RedirectToItemPage()" style="max-width: 5rem;justify-content: right;"
                    class="bg-gray-900 text-white rounded-md md:w-20 w-full px-3 py-2 text-sm font-medium">Add</button>
            </div>
            <div class="flex item-center justify-between mb-2">
                <div class="md:flex items-center">
                    <!-- <label class="font-semibold md:me-2">Select: </label> -->
                    <!-- <select v-model="brand" id="brand" name="brand" @change="FilterCombination()"
                        class="form-select form-input text-sm md:w-40 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                        <option :value=null disabled>Select a brand</option>
                        <option v-for="(x, index) of brandsData?.brands" :key="x.id" :value="x.id">{{ x.name }}</option>
                    </select> -->
                    <select v-model="selectedBrand" id="brand" name="brand" @change="FilterCombination()"
                        class="form-select form-input text-sm md:w-40 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                        <option value="" disabled>Select a brand</option>
                        <option v-for="x in brandsData?.brands" :key="x.id" :value="x.id">
                            {{ x.name }}
                        </option>
                    </select>
                </div>
                <div class="md:flex items-center">
                    <select v-model="selectedAge" id="ageGroup" name="ageGroup"
                        class="form-select form-input text-sm md:w-40 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                        <option value="" disabled>Select a age</option>
                        <option :value=0>0-6</option>
                        <option :value=2>6-12</option>
                        <option :value=2>1-3</option>
                        <option :value=7>3-12</option>
                    </select>
                </div>
                <div class="md:flex items-center">
                    <select v-model="selectedDiscount" id="offer" name="offer" @change="FilterCombination()"
                        class="form-select form-input text-sm md:w-40 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                        <option value="" disabled>Select a offer</option>
                        <option :value="20">20%</option>
                        <option :value="40">40%</option>
                        <option :value="60">60%</option>
                        <option :value="80">80%</option>
                    </select>
                </div>
                <div class="md:flex items-center">
                    <!-- <label class="font-semibold md:me-2">Select: </label> -->
                    <select v-model="selectedPrice" id="price" name="price" @change="FilterCombination()"
                        class="form-select form-input text-sm md:w-40 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                        <option value="" disabled>Select a Price</option>
                        <option :value="100">Below ₹100</option>
                        <option :value="300">Below ₹300</option>
                        <option :value="500">Below ₹500</option>
                        <option :value="700">Below ₹700</option>
                        <option :value="1000">Below ₹1000</option>
                    </select>
                </div>
                <div class="md:flex items-center">
                    <!-- <label class="font-semibold md:me-2">Select: </label> -->
                    <select v-model="selectedCategoryType" id="categorytype" name="categorytype"
                        autocomplete="categorytype-name"
                        class="form-select form-input text-sm md:w-40 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                        <option :value=0 disabled>Select a categorytype</option>
                        <option :value=2>Boys</option>
                        <option :value=1>Girls</option>
                        <option :value=5>Toys</option>
                        <option :value=4>Baby Care</option>
                        <option :value=3>Women</option>
                    </select>
                </div>
                <div class="md:flex items-center">
                    <select v-model="selectedStatus" id="status" name="status" @change="FilterCombination()"
                        class="form-select form-input text-sm md:w-40 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                        <!-- <option :value=0 disabled>Select a Status</option> -->
                        <option :value=true>Active</option>
                        <option :value=false>InActive</option>
                    </select>
                </div>
                <button @click="ClearFilter()" style="max-width: 5rem;justify-content: right;"
                    class="bg-red-600 text-white rounded-md px-2 py-2 text-sm font-medium">Clear</button>
            </div>

            <!-- // item table // -->
            <div v-if="!filterDataUpdate" class="overflow-x-auto shadow-md sm:rounded-lg">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden ">
                        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Product Name
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Price
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Offer
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Avaliable Count
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Category
                                    </th>

                                    <th scope="col" class="p-4">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                <tr v-for="x of updatedItemsData" :key="x"
                                    class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td> <img style="max-width: 4rem;" :src="`${imagePath}${x?.imagePath}`" /></td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        {{ x.name }} </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        price : {{ x?.amount }}&nbsp; mrp:{{ x?.mrp }}</td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ x?.offer }}% </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ x?.itemAvailables[0].totalCount }}</td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        {{ x?.categoryType?.name }}</td>
                                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                        <!-- <a @click="RedirectToItemDetailPage(x.id)" class="text-blue-600 dark:text-blue-500 hover:underline">Details</a> -->
                                        <!-- <button @click="RedirectToItemDetailPage(x.id)" style="max-width: 5rem;" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Details</button>  -->
                                        <svg style="cursor: pointer" @click="RedirectToItemDetailPage(x.id)"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div
                            class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                            <div class="flex flex-1 justify-between sm:hidden">
                                <a href="#"
                                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                                <a href="#"
                                    class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                            </div>
                            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                <div>
                                    <p class="text-sm text-gray-700">
                                        Showing
                                        <span class="font-medium">{{ showingRange }}</span>
                                        of
                                        <span class="font-medium">{{ finalPageTotal }}</span>
                                        results
                                    </p>
                                </div>
                                <div>
                                    <nav class="isolate inline-flex -space-x-px rounded-md shadow-xs"
                                        aria-label="Pagination">
                                        <a class="relative inline-flex items-center px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md"
                                            :class="{ 'opacity-50 cursor-not-allowed pointer-events-none ring-1 ring-gray-300 ring-inset': updatePage === 0 }"
                                            @click.prevent="updatePage > 0 && prevPage()">
                                            <span class="sr-only">Previous</span>
                                            <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true" data-slot="icon">
                                                <path fill-rule="evenodd"
                                                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <a v-for="page in visiblePages" :key="page" href="#" :class="[
                                            page === currentPage + 1 ? 'bg-gray-800 text-white font-bold cursor-not-allowed' : 'text-gray-600 ring-1 ring-gray-300 ring-inset',
                                            page === '...' ? 'cursor-not-allowed text-gray-400' : '',
                                            'flex-initial px-3 py-2 border-2 border-transparent rounded-md',
                                            'hover:no-underline hover:text-gray-800 hover:bg-gray-100',
                                            'transition duration-300 ease-in-out'
                                        ]"
                                            @click.prevent="page !== '...' && page !== currentPage + 1 && goToPage(page)">
                                            {{ page }}
                                        </a>
                                        <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                                        <!-- <a href="#" aria-current="page"
                                            class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                        <a href="#"
                                            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                        <a href="#"
                                            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                        <span
                                            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">...</span>
                                        <a href="#"
                                            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                        <a href="#"
                                            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                        <a href="#"
                                            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a> -->
                                        <div class="relative inline-flex items-center px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md ring-1 ring-gray-300 ring-inset"
                                            :class="{ 'opacity-50 cursor-not-allowed pointer-events-none ring-1 ring-gray-300 ring-inset': updatePage === totalPages - 1 }"
                                            @click.prevent="updatePage < totalPages - 1 && nextPage()">
                                            <span class="sr-only">Next</span>
                                            <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true" data-slot="icon">
                                                <path fill-rule="evenodd"
                                                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- // filter table // -->
            <div v-else class="overflow-x-auto shadow-md sm:rounded-lg">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden ">
                        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Product Name
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Price
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Offer
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Avaliable Count
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Category
                                    </th>
                                    <th scope="col" class="p-4">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                <tr v-for="x of updatedItemsFilterData" :key="x"
                                    class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td> <img style="max-width: 4rem;" :src="`${imagePath}${x?.imagePath}`" /></td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        {{ x.name }} </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        price : {{ x?.amount }}&nbsp; mrp:{{ x?.mrp }}</td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ x?.offer }}% </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ x?.itemAvailables[0].totalCount }}</td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        {{ x?.categoryType?.name }}</td>
                                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                        <svg style="cursor: pointer" @click="RedirectToItemDetailPage(x.id)"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div
                            class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                            <div class="flex flex-1 justify-between sm:hidden">
                                <a href="#"
                                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                                <a href="#"
                                    class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                            </div>
                            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                <div>
                                    <p class="text-sm text-gray-700">
                                        Showing
                                        <span class="font-medium">{{ showingRange }}</span>
                                        of
                                        <span class="font-medium">{{ finalPageTotal }}</span>
                                        results
                                    </p>
                                </div>
                                <div>
                                    <nav class="isolate inline-flex -space-x-px rounded-md shadow-xs"
                                        aria-label="Pagination">
                                        <a class="relative inline-flex items-center px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md"
                                            :class="{ 'opacity-50 cursor-not-allowed pointer-events-none ring-1 ring-gray-300 ring-inset': updatePage === 0 }"
                                            @click.prevent="updatePage > 0 && prevPage()">
                                            <span class="sr-only">Previous</span>
                                            <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true" data-slot="icon">
                                                <path fill-rule="evenodd"
                                                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <a v-for="page in visiblePages" :key="page" href="#" :class="[
                                            page === currentPage + 1 ? 'bg-gray-800 text-white font-bold cursor-not-allowed' : 'text-gray-600 ring-1 ring-gray-300 ring-inset',
                                            page === '...' ? 'cursor-not-allowed text-gray-400' : '',
                                            'flex-initial px-3 py-2 border-2 border-transparent rounded-md',
                                            'hover:no-underline hover:text-gray-800 hover:bg-gray-100',
                                            'transition duration-300 ease-in-out'
                                        ]"
                                            @click.prevent="page !== '...' && page !== currentPage + 1 && goToPage(page)">
                                            {{ page }}
                                        </a>
                                        <div class="relative inline-flex items-center px-3 py-2 text-gray-600 hover:no-underline hover:text-gray-800 hover:bg-gray-100 rounded-md ring-1 ring-gray-300 ring-inset"
                                            :class="{ 'opacity-50 cursor-not-allowed pointer-events-none ring-1 ring-gray-300 ring-inset': updatePage === totalPages - 1 }"
                                            @click.prevent="updatePage < totalPages - 1 && nextPage()">
                                            <span class="sr-only">Next</span>
                                            <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true" data-slot="icon">
                                                <path fill-rule="evenodd"
                                                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </nav>
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
import { imagePath } from '@/constant/commonPath';
import { useItemDetailsByPage } from '../../api/admin/item';
import Item from '../../types/admin/item';
import { useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue';
import { computed } from 'vue';
import { watch } from 'vue';
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { useGetBrand } from '../../api/user/home';
import { onMounted } from 'vue';


//console.log('brand',itemData as Item[]);
const router = useRouter()
const searchInput = ref<string>('');
const showSearch = ref(false);
const filterData = ref<any>()
const itemsListData = ref<any>()
const currentPage = ref(0);
const updatePage = computed(() => currentPage.value)

const selectedBrand = ref<string>('');
const selectedAge = ref<string>('');
const selectedPrice = ref<any>('');
const selectedDiscount = ref<string>('');
const selectedCategoryType = ref(0);
const selectedStatus = ref(true)
const totalPages = ref(0);
const finalPageTotal = ref(0)

const filterDataUpdate = computed(() => {
    return ((selectedBrand.value != '') || (selectedAge.value != '') || (selectedPrice.value != '') || (selectedDiscount.value != '') || (selectedCategoryType.value != 0)) ? true : false;
})

// const filterStatus = computed(() => {
//     if (selectedStatus.value == 1) {
//         return true;
//     }
//     else {
//         return false
//     }
// })

//fetch brand
const { result: brandsData } = useGetBrand();

//const { result: itemData, refetch: refetchItemsByPage } = useItemDetailsByPage(updatePage.value);

//fetch itemcount
const { result: itemsByCount, refetch: refetchItemsByCount } = useQuery(
    computed(() => {
        return gql`
      query  GetItemsByPageCount{
        itemsByPageCount(id: "00000000-0000-0000-0000-000000000000", amount: "0", less1: false, less6: false, greater6: false, categorytypeid: "0",  name: "page")
      }
     `
    })
)

//fetch filteritemcount
const { result: filterItemsByCount, refetch: refetchFilterItemsByCount } = useQuery(
    computed(() => {
        return gql`
      query  GetAdminItemsByFilterPageCount{
        adminItemsByFilterPageCount(
        brandid: "${selectedBrand.value}", 
        categorytype: ${selectedCategoryType.value}, 
        ages: "${selectedAge.value}",
        prices: "${selectedPrice.value}", 
        discounts: "${selectedDiscount.value}", 
        status: ${selectedStatus.value})
      }
     `
    })
)

//fetch item
const { result: itemData, refetch: refetchItemsByPage } = useQuery(computed(() => {
    return gql`
    query{
        itemsByPage(
        page: ${updatePage.value}  
      )
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
        categoryType {
    createdOn
    id
    isActive
    modifiedOn
    name
  }
    }
  }`
}))

//fetch filteritem
const { result: itemsByFilterData, refetch: refetchItemsByFilterData } = useQuery(computed(() => {
    return gql`
    query{
        adminItemsByFilters(
        brandid: "${selectedBrand.value}", 
        categorytype: ${selectedCategoryType.value}, 
        ages: "${selectedAge.value}",
        prices: "${selectedPrice.value}", 
        discounts: "${selectedDiscount.value}", 
        status: ${selectedStatus.value},
        page: ${updatePage.value}  
      )
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
        categoryType {
    createdOn
    id
    isActive
    modifiedOn
    name
  }
    }
  }`
}))

const updatedItemsData = computed(() => {
    return [...(itemData.value?.itemsByPage || [])];
})

const updatedItemsFilterData = computed(() => {
    return [...(itemsByFilterData.value?.adminItemsByFilters || [])];
})

onMounted(() => {
    refetchItemsByCount()
    refetchItemsByPage()
})

watchEffect(() => {
    if (!filterDataUpdate.value && itemsByCount?.value?.itemsByPageCount) {
        const count = itemsByCount?.value?.itemsByPageCount || 0;
        console.log(count)
        finalPageTotal.value = count;

        totalPages.value = Math.ceil(count / 20);
        console.log(totalPages.value)
    }
    else if (filterDataUpdate.value && filterItemsByCount?.value?.adminItemsByFilterPageCount) {
        const count = filterItemsByCount?.value?.adminItemsByFilterPageCount;
        finalPageTotal.value = count;
        totalPages.value = Math.ceil(count / 20);
    }
});

const showingRange = computed(() => {
    const start = currentPage.value > 0 ? (currentPage.value) * 20 + 1 : 1;
    const end = Math.min(start + 20 - 1, finalPageTotal.value);
    return `${start} to ${end}`;
});

const FilterCombination = () => {
    currentPage.value = 0
    refetchItemsByFilterData()
}

const ClearFilter = () => {
    currentPage.value = 0
    selectedBrand.value = '';
    selectedAge.value = '';
    selectedCategoryType.value = 0;
    selectedPrice.value = '';
    selectedDiscount.value = '';
    selectedStatus.value = true;
}

const clearSearch = () => {
    searchInput.value = '';
};

const showClearButton = computed(() => {
    return searchInput.value.trim() !== '';
});

watch(searchInput, (newValue) => {
    const filter = itemsListData.value.filter((data: any) =>
        data.name.toLowerCase().includes(newValue.toLowerCase())
    );
    filterData.value = filter
});

const RedirectToItemDetailPage = (id: any) => {
    router.push(`item/${id}`)
}

const RedirectToItemPage = () => {
    router.push('item/add');
}

const visiblePages = computed(() => {
    let pages = [];
    const currentPage = updatePage.value + 1;
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

const nextPage = () => {
    currentPage.value = currentPage.value + 1

}
const prevPage = () => {
    currentPage.value = currentPage.value - 1
}

const goToPage = (page: any) => {
    currentPage.value = page - 1;
};

</script>

<style></style>