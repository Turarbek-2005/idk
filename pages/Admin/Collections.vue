<script setup lang="ts">
const edit = ref(false);
</script>
<template>
  <div>
    <AdminHeader />
    <div class="max-w-container mx-auto mt-16">
      <h2 class="text-5xl font-bold text-center mb-8">
        {{ $t("collections") }}
      </h2>
      <button
        class="bg-white hover:bg-black mb-8 hover:text-white transition mx-auto font-medium w-44 h-12 text-lg flex justify-center items-center shadow-black shadow-sm rounded-xl"
        @click="edit = !edit"
      >
        {{ edit ? "Сохранить" : "Редактировать" }}
      </button>
      <div class="grid grid-cols-3 gap-8 mb-24">
        <NuxtLink
          to="/Collections/CollectionsObject"
          v-for="(_, index) in 6"
          :key="index"
          ><Catalog
        /></NuxtLink>
        <div
          class="w-[360px] h-[280px] rounded-lg shadow-xl cursor-pointer bg-white border border-black"
          v-if="edit"
        >
          <div class="w-[360px] h-[180px] bg-zinc-300 rounded-md"></div>
          <div class="w-full h-full pt-4 text-center font-bold text-lg">
            {{ $t("enter_collection_name") }}
          </div>
        </div>
        <NuxtLink
          to="/Admin/AddObject"
          class="w-[360px] h-[280px] flex justify-center items-center rounded-lg shadow-xl cursor-pointer bg-white border border-black"
          v-if="edit"
        >
          <label class="text-3xl">+</label>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
