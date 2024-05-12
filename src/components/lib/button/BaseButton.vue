<template>
  <button class="button" :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from "../../types/types";
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
  border: 2px solid transparent;
  color: white;
  padding: 6px 15px;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
}

.test-lib-primary {
  background-color: #0017c3;
}

.test-lib-primary:hover {
  background-color: #081890;
}

.test-lib-outline {
  background-color: transparent;
  border-color: #0017c3;
  color: #0017c3;
}

.test-lib-outline:hover {
  background-color: transparent;
  border-color: #081890;
}
</style>
