<script setup lang="ts"></script>
<template>
  <div class="w-full h-24 bg-[#e9d9ce] flex justify-center items-center gap-8">
    <NuxtLink
      to="/Admin/Collections"
      class="bg-white font-medium w-[260px] h-[38px] hover:font-bold text-lg flex justify-center items-center shadow-md rounded-xl transition"
    >
      Подборки
    </NuxtLink>
    <NuxtLink
      to="/Admin/Catalog"
      class="bg-white font-medium w-[260px] h-[38px] hover:font-bold text-lg flex justify-center items-center shadow-md rounded-xl transition"
    >
      Каталог
    </NuxtLink>
    <NuxtLink
      to="/Admin/Specialists"
      class="bg-white font-medium w-[260px] h-[38px] hover:font-bold text-lg flex justify-center items-center shadow-md rounded-xl transition"
    >
      Специатисты
    </NuxtLink>
  </div>
</template>
<style scoped></style>
