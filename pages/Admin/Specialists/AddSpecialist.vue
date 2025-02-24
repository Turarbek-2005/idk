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
        <h3 class="text-4xl font-bold">Имя Фамилия</h3>
        <p class="text-lg font-medium">
          Необходим для дальнейшего продвижения Вашего сайта
        </p>
        <p class="text-md">
          Это текст о компании. Он необходим для дальнейшего продвижения Вашего
          сайта. Вам будет необходимо предоставить исходные данные, по которым
          наши копирайтеры текст.
        </p>
        <p class="text-md">
          Это текст о компании. Он необходим для дальнейшего продвижения Вашего
          сайта. Вам будет необходимо предоставить исходные данные, по которым
          наши копирайтеры текст.
        </p>
        <div class="flex gap-5">
          <div class="w-32">
            <h4 class="text-5xl font-medium mb-2">23</h4>
            <p class="text-lg font-medium">Этот текст о сотруднике</p>
          </div>
          <div class="w-32">
            <h4 class="text-5xl font-medium mb-2">23</h4>
            <p class="text-lg font-medium">Этот текст о сотруднике</p>
          </div>
          <div class="w-32">
            <h4 class="text-5xl font-medium mb-2">23</h4>
            <p class="text-lg font-medium">Этот текст о сотруднике</p>
          </div>
          <button
            class="bg-white hover:bg-black mb-8 hover:text-white transition ml-auto mt-16 font-medium w-44 h-12 text-lg flex justify-center items-center shadow-black shadow-sm rounded-xl"
          >
            Редактировать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
