<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";

const { locale, t } = useI18n();
const router = useRouter();
const languages = ref([
  { code: "ru", label: "Русский", short: "РУС" },
  { code: "tr", label: "Türkçe", short: "TÜR" },
  { code: "de", label: "Deutsch", short: "DEU" },
  { code: "en", label: "English", short: "ENG" },
]);

const selectedLanguage = computed(
  () =>
    languages.value.find((lang) => lang.code === locale.value) ||
    languages.value[0]
);

const setLanguage = (code: string) => {
  locale.value = code;
  localStorage.setItem("user-lang", code);
};

const username = ref("");
const password = ref("");
const error = ref("");
// const handleLogin = async () => {
//   const payload = {
//     username: username.value,
//     password: password.value,
//   };
//   try {
//     const res = await signIn(payload);
//     console.log("Logged in successfully", res);
//   } catch (error) {
//     console.error("Login failed:", error);
//   }
// };
// getRealEstateList();
</script>

<template>
  <div
    class="max-w-container mx-auto h-[122px] justify-between items-center flex"
  >
    <div class="items-center flex">
      <NuxtLink to="/" class="w-[66px] h-[61px] mr-8 text-white">
        <NuxtImg src="/Header/logo.svg" alt="Логотип" />
      </NuxtLink>
      <nav class="flex items-center gap-7 font-medium">
        <NuxtLink to="/Collections">{{ t("collections") }}</NuxtLink>
        <NuxtLink to="/tour">{{ t("tour") }}</NuxtLink>
        <NuxtLink to="/about">{{ t("about") }}</NuxtLink>
        <NuxtLink to="/contacts">{{ t("contacts") }}</NuxtLink>
        <Dialog class="z-50 relative">
          <DialogTrigger as-child>
            <button>{{ t("login") }}</button>
          </DialogTrigger>
          <DialogContent class="h-[580px] flex">
            <div>
              <NuxtImg src="/Header/login.jpg" class="w-[455px] h-full" />
            </div>
            <div
              class="w-[455px] h-full flex items-center justify-center flex-col"
            >
              <div class="w-72">
                <h2 class="text-3xl font-bold mb-7">{{ t("login") }}</h2>
                <div class="flex flex-col gap-4 mb-6">
                  <input
                    v-model="username"
                    type="text"
                    class="w-72 h-12 shadow-xl outline-none rounded-lg pl-2"
                    :placeholder="t('your_account')"
                  />
                  <input
                    v-model="password"
                    type="password"
                    class="w-72 h-12 shadow-xl outline-none rounded-lg pl-2"
                    :placeholder="t('your_password')"
                  />
                </div>

                <p v-if="error" class="text-red-500 text-sm mb-2">
                  {{ error }}
                </p>

                <DialogClose as="div">
                  <NuxtLink
                    to="/Admin/Collections"
                    class="bg-white hover:bg-black hover:text-white transition font-medium w-[88px] h-6 text-[10px] flex justify-center items-center shadow-black shadow-sm rounded-md"
                  >
                    {{ t("login") }}
                  </NuxtLink>
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
            <p class="font-bold">{{ selectedLanguage.short }}</p>
            <div>
              <NuxtImg width="20px" height="20px" src="/Header/language.png" />
            </div>
            <div>
              <NuxtImg width="8px" height="5px" src="/Header/Vector.png" />
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-24">
          <DropdownMenuItem
            v-for="lang in languages"
            :key="lang.code"
            @click="setLanguage(lang.code)"
          >
            {{ lang.short }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>
