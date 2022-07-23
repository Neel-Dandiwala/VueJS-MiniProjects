<script setup lang="ts">

import { reactive } from 'vue';
import Counter from './components/Counter.vue'

interface AppInfo {
    name: string;
    slogan: string;
}


// const nextCount = computed(() => {
//   if(count.value !== null) {
//     return count.value + 2;
//   }
//   return null;
// })

const appInfo: AppInfo = reactive({
  name: 'Counter',
  slogan: 'An App to count'
});

</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
  <Counter
    :limit="10"
   />
</template>

