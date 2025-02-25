<script setup lang="ts">
defineProps<{ checkbox: boolean }>();
</script>
<template>
  <div
    class="min-w-[163px] h-[35px] p-[10px] flex items-center rounded-lg shadow-xl"
  >
    <div class="mr-2">
      <NuxtImg src="/Admin/vector.svg" width="20" height="18" />
    </div>
    <label>{{ $t("pool") }}</label>
    <Checkbox v-if="checkbox" class="ml-auto" />
  </div>
</template>
