<script setup>
import { ref, onMounted } from 'vue';
import TestimonialCard from './TestimonialCard.vue';
import testimonialsData from '../../data/testimonials.js';

const cardsContainer = ref(null);
const cardsContainerStyles = ref({});
const step = ref('');
const activeCardIndex = ref(2);

const setStep = () => {
  const cardsContainerWidth = cardsContainer.value.scrollWidth;
  const totalCards = testimonialsData.length;
  step.value = cardsContainerWidth / totalCards;
};

const next = () => {
  if (activeCardIndex.value !== testimonialsData.length - 1) {
    activeCardIndex.value += 1;
    move();
  }
};

const prev = () => {
  if (activeCardIndex.value !== 0) {
    activeCardIndex.value -= 1;
    move();
  }
};

const move = () => {
  const translateValue = (2 - activeCardIndex.value) * step.value;
  cardsContainerStyles.value = {
    transform: `translateX(${translateValue}px)`,
  };
};

const moveTo = (index) => {
  activeCardIndex.value = index;
  const translateValue = (2 - index) * step.value;
  cardsContainerStyles.value = {
    transform: `translateX(${translateValue}px)`,
  };
};

onMounted(() => {
  setStep();
});

const pagItemClass = (index) => {
  return index === activeCardIndex.value ? 'pagination__item--selected' : 'pagination__item';
};

const isBtnDisabled = (btn) => {
  return btn === 'next'
    ? activeCardIndex.value === testimonialsData.length - 1
    : btn === 'prev'
    ? activeCardIndex.value === 0
    : false;
};
</script>

<template>
  <div class="testimonials__switcher">
    <div ref="cardsContainer" :style="cardsContainerStyles" class="switcher__cards">
      <TestimonialCard
        v-for="(card, index) of testimonialsData"
        :key="index"
        :testimonial="card.testimonial"
        :name="card.name"
        :role="card.role"
      />
    </div>
    <div class="switcher__pagination">
      <button
        ref="btnPrev"
        :disabled="isBtnDisabled('prev')"
        class="pagination__button-prev"
        @click="prev"
      ></button>
      <ul class="pagination__list">
        <li
          v-for="(card, index) of testimonialsData"
          :key="index"
          :class="pagItemClass(index)"
          @click="moveTo(index)"
        ></li>
      </ul>
      <button
        ref="btnNext"
        :disabled="isBtnDisabled('next')"
        class="pagination__button-next"
        @click="next"
      ></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../style.scss';
@mixin background-no-repeat {
  background-repeat: no-repeat;
  background-position: center left;
}

.testimonials__switcher {
  width: 1240px;
  height: 625px;
  background: $dark;
  border-radius: 45px;
  padding: 85px 0 68px;
  @include flex-column;
  align-items: center;
  justify-content: flex-start;
  gap: 110px;
  overflow: hidden;
}

.switcher__cards {
  width: auto;
  @include flex-row;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
  @include transition-ease;
}

.switcher__pagination {
  @include flex-row;
  height: 40px;
  width: 580px;
  gap: 186px;

  .pagination__list {
    list-style-type: none;
    @include flex-row;
    width: 146px;
    justify-content: space-between;
  }

  .pagination__item {
    cursor: pointer;
    width: 14px;
    height: 14px;
    background: url('/assets/switcher/pag-item.png');
    background-size: 14px;
    @include transition-ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .pagination__item--selected {
    @extend .pagination__item;
    background: url('/assets/switcher/pag-item-selected.png');
  }

  .pagination__button {
    all: unset;
    cursor: pointer;
    width: 25px;
    height: 40px;
    @include transition-ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .pagination__button-prev {
    @extend .pagination__button;
    background: url('/assets/switcher/arrow-left.png');
    @include background-no-repeat;

    &:disabled {
      background: url('/assets/switcher/arrow-left-disabled.png');
      @include background-no-repeat;
      cursor: auto;

      &:hover {
        transform: none;
      }
    }
  }

  .pagination__button-next {
    @extend .pagination__button;
    background: url('/assets/switcher/arrow-right.png');
    @include background-no-repeat;

    &:disabled {
      background: url('/assets/switcher/arrow-right-disabled.png');
      @include background-no-repeat;
      cursor: auto;

      &:hover {
        transform: none;
      }
    }
  }
}
</style>
