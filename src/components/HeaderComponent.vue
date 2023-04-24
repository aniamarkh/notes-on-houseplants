<script setup>
import { ref, unref, toRef, onMounted, onUnmounted } from 'vue';

const navItems = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'];
const selectedNavItem = ref(navItems[0]);
const updateSelectedNavItem = (item) => {
  selectedNavItem.value = item;
};

const scrolled = ref(false);
const checkScrollPosition = () => {
  scrolled.value = window.pageYOffset >= 60;
};
const isScrolled = toRef(scrolled, 'value');
onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition);
});
onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition);
});
</script>

<template>
  <header :class="isScrolled ? 'header header--fixed' : 'header'">
    <img class="header__logo" src="../assets/Logo.svg" />
    <nav class="header__nav">
      <ul class="nav__list">
        <li
          v-for="(item, index) of navItems"
          :key="index"
          :class="item === unref(selectedNavItem) ? 'nav__item--selected' : 'nav__item'"
          @click="updateSelectedNavItem(item)"
        >
          {{ item }}
        </li>
      </ul>
      <button class="nav__btn">Request a quote</button>
    </nav>
  </header>
</template>

<style lang="scss">
@import '../style.scss';

.header {
  height: 80px;
  width: 1440px;
  background-color: $bg-color;
  margin-top: 55px;
  @include flex-row;
  justify-content: space-between;
  font-size: 20px;
  position: fixed;
  top: 0;
  transition: all 0.3s;

  #{&}__logo {
    margin-left: 99px;
    cursor: pointer;
  }

  #{&}__nav {
    @include flex-row;
    gap: 40px;
  }
}

.header--fixed {
  margin-top: 0;
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
  gap: 40px;
}

.nav__item {
  cursor: pointer;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}

.nav__item--selected {
  cursor: pointer;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #000000;
  }
}
</style>
