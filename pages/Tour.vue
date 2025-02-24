<script setup lang="ts">
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

const titles = [
  "Регион",
  "Район",
  "Количество комнат",
  "Назначение недвижимости",
  "Вид недвижимости",
  "Сортировка",
];

const find = ref(false);
</script>

<template>
  <div>
    <div
      class="w-full h-[384px]"
      :class="{ 'bg-find': find, 'bg-[#e9d9ce]': !find }"
    >
      <div class="max-w-container mx-auto py-5 flex justify-between z-50">
        <div>
          <p class="text-xl font-bold mb-2">Показать на карте</p>
          <div class="w-64 h-64 rounded-lg">
            <LMap :zoom="12" :center="[51.13, 71.42]" class="w-full h-full">
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <LMarker :lat-lng="[51.13, 71.42]" />
            </LMap>
          </div>
        </div>
        <div class="grid grid-cols-3 w-[845px] h-[260px] gap-5 rounded-lg">
          <div class="flex flex-col justify-end">
            <p class="text-lg font-bold mb-2">Цена</p>
            <div class="w-[258px] flex">
              <input
                type="text"
                class="w-1/2 h-9 outline-none pl-2 rounded-l-xl"
                placeholder="от"
              />
              <div class="relative w-1/2">
                <input
                  type="text"
                  class="w-full h-9 outline-none pl-2 rounded-r-xl"
                  placeholder="до"
                />
                <div
                  class="absolute w-[1px] h-5 bg-black left-0 top-1/2 -translate-y-1/2"
                ></div>
              </div>
            </div>
          </div>
          <SelectMap v-for="title in titles" :key="title" :title="title" />
          <div class="flex col-span-2 gap-3 justify-end items-end mt-4">
            <button
              class="text-black bg-white font-medium w-56 h-[34px] text-lg flex justify-center items-center shadow-md rounded-xl transition hover:bg-black hover:text-white"
              @click="find = true"
            >
              Найдено 7 квартир
            </button>
            <button
              class="text-black bg-white font-medium w-[120px] h-[34px] text-lg flex justify-center items-center shadow-md rounded-xl transition hover:bg-black hover:text-white"
              @click="find = false"
            >
              Сбросить
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="find" class="mt-[-384px]">
      <div class="w-full h-[1318px]">
        <LMap :zoom="12" :center="[51.13, 71.42]" class="w-full h-full">
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LMarker :lat-lng="[51.13, 71.42]" />
        </LMap>
      </div>
      <div class="w-full h-[360px] bg-slider z-50">
        <div
          class="max-w-container mx-auto flex items-center justify-between pb-8"
        >
          <Carousel
            class="relative w-full"
            :opts="{
              align: 'start',
            }"
          >
            <CarouselContent>
              <CarouselItem
                v-for="(_, index) in 5"
                :key="index"
                class="basis-1/3"
              >
                <div
                  class="relative w-full h-[280px] rounded-lg shadow-md cursor-pointer bg-white border border-black"
                >
                  <div class="-m-[2px] ml-[-1px]">
                    <NuxtImg
                      class="w-full"
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
                    class="absolute bottom-[-1px] w-full h-[280px] rounded-lg shadow-md cursor-pointer transition opacity-0 bg-white border border-black hover:opacity-100"
                  >
                    <div
                      class="h-[220px] bg-object w-[370px] ml-[-3px] flex-col flex gap-2 text-white -m-[2px] px-5 py-7"
                    >
                      <h4 class="text-lg font-medium">Название объекта</h4>
                      <div class="w-8 bg-white h-[2px]"></div>
                      <div>
                        <p class="font-medium">Адрес</p>
                        <p class="text-md">Площадь (кв. м.)</p>
                        <p class="font-bold text-md flex justify-end mt-14">
                          Цена
                        </p>
                      </div>
                    </div>
                    <div class="w-full h-full py-3 px-4 font-bold">
                      Узнать подробнее
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
    <Question />
  </div>
</template>
<style scoped>
.bg-find {
  background: linear-gradient(
    to bottom,
    #e9d9ce 70%,
    rgba(233, 217, 206, 0) 100%
  );
}
.bg-slider {
  background: linear-gradient(to top, #e9d9ce 70%, rgba(233, 217, 206, 0) 100%);
}

.bg-object {
  background-image: url(/Home/object-cursor.png);
  background-size: cover;
}
</style>
