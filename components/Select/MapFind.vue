<script setup lang="ts">
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
</script>

<template>
  <div>
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
</template>
