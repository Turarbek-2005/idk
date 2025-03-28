<script setup lang="ts">
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from "@internationalized/date";
const df = new DateFormatter("ru-RU", {
  dateStyle: "long",
});

const value = ref<DateValue>();
</script>
<template>
  <div class="bg-[#E8711D]">
    <div class="max-w-container mx-auto pt-[70px]">
      <div class="flex justify-center mb-[30px]">
        <NuxtImg src="/Home/logo-text.png" class="w-[286px] h-[144px]" />
      </div>
      <h2
        class="text-[40px] font-bold text-center font-serif mb-[40px] text-white"
      >
        {{ $t("tour_title") }}<br />
        <label>{{ $t("tour_free") }}</label>
      </h2>
      <div class="bg-white w-[578px] h-[2px] mb-[30px] mx-auto"></div>

      <p class="text-lg font-medium text-center mx-5 mb-[70px] text-white">
        {{ $t("tour_description") }}
      </p>
    </div>
    <div class="h-[818px] bg pt-[100px]">
      <div class="max-w-container mx-auto">
        <div class="text-black grid grid-cols-2 gap-[40px] w-[947px] mx-auto">
          <div
            class="w-[454px] h-[294px] rounded-lg p-6 gap-2 flex flex-col shadow-md bg-white"
          >
            <h3 class="font-bold text-xl w-48">
              {{ $t("trip_organization") }}
            </h3>
            <div class="bg-black w-[107px] h-[1px]">.</div>
            <p class="text-lg">{{ $t("trip_organization_desc") }}</p>
          </div>
          <div
            class="w-[454px] h-[294px] rounded-lg p-6 gap-2 flex flex-col shadow-md bg-white"
          >
            <h3 class="font-bold text-xl w-48">
              {{ $t("real_estate_review") }}
            </h3>
            <div class="bg-black w-[107px] h-[1px]">.</div>
            <p class="text-lg">{{ $t("real_estate_review_desc") }}</p>
          </div>
          <div
            class="w-[454px] h-[294px] rounded-lg p-6 gap-2 flex flex-col shadow-md bg-white"
          >
            <h3 class="font-bold text-xl w-48">
              {{ $t("excursion") }}
            </h3>
            <div class="bg-black w-[107px] h-[1px]">.</div>
            <p class="text-lg">{{ $t("excursion_desc") }}</p>
          </div>
          <div
            class="w-[454px] h-[294px] rounded-lg p-6 gap-2 flex flex-col shadow-md bg-white"
          >
            <h3 class="font-bold text-xl w-48">
              {{ $t("deal_support") }}
            </h3>
            <div class="bg-black w-[107px] h-[1px]">.</div>
            <p class="text-lg">{{ $t("deal_support_desc") }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="h-[396px] bg-[#F4B582] pt-[75px]">
      <div class="max-w-container mx-auto">
        <p class="text-xl font-medium text-center mx-5 mb-7">
          {{ $t("tour_cta") }}
        </p>
        <div class="flex justify-center gap-8 mb-7">
          <input
            type="text"
            class="w-[260px] h-12 shadow-xl outline-none rounded-lg pl-2"
            :placeholder="$t('your_name')"
          />
          <input
            type="text"
            class="w-[260px] h-12 shadow-xl outline-none rounded-lg pl-2"
            :placeholder="$t('your_phone')"
          />
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                class="w-[260px] h-12 justify-start text-gray-500"
              >
                {{
                  value
                    ? df.format(value.toDate(getLocalTimeZone()))
                    : $t("desired_month")
                }}
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="value" initial-focus />
            </PopoverContent>
          </Popover>
        </div>
        <button
          class="bg-white mx-auto transition font-medium w-[166px] h-10 text-xl flex justify-center items-center shadow-black shadow-sm rounded-xl"
        >
          {{ $t("send") }}
        </button>
        <label class="text-sm flex justify-center mt-3">
          {{ $t("confidentiality") }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url(/Cyprus/bg-cypr.jpg);
  background-size: cover;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}
</style>
