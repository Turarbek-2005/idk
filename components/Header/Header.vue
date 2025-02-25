<script setup lang="ts">
interface Language {
  code: string;
  label: string;
}

const languages = ref([
  { code: "ru", label: "РУС" },
  { code: "tr", label: "TÜR" },
  { code: "de", label: "DEU" },
  { code: "en", label: "ENG" },
]);

const selectedLanguage = ref(languages.value[0]);
const setLanguage = (lang: Language) => {
  selectedLanguage.value = lang;
  // Здесь можно добавить логику смены языка, например, через i18n
};
</script>
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
        <NuxtLink to="/Collections">Подборки</NuxtLink>
        <NuxtLink to="/tour">Тур</NuxtLink>
        <NuxtLink to="/about">О компании</NuxtLink>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
        <Dialog class="z-50 relative">
          <DialogTrigger as-child>
            <button>Вход</button>
          </DialogTrigger>
          <DialogContent class="h-[580px] flex">
            <div>
              <NuxtImg src="/Header/login.jpg" class="w-[455px] h-full" />
            </div>
            <div
              class="w-[455px] h-full flex items-center justify-center flex-col"
            >
              <div class="w-72">
                <h2 class="text-3xl font-bold mb-7">Войти</h2>
                <div class="flex flex-col gap-4 mb-6">
                  <input
                    type="text"
                    class="w-72 h-12 shadow-xl outline-none rounded-lg pl-2"
                    placeholder="Ваш аккаунт"
                  />
                  <input
                    type="text"
                    class="w-72 h-12 shadow-xl outline-none rounded-lg pl-2"
                    placeholder="Ваш пароль"
                  />
                </div>
                <DialogClose>
                  <NuxtLink
                    to="/Admin/Collections"
                    class="bg-white hover:bg-black hover:text-white transition font-medium w-[88px] h-6 text-[10px] flex justify-center items-center shadow-black shadow-sm rounded-md"
                    >Войти</NuxtLink
                  >
                </DialogClose>
              </div>
            </div>
          </DialogContent>
        </Dialog>
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
      <DropdownMenu>
        <DropdownMenuTrigger as-child class="flex items-center">
          <button class="flex items-center gap-1">
            <p class="font-bold">{{ selectedLanguage.label }}</p>
            <div>
              <NuxtImg width="20px" height="20px" src="/Header/language.png" />
            </div>
            <div>
              <NuxtImg width="8px" height="5px" src="/Header/Vector.png" />
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-32">
          <DropdownMenuItem
            v-for="lang in languages"
            :key="lang.code"
            @click="setLanguage(lang as Language)"
          >
            {{ lang.label }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>
<style scoped></style>
