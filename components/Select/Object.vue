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
        alt="Объект"
      />
    </div>
    <div class="w-full h-full py-2 px-4 flex-col flex gap-1">
      <h4 class="font-bold">Название объекта</h4>
      <div class="w-6 bg-black h-[1px]"></div>
      <div class="flex items-center justify-between">
        <p class="font-medium">Адрес</p>
        <p class="font-bold">Цена</p>
      </div>
    </div>
    <div
      class="absolute bottom-[-1px] right-[-1px] w-[260px] h-[203px] rounded-lg shadow-md cursor-pointer transition opacity-0 bg-white border border-black hover:opacity-100"
    >
      <div
        class="h-[160px] bg w-[262px] flex-col flex gap-1 text-white -m-[2px] ml-[-1px] px-5 py-7"
      >
        <h4>Название объекта</h4>
        <div class="w-6 bg-white h-[2px]"></div>
        <div>
          <p class="font-medium">Адрес</p>
          <p class="text-sm">Площадь (кв. м.)</p>
          <p class="font-bold flex justify-end mt-5">Цена</p>
        </div>
      </div>
      <div class="w-full h-full py-3 px-4 font-bold">Узнать подробнее</div>
    </div>
  </div>
</template>
<style scoped>
.bg {
  background-image: url(/Home/object-cursor.png);
}
</style>
