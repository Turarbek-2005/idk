<script setup lang="ts"></script>
<template>
  <div
    class="max-w-container mx-auto h-[122px] justify-between items-center flex"
  >
    <div class="items-center flex">
      <NuxtLink
        to="/"
        class="w-[66px] h-[51px] bg-black rounded-xl justify-center items-center flex mr-8 text-white"
      >
        Лого
      </NuxtLink>
      <nav class="flex items-center gap-7 font-medium">
        <NuxtLink to="/catalog">Подборки</NuxtLink>
        <NuxtLink to="/tour">Тур</NuxtLink>
        <NuxtLink to="/about">О компании</NuxtLink>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
        <p>Вход</p>
      </nav>
    </div>
    <div class="items-center flex gap-7">
      <div class="flex items-center gap-2">
        <div>
          <NuxtImg
            width="20px"
            height="20px"
            src="/Header/phone.png"
            alt="Телефон"
          />
        </div>
        <label class="font-bold">+7 (777) 777-77-77</label>
      </div>
      <button class="flex items-center gap-1">
        <label class="font-bold">РУС</label>
        <div>
          <NuxtImg width="20px" height="20px" src="/Header/language.png" />
        </div>
        <div>
          <NuxtImg width="8px" height="5px" src="/Header/Vector.png" />
        </div>
      </button>
    </div>
  </div>
</template>
<style scoped></style>
