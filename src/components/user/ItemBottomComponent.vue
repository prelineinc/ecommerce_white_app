<template>
    <div class="bg-white py-10 md:py-24">
        <div class="mx-auto w-full 2xl:container px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img @click="RedirectToItemPage('offer-discount', '75')" src="../../assets/banners/offer-1.png" alt=""
                    class="rounded-lg" />
                <img @click="RedirectToItemPage('offer-discount', '75')" src="../../assets/banners/offer-2.png" alt=""
                    class="rounded-lg" />
                <img @click="RedirectToItemPage('offer-discount', '75')" src="../../assets/banners/offer-3.png" alt=""
                    class="rounded-lg" />
                <img @click="RedirectToItemPage('category', '0125624d-66bb-4a75-8096-7110ab485c7d')"
                    src="../../assets/banners/offer-4.jpeg" alt="" class="rounded-lg" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const RedirectToItemPage = (type: string, data: any) => {
    let url = ''
    if (type === 'offer-discount') {
        url = `/offer-discount/${data}`;
    }
    else if (type === 'category') {
        url = `/toys/${data}`;
    }
    router.push(url)
}

</script>