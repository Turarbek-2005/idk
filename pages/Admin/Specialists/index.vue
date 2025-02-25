<script setup lang="ts">
const edit = ref(false);
</script>
<template>
  <div>
    <AdminHeader />
    <div class="max-w-container mx-auto mt-16">
      <h2 class="text-4xl font-bold text-center mb-8">
        {{ $t("specialists") }}
      </h2>
      <button
        class="bg-white hover:bg-black mb-8 hover:text-white transition mx-auto font-medium w-44 h-12 text-lg flex justify-center items-center shadow-black shadow-sm rounded-xl"
        @click="edit = !edit"
      >
        {{ edit ? $t("save") : $t("edit") }}
      </button>
      <div class="grid grid-cols-4 gap-8 mb-24">
        <NuxtLink
          to="/Admin/Specialists/SpecialistInfo"
          v-for="(_, index) in 4"
          :key="index"
          ><AdminSpecialist
        /></NuxtLink>
        <NuxtLink
          to="/Admin/Specialists/AddSpecialist"
          class="w-[263px] h-[360px] flex justify-center items-center rounded-lg shadow-xl cursor-pointer bg-zinc-200 border border-black"
          v-if="edit"
        >
          <label class="text-3xl">+</label>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
