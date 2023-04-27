<script setup>
import { ref } from 'vue';
import Button from './ButtonComponent.vue';

defineProps({
  selectedOption: {
    type: String,
    default: 'sayHi',
  },
});

const emit = defineEmits(['update:selected-option']);
const sayHiLink = ref(null);

const handleButton = () => {
  emit('update:selected-option', 'sayHi');
  sayHiLink.value.click();
};
</script>

<template>
  <section class="hero">
    <div class="hero__top">
      <div class="hero__text-block">
        <h1 class="text-block__title">Navigating the digital landscape for success</h1>
        <img
          class="hero__img--mobile"
          src="/assets/hero-illustration.svg"
          alt="illustration of a horn"
        />
        <p class="text-block__paragraph">
          Our digital marketing agency helps businesses grow and succeed online through a range of
          services including SEO, PPC, social media marketing, and content creation.
        </p>
        <Button color="black" @click="handleButton">
          <a ref="sayHiLink" class="button__link" href="#contact-us">Book a consultation</a>
        </Button>
      </div>
      <img class="hero__img" src="/assets/hero-illustration.svg" alt="illustration of a horn" />
    </div>
    <div class="hero__logos">
      <img class="logos__item" src="/assets/logos/logo0.png" alt="amazon logo" />
      <img class="logos__item" src="/assets/logos/logo1.png" alt="dribble logo" />
      <img class="logos__item" src="/assets/logos/logo2.png" alt="hubspot logo" />
      <img class="logos__item" src="/assets/logos/logo3.png" alt="notion logo" />
      <img class="logos__item" src="/assets/logos/logo4.png" alt="netflix logo" />
      <img class="logos__item" src="/assets/logos/logo5.png" alt="zoom logo" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../style.scss';
.hero {
  width: 100%;
  @include flex-column;
  margin-top: 198px;
  gap: 70px;

  &__top {
    @include flex-row;
    align-items: flex-start;
    gap: 108px;
    width: 100%;
  }

  &__text-block {
    width: 531px;
    height: 481px;
  }

  &__img--mobile {
    display: none;
  }
}

.text-block__title {
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
  line-height: 77px;
}

.text-block__paragraph {
  line-height: 28px;
  width: 498px;
  margin: 35px 0;
  font-size: 20px;
}

.hero__logos {
  width: 100%;
  height: auto;
  @include flex-row;
  align-items: center;
  justify-content: space-between;

  .logos__item {
    mix-blend-mode: luminosity;
    height: 48px;
  }
}

.button__link {
  font-size: 20px;
}

@media (max-width: 900px) {
  .hero {
    margin-top: 95px;
    padding: 0 20px;
    &__img {
      display: none;
    }

    &__text-block {
      width: 100%;
      height: inherit;
      @include flex-column;
    }

    &__img--mobile {
      display: block;
      width: 360px;
      height: 310px;
      margin: 10px auto;
    }

    &__top {
      flex-wrap: wrap;
      width: 100%;
    }
  }
  // .hero {
  //   max-width: 100%;
  //   margin-top: 95px;
  //   gap: 68px;
  //   height: 800px;

  //   &__top {
  //     flex-wrap: wrap;
  //     width: 100%;
  //   }

  //   &__text-block {
  //     width: 100%;
  //     height: inherit;
  //     @include flex-column;
  //   }

  //   &__img {
  //     display: none;
  //   }

  //   &__img--mobile {
  //     display: block;
  //     width: 360px;
  //     height: 310px;
  //     margin: 10px auto;
  //   }
  // }

  // .button__link {
  //   font-size: 20px;
  //   line-height: 28px;
  //   text-align: center;
  // }

  .text-block__title {
    font-size: 43px;
    line-height: 55px;
  }

  .text-block__paragraph {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    margin-top: 14px;
  }

  .hero__logos {
    width: 100%;
    @include flex-row;
    flex-wrap: wrap;
    gap: 8px 38px;
    justify-content: center;
    height: auto;
  }

  .logos__item {
    mix-blend-mode: luminosity;
  }
}
</style>
