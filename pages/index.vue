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
    <div class="w-full h-[645px] bg-company relative">
      <div class="max-w-container mx-auto pt-48 flex flex-col gap-4">
        <h2 class="text-5xl font-bold">Название компании</h2>
        <p class="text-xl font-medium">
          Ваш дом мечны -- здесь!<br />
          Лучшие варианты недвижимости на Серевном Кипре
        </p>
        <NuxtLink
          to="/Collections"
          class="bg-white hover:bg-black hover:text-white transition font-medium w-40 h-9 text-lg flex justify-center items-center shadow-black shadow-2xl rounded-xl"
          >Подборки</NuxtLink
        >
      </div>
      <div class="absolute right-6 bottom-3 gap-10 flex flex-col">
        <NuxtLink href="https://www.whatsapp.com"
          ><NuxtImg width="45px" height="45px" src="/Home/whatsapp.svg"
        /></NuxtLink>
        <NuxtLink href="https://web.telegram.org"
          ><NuxtImg width="45px" height="45px" src="/Home/telegram.svg"
        /></NuxtLink>
      </div>
    </div>
    <div
      class="max-w-container mx-auto h-[335px] my-[100px] bg-cyprus flex justify-end pt-5"
    >
      <div class="w-[553px] flex flex-col gap-2">
        <h3 class="text-4xl font-bold">Северный Кипр</h3>
        <p>
          Тёплый климат, чистые пляжи и доступная недвижимость делают Северный
          Кипр идеальным местом для жизни и вложений. Цены на жильё растут до
          15% в год, доходность аренды - до 12%. Гибкие условия покупки делают
          инвестиции ещё выгоднее.
        </p>
        <p>
          Здесь чистая экология, развитая инфраструктура и престижные
          университеты с международными дипломами. Безвизовый въезд и удобные
          авиарейсы обеспечивают комфортное передвижение.
        </p>
        <p class="font-medium">
          Северный Кипр ждёт вас — откройте новые возможности!
        </p>
      </div>
    </div>
    <h2 class="text-3xl font-bold mx-auto text-center w-[745px] mb-8">
      Найдите свой идеальный вариант недвижимости прямо сейчас
    </h2>
    <div class="w-full min-h-[333px] bg-[#E9D7CB]">
      <div class="max-w-container mx-auto py-5 flex justify-between">
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
      <div
        class="max-w-container mx-auto flex items-center justify-between pb-8"
        v-if="find"
      >
        <div
          class="h-[742px] w-[280px] flex flex-col gap-8 overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        >
          <SelectObject v-for="(_, index) in 10" :key="index" />
        </div>
        <div class="w-[845px] h-[742px] rounded-lg">
          <LMap :zoom="12" :center="[51.13, 71.42]" class="w-full h-full">
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LMarker :lat-lng="[51.13, 71.42]" />
          </LMap>
        </div>
      </div>
    </div>
    <div class="max-w-container mx-auto mt-20">
      <h2 class="text-4xl font-bold text-center mb-8">Подборки</h2>
      <div class="grid grid-cols-3 gap-8 mb-8">
        <Catalog v-for="(_, index) in 6" :key="index" />
      </div>
      <NuxtLink
        to="/Collections"
        class="bg-white hover:bg-black hover:text-white transition font-medium w-44 h-12 text-lg flex justify-center items-center shadow-black shadow-sm rounded-xl"
        >Посмотреть все</NuxtLink
      >
    </div>
    <div class="w-full h-[649px] bg-free mt-20 pt-[150px]">
      <div class="max-w-container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">
          Откройте Северный Кипр уже сегодня!<br />
          <label class="text-[#910000]">Беспланый</label> ознакомительный тур на
          3-4 дня.
        </h2>
        <NuxtLink
          to="/Cyprus"
          class="bg-white hover:bg-black hover:text-white mx-auto transition font-medium w-56 h-12 text-2xl flex justify-center items-center shadow-black shadow-sm rounded-xl"
          >Подробнее</NuxtLink
        >
      </div>
    </div>
    <div
      class="max-w-container mx-auto h-[335px] my-[100px] bg-about flex justify-end pt-5"
    >
      <div class="w-[553px] flex flex-col gap-3">
        <h3 class="text-4xl font-bold">О компании</h3>
        <p>
          (Название компании) официально зарегистрированная компания,
          специализирующаяся на подборе жилой и коммерческой недвижимости на
          Северном Кипре,
        </p>
        <p>
          Рынок недвижимости Северного Кипра динамично развивается, предлагая
          широкий выбор как готовых объектов, так и проектов на стадии
          строительства. В этом стремительном потоке мы помогаем нашим клиентам
          сделать взвешенный и обоснованный выбор, сэкономить время и избежать
          лишних затрат.
        </p>
        <NuxtLink
          to="/about"
          class="bg-white hover:bg-black hover:text-white transition font-medium w-40 h-8 text-lg flex justify-center items-center shadow-black shadow-sm rounded-lg"
          >Подробнее</NuxtLink
        >
      </div>
    </div>
    <Question />
  </div>
</template>
<style scoped>
.bg-company {
  background-image: url(/Home/bg-company.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg-cyprus {
  background-image: url(/Home/bg-cyprus.jpg);
}

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

.bg-free {
  background-image: url(/Home/bg-free.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.bg-about {
  background-image: url(/Home/bg-about.png);
}
</style>
