<template>
  <div>
    <div class="isolate bg-white px-6 lg:px-8">
      <form v-on:submit.prevent="submitItem()">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-2 sm:col-start-1">
                <label for="itemname" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="mt-2">
                  <input type="text" name="itemname" id="itemname" v-model="name" autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="material" class="block text-sm font-medium leading-6 text-gray-900">Material</label>
                <div class="mt-2">
                  <input type="text" v-model="material" name="material" id="material" autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="fit" class="block text-sm font-medium leading-6 text-gray-900">Fit</label>
                <div class="mt-2">
                  <input type="text" v-model="fit" name="fit" id="fit" autocomplete="fit"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2 sm:col-start-1">
                <label for="mrp" class="block text-sm font-medium leading-6 text-gray-900">Mrp</label>
                <div class="mt-2">
                  <input type="number" name="mrp" v-model="mrp" id="mrp" autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- buy% col -->
            <div class="sm:col-span-2">
              <label for="buypercentage" class="block text-sm font-medium leading-6 text-gray-900">Buy%</label>
              <div class="mt-2">
                <input type="number" name="buypercentage" id="buypercentage" v-model="buypercentage" autocomplete="buypercentage"
                  placeholder="Enter a gst"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <!-- buyprice col -->
            <div class="sm:col-span-2">
              <label for="buyPrice" class="block text-sm font-medium leading-6 text-gray-900">BuyPrice</label>
              <div class="mt-2">
                <input type="number" name="buyPrice" id="buyPrice" v-model="buyprice" autocomplete="buyPrice" disabled
                  placeholder="Enter a buyPrice"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <!-- gst col -->
            <div class="sm:col-span-2 sm:col-start-1">
              <label for="gst" class="block text-sm font-medium leading-6 text-gray-900">GST%</label>
              <div class="mt-2">
                <input type="number" name="gst" id="gst" v-model="gst" autocomplete="gst"
                  placeholder="Enter a gst"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <!-- price col -->
            <div class="sm:col-span-2">
              <label for="amount" class="block text-sm font-medium leading-6 text-gray-900">Price + GST</label>
              <div class="mt-2">
                <input type="number" name="amount" id="amount" v-model="price" autocomplete="amount" disabled
                  placeholder="Enter a price"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <!-- selloffer col -->
            <div class="sm:col-span-2">
              <label for="selloffer" class="block text-sm font-medium leading-6 text-gray-900">SellOffer</label>
              <div class="mt-2">
                <input type="number" name="selloffer" id="selloffer" v-model="selloffer" autocomplete="selloffer" disabled
                  placeholder="Enter a selloffer"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <!-- offer col -->
            <div class="sm:col-span-2">
              <label for="offer" class="block text-sm font-medium leading-6 text-gray-900">Final Offer</label>
              <div class="mt-2">
                <input type="number" name="offer" id="offer" v-model="offer" autocomplete="address-level1"
                  placeholder="Enter a offer"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <!-- finalprice col -->
            <div class="sm:col-span-2">
              <label for="finalamount" class="block text-sm font-medium leading-6 text-gray-900">Final Price</label>
              <div class="mt-2">
                <input type="number" name="finalamount" id="finalamount" v-model="finalamount" autocomplete="amount" disabled
                  placeholder="Enter a price"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

              <!-- <div class="sm:col-span-2">
                <label for="offer" class="block text-sm font-medium leading-6 text-gray-900">Offer</label>
                <div class="mt-2">
                  <input type="number" name="offer" v-model="offer" id="offer" autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="amount" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                <div class="mt-2">
                  <input type="number" name="amount" v-model="price" id="amount" autocomplete="amount"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div> -->
              <div class="sm:col-span-2 sm:col-start-1">
                <label for="categorytype" class="block text-sm font-medium leading-6 text-gray-900">Category
                  Type</label>
                <div class="mt-2">
                  <select id="categorytype" name="categorytype" autocomplete="categorytype-name" v-model="categoryType"
                    @change="categoryTypeChange()"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=2>Boys</option>
                    <option :value=1>Girls</option>
                    <option :value=5>Toys</option>
                    <option :value=4>Baby Care</option>
                    <option :value=3>Women</option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="category" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
                <div class="mt-2">
                  <select id="category" name="category" autocomplete="category-name" v-model="category"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option v-for="a of categorydetail" :value="a?.id" :key="a?.id">
                      {{ a?.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="categorytype" class="block text-sm font-medium leading-6 text-gray-900">Brand</label>
                <div class="mt-2">
                  <select id="categorytype" name="categorytype" autocomplete="categorytype-name" v-model="brand"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">

                    <option v-for="x of brandData?.brands" :key="x?.id" :value="x?.id">
                      {{ x?.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-3"></div>
              <div class="sm:col-span-2 sm:col-start-1">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="comments" name="todayOffer" :checked="todayOffer" type="checkbox" v-model="todayOffer"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="comments" class="font-medium text-gray-900">Today Offer</label>
                    <p class="text-gray-500">Get notified for today only.</p>
                  </div>
                </div>
              </div>

              <div class="sm:col-span-2">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="comments" name="active" :checked="active" v-model="active" type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="comments" class="font-medium text-gray-900">Active</label>
                    <p class="text-gray-500">Make it visible of invisible to users.</p>
                  </div>
                </div>
              </div>

              <div class="sm:col-span-2">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="comments" name="exchange" :checked="exchange" v-model="exchange" type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="comments" class="font-medium text-gray-900">Exchange</label>
                    <p class="text-gray-500">Exchange option available</p>
                  </div>
                </div>
              </div>
              <div class="sm:col-span-2">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="rental" name="rental" v-model="rental" type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="rental" class="font-medium text-gray-900">Rental</label>
                  <p class="text-gray-500">Make it rental option to users.</p>
                </div>
              </div>
            </div>
              <div class="col-span-full">
                <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                <div class="mt-2">
                  <textarea id="description" v-model="description" name="description" rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
                <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences description.</p>
              </div>

              <!-- change image -->
              <!-- <div class="col-span-full">
              <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900"
                >Cover photo</label
              >
              <div
                class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
              >
                <div class="text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div> -->

              <div class="sm:col-span-2 sm:col-start-1">
                <label for="details" class="block text-sm font-medium leading-6 text-gray-900">Details:</label>
                <div class="mt-2">
                  <textarea v-model="productdata.details" id="details" rows="2"
                    placeholder="eg: • Enter a product details"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </textarea>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="size" class="block text-sm font-medium leading-6 text-gray-900">Size:</label>
                <div class="mt-2">
                  <input type="text" name="size" id="size" v-model="productdata.size" autocomplete="address-level1"
                    placeholder="eg: Select a age group"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="material"
                  class="block text-sm font-medium leading-6 text-gray-900">Material/Ingredients:</label>
                <div class="mt-2">
                  <input type="text" name="material" id="material" v-model="productdata.material"
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="care" class="block text-sm font-medium leading-6 text-gray-900">Care:</label>
                <div class="mt-2">
                  <input type="text" name="care" id="care" v-model="productdata.care" autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="note" class="block text-sm font-medium leading-6 text-gray-900">Note:</label>
                <div class="mt-2">
                  <input type="text" name="note" id="note" v-model="productdata.note" autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <!-- <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button> -->
              <button type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Save Item Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <!-- ItemAvailable -->
    <div class="mt-10 isolate bg-white px-6 lg:px-8">
      <form v-on:submit.prevent="submitItemAvailable()">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-full">
                <label class="block text-lg font-medium leading-6 text-gray-900 text-center">Item available</label>
              </div>

              <!-- size select -->
              <div class="sm:col-span-6">
                <label for="selectedSize" class="block text-sm font-medium leading-6 text-gray-900">Size name</label>
                <div class="mt-2">
                  <select v-model="selectedSize" id="selectedSize" name="selectedSize" autocomplete="selectedSize"
                    @change="selectSizeChart(selectedSize)"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=null disabled>Select a size</option>
                    <option v-for="x of sizelist" :key="x" :value="x">
                      {{ x }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- size1 -->
              <div class="sm:col-span-1">
                <label for="size1" class="block text-sm font-medium leading-6 text-gray-900">Size-1</label>
                <div class="mt-2">
                  <select v-model="size1" id="size1" name="size1" autocomplete="size1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=null disabled>Select a size_1</option>
                    <option v-for="x of size" :key="x?.id" :value="x?.id">
                      {{ x.size }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="size1count" class="block text-sm font-medium leading-6 text-gray-900">Size-1 Count</label>
                <div class="mt-2">
                  <input type="number" name="size1count" id="size1count" v-model="size1count"
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- size2 -->
              <div class="sm:col-span-1">
                <label for="size2" class="block text-sm font-medium leading-6 text-gray-900">Size-2</label>
                <div class="mt-2">
                  <select v-model="size2" id="size2" name="size2" autocomplete="size2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=null disabled>Select a size</option>
                    <option v-for="x of size" :key="x?.id" :value="x?.id">
                      {{ x.size }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="size2count" class="block text-sm font-medium leading-6 text-gray-900">Size-2 Count</label>
                <div class="mt-2">
                  <input type="number" name="size2count" id="size2count" v-model="size2count" autocomplete="size2count"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- size3 -->
              <div class="sm:col-span-1">
                <label for="size3" class="block text-sm font-medium leading-6 text-gray-900">Size-3</label>
                <div class="mt-2">
                  <select v-model="size3" id="size3" name="size3" autocomplete="size3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=null disabled>Select a size_3</option>
                    <option v-for="x of size" :key="x?.id" :value="x?.id">
                      {{ x.size }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="size3count" class="block text-sm font-medium leading-6 text-gray-900">Size-3 Count</label>
                <div class="mt-2">
                  <input type="number" name="size3count" id="size3count" v-model="size3count" autocomplete="size3count"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- size4 -->
              <div class="sm:col-span-1">
                <label for="size4" class="block text-sm font-medium leading-6 text-gray-900">Size-4</label>
                <div class="mt-2">
                  <select v-model="size4" id="size4" name="size4" autocomplete="size4"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=null disabled>Select a size_4</option>
                    <option v-for="x of size" :key="x?.id" :value="x?.id">
                      {{ x.size }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="size4count" class="block text-sm font-medium leading-6 text-gray-900">Size-4 Count</label>
                <div class="mt-2">
                  <input type="number" name="size4count" id="size4count" v-model="size4count" autocomplete="size4count"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- size5 -->
              <div class="sm:col-span-1">
                <label for="size5" class="block text-sm font-medium leading-6 text-gray-900">Size-5</label>
                <div class="mt-2">
                  <select v-model="size5" id="size5" name="size5" autocomplete="size5"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=null disabled>Select a size_5</option>
                    <option v-for="x of size" :key="x?.id" :value="x?.id">
                      {{ x.size }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="size5count" class="block text-sm font-medium leading-6 text-gray-900">Size-5 Count</label>
                <div class="mt-2">
                  <input type="number" name="size5count" id="size5count" v-model="size5count" autocomplete="size5count1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- size6 -->
              <div class="sm:col-span-1">
                <label for="size6" class="block text-sm font-medium leading-6 text-gray-900">Size-6</label>
                <div class="mt-2">
                  <select v-model="size6" id="size6" name="size6" autocomplete="size6"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=null disabled>Select a size_6</option>
                    <option v-for="x of size" :key="x?.id" :value="x?.id">
                      {{ x.size }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="size6count" class="block text-sm font-medium leading-6 text-gray-900">Size-6 Count</label>
                <div class="mt-2">
                  <input type="number" name="size6count" id="size6count" v-model="size6count" autocomplete="size6count"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- size7 -->
              <div class="sm:col-span-1">
                <label for="size7" class="block text-sm font-medium leading-6 text-gray-900">Size-7</label>
                <div class="mt-2">
                  <select v-model="size7" id="size7" name="size7" autocomplete="size7"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=null disabled>Select a size_7</option>
                    <option v-for="x of size" :key="x?.id" :value="x?.id">
                      {{ x.size }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="size7count" class="block text-sm font-medium leading-6 text-gray-900">Size-7 Count</label>
                <div class="mt-2">
                  <input type="number" name="size7count" id="size7count" v-model="size7count" autocomplete="size7count"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- size8 -->
              <div class="sm:col-span-1">
                <label for="size8" class="block text-sm font-medium leading-6 text-gray-900">Size-8</label>
                <div class="mt-2">
                  <select v-model="size8" id="size8" name="size8" autocomplete="size8"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=null disabled>Select a size_8</option>
                    <option v-for="x of size" :key="x?.id" :value="x?.id">
                      {{ x.size }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="size8count" class="block text-sm font-medium leading-6 text-gray-900">Size-8 Count</label>
                <div class="mt-2">
                  <input type="number" name="size8count" id="offer" v-model="size8count" autocomplete="size8count"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- size9 -->
              <div class="sm:col-span-1">
                <label for="size9" class="block text-sm font-medium leading-6 text-gray-900">Size-9</label>
                <div class="mt-2">
                  <select v-model="size9" id="size9" name="size9" autocomplete="size9"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=null disabled>Select a size_9</option>
                    <option v-for="x of size" :key="x?.id" :value="x?.id">
                      {{ x.size }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="size9count" class="block text-sm font-medium leading-6 text-gray-900">Size-9 Count</label>
                <div class="mt-2">
                  <input type="number" name="size9count" id="size9count" v-model="size9count" autocomplete="size9count"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- size10 -->
              <div class="sm:col-span-1">
                <label for="size10" class="block text-sm font-medium leading-6 text-gray-900">Size-10</label>
                <div class="mt-2">
                  <select v-model="size10" id="size10" name="size10" autocomplete="size10"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option :value=null disabled>Select a size_10</option>
                    <option v-for="x of size" :key="x?.id" :value="x?.id">
                      {{ x.size }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="size10count" class="block text-sm font-medium leading-6 text-gray-900">Size-10 Count</label>
                <div class="mt-2">
                  <input type="number" name="size10count" id="size10count" v-model="size10count"
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="offer" class="block text-sm font-medium leading-6 text-gray-900">Total Count</label>
                <div class="mt-2">
                  <input type="text" name="offer" id="offer" v-model="total" disabled autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-3"></div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
          disabled:bg-indigo-200 disabled:text-gray-400 disabled:cursor-not-allowed">
                Save Item Available Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <!-- Item upload image -->
    <div class="mt-10 isolate bg-white px-6 lg:px-8">
      <form v-on:submit.prevent="submitItemImage()">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <label class="block text-lg font-medium leading-6 text-gray-900 text-center">Upload Image</label>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <!-- Image1 -->
              <div class="sm:col-span-2">
                <div class="col-span-full">
                  <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Image1</label>
                  <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                      <svg v-if="!imagePreview1" class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24"
                        fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd" />
                      </svg>

                      <!-- Image Preview -->
                      <img v-if="imagePreview1" :src="imagePreview1" alt="Uploaded Image"
                        class="mx-auto h-48 w-48 object-cover" />

                      <div class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label for="file-upload-1"
                          class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload-1" name="file-upload-1" type="file" @change="(event) => handleFileUpload(event, 'image1')"
                            class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Image2 -->
              <div class="sm:col-span-2">
                <div class="col-span-full">
                  <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Image2</label>
                  <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                      <svg v-if="!imagePreview2" class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24"
                        fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd" />
                      </svg>

                      <!-- Image Preview -->
                      <img v-if="imagePreview2" :src="imagePreview2" alt="Uploaded Image"
                        class="mx-auto h-48 w-48 object-cover" />

                      <div class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label for="file-upload-2"
                          class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload-2" name="file-upload-2" type="file" @change="(event) => handleFileUpload(event, 'image2')"
                            class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Image3 -->
              <div class="sm:col-span-2">
                <div class="col-span-full">
                  <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Image3</label>
                  <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                      <svg v-if="!imagePreview3" class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24"
                        fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd" />
                      </svg>

                      <!-- Image Preview -->
                      <img v-if="imagePreview3" :src="imagePreview3" alt="Uploaded Image"
                        class="mx-auto h-48 w-48 object-cover" />

                      <div class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label for="file-upload-3"
                          class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload-3" name="file-upload-3" type="file" @change="(event) => handleFileUpload(event, 'image3')"
                            class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Image4 -->
              <div class="sm:col-span-2">
                <div class="col-span-full">
                  <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Image4</label>
                  <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                      <svg v-if="!imagePreview4" class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24"
                        fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd" />
                      </svg>

                      <!-- Image Preview -->
                      <img v-if="imagePreview4" :src="imagePreview4" alt="Uploaded Image"
                        class="mx-auto h-48 w-48 object-cover" />

                      <div class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label for="file-upload-4"
                          class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload-4" name="file-upload-4" type="file" @change="(event) => handleFileUpload(event, 'image4')"
                            class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Image5 -->
              <div class="sm:col-span-2">
                <div class="col-span-full">
                  <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Image5</label>
                  <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                      <svg v-if="!imagePreview5" class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24"
                        fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd" />
                      </svg>

                      <!-- Image Preview -->
                      <img v-if="imagePreview5" :src="imagePreview5" alt="Uploaded Image"
                        class="mx-auto h-48 w-48 object-cover" />

                      <div class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label for="file-upload-5"
                          class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload-5" name="file-upload-5" type="file" @change="(event) => handleFileUpload(event, 'image5')"
                            class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Image6 -->
              <div class="sm:col-span-2">
                <div class="col-span-full">
                  <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Image6</label>
                  <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                      <svg v-if="!imagePreview6" class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24"
                        fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd" />
                      </svg>

                      <!-- Image Preview -->
                      <img v-if="imagePreview6" :src="imagePreview6" alt="Uploaded Image"
                        class="mx-auto h-48 w-48 object-cover" />

                      <div class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label for="file-upload-6"
                          class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload-6" name="file-upload-6" type="file" @change="(event) => handleFileUpload(event, 'image6')"
                            class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
          disabled:bg-indigo-200 disabled:text-gray-400 disabled:cursor-not-allowed">
                Save Item Image Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useGetItemAvailableById, useGetItemById, useGetSizeChart } from '../../api/admin/item'
import useCategoryDetails from '../../api/admin/category'

import useBrandDetails from '../../api/admin/brand';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@vue/apollo-composable';
import { controllerUrlPath } from '@/constant/commonPath';

const id = ref<string>();
const name = ref<string>();
const material = ref<string>();
const fit = ref<string>();
const mrp = ref<number>(0);
const buypercentage = ref<number>(0);
const buyprice = ref<number>(0);
const gst = ref<number>(0);
const selloffer = ref<number>(0);
const finalamount = ref<number>(0);
const offer = ref<number>(0);
const price = ref<number>(0);
const categoryType = ref();
const category = ref<string>();
const brand = ref<string>();
const todayOffer = ref<boolean>();
const active = ref<boolean>();
const rental = ref<boolean>();
const exchange = ref<boolean>();
const description = ref<string>();
const returnday = ref<string>();
const viewcount = ref<number>(0);
const productdata = ref({
  details: null,
  size: null,
  material: null,
  care: null,
  note: null,
});
const categorydetail = ref()
const selectedSize = ref<string | any>(null);
const size = ref();
const size1 = ref<string | any>(null);
const size1count = ref(0)
const size2 = ref<string | any>(null)
const size2count = ref(0)
const size3 = ref<string | any>(null)
const size3count = ref(0);
const size4 = ref<string | any>(null)
const size4count = ref(0);
const size5 = ref<string | any>(null)
const size5count = ref(0);
const size6 = ref<string | any>(null)
const size6count = ref(0);
const size7 = ref<string | any>(null)
const size7count = ref(0);
const size8 = ref<string | any>(null)
const size8count = ref(0);
const size9 = ref<string | any>(null)
const size9count = ref(0);
const size10 = ref<string | any>(null)
const size10count = ref(0);
const uniqueSizesSet = new Set();
//const imagePreview = ref<string[]>([]);
const imagePreview1 = ref()
const imagePreview2 = ref()
const imagePreview3 = ref()
const imagePreview4 = ref()
const imagePreview5 = ref()
const imagePreview6 = ref()
const uploadedFiles = ref<File[]>([]);
const path1 = ref<string | any>(null)
const path2 = ref<string | any>(null)
const path3 = ref<string | any>(null)
const path4 = ref<string | any>(null)
const path5 = ref<string | any>(null)
const path6 = ref<string | any>(null)


const route = useRoute()
const { result: data } = useGetItemAvailableById(route?.params.id)
console.log('data', data)
const { result: categoryDate } = useCategoryDetails()
console.log('categoryDate', categoryDate)
const { result: itemData } = useGetItemById(route?.params.id);
console.log(itemData, 'adsffa');
const { result: brandData } = useBrandDetails()
const { result: sizeChartData } = useGetSizeChart()

const { result: sizeData, refetch: refetchSizeData } = useQuery(
  computed(() => {
    return gql`
    query GetSizeChartsByName {
      sizeChartsByName(name: "${selectedSize.value}") {
        id
        size
        brandSize
        common
      }
    }
  `
  })
)

const sizelist = computed(() => {
  sizeChartData?.value?.sizeCharts.forEach((element: any) => {
    if (!uniqueSizesSet.has(element.common)) {
      uniqueSizesSet.add(element.common);
    }
  });
  return Array.from(uniqueSizesSet)
})

watch([sizeData], () => {
  console.log('sizeData', sizeData?.value?.sizeChartsByName);
  size.value = sizeData?.value?.sizeChartsByName;
});

watch([itemData, categoryDate, data], () => {
  if(itemData && categoryDate && data) {
    id.value = itemData?.value?.itemsById?.id;
  name.value = itemData?.value?.itemsById?.name;
  material.value = itemData?.value?.itemsById?.material;
  fit.value = itemData?.value?.itemsById?.fit;
  mrp.value = itemData?.value?.itemsById?.mrp;
  buyprice.value = itemData?.value?.itemsById?.buyPrice;
  buypercentage.value = itemData?.value?.itemsById?.buyPercentage;
  gst.value = itemData?.value?.itemsById?.gst;
  offer.value = itemData?.value?.itemsById?.offer;
  price.value = itemData?.value?.itemsById?.amount;
  finalamount.value = itemData?.value?.itemsById?.amount;
  todayOffer.value = itemData?.value?.itemsById?.isToday;
  active.value = itemData?.value?.itemsById?.isActive;
  rental.value = itemData?.value?.itemsById?.isRental;
  exchange.value = itemData?.value?.itemsById?.isExchange;
  description.value = itemData?.value?.itemsById?.description;
  categoryType.value = itemData?.value?.itemsById?.categoryType.id;
  category.value = itemData?.value?.itemsById?.category.id;
  brand.value = itemData?.value?.itemsById?.brand.id;
  returnday.value = itemData?.value?.itemsById?.returnDay;
  viewcount.value = itemData?.value?.itemsById?.viewCount;
  productdata.value = itemData?.value?.itemsById?.productDetail ? JSON.parse(itemData?.value?.itemsById?.productDetail) : {
      details: null,
      size: null,
      material: null,
      care: null,
      note: null,
    };
  categorydetail.value = categoryDate?.value?.category.filter((data: any) => data.categoryTypeId == categoryType.value)

  selectedSize.value = data?.value?.itemAvailablesByItemId?.size1Navigation?.common
  size1.value = data?.value?.itemAvailablesByItemId?.size1Navigation?.id || null
  size1count.value = data?.value?.itemAvailablesByItemId?.size1Count || 0
  size2.value = data?.value?.itemAvailablesByItemId?.size2Navigation?.id || null
  size2count.value = data?.value?.itemAvailablesByItemId?.size2Count || 0
  size3.value = data?.value?.itemAvailablesByItemId?.size3Navigation?.id || null
  size3count.value = data?.value?.itemAvailablesByItemId?.size3Count || 0
  size4.value = data?.value?.itemAvailablesByItemId?.size4Navigation?.id || null
  size4count.value = data?.value?.itemAvailablesByItemId?.size4Count || 0
  size5.value = data?.value?.itemAvailablesByItemId?.size5Navigation?.id || null
  size5count.value = data?.value?.itemAvailablesByItemId?.size5Count || 0
  size6.value = data?.value?.itemAvailablesByItemId?.size6Navigation?.id || null
  size6count.value = data?.value?.itemAvailablesByItemId?.size6Count || 0
  size7.value = data?.value?.itemAvailablesByItemId?.size7Navigation?.id || null
  size7count.value = data?.value?.itemAvailablesByItemId?.size7Count || 0
  size8.value = data?.value?.itemAvailablesByItemId?.size8Navigation?.id || null
  size8count.value = data?.value?.itemAvailablesByItemId?.size8Count || 0
  size9.value = data?.value?.itemAvailablesByItemId?.size9Navigation?.id || null
  size9count.value = data?.value?.itemAvailablesByItemId?.size9Count || null
  size10.value = data?.value?.itemAvailablesByItemId?.size10Navigation?.id || null
  size10count.value = data?.value?.itemAvailablesByItemId?.size10Count || 0
  }
})

const pricegst = computed(() => {
  let price = buyprice?.value + (buyprice?.value * (gst.value / 100))
  return Math.round(price)
})

watch([mrp, offer, buypercentage, gst], () => {
  console.log('mrp', mrp.value, offer.value);
  // let amount = mrp.value - (mrp.value * (offer.value / 100)) || 0
  // price.value = Math.round(amount)

  let buy = mrp?.value - (mrp?.value * (buypercentage.value / 100))
  buyprice.value = Math.round(buy)

  let pricevalue = buyprice?.value + (buyprice?.value * (gst.value / 100))
  price.value = Math.round(pricevalue);

  let sellvalue = ((mrp?.value - price?.value)/mrp?.value) * 100
  selloffer.value = Math.round(sellvalue)

  let final = offer.value > 0 ? mrp?.value - (mrp?.value * (offer.value / 100)) : mrp?.value - (mrp?.value * (selloffer.value / 100))
  finalamount.value = Math.round(final)
})

const total = computed(() => {
  return size1count?.value + size2count?.value + size3count?.value + size4count?.value + size5count?.value +
    size6count?.value + size7count?.value + size8count?.value + size9count?.value + size10count?.value
})

function categoryTypeChange() {
  categorydetail.value = categoryDate?.value?.category.filter((data: any) => data.categoryTypeId == categoryType.value)
}

function selectSizeChart(data: any) {
  size1.value = null
  size1count.value = 0
  size2.value = null
  size2count.value = 0
  size3.value = null
  size3count.value = 0
  size4.value = null
  size4count.value = 0
  size5.value = null
  size5count.value = 0
  size6.value = null
  size6count.value = 0
  size7.value = null
  size7count.value = 0
  size8.value = null
  size8count.value = 0
  size9.value = null
  size9count.value = 0
  size10.value = null
  size10count.value = 0
  refetchSizeData()
}


const UPDATE_Item = gql`
  mutation updateItem($itemdetails: ItemInput!) {
    updateItem(itemdetails: $itemdetails)
  }
`;

const updateItem = useMutation(UPDATE_Item, {
  optimisticResponse: {
    updateItem: true,
  },
});

async function submitItem() {
  // if (productdata.value.details) {
  //   const line = productdata?.value?.details.split('\n')
  //   // const x = data.split('\n')
  //   const data = line.map((line: any) => line.startsWith('• ') ? line.trim() : `• ${line.trim()}`).join('\n');
  //   //const linesWithoutBullets = productdata?.value?.details.map((line: any) => line.startsWith('• ') ? line.slice(2).trim() : line.trim());
  //   productdata.value.details = data

  //   console.log(productdata.value.details)
  // }
  // else {
  //   productdata.value.details = null;
  // }

  try {
    const response = await updateItem.mutate({
      itemdetails: {
        id: id.value,
        name: name.value,
        material: material.value,
        fit: fit.value,
        description: description.value,
        mrp: mrp.value,
        buyPrice: buyprice.value,
        buyPercentage: buypercentage.value,
        offer: offer.value > 0 ? offer.value : selloffer.value,
        gst: gst.value,
        amount: finalamount.value,
        brandId: brand.value,
        categoryId: category.value,
        categoryTypeId: categoryType.value,
        isToday: todayOffer.value,
        isExchange: exchange.value,
        qualityChecked: exchange.value,
        returnDay: returnday.value,
        productDetail: JSON.stringify(productdata.value),
        modifiedOn: new Date().toISOString(),
        isActive: active.value,
        isRental: rental.value,
        viewCount: viewcount.value
      }
    });

    if (response?.data?.updateItem) {
      console.log("Item updated successfully:", response);
      alert("Item updated successfully")
      window.location.reload();
    } else {
      console.log("item updated failed.");
    }
  } catch (error) {
    console.error("Error updated brand:", error);
  }
}

const UPDATE_ITEMAVAILABLE = gql`
  mutation postUpdateItemAvailable($itemavailable: ItemAvailableInput!) {
    postUpdateItemAvailable(itemavailable: $itemavailable)
  }
`;

const postUpdateItemAvailable = useMutation(UPDATE_ITEMAVAILABLE, {
  optimisticResponse: {
    postUpdateItemAvailable: true,
  },
});

async function submitItemAvailable() {
  try {
    const response = await postUpdateItemAvailable.mutate({
      itemavailable: {
        id: id.value,
        itemId: id.value,
        size1: size1.value,
        size1Count: size1count.value,
        size2: size2.value,
        size2Count: size2count.value,
        size3: size3.value,
        size3Count: size3count.value,
        size4: size4.value,
        size4Count: size4count.value,
        size5: size5.value,
        size5Count: size5count.value,
        size6: size6.value,
        size6Count: size6count.value,
        size7: size7.value,
        size7Count: size7count.value,
        size8: size8.value,
        size8Count: size8count.value,
        size9: size9.value,
        size9Count: size9count.value,
        size10: size10.value,
        size10Count: size10count.value,
        totalCount: total.value,
        modifiedOn: new Date().toISOString(),
        isActive: active.value,
      }
    });

    if (response?.data?.postUpdateItemAvailable) {
      console.log("Item updated successfully:", response);
      alert("Item updated successfully")
      window.location.reload();
    } else {
      console.log("item updated failed.");
    }
  } catch (error) {
    console.error("Error updated brand:", error);
  }
}

async function submitItemImage() {
  console.log('uploadedFiles.value', uploadedFiles.value)

  const itemdata ={
    id: id.value,
    itemId: id.value,
    path1: path1.value,
    path2: path2.value,
    path3: path3.value,
    path4: path4.value,
    path5: path5.value,
    path6: path6.value,
  }

  const formData = new FormData();
  for (let i = 0; i < uploadedFiles.value.length; i++) {
    formData.append('files', uploadedFiles.value[i]);
  }
  formData.append('itemdetails', JSON.stringify(itemdata));

  fetch(`${controllerUrlPath}postupdateitem`, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add item');
      }
      return response.json();
    })
    .then(data => {
      alert('Item updated successfully')
      window.location.reload();
      // window.history.back();
      console.log('Success:', data)
    }
    )
    .catch((error) => console.error('Error:', error));
}

const handleFileUpload = (event: any, type: string) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    uploadedFiles.value.push(file);
    reader.onload = (e: any) => {
      type == 'image1' ? (imagePreview1.value = e.target.result , path1.value = '1'): null;
      type == 'image2' ? (imagePreview2.value = e.target.result , path2.value = '2'): null;
      type == 'image3' ? (imagePreview3.value = e.target.result , path3.value = '3'): null;
      type == 'image4' ? (imagePreview4.value = e.target.result , path4.value = '4'): null;
      type == 'image5' ? (imagePreview5.value = e.target.result , path5.value = '5'): null;
      type == 'image6' ? (imagePreview6.value = e.target.result , path6.value = '6'): null;
    };
    reader.readAsDataURL(file);
  }
};

</script>

<style></style>