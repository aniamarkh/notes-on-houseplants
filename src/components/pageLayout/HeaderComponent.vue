<script setup>
import Button from '../ButtonComponent.vue';
import { ref, unref, toRef, onMounted, onUnmounted } from 'vue';

const navItems = ['About us', 'Services', 'Case Studies', 'Process', 'Team', 'Testimonials'];
const selectedNavItem = ref(navItems[0]);
const updateSelectedNavItem = (item) => {
  selectedNavItem.value = item;
};

const scrolled = ref(false);
const checkScrollPosition = () => {
  scrolled.value = window.pageYOffset >= 30;
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
  <header :class="isScrolled ? 'header--fixed' : 'header'">
    <img class="header__logo" src="../../assets/Logo.svg" />
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
      <Button color="white">Request a quote</Button>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import '../../style.scss';

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

  #{&}__logo {
    cursor: pointer;
  }

  #{&}__nav {
    @include flex-row;
    gap: 40px;
  }
}

.header--fixed {
  @extend .header;
  padding-top: 0;
  height: 80px;
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

.nav__item--selected {
  cursor: pointer;
  display: inline-block;
  position: relative;

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 25px;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    background-color: $accent-color;
  }
}
</style>
