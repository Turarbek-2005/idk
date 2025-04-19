<script setup lang="ts">
import { type CarouselApi } from "@/components/ui/carousel";
import { amenities } from "@/components/Admin/checkboxes";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);
const price = ref();
const numberOfRooms = ref();
const description = ref();
const images = ref<string[]>([]);

const fileInputRef = ref<HTMLInputElement | null>(null);

function triggerFileInput() {
  fileInputRef.value?.click();
}

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  if (!files) return;

  const filesArray = Array.from(files);
  const newFiles = filesArray.slice(0, 10 - images.value.length);

  newFiles.forEach((file) => {
    const url = URL.createObjectURL(file);
    images.value.push(url);
  });
}

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
  emblaThumbnailApi.value.scrollTo(selectedIndex.value);
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  emblaMainApi.value.scrollTo(index);
}

watch(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return;
  onSelect();
  emblaMainApi.on("select", onSelect);
  emblaMainApi.on("reInit", onSelect);
});
</script>
<template>
  <div>
    <AdminHeader />
    <div class="max-w-container mx-auto my-16">
      <h3 class="text-3xl font-bold mb-4">{{ $t("object_name") }}</h3>
      <div class="flex justify-between">
        <div>
          <!-- <div class="w-[553px] h-[464px] bg-zinc-300 rounded-md mb-5"></div>
          <div class="flex w-[553px] justify-between">
            <div class="w-[163px] h-[142px] bg-zinc-300 rounded-md"></div>
            <div class="w-[163px] h-[142px] bg-zinc-300 rounded-md"></div>
            <div class="w-[163px] h-[142px] bg-zinc-300 rounded-md"></div>
          </div> -->
          <Carousel
            class="relative w-[520px]"
            @init-api="(val) => (emblaMainApi = val)"
            v-if="images.length"
          >
            <CarouselContent>
              <CarouselItem v-for="(img, index) in images" :key="index">
                <Card>
                  <CardContent
                    class="flex aspect-square items-center justify-center"
                  >
                    <img :src="img" alt="Image" class="w-full h-full" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <Carousel
            class="relative w-[520px] h-[142px] mt-4"
            @init-api="(val) => (emblaThumbnailApi = val)"
            v-if="images.length"
          >
            <CarouselContent class="flex gap-1 ml-0">
              <CarouselItem
                v-for="(img, index) in images"
                :key="index"
                class="pl-0 basis-1/4 cursor-pointer"
                @click="onThumbClick(index)"
              >
                <div
                  class="p-1"
                  :class="index === selectedIndex ? '' : 'opacity-50'"
                >
                  <Card>
                    <CardContent
                      class="flex aspect-square items-center justify-center"
                    >
                      <img
                        :src="img"
                        alt="Thumbnail"
                        class="w-full h-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div class="w-[550px]">
          <h3 class="text-5xl font-bold mb-7">{{ $t("price") }}</h3>
          <Input placeholder="Цена" v-model="price" class="w-1/2 mb-3" />
          <Input
            placeholder="Число комнат"
            v-model="numberOfRooms"
            class="w-1/2 mb-3"
          />
          <Textarea
            placeholder="Описание"
            v-model="description"
            class="w-2/3 mb-3"
          />
          <input
            ref="fileInputRef"
            type="file"
            accept="image/*"
            multiple
            class="hidden"
            @change="handleFileChange"
          />

          <button
            @click="triggerFileInput"
            class="bg-white mb-4 hover:bg-black hover:text-white transition font-medium w-40 h-12 text-md flex justify-center items-center shadow-black shadow-sm rounded-xl"
          >
            Добавить фото
          </button>
          <div
            class="w-full mb-9 grid grid-cols-1 gap-4 h-[145px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          >
            <AdminCheck
              v-for="item in amenities"
              :key="item.key"
              :icon="item.icon"
              :label="item.label"
              :checkbox="true"
            />
          </div>
          <p>{{ $t("company_description1") }}</p>
          <p>{{ $t("company_description2") }}</p>
          <div class="flex gap-10 mt-8">
            <button
              class="bg-white hover:bg-black hover:text-white transition font-medium w-40 h-12 text-md flex justify-center items-center shadow-black shadow-sm rounded-xl"
            >
              {{ $t("add_to_collection") }}
            </button>
            <button
              class="bg-white hover:bg-black hover:text-white transition font-medium w-40 h-12 text-md flex justify-center items-center shadow-black shadow-sm rounded-xl"
            >
              {{ $t("save") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #000000;
  border-radius: 4px;
}

::-webkit-scrollbar-track {
  background: #ffffff;
}
</style>
