<script setup lang="ts"></script>

<template>
  <div>
    <div class="max-w-container mx-auto">
      <div class="flex items-center gap-5 mb-12">
        <div class="w-1/2">
          <NuxtImg src="/About/img.jpg" width="550px" height="372px" />
        </div>
        <div class="w-1/2 flex flex-col gap-2">
          <h3 class="text-4xl font-bold mb-2">{{ $t("about_title") }}</h3>
          <p>{{ $t("about_description1") }}</p>
          <p>{{ $t("about_description2") }}</p>
          <p>{{ $t("about_description3") }}</p>
        </div>
      </div>
      <div class="flex gap-5">
        <div class="w-1/2 flex flex-col gap-2 pt-5">
          <p>{{ $t("about_trust") }}</p>
          <p>{{ $t("about_mission") }}</p>
          <p>{{ $t("about_partner") }}</p>
        </div>
        <div class="w-1/2">
          <NuxtImg src="/About/img.jpg" width="550px" height="372px" />
        </div>
      </div>
    </div>
    <div class="my-[80px] max-w-container mx-auto">
      <h3 class="text-4xl font-bold mb-9 flex justify-center">
        {{ $t("about_special") }}
      </h3>
      <div>
        <div class="flex justify-center gap-8 mb-8">
          <div
            class="w-[358px] h-[234px] border border-black rounded-lg p-6 gap-2 flex flex-col text-center items-center"
            v-for="_ in 2"
          >
            <h3 class="font-bold text-xl w-48 mx-auto">
              {{ $t("about_direct_prices") }}
            </h3>
            <div class="bg-black w-[107px] h-[1px]">.</div>
            <p class="text-lg">{{ $t("about_direct_prices_desc") }}</p>
          </div>
        </div>
        <div class="flex justify-center gap-8">
          <div
            class="w-[358px] h-[234px] border border-black rounded-lg p-6 gap-2 flex flex-col text-center items-center"
            v-for="_ in 3"
          >
            <h3 class="font-bold text-xl w-48 mx-auto">
              {{ $t("about_direct_prices") }}
            </h3>
            <div class="bg-black w-[107px] h-[1px]">.</div>
            <p class="text-lg">{{ $t("about_direct_prices_desc") }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-container mx-auto">
      <h3 class="text-4xl text-center w-[850px] font-bold mb-9 mx-auto">
        {{ $t("about_support") }}
      </h3>
      <div class="grid grid-cols-3 gap-8">
        <div
          v-for="_ in 6"
          class="w-[358px] h-[100px] border border-black rounded-lg pl-4 pt-3 pr-2 flex justify-between items-center"
        >
          <p class="font-bold text-md w-[220px]">
            {{ $t("about_residence_help") }}
          </p>
          <div>
            <NuxtImg src="/About/vector.svg" width="50px" height="50px" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-[649px] bg-free mt-20 pt-[150px]">
      <div class="max-w-container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">
          {{ $t("about_discover") }}<br />
          <label class="text-[#910000]">{{ $t("about_free_tour") }}</label>
        </h2>
        <NuxtLink
          to="/Cyprus"
          class="bg-white hover:bg-black hover:text-white mx-auto transition font-medium w-56 h-12 text-2xl flex justify-center items-center shadow-black shadow-sm rounded-xl"
          >{{ $t("about_more_details") }}</NuxtLink
        >
      </div>
    </div>
    <div class="max-w-container mx-auto mt-[88px] mb-[100px]">
      <h3 class="text-4xl font-bold mb-9 text-center">
        {{ $t("about_reviews") }}
      </h3>
      <p class="uppercase text-center text-lg mb-9">
        {{ $t("about_client_feedback") }}
      </p>
      <div class="flex justify-between gap-8">
        <div
          v-for="_ in 2"
          class="w-1/2 h-[305px] border border-black rounded-lg flex justify-center items-center"
        >
          <div class="w-[400px]">
            <div class="flex items-center gap-7">
              <div>
                <NuxtImg
                  src="/About/review-img.svg"
                  width="55px"
                  height="38px"
                />
              </div>
              <div>
                <h4 class="text-md font-bold">Андрей Иванов</h4>
                <p>{{ $t("about_ceo") }}</p>
              </div>
            </div>
            <p class="mt-10">{{ $t("about_review_text") }}</p>
          </div>
        </div>
      </div>
    </div>
    <Question />
  </div>
</template>

<style scoped>
.bg-free {
  background-image: url(/Home/bg-free.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
