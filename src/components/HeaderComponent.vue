<script setup>
import { ref, toRef, onMounted, onUnmounted } from 'vue';
import Button from './ButtonComponent.vue';
import pageNavItems from '../data/pageNavItems.js';
defineProps({
  selectedOption: {
    type: String,
    default: 'sayHi',
  },
});

const emit = defineEmits(['update:selected-option']);
const quoteLink = ref(null);

const handleQuoteRequest = () => {
  emit('update:selected-option', 'getAQuote');
  quoteLink.value.click();
};

const scrolled = ref(false);
const checkScrollPosition = () => {
  scrolled.value = window.pageYOffset >= 30;
};
const isScrolled = toRef(scrolled, 'value');

const scrollUp = () => {
  window.scrollTo(0, 0);
};

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition);
});
onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition);
});
</script>

<template>
  <header :class="isScrolled ? 'header--fixed' : 'header'">
    <img class="header__logo" src="/assets/Logo.svg" @click="scrollUp" />
    <nav class="header__nav">
      <ul class="nav__list">
        <li v-for="(item, index) of pageNavItems" :key="index" class="nav__item">
          <a :href="item.href">{{ item.title }}</a>
        </li>
      </ul>
      <Button color="white" @click="handleQuoteRequest">
        <a ref="quoteLink" href="#contact-us">Request a quote</a>
      </Button>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import '../style.scss';

.header {
  height: 135px;
  padding-top: 55px;
  width: 1240px;
  background-color: $bg-color;
  @include flex-row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  transition: all 0.3s ease-in-out;
  z-index: 2;

  &__logo {
    cursor: pointer;
  }

  &__nav {
    @include flex-row;
    gap: 40px;
  }

  &--fixed {
    @extend .header;
    padding-top: 0;
    height: 80px;
  }
}

.nav__btn {
  border-radius: 14px;
  padding: 20px 35px 20px 35px;
  border: 1px solid #191a23;
  margin-right: 101px;
  transition: all 0.4s;

  &:hover {
    color: $bg-color;
    background-color: $text-color;
  }
}

.nav__list {
  list-style-type: none;
  @include flex-row;
  gap: 20px;
}

.nav__item {
  cursor: pointer;
  display: inline-block;
  position: relative;
  font-size: 20px;

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 25px;
    bottom: 0;
    left: 0;
    background-color: $accent-color;
    border-radius: 4px;
    transform-origin: bottom right;
    transition: transform 0.25s ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}
</style>
