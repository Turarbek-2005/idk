<script setup lang="ts">
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
</script>
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
          <div class="flex items-center mb-7">
            <label class="font-medium line-through">150000 тг.</label>
            <h3 class="text-5xl font-bold text-red-500">120000 тг.</h3>
          </div>
          <div class="grid grid-cols-2 gap-x-3 gap-y-5 mb-6">
            <div
              class="h-[55px] p-[14px] flex items-center rounded-lg shadow-xl"
            >
              <div class="mr-2">
                <NuxtImg src="/Admin/vector.svg" width="30" height="30" />
              </div>
              <label class="text-lg">45 м² площадь</label>
            </div>
            <div
              class="min-w-[256px] h-[55px] p-[14px] flex items-center rounded-lg shadow-xl"
            >
              <div class="mr-2">
                <NuxtImg src="/Admin/vector.svg" width="30" height="30" />
              </div>
              <label class="text-lg">45 м² площадь</label>
            </div>
            <div
              class="min-w-[256px] h-[55px] p-[14px] flex items-center rounded-lg shadow-xl"
            >
              <div class="mr-2">
                <NuxtImg src="/Admin/vector.svg" width="30" height="30" />
              </div>
              <label class="text-lg">45 м² площадь</label>
            </div>
            <div
              class="min-w-[256px] h-[55px] p-[14px] flex items-center rounded-lg shadow-xl"
            >
              <div class="mr-2">
                <NuxtImg src="/Admin/vector.svg" width="30" height="30" />
              </div>
              <label class="text-lg">45 м² площадь</label>
            </div>
            <div
              class="min-w-[256px] h-[55px] p-[14px] flex items-center rounded-lg shadow-xl"
            >
              <div class="mr-2">
                <NuxtImg src="/Admin/vector.svg" width="30" height="30" />
              </div>
              <label class="text-lg">45 м² площадь</label>
            </div>
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
            Вам будет необходимо предоставить исходные данные, по которым наши
            копирайтеры составят правильный текст.
          </p>

          <Dialog>
            <DialogTrigger as-child>
              <button
                class="bg-white mt-8 hover:bg-black hover:text-white transition font-medium w-64 h-[70px] text-2xl flex justify-center items-center shadow-black shadow-md rounded-xl"
              >
                Забронировать
              </button>
            </DialogTrigger>
            <DialogContent class="h-[580px] flex">
              <div>
                <NuxtImg src="/Header/login.jpg" class="w-[455px] h-full" />
              </div>
              <div
                class="w-[455px] h-full flex pt-[88px] items-center flex-col"
              >
                <div class="w-72">
                  <h2 class="text-3xl font-bold mb-7">Забронировать</h2>
                  <div class="flex flex-col gap-4 mb-6">
                    <input
                      type="text"
                      class="w-72 h-12 shadow-xl outline-none rounded-lg pl-3"
                      placeholder="Ваше имя"
                    />
                    <input
                      type="text"
                      class="w-72 h-12 shadow-xl outline-none rounded-lg pl-3"
                      placeholder="Ваш телефон"
                    />
                    <textarea
                      type="text"
                      class="w-72 h-[118px] shadow-xl outline-none rounded-lg p-3 resize-none"
                      placeholder="Сообщение"
                    />
                  </div>
                  <button
                    class="bg-white hover:bg-black hover:text-white transition font-medium w-[88px] h-6 text-[10px] flex justify-center items-center shadow-black shadow-sm rounded-md"
                  >
                    Отправить
                  </button>
                  <p class="w-80 text-[10px] font-medium mt-20">
                    Информация полностью концнфициальна и не передается третьим
                    лицам.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div class="w-full grid grid-cols-6 gap-x-8 gap-y-5 mt-8">
        <AdminCheck v-for="(_, index) in 9" :key="index" :checkbox="false" />
      </div>
      <div class="w-full h-[290px] mb-[100px] mt-[70px]">
        <LMap
          :zoom="12"
          :center="[51.13, 71.42]"
          class="w-full h-full rounded-md"
        >
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LMarker :lat-lng="[51.13, 71.42]" />
        </LMap>
      </div>
    </div>
    <Question />
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
