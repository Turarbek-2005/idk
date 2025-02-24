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
        Откройте Северный Кипр уже сегодня!<br />
        <label class="text-[#910000]">Беспланый</label> ознакомительный тур на
        3-4 дня.
      </h2>
      <p class="text-xl font-medium text-center mx-5 mb-[225px]">
        БЕСПЛАТНЫЙ ознакомительный тур от нашей компании – это уникальная
        возможность познакомиться с Северным Кипром и найти свой идеальный дом
        на берегу Средиземного моря
      </p>
      <div class="text-white grid grid-cols-2 gap-x-14 gap-y-5 mb-14">
        <div>
          <h4 class="text-4xl font-bold mb-3">Организация поездки</h4>
          <p>
            Мы позаботимся обо всем — поможем подобрать билеты, обеспечим
            трансфер из аэропорта и комфортное проживание в апартаментах у моря.
          </p>
        </div>
        <div>
          <h4 class="text-4xl font-bold mb-3">Обзор недвижимости</h4>
          <p>
            Осмотрите только проверенные и юридически безопасные объекты,
            которые идеально подойдут для вашего нового дома.
          </p>
        </div>
        <div>
          <h4 class="text-4xl font-bold mb-3">Экскурсия по Северному Кипру</h4>
          <p>
            Увидите самые красивые уголки острова, познакомитесь с культурой и
            местной кухней, а также по запросу возможны посещение детских садов,
            университетов и т.д.
          </p>
        </div>
        <div>
          <h4 class="text-4xl font-bold mb-3">Полное сопровождение сделки</h4>
          <p>
            Наша команда окажет юридическую поддержку на каждом этапе сделки —
            от выбора недвижимости до подписания контракта.
          </p>
        </div>
      </div>
      <p class="text-xl text-white font-medium text-center mx-5 mb-7">
        Начните свое путешествие к новой жизни на Северном Кипре прямо сейчас!
        Забронируйте ваш бесплатный тур и откройте для себя все возможности
        этого райского уголка!
      </p>
      <div class="flex justify-center gap-8 mb-7">
        <input
          type="text"
          class="w-[260px] h-12 shadow-xl outline-none rounded-lg pl-2"
          placeholder="Ваше имя"
        />
        <input
          type="text"
          class="w-[260px] h-12 shadow-xl outline-none rounded-lg pl-2"
          placeholder="Ваш телефон"
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
                  : "Желаемый месяц тура"
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
        Отправить
      </button>
      <label class="text-sm text-white flex justify-center mt-3"
        >Информация полностью концнфициальна и не передается третьим
        лицам.</label
      >
    </div>
  </div>
</template>
<style scoped>
.bg {
  background-image: url(/Cyprus/bg.jpg);
  background-size: cover;
}
</style>
