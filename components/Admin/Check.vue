<script setup lang="ts">
defineProps<{ checkbox: boolean; label: String; icon: String }>();
</script>
<template>
  <div class="h-[35px] p-[10px] flex items-center rounded-lg shadow-xl">
    <div class="mr-2">
      <NuxtImg :src="`/Admin/сheckboxes/${icon}`" width="20" height="18" />
    </div>
    <label>{{ label }}</label>
    <Checkbox v-if="checkbox" class="ml-auto" />
  </div>
</template>
