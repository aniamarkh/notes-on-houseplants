<script setup>
import { computed } from 'vue';
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});

const buttonClass = computed(() => {
  return 'button--' + props.color;
});
</script>

<template>
  <button :class="buttonClass"><slot></slot></button>
</template>

<style scoped lang="scss">
@import '../style.scss';

.button {
  all: unset;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 14px;
  padding: 20px 35px;
  border: 1px solid $dark;
  font-size: 20px;

  &:hover {
    color: $text-color;
    background-color: $accent-color;
  }
}

.button--black {
  @extend .button;
  background-color: $text-color;
  color: $bg-color;
}

.button--white {
  @extend .button;
  background-color: $bg-color;
  color: $text-color;
}

.button--green {
  @extend .button;
  background-color: $accent-color;
  color: $text-color;
  border: none;
  &:hover {
    color: $text-color;
    background-color: $bg-color;
  }
}
</style>
