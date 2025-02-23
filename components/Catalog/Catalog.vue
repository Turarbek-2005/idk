<script setup></script>
<template>
  <div
    class="relative w-[360px] h-[280px] rounded-lg shadow-xl cursor-pointer bg-white border border-black"
  >
    <div class="-m-[2px] ml-[-1px]">
      <NuxtImg
        class=""
        width="360px"
        height="180px"
        src="/Home/object.png"
        alt="Объект"
      />
    </div>
    <div class="w-full h-full pt-4 text-center font-bold text-lg">
      Готовые объекты с ключами
    </div>

    <div
      class="absolute bottom-[-1px] right-[-1px] w-[360px] flex justify-center items-center bg h-[280px] rounded-lg shadow-md cursor-pointer transition opacity-0 bg-white hover:opacity-100"
    >
      <h4 class="text-white text-2xl font-bold text-center">
        Топ 5 проектов по стартовым ценам
      </h4>
    </div>
  </div>
</template>
<style scoped>
.bg {
  background-image: url(/Home/catalog-bg.png);
  background-size: cover;
}
</style>
