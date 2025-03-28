<script setup lang="ts">
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

const titles = [
  { key: "price" },
  { key: "district" },
  { key: "rooms" },
  { key: "property_purpose" },
  { key: "property_type" },
  { key: "sorting" },
];

const find = ref(false);
</script>

<template>
  <div>
    <div class="w-full h-[645px] bg-[#E8711D] relative">
      <div
        class="max-w-container mx-auto pt-[90px] flex flex-col items-center gap-4 text-white"
      >
        <!-- <h2 class="text-5xl font-bold">{{ $t("company_name") }}</h2>
        <p class="text-xl font-medium">
          {{ $t("slogan") }}<br />
          {{ $t("best_real_estate") }}
        </p> -->
        <div>
          <NuxtImg src="/Home/logo-text.png" class="w-[286px] h-[144px]" />
        </div>
        <h2 class="text-6xl font-serif text-center uppercase my-6 w-[744px]">
          {{ $t("life_in_cyprus") }}
        </h2>
        <p>{{ $t("dream") }}</p>
        <div class="bg-white w-[578px] h-[2px]"></div>
        <p>
          {{ $t("comfort") }}
        </p>
        <NuxtLink
          to="/Collections"
          class="bg-white text-[#E8711D] hover:bg-black hover:text-white transition font-medium w-40 h-9 text-lg flex justify-center items-center shadow-black shadow-2xl rounded"
        >
          {{ $t("collections") }}
        </NuxtLink>
      </div>
      <div class="absolute right-6 bottom-3 gap-10 flex flex-col">
        <NuxtLink href="https://www.whatsapp.com">
          <NuxtImg width="45px" height="45px" src="/Home/whatsapp.svg" />
        </NuxtLink>
        <NuxtLink href="https://web.telegram.org">
          <NuxtImg width="45px" height="45px" src="/Home/telegram.svg" />
        </NuxtLink>
      </div>
    </div>

    <div
      class="max-w-container mx-auto h-[335px] my-[100px] bg-cyprus flex justify-end pt-5"
    >
      <div class="w-[553px] flex flex-col gap-2">
        <h3 class="text-4xl font-bold">{{ $t("northern_cyprus") }}</h3>
        <p>{{ $t("description_1") }}</p>
        <p>{{ $t("description_2") }}</p>
        <p class="font-medium">{{ $t("cyprus_waits") }}</p>
      </div>
    </div>

    <h2 class="text-3xl font-bold mx-auto text-center w-[745px] mb-8">
      {{ $t("find_perfect_property") }}
    </h2>
    <div class="w-full min-h-[333px] bg-[#F3B27F]">
      <div class="max-w-container mx-auto py-5 flex justify-between">
        <div>
          <p class="text-xl font-bold mb-2">{{ $t("show_on_map") }}</p>
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
            <p class="text-lg font-bold mb-2">{{ $t("price") }}</p>
            <div class="w-[258px] flex">
              <input
                type="text"
                class="w-1/2 h-9 outline-none pl-2 rounded-l-xl"
                :placeholder="$t('from')"
              />
              <div class="relative w-1/2">
                <input
                  type="text"
                  class="w-full h-9 outline-none pl-2 rounded-r-xl"
                  :placeholder="$t('to')"
                />
                <div
                  class="absolute w-[1px] h-5 bg-black left-0 top-1/2 -translate-y-1/2"
                ></div>
              </div>
            </div>
          </div>
          <SelectMap
            v-for="title in titles"
            :key="title.key"
            :title="$t(title.key)"
          />

          <div class="flex col-span-2 gap-3 justify-end items-end mt-4">
            <button
              class="text-black bg-white font-medium w-56 h-[34px] text-lg flex justify-center items-center shadow-md rounded-xl transition hover:bg-black hover:text-white"
              @click="find = true"
            >
              {{ $t("found_apartments", { count: 7 }) }}
            </button>
            <button
              class="text-black bg-white font-medium w-[120px] h-[34px] text-lg flex justify-center items-center shadow-md rounded-xl transition hover:bg-black hover:text-white"
              @click="find = false"
            >
              {{ $t("reset") }}
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
      <h2 class="text-4xl font-bold text-center mb-8">
        {{ $t("collections") }}
      </h2>
      <div class="grid grid-cols-3 gap-8 mb-8">
        <Catalog v-for="(_, index) in 6" :key="index" />
      </div>
      <NuxtLink
        to="/Collections"
        class="bg-white hover:bg-black hover:text-white transition font-medium w-44 h-12 text-lg flex justify-center items-center shadow-black shadow-sm rounded-xl"
      >
        {{ $t("view_all") }}
      </NuxtLink>
    </div>

    <div class="w-full h-[649px] bg-free mt-20 pt-[150px]">
      <div class="max-w-container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">
          {{ $t("discover_cyprus") }}<br />
          <label class="text-[#E8711D]">{{ $t("free") }}</label>
          {{ $t("tour_3_4_days") }}
        </h2>
        <NuxtLink
          to="/Cyprus"
          class="bg-white hover:bg-black hover:text-white mx-auto transition font-medium w-56 h-12 text-2xl flex justify-center items-center shadow-black shadow-sm rounded-xl"
        >
          {{ $t("more_details") }}
        </NuxtLink>
      </div>
    </div>

    <div
      class="max-w-container mx-auto h-[335px] my-[100px] bg-about flex justify-end pt-5"
    >
      <div class="w-[553px] flex flex-col gap-3">
        <h3 class="text-4xl font-bold">{{ $t("about_company") }}</h3>
        <p>{{ $t("company_intro") }}</p>
        <p>{{ $t("real_estate_market") }}</p>
        <NuxtLink
          to="/about"
          class="bg-white hover:bg-black hover:text-white transition font-medium w-40 h-8 text-lg flex justify-center items-center shadow-black shadow-sm rounded-lg"
        >
          {{ $t("more_details") }}
        </NuxtLink>
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
