<script setup lang="ts">
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
</script>
<template>
  <div>
    <div
      class="max-w-container mx-auto my-[100px] flex justify-between items-center"
    >
      <div class="flex flex-col gap-2">
        <h4 class="mb-6 text-5xl font-bold">{{ $t("contacts") }}</h4>
        <div>
          <p class="font-bold mb-2">{{ $t("address") }}:</p>
          <p class="w-[320px]">{{ $t("full_address") }}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-bold mb-2">{{ $t("phone") }}:</p>
          <label>+7–7172–57–47–32, 29–16–10</label>
          <label>+7 708 313 68 28</label>
          <label>+7 701 711 31 17</label>
          <label>+7 701 173 31 88</label>
        </div>
        <div>
          <p class="font-bold mb-2">{{ $t("email") }}:</p>
          <label>info@examplemail.kz</label>
        </div>
        <div class="flex gap-3 mt-5">
          <NuxtLink to="" class="cursor-pointer">
            <NuxtImg src="/Home/whatsapp.svg" width="45px" height="45px" />
          </NuxtLink>
          <NuxtLink to="" class="cursor-pointer">
            <NuxtImg src="/Home/telegram.svg" width="45px" height="45px" />
          </NuxtLink>
        </div>
      </div>
      <div class="w-[748px] h-[460px] z-0">
        <LMap
          :zoom="12"
          :center="[51.13, 71.42]"
          class="w-full h-full rounded-md z-0"
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

<style scoped></style>
