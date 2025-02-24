<script setup lang="ts"></script>

<template>
  <div>
    <div class="max-w-container mx-auto">
      <div class="flex items-center gap-5 mb-12">
        <div class="w-1/2">
          <NuxtImg src="/About/img.jpg" width="550px" height="372px" />
        </div>
        <div class="w-1/2 flex flex-col gap-2">
          <h3 class="text-4xl font-bold mb-2">О комании</h3>
          <p>
            (Название компании) официально зарегистрированная компания,
            специализирующаяся на подборе жилой и коммерческой недвижимости на
            Северном Кипре.
          </p>
          <p>
            Рынок недвижимости Северного Кипра динамично развивается, предлагая
            широкий выбор как готовых объектов, так и проектов на стадии
            строительства. В этом стремительном потоке мы помогаем нашим
            клиентам сделать взвешенный и обоснованный выбор, сэкономить время и
            избежать лишних затрат.
          </p>
          <p>
            Мы строим свою работу на профессионализме, ответственности и
            индивидуальном подходе к каждому клиенту. Наша цель - не просто
            подобрать недвижимость, а предложить оптимальное решение,
            соответствующее вашим потребностям и ожиданиям.
          </p>
        </div>
      </div>
      <div class="flex gap-5">
        <div class="w-1/2 flex flex-col gap-2 pt-5">
          <p>
            Доверие - основа долгосрочных отношений. Мы ценим прозрачность и
            честность, предоставляя только проверенную информацию и сопровождая
            клиента на всех этапах сделки.
          </p>
          <p>
            Наша миссия предоставление высококлассного сервиса, обеспечивающего
            безопасность, комфорт и максимальную выгоду для клиента. Мы
            стремимся не только удовлетворить запросы наших клиентов, но и
            создать партнерские отношения, благодаря которым наши клиенты с
            уверенностью рекомендуют нас своим друзьям, близким и коллегам.
          </p>
          <p>
            (Название компании) надежный партнер на рынке недвижимости Северного
            Кипра.
          </p>
        </div>
        <div class="w-1/2">
          <NuxtImg src="/About/img.jpg" width="550px" height="372px" />
        </div>
      </div>
    </div>
    <div class="my-[80px] max-w-container mx-auto">
      <h3 class="text-4xl font-bold mb-9 flex justify-center">
        Что делает нас особенными
      </h3>
      <div>
        <div class="flex justify-center gap-8 mb-8">
          <div
            class="w-[358px] h-[234px] border border-black rounded-lg p-6 gap-2 flex flex-col text-center items-center"
            v-for="_ in 2"
          >
            <h3 class="font-bold text-xl w-48 mx-auto">
              Прямые цены от застройщиков
            </h3>
            <div class="bg-black w-[107px] h-[1px]">.</div>
            <p class="text-lg">
              Мы предлагаем недвижимость без наценок и комиссий, обеспечивая
              нашим клиентам самые выгодные условия.
            </p>
          </div>
        </div>
        <div class="flex justify-center gap-8">
          <div
            class="w-[358px] h-[234px] border border-black rounded-lg p-6 gap-2 flex flex-col text-center items-center"
            v-for="_ in 3"
          >
            <h3 class="font-bold text-xl w-48 mx-auto">
              Прямые цены от застройщиков
            </h3>
            <div class="bg-black w-[107px] h-[1px]">.</div>
            <p class="text-lg">
              Мы предлагаем недвижимость без наценок и комиссий, обеспечивая
              нашим клиентам самые выгодные условия.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-container mx-auto">
      <h3 class="text-4xl text-center w-[850px] font-bold mb-9 mx-auto">
        Комплексная поддержка после покупки - мы оказываем полный спектр услуг
      </h3>
      <div class="grid grid-cols-3 gap-8">
        <div
          v-for="_ in 6"
          class="w-[358px] h-[100px] border border-black rounded-lg pl-4 pt-3 pr-2 flex justify-between items-center"
        >
          <p class="font-bold text-md w-[220px]">
            Помощь в оформлении ВНЖ и открытии банковского счета
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
          Откройте Северный Кипр уже сегодня!<br />
          <label class="text-[#910000]">Беспланый</label> ознакомительный тур на
          3-4 дня.
        </h2>
        <NuxtLink
          to="/Cyprus"
          class="bg-white hover:bg-black hover:text-white mx-auto transition font-medium w-56 h-12 text-2xl flex justify-center items-center shadow-black shadow-sm rounded-xl"
          >Подробнее</NuxtLink
        >
      </div>
    </div>
    <div class="max-w-container mx-auto mt-[88px] mb-[100px]">
      <h3 class="text-4xl font-bold mb-9 text-center">Отзывы наших клиентов</h3>
      <p class="uppercase text-center text-lg mb-9">
        Что о нас говорят наши клиенты?
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
                <p>Генеральный директор</p>
              </div>
            </div>
            <p class="mt-10">
              Это текст о компании. Он необходим для дальнейшего продвижения
              Вашего сайта. Вам будет необходимо предоставить исходные данные,
              по которым наши копирайтеры текст.
            </p>
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
