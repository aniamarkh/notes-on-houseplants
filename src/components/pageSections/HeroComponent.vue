<script setup>
import { ref } from 'vue';
import Button from '../ButtonComponent.vue';

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
          alt="Megaphone surrounded by various social media icons"
        />
        <p class="text-block__paragraph">
          Our digital marketing agency helps businesses grow and succeed online through a range of
          services including SEO, PPC, social media marketing, and content creation.
        </p>
        <Button class="hero__button" color="black" @click="handleButton">
          <a ref="sayHiLink" class="button__link" href="#contact-us">Book a consultation</a>
        </Button>
      </div>
      <img class="hero__img" src="/assets/hero-illustration.svg" alt="illustration of a horn" />
    </div>
    <div class="hero__logos">
      <img class="logos__item" src="/assets/logos/amazon-logo.png" alt="amazon logo" />
      <img class="logos__item" src="/assets/logos/dribbble-logo.png" alt="dribbble logo" />
      <img class="logos__item" src="/assets/logos/hubspot-logo.png" alt="hubspot logo" />
      <img class="logos__item" src="/assets/logos/notion-logo.png" alt="notion logo" />
      <img class="logos__item" src="/assets/logos/netflix-logo.png" alt="netflix logo" />
      <img class="logos__item" src="/assets/logos/zoom-logo.png" alt="zoom logo" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../../_config.scss';
.hero {
  width: 100%;
  @include flex-column;
  margin-top: 198px;
  gap: 70px;

  &__top {
    @include flex-row;
    align-items: flex-start;
    gap: 108px;
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

@media (max-width: 1439px) {
  .hero {
    padding: 0 20px;
    margin-top: 95px;
    gap: 62px;

    &__top {
      width: 100%;
      gap: 0;
      justify-content: space-between;
    }

    &__text-block {
      width: 50%;
      height: auto;
      @include flex-column;

      .text-block__paragraph {
        width: 100%;
        font-size: 16px;
        line-height: 24px;
        margin-top: 10px;
      }
    }

    &__img {
      width: 50%;
      margin-right: 20px;
    }
  }
}

@media (max-width: 900px) {
  .hero {
    margin-top: 95px;
    gap: 62px;
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

  .text-block__title {
    font-size: 43px;
    line-height: 55px;
  }

  .text-block__paragraph {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    margin-top: 10px;
  }

  .hero__logos {
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .logos__item {
    mix-blend-mode: luminosity;
    margin-left: 10px;
  }

  .button__wrapper {
    width: 100%;
  }
}
</style>
