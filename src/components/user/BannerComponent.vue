<template>
    <div class="bg-white mb-4 md:mb-10">
            <!-- <div class="mx-auto w-full 2xl:container relative rounded-xl overflow-hidden"
                @click="RedirectToItemPage('price', '10')"
                >
                <img :src="`${imageBannerPath}${bannerImage.path}`" alt=""
                    class="w-full h-full object-cover cursor-pointer" />
            </div> -->
            <div class="mx-auto w-full 2xl:container relative rounded-xl overflow-hidden"  @click="RedirectToItemPage('10')">
                <img :src="`${imageBannerPath}${bannerImage?.path}`" alt=""
                    class="w-full h-full object-cover cursor-pointer" />
            </div>
        </div>
</template>
<script lang="ts" setup>
import { imageBannerPath } from '../../constant/commonPath';
import { GetImageByTrending } from '../../api/user/trending';
import {  computed } from 'vue';
import {  useRouter } from 'vue-router'
const { result: bannerResult} = GetImageByTrending();
const router = useRouter()
const bannerImage = computed(() => {
    return bannerResult.value?.imagesByTrending?.[0] || null;
});
function RedirectToItemPage(data: any) {

   let url = `/offer-price/${data}`;
   router.push(url)
}

</script>