<script setup>
import { ref, computed, toRef, onMounted, onUnmounted } from 'vue';
import Button from './ButtonComponent.vue';
import HamburgerNav from './HamburgerNav.vue';
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
  scrolled.value = window.pageYOffset >= 10;
};
const isScrolled = toRef(scrolled, 'value');

const scrollUp = () => {
  window.scrollTo(0, 0);
};

const isOpenNav = ref(false);
const toggleNav = () => {
  isOpenNav.value = !isOpenNav.value;
};
const navClass = computed(() => {
  return isOpenNav.value ? 'header__nav' : 'header__nav--closed';
});

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
    <HamburgerNav :is-open="isOpenNav" class="header__burger" @click="toggleNav" />
    <nav :class="navClass">
      <ul class="nav__list">
        <li v-for="(item, index) of pageNavItems" :key="index" class="nav__item">
          <a :href="item.href">{{ item.title }}</a>
        </li>
      </ul>
      <Button class="header__button" color="white" @click="handleQuoteRequest">
        <a ref="quoteLink" class="button__link" href="#contact-us">Request a quote</a>
      </Button>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import '../_config.scss';

.header {
  z-index: 2;
  position: fixed;
  top: 0;
  height: 135px;
  width: 1240px;
  padding: 55px 0 0;
  @include flex-row;
  justify-content: space-between;
  align-items: center;
  background-color: $bg-color;
  transition: all 0.3s ease-in-out;

  &__logo {
    cursor: pointer;
    width: 220px;
  }

  .burger {
    display: none;
  }

  &__nav,
  &__nav--closed {
    @include flex-row;
    align-items: center;
    gap: 40px;

    .nav__list {
      list-style-type: none;
      @include flex-row;
      gap: 20px;

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
    }
  }

  &--fixed {
    @extend .header;
    padding-top: 0;
    height: 80px;
  }
}

.button__link {
  font-size: 20px;
}

@media (max-width: 1439px) {
  .header {
    height: 82px;
    width: 100vw;
    padding: 0 20px;
    justify-content: space-between;

    &__nav,
    &__nav--closed {
      gap: 10px;
      .nav__list {
        gap: 10px;

        .nav__item a {
          font-size: 16px;
        }
      }
    }

    &__logo {
      width: 144px;
    }

    &--fixed {
      height: 60px;
    }
  }

  .button__link {
    font-size: 16px;
  }

  .header__button:deep(.button),
  .header__button:deep(.button--white) {
    padding: 10px 20px;
  }
}

@media (max-width: 900px) {
  @mixin nav-mobile {
    @include flex-column;
    align-items: flex-start;
    position: absolute;
    background-color: $bg-color;
    width: 430px;
    height: 100vh;
    top: 0;
    right: 0;
    padding: 50px 30px;
    gap: 40px;
    @include transition-ease;
    .nav__list {
      @include flex-column;
      align-items: flex-start;
      width: 100%;
      gap: 30px;

      .nav__item {
        display: inline-block;

        a {
          font-size: 20px;
        }
      }
    }
  }

  .header {
    height: 82px;
    left: 0px;
    box-sizing: border-box;
    padding: 0 20px;

    &__nav {
      @include nav-mobile;
    }

    &__nav--closed {
      @include nav-mobile;
      right: -430px;
      opacity: 0;
    }

    .burger {
      display: block;
      position: relative;
    }

    &__logo {
      width: 144px;
    }

    &--fixed {
      height: 40px;
    }
  }
}
</style>
