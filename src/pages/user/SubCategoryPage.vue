<template>
    <div class="mx-auto w-full 2xl:container bg-white pb-8 px-4">
        <div class="relative my-5">
            <ul class="mb-0 flex">
                <li>
                    <a href="/" class="duration-500 ease-in-out hover:text-blue-500 hover:no-underline">Home</a>
                </li>
                <li class="text-slate-400 mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="currentColor">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                </li>
                <li aria-current="page">
                    <span class="text-blue-600">
                        Category
                    </span>
                </li>
            </ul>
        </div>
        <div class="bg-white mb-10">
            <div class="mx-auto w-full 2xl:container relative rounded-xl overflow-hidden" @click="RedirectToItemPage('price', bannerImage.price)">
                <!-- <img @click="RedirectToItemPage('price', '10')" src="../../assets/banners/7-rupee-sale-preline.in.webp" alt="" class="" /> -->
                <img  :src="`${imageBannerPath}${bannerImage.path}`"  alt="" class="" />
            </div>
        </div>
        <div class="lg:col-span-12 md:col-span-8">
            <section class="relative pl-4">
                <div class="grid xl:grid-cols-6 lg:grid-cols-3 grid-cols-2 gap-8">
                    <div v-for="x of category" :key="x.id" class="group relative cursor-pointer">
                        <div @click="RedirectToItemPage('category', x.id)"
                            class="relative overflow-hidden shadow-lg hover:shadow-xl rounded-lg duration-500 transform hover:-translate-y-2">
                            <div
                                class="w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 h-60 lg:h-75">
                                <img :src="`${categoryPath}${x.imagePath}`"
                                    class="h-full w-full object-contain object-center transform group-hover:scale-105 duration-500 ease-in-out" />
                            </div>
                            <h3
                                class="mb-5 text-base leading-snug font-bold text-center text-gray-800 group-hover:text-gray-900 duration-300">
                                <a class="relative">
                                    <span aria-hidden="true" class="absolute inset-0 z-10"></span>
                                    {{ x.name }}
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div class="bg-white py-24">
            <div class="mx-auto w-full 2xl:container px-4">
                <div class="grid grid-cols-4 gap-4">
                    <img @click="RedirectToItemPage('offer', '75')" src="../../assets/banners/offer-1.png" alt=""
                        class="rounded-lg" />
                    <img @click="RedirectToItemPage('offer', '75')" src="../../assets/banners/offer-2.png" alt=""
                        class="rounded-lg" />
                    <img @click="RedirectToItemPage('offer', '75')" src="../../assets/banners/offer-3.png" alt=""
                        class="rounded-lg" />
                    <img @click="RedirectToItemPage('category',  '0125624d-66bb-4a75-8096-7110ab485c7d')" src="../../assets/banners/offer-4.jpeg" alt=""
                        class="rounded-lg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { imagePath, categoryPath, imageBannerPath } from '../../constant/commonPath';
import { GetCategory } from '../../api/user/category';
import { ref, computed, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { GetImageByTrending } from '../../api/user/trending';
const route = useRoute();
const router = useRouter();
const type = ref(route.params.id as string);

const { result: categoryData, loading } = GetCategory();
const { result: bannerResult, refetch: refetchBanner } = GetImageByTrending();
const bannerImage = computed(() => {
    return bannerResult.value?.imagesByTrending?.[0] || null;
});

const category = ref([]);

watchEffect(() => {
    console.log(categoryData.value?.category);
    const catdata = categoryData.value?.category;
    category.value = catdata?.filter((item: any) => item.categoryTypeId == type?.value);
    console.log(category.value);
})

function RedirectToItemPage(type: string, data: any) {
    console.log(data);
    let url = ''
    if (type === 'category') {
        url = `/item?type=${'category'}&categoryid=${data}`;
    } else if (type === 'offer') {
        url = `/item?type=${type}&offer=${data}`;
    } else if (type === 'price') {
        url = `/item?type=${type}&price=${data}`;
    }
    router.push(url);
}
</script>