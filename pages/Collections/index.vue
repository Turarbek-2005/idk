<script setup lang="ts"></script>

<template>
  <div>
    <div class="max-w-container mx-auto mt-20 mb-16">
      <h2 class="text-4xl font-bold text-center mb-8">Подборки</h2>
      <div class="grid grid-cols-3 gap-8 mb-8">
        <Catalog v-for="(_, index) in 8" :key="index" />
      </div>
      <NuxtLink
        to="/Collections"
        class="bg-white hover:bg-black hover:text-white transition font-medium w-44 h-12 text-lg flex justify-center items-center shadow-black shadow-sm rounded-xl"
        >Посмотреть все</NuxtLink
      >
    </div>
    <Question />
  </div>
</template>
<style scoped></style>
