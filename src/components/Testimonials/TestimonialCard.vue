<script setup>
defineProps({
  testimonial: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="testimonial-card">
    <p class="card__paragraph">{{ testimonial }}</p>
    <p class="card__name">{{ name }}</p>
    <p class="card__role">{{ role }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '../../style.scss';
.testimonial-card {
  width: 606px;
  height: 335px;
  @include flex-column;
  background: $dark;
  color: $bg-color;
  line-height: 23px;
  margin: 0 25px 0 10px;
}

.card__paragraph {
  font-size: 18px;
  height: 266px;
  padding: 48px 52px 80px 52px;
  background: url('/assets/bubble.png');
}

.card__name {
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: $accent-color;
  margin: 20px 0 0 80px;
}

.card__role {
  font-size: 18px;
  line-height: 23px;
  margin: 0 0 0 80px;
}

@media (max-width: 900px) {
  .testimonial-card {
    width: 330px;
    height: 335px;
    margin: 0;
  }

  .card__paragraph {
    min-height: 330px;
    background: url('src/assets/bubble-mobile.png');
    background-repeat: no-repeat;
    font-size: 16px;
    line-height: 24px;
    padding: 30px 30px 57px 30px;
  }

  .card__name {
    font-size: 18px;
    line-height: 23px;
    margin: 17px 0 0 65px;
  }

  .card__role {
    font-size: 16px;
    line-height: 23px;
    margin: 0 0 0 65px;
  }
}
</style>
