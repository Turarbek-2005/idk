<script setup></script>

<template>
  <div
    class="relative w-[260px] h-[203px] rounded-lg shadow-md cursor-pointer bg-white border border-black"
  >
    <div class="-m-[2px] ml-[-1px]">
      <NuxtImg
        class=""
        width="260px"
        height="134px"
        src="/Home/object.png"
        :alt="$t('object')"
      />
    </div>
    <div class="w-full h-full py-2 px-4 flex-col flex gap-1">
      <h4 class="font-bold">{{ $t("object_name") }}</h4>
      <div class="w-6 bg-black h-[1px]"></div>
      <div class="flex items-center justify-between">
        <p class="font-medium">{{ $t("address") }}</p>
        <p class="font-bold">{{ $t("price") }}</p>
      </div>
    </div>
    <div
      class="absolute bottom-[-1px] right-[-1px] w-[260px] h-[203px] rounded-lg shadow-md cursor-pointer transition opacity-0 bg-white border border-black hover:opacity-100"
    >
      <div
        class="h-[160px] bg w-[262px] flex-col flex gap-1 text-white -m-[2px] ml-[-1px] px-5 py-7"
      >
        <h4>{{ $t("object_name") }}</h4>
        <div class="w-6 bg-white h-[2px]"></div>
        <div>
          <p class="font-medium">{{ $t("address") }}</p>
          <p class="text-sm">{{ $t("area") }}</p>
          <p class="font-bold flex justify-end mt-5">{{ $t("price") }}</p>
        </div>
      </div>
      <div class="w-full h-full py-3 px-4 font-bold">
        {{ $t("learn_more") }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url(/Home/object-cursor.png);
}
</style>
