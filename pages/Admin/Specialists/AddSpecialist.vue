<script setup lang="ts"></script>
<template>
  <div>
    <AdminHeader />
    <div class="max-w-container mx-auto mt-8 mb-24 flex gap-9">
      <button
        class="w-[263px] h-[360px] flex justify-center items-center rounded-lg shadow-xl cursor-pointer bg-zinc-200"
      >
        <label class="text-3xl">+</label>
      </button>
      <div class="w-[884px] flex flex-col gap-2">
        <h3 class="text-4xl font-bold">{{ $t("name_surname") }}</h3>
        <p class="text-lg font-medium">
          {{ $t("site_promotion_needed") }}
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
          <button
            class="bg-white hover:bg-black mb-8 hover:text-white transition ml-auto mt-16 font-medium w-44 h-12 text-lg flex justify-center items-center shadow-black shadow-sm rounded-xl"
          >
            {{ $t("edit") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
