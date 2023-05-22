<script setup>
import { computed } from 'vue';
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const buttonClass = computed(() => {
  return props.isOpen ? 'burger burger--open' : 'burger';
});
</script>

<template>
  <button :class="buttonClass">
    <div class="burger__icon"></div>
  </button>
</template>

<style scoped lang="scss">
@import '../_config.scss';

button {
  all: unset;
  cursor: pointer;
}

@mixin burger-line {
  transition-duration: 0.5s;
  position: absolute;
  width: 24px;
  height: 2px;
  border-radius: 2px;
  background-color: $dark;
  content: '';
}

.burger {
  z-index: 3;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 4px;
  right: 0;
  transition-duration: 0.5s;

  .burger__icon {
    transition-duration: 0.5s;
    position: absolute;
    height: 2px;
    width: 24px;
    border-radius: 2px;
    top: 0px;
    background-color: $dark;

    &:before {
      @include burger-line;
      top: 8px;
    }

    &:after {
      @include burger-line;
      top: 16px;
    }
  }
  &.burger--open {
    .burger__icon {
      transition-duration: 0.5s;
      background: transparent;

      &:before {
        transform: rotateZ(45deg) scaleX(1.25) translate(2px, 2px);
      }

      &:after {
        transform: rotateZ(-45deg) scaleX(1.25) translate(3px, -3px);
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
