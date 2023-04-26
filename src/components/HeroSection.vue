<script setup>
import Button from './ButtonComponent.vue';
</script>

<template>
  <section class="hero">
    <div class="hero__top">
      <div class="hero__text-block">
        <h1 class="text-block__title">Navigating the digital landscape for success</h1>
        <p class="text-block__paragraph">
          Our digital marketing agency helps businesses grow and succeed online through a range of
          services including SEO, PPC, social media marketing, and content creation.
        </p>
        <Button color="black">Book a consultation</Button>
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

  #{&}__top {
    @include flex-row;
    align-items: flex-start;
    gap: 108px;
    width: 100%;
  }

  #{&}__text-block {
    width: 531px;
    height: 481px;
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
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.logos__item {
  mix-blend-mode: luminosity;
  height: 48px;
}
</style>
