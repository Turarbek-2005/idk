<script setup lang="ts">
const edit = ref(false);
</script>
<template>
  <div>
    <AdminHeader />
    <div class="max-w-container mx-auto mt-16">
      <h2 class="text-5xl font-bold text-center mb-8">Каталог</h2>
      <button
        class="bg-white hover:bg-black mb-8 hover:text-white transition mx-auto font-medium w-44 h-12 text-lg flex justify-center items-center shadow-black shadow-sm rounded-xl"
        @click="edit = !edit"
      >
        {{ edit ? "Сохранить" : "Редактировать" }}
      </button>
      <div class="grid grid-cols-3 gap-8 mb-24">
        <NuxtLink
          to="/Collections/CollectionsObject"
          v-for="(_, index) in 6"
          :key="index"
          ><div
            class="relative w-[360px] h-[280px] rounded-lg shadow-md cursor-pointer bg-white border border-black"
          >
            <div class="-m-[2px] ml-[-1px]">
              <NuxtImg
                class="w-full"
                height="134px"
                src="/Home/object.png"
                alt="Объект"
              />
            </div>
            <div class="w-full h-full py-2 px-4 flex-col flex gap-1">
              <h4 class="font-bold">Название объекта</h4>
              <div class="w-6 bg-black h-[1px]"></div>
              <div class="flex items-center justify-between">
                <p class="font-medium">Адрес</p>
                <p class="font-bold">Цена</p>
              </div>
            </div>
            <div
              class="absolute bottom-[-1px] w-full h-[280px] rounded-lg shadow-md cursor-pointer transition opacity-0 bg-white border border-black hover:opacity-100"
            >
              <div
                class="h-[220px] bg-object w-[360px] ml-[-3px] flex-col flex gap-2 text-white -m-[2px] px-5 py-7"
              >
                <h4 class="text-lg font-medium">Название объекта</h4>
                <div class="w-8 bg-white h-[2px]"></div>
                <div>
                  <p class="font-medium">Адрес</p>
                  <p class="text-md">Площадь (кв. м.)</p>
                  <p class="font-bold text-md flex justify-end mt-14">Цена</p>
                </div>
              </div>
              <div class="w-full h-full py-3 px-4 font-bold">
                Узнать подробнее
              </div>
            </div>
          </div></NuxtLink
        >
        <div
          class="w-[360px] h-[280px] rounded-lg shadow-xl cursor-pointer bg-white border border-black"
          v-if="edit"
        >
          <div class="w-[360px] h-[180px] bg-zinc-300 rounded-md"></div>
          <div class="w-full h-full pt-4 text-center font-bold text-lg">
            Введите название подборки
          </div>
        </div>
        <NuxtLink
          to="/Admin/AddObject"
          class="w-[360px] h-[280px] flex justify-center items-center rounded-lg shadow-xl cursor-pointer bg-white border border-black"
          v-if="edit"
        >
          <label class="text-3xl">+</label>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-object {
  background-image: url(/Home/object-cursor.png);
  background-size: cover;
}
</style>
