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
  <div class="bg h-[1165px]">
    <div class="max-w-container mx-auto pt-[100px]">
      <h2 class="text-[40px] font-bold text-center mb-3">
        {{ $t("tour_title") }}<br />
        <label class="text-[#910000]">{{ $t("tour_free") }}</label>
      </h2>
      <p class="text-xl font-medium text-center mx-5 mb-[225px]">
        {{ $t("tour_description") }}
      </p>
      <div class="text-white grid grid-cols-2 gap-x-14 gap-y-5 mb-14">
        <div>
          <h4 class="text-4xl font-bold mb-3">{{ $t("trip_organization") }}</h4>
          <p>{{ $t("trip_organization_desc") }}</p>
        </div>
        <div>
          <h4 class="text-4xl font-bold mb-3">
            {{ $t("real_estate_review") }}
          </h4>
          <p>{{ $t("real_estate_review_desc") }}</p>
        </div>
        <div>
          <h4 class="text-4xl font-bold mb-3">{{ $t("excursion") }}</h4>
          <p>{{ $t("excursion_desc") }}</p>
        </div>
        <div>
          <h4 class="text-4xl font-bold mb-3">{{ $t("deal_support") }}</h4>
          <p>{{ $t("deal_support_desc") }}</p>
        </div>
      </div>
      <p class="text-xl text-white font-medium text-center mx-5 mb-7">
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
      <label class="text-sm text-white flex justify-center mt-3">
        {{ $t("confidentiality") }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url(/Cyprus/bg.jpg);
  background-size: cover;
}
</style>
