<template>
  <nav aria-label="Breadcrumb" class="py-3 px-4">
    <ol role="list" class="flex items-center space-x-2 ">
      <li v-for="breadcrumb in props.item?.breadcrumbs" :key="breadcrumb.id">
        <div class="flex items-center">
          <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">{{
            breadcrumb.name
          }}</a>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
            class="h-5 w-4 text-gray-300">
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
          </svg>
        </div>
      </li>
      <li class="text-sm" v-if="props.item?.subname != 'undefinedundefined'">
        <div v-if="props.item?.breadcrumbs[1]?.name != 'Top Offer' && props.item?.breadcrumbs[1]?.name != 'Offer Price'" class="flex items-center">
          <a :href="props.item?.href" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{
            props.item?.name }}</a>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
            class="h-5 w-4 text-gray-300">
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
          </svg>
        </div>
      </li>
      <li v-if="props.item?.subname != 'undefinedundefined'" class="text-sm">
        <a :href="props.item?.href" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{
          props.item?.subname }}</a>
      </li>
      <li v-else class="text-sm">
        <a :href="props.item?.href" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{
          props.item?.name }}</a>
      </li>
    </ol>
  </nav>

</template>

<script setup lang="ts">
import { onMounted } from "vue";

const product = {
  name: 'asdfadfds',
  href: 'adfadfda',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' }
  ]
}

const props = defineProps<{
  item: any
}>();

onMounted(() => {
  console.log('props', props.item);
})
</script>

<style></style>