<template>
  <button class="button" :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from "@/components/types/types";
import { computed } from "vue";

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "primary",
  size: "normal"
});

const classes = computed(() => {
  return `test-lib-${props.type}`;
});
</script>

<style lang="scss" scoped>
.button {
  background-color: #0ebb11;
}
</style>
