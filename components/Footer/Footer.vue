<script setup lang="ts">
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
</script>

<template>
  <div class="w-full h-[370px] bg-[#E8711D] text-white">
    <div class="max-w-container mx-auto flex items-center h-full py-11">
      <div class="w-[553px] h-[280px] rounded-md mr-9">
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
      <div class="flex flex-col gap-6 mr-14 text-lg font-medium">
        <NuxtLink to="" class="flex items-center gap-4 cursor-pointer">
          <NuxtImg src="/Footer/location.svg" />
          <label>{{ $t("address__footer") }}</label>
        </NuxtLink>
        <NuxtLink to="" class="flex items-center gap-4 cursor-pointer">
          <NuxtImg src="/Footer/phone.svg" />
          <label>{{ $t("phone") }}</label>
        </NuxtLink>
        <NuxtLink to="" class="flex items-center gap-4 cursor-pointer">
          <NuxtImg src="/Footer/mail.svg" />
          <label>{{ $t("email") }}</label>
        </NuxtLink>
        <div class="flex gap-3">
          <NuxtLink to="" class="cursor-pointer">
            <NuxtImg src="/Home/whatsapp.svg" width="25px" height="25px" />
          </NuxtLink>
          <NuxtLink to="" class="cursor-pointer">
            <NuxtImg src="/Home/telegram.svg" width="25px" height="25px" />
          </NuxtLink>
        </div>
      </div>
      <div class="w-[2px] h-[136px] bg-white mr-16"></div>
      <NuxtLink to="/" class="w-[138px] h-[138px] text-white">
        <NuxtImg src="/Footer/logo.png" alt="Логотип" />
      </NuxtLink>
    </div>
  </div>
</template>

<style></style>
