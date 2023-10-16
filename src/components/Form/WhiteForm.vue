<template>
   <q-input outlined v-model="text" label="Outlined" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref('')
    }
  }
}
</script>

<style>

</style>