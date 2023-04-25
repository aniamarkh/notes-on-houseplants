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

.button--black {
  border-radius: 14px;
  padding: 20px 35px 20px 35px;
  border: 1px solid #191a23;
  transition: all 0.4s;
  background-color: $text-color;
  color: $bg-color;

  &:hover {
    color: $text-color;
    background-color: $bg-color;
  }
}

.button--white {
  border-radius: 14px;
  padding: 20px 35px;
  border: 1px solid #191a23;
  transition: all 0.4s;

  &:hover {
    color: $bg-color;
    background-color: $text-color;
  }
}
</style>
