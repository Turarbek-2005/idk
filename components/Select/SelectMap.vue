<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="h-[84px] w-[258px] flex flex-col justify-end">
    <div>
      <p class="text-lg font-bold mb-2">{{ title }}</p>
      <Select class="z-10">
        <SelectTrigger>
          <SelectValue :placeholder="$t('all')" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{{ $t("all") }}</SelectLabel>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>
