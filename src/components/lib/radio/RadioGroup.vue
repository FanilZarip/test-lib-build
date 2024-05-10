<template>
  <div>
    <label v-for="option in props.options" :key="option.id">
      <input :id="String(option.id)" v-model="inputValue" :value="option.value" type="radio" />
      {{ option.value }}</label
    >
  </div>
</template>

<script setup lang="ts">
const inputValue = defineModel({ type: String });

type InputProps = {
  options: { id: number | string; value: string }[];
};

const props = defineProps<InputProps>();
</script>

<style scoped></style>
