<script setup>
import SectionTitle from '../SectionTitle.vue';
import TestimonialCard from '../TestimonialCard.vue';
import testimonialsData from '../../data/testimonials.js';

const pagItemClass = (index) => {
  return index === 0 ? 'pagination__item--selected' : 'pagination__item';
};
</script>

<template>
  <section id="testimonials" class="testimonials">
    <SectionTitle
      class="testimonials__title"
      heading="Testimonials"
      subheading="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
    />
    <div class="testimonials__carousel">
      <div class="carousel__cards">
        <TestimonialCard
          v-for="(card, index) of testimonialsData"
          :key="index"
          :testimonial="card.testimonial"
          :name="card.name"
          :role="card.role"
        />
      </div>
      <div class="carousel__pagination">
        <button disabled class="pagination__button-prev" @click="prev"></button>
        <ul class="pagination__list">
          <li
            v-for="(card, index) of testimonialsData"
            :key="index"
            :class="pagItemClass(index)"
          ></li>
        </ul>
        <button class="pagination__button-next" @click="next"></button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../../style.scss';
@mixin background-no-repeat {
  background-repeat: no-repeat;
  background-position: center left;
}

.testimonials__title {
  margin-top: 100px;
  max-width: 780px;
}

.testimonials__carousel {
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

.carousel__cards {
  width: auto;
  @include flex-row;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
}

.carousel__pagination {
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
    background: url('/assets/carousel/pag-item.png');
    background-size: 14px;
  }

  .pagination__item--selected {
    @extend .pagination__item;
    background: url('/assets/carousel/pag-item-selected.png');
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
    background: url('/assets/carousel/arrow-left.png');
    @include background-no-repeat;

    &:disabled {
      background: url('/assets/carousel/arrow-left-disabled.png');
      @include background-no-repeat;
      cursor: auto;

      &:hover {
        transform: none;
      }
    }
  }

  .pagination__button-next {
    @extend .pagination__button;
    background: url('/assets/carousel/arrow-right.png');
    @include background-no-repeat;

    &:disabled {
      background: url('/assets/carousel/arrow-right-disabled.png');
      @include background-no-repeat;
      cursor: auto;

      &:hover {
        transform: none;
      }
    }
  }
}
</style>
