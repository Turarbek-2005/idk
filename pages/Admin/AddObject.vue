<script setup lang="ts"></script>
<template>
  <div>
    <AdminHeader />
    <div class="max-w-container mx-auto my-16">
      <h3 class="text-3xl font-bold mb-4">Название объекта</h3>
      <div class="flex justify-between">
        <div>
          <div class="w-[553px] h-[464px] bg-zinc-300 rounded-md mb-5"></div>
          <div class="flex w-[553px] justify-between">
            <div class="w-[163px] h-[142px] bg-zinc-300 rounded-md"></div>
            <div class="w-[163px] h-[142px] bg-zinc-300 rounded-md"></div>
            <div class="w-[163px] h-[142px] bg-zinc-300 rounded-md"></div>
          </div>
        </div>
        <div class="w-[550px]">
          <h3 class="text-5xl font-bold mb-7">Цена</h3>
          <div
            class="w-full mb-9 grid grid-cols-3 gap-4 h-[145px] overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          >
            <AdminCheck v-for="_ in 20" :checkbox="true" />
          </div>
          <p>
            Это текст о компании. Он необходим для дальнейшего продвижения
            Вашего сайта. Вам будет необходимо предоставить исходные данные, по
            которым наши копирайтеры составят правильный текст. Это текст о
            компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам
            будет необходимо предоставить исходные данные, по которым наши
            копирайтеры составят правильный текст.
          </p>
          <p>
            Это текст о компании. Он необходим для дальнейшего продвижения
            Вашего сайта. Вам будет необходимо предоставить исходные данные, по
            которым наши копирайтеры составят правильный текст. Это текст о
            компании. Он необходим для дальнейшего продвижения Вашего сайта.
          </p>
          <div class="flex gap-10 mt-8">
            <button
              class="bg-white hover:bg-black hover:text-white transition font-medium w-40 h-12 text-md flex justify-center items-center shadow-black shadow-sm rounded-xl"
            >
              Добавить в подборку
            </button>
            <button
              class="bg-white hover:bg-black hover:text-white transition font-medium w-40 h-12 text-md flex justify-center items-center shadow-black shadow-sm rounded-xl"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #000000;
  border-radius: 4px;
}

::-webkit-scrollbar-track {
  background: #ffffff;
}
</style>
