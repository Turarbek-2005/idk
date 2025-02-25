<script setup lang="ts"></script>
<template>
  <div
    class="w-[263px] h-[360px] flex flex-col justify-end px-[18px] py-6 text-white bg"
  >
    <div>
      <h5 class="text-lg font-bold">{{ $t("name_surname") }}</h5>
      <h6 class="text-[10px]">{{ $t("about_employee") }}</h6>
    </div>
  </div>
</template>
<style scoped>
.bg {
  background-image: url(/Admin/specialist.jpg);
}
</style>
