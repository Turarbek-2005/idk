<script setup lang="ts"></script>

<template>
  <div class="w-full h-[476px] bg-[#F3B27F] bg relative">
    <div class="max-w-container mx-auto pt-14 flex flex-col gap-4">
      <h3 class="text-4xl font-bold w-[427px]">
        {{ $t("contact_us_title") }}
      </h3>
      <p class="text-xl font-medium w-[427px]">
        {{ $t("contact_us_description") }}
      </p>
      <div class="flex gap-8">
        <div class="flex flex-col gap-4">
          <input
            type="text"
            class="w-[280px] h-[50px] outline-none shadow-lg pl-3 rounded-lg"
            :placeholder="$t('your_name')"
          />
          <input
            type="text"
            class="w-[280px] h-[50px] outline-none shadow-lg pl-3 rounded-lg"
            :placeholder="$t('your_phone')"
          />
        </div>
        <textarea
          class="w-[316px] h-[118px] outline-none shadow-lg p-3 rounded-lg resize-none"
          :placeholder="$t('message')"
        />
      </div>
      <div class="flex gap-6 items-center">
        <NuxtLink
          to="/about"
          class="bg-white hover:bg-black hover:text-white transition font-medium w-[166px] h-10 text-lg flex justify-center items-center shadow-black shadow-sm rounded-lg"
        >
          {{ $t("send") }}
        </NuxtLink>
        <label class="w-80 text-sm">
          {{ $t("privacy_notice") }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 568px;
  height: 476px;
  background-image: url(/Home/bg-question.png);
}
</style>
