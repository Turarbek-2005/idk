<script setup lang="ts">
const edit = ref(false);
</script>
<template>
  <div>
    <div class="max-w-container mx-auto mt-20 mb-20 flex gap-9">
      <div>
        <NuxtImg src="/Admin/specialist-2.jpg" width="263" height="360" />
      </div>
      <div class="w-[884px] flex flex-col gap-2">
        <h3 class="text-4xl font-bold">{{ $t("name_surname") }}</h3>
        <p class="text-lg font-medium">
          {{ $t("site_promotion_required") }}
        </p>
        <p class="text-md">
          {{ $t("company_text") }}
        </p>
        <p class="text-md">
          {{ $t("company_text") }}
        </p>
        <div class="flex gap-5">
          <div class="w-32">
            <h4 class="text-5xl font-medium mb-2">23</h4>
            <p class="text-lg font-medium">{{ $t("employee_text") }}</p>
          </div>
          <div class="w-32">
            <h4 class="text-5xl font-medium mb-2">23</h4>
            <p class="text-lg font-medium">{{ $t("employee_text") }}</p>
          </div>
          <div class="w-32">
            <h4 class="text-5xl font-medium mb-2">23</h4>
            <p class="text-lg font-medium">{{ $t("employee_text") }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-container mx-auto mt-16">
      <h2 class="text-5xl font-bold text-center mb-8">
        {{ $t("collections") }}
      </h2>
      <button
        class="bg-white hover:bg-black mb-8 hover:text-white transition mx-auto font-medium w-44 h-12 text-lg flex justify-center items-center shadow-black shadow-sm rounded-xl"
        @click="edit = !edit"
      >
        {{ edit ? $t("save") : $t("edit") }}
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
    <Question />
  </div>
</template>
<style scoped></style>
