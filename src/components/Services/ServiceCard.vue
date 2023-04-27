<script setup>
import { computed } from 'vue';
import LinkComponent from '../LinkComponent.vue';

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const linkIconSrc = computed(() => {
  return props.color === 'black'
    ? '/assets/services-cards/link-icon-white.svg'
    : '/assets/services-cards/link-icon-black.svg';
});

const serviceCardClass = computed(() => {
  return 'service-card--' + props.color;
});
</script>

<template>
  <div :class="serviceCardClass">
    <div class="service-card__text">
      <h3 class="service-card__title"><slot name="first"></slot></h3>
      <h3 class="service-card__title"><slot name="second"></slot></h3>
      <LinkComponent :icon="linkIconSrc" />
    </div>
    <img class="service-card__img" :src="img" alt="service card illustration" />
  </div>
</template>

<style scoped lang="scss">
@import '../../style.scss';

.service-card {
  width: 600px;
  height: 310px;
  border: 1px solid #191a23;
  box-shadow: 0px 5px 0px #191a23;
  border-radius: 45px;
  @include flex-row;
  align-items: center;
  justify-content: space-between;
  padding: 49px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
}

.service-card__text {
  width: 230px;
  height: 210px;
}

.service-card__title {
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;
  border-radius: 7px;
  padding: 0px 7px;
  background: red;
  width: auto;
  display: inline-block;
}

.service-card__img {
  width: 210px;
}

.service-card--white {
  @extend .service-card;
  background: $grey;

  .service-card__title {
    background: $accent-color;
    color: $text-color;
  }
}

.service-card--black {
  @extend .service-card;
  background: $dark;

  .link {
    color: $bg-color;
  }
  .service-card__title {
    background: $bg-color;
  }
}

.service-card--green {
  @extend .service-card;
  background: $accent-color;

  .service-card__title {
    background: $bg-color;
    color: $text-color;
  }
}

@media (max-width: 900px) {
  .service-card {
    width: 390px;
    height: 322px;
    position: relative;

    &__img {
      position: absolute;
      right: 50px;
      bottom: 50px;
      width: 165px;
    }

    &__text {
      @include flex-column;
      gap: 9px;
    }

    &__title {
      font-size: 26px;
      line-height: 33px;
      margin-top: -8px;
      width: max-content;
    }
  }
}
</style>
