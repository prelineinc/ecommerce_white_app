<template>
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
</template>
<script lang="ts" setup>
import { onMounted, ref, watch, computed, onBeforeUnmount } from 'vue';
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { useGetBrand } from '../../api/user/home';

const checkedBrand = ref<any[]>([]);
const checkedAge = ref([]);
const checkedPrice = ref([]);
const checkedDiscount = ref([]);
const allItemCombinedFillter = ref<any[]>([]);
const brandName = ref<any[]>([]);
const isMobile = ref(false);
const mobFilter = ref(false);
const mobSorting = ref(false);
const { result: brandsData } = useGetBrand();

const emit = defineEmits<{
  (e: 'update:updateItemsFiltersData', value: any): void
}>()

onMounted(() => {
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

const FilterBrand = (data: any) => {
  const brandId = data.id;
  const brandNameValue = data.name;
  const index = brandName.value.indexOf(brandNameValue);
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
  if ((checkedAge.value.length > 0) || (checkedBrand.value.length > 0) || (checkedPrice.value.length > 0) || (checkedDiscount.value.length > 0)) {
    refetchItemsByFilter();
  }

};

// const filterDataUpdate = computed(() => {
//   if (itemsByFilter?.value?.itemsByFilters) {
//     emit('update:updateItemsFiltersData', itemsByFilter?.value?.itemsByFilters);
//   }
//   return '';
// })



const { result: itemsByFilter, refetch: refetchItemsByFilter } = useQuery(computed(() => {
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
watch([itemsByFilter], () => {
  if ((checkedAge.value.length > 0) || (checkedBrand.value.length > 0) || (checkedPrice.value.length > 0) || (checkedDiscount.value.length > 0)) {
  emit('update:updateItemsFiltersData', itemsByFilter?.value?.itemsByFilters);
  }else{
    emit('update:updateItemsFiltersData', []);
  }
});
const FilterCombination = () => {
  refetchItemsByFilter();
  allItemCombinedFillter.value = [
    ...(brandName.value || []),
    ...(checkedAge.value || []),
    ...(checkedPrice.value || []),
    ...(checkedDiscount.value || [])
  ];
}
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


const ClearFilterCombination = () => {
  allItemCombinedFillter.value = [];
  brandName.value = []
  checkedBrand.value = []
  checkedAge.value = []
  checkedPrice.value = []
  checkedDiscount.value = []
}

</script>