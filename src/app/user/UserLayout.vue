<template>
  <UserHeader />
  <router-view :key="$route.path" />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import UserHeader from './UserHeader.vue'

</script>

<style></style>
