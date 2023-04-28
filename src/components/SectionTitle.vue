<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="section-title">
    <h2 class="section-title__heading">{{ heading }}</h2>
    <p class="section-title__subheading">{{ subheading }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '../_config.scss';

.section-title {
  @include flex-row;
  gap: 40px;
  margin: 140px 0 80px;
  height: 51px;
  max-width: 800px;

  &__heading {
    font-weight: 500;
    font-size: 40px;
    line-height: 51px;
    padding: 0px 7px;
    background-color: #b9ff66;
    border-radius: 7px;
    white-space: nowrap;
  }

  &__subheading {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }
}

@media (max-width: 900px) {
  .section-title {
    display: block;
    margin: 60px auto 40px;
    height: auto;
    padding: 0 20px;
    &__heading {
      font-size: 36px;
      line-height: 46px;
      background-color: #b9ff66;
      border-radius: 7px;
      margin: 0 auto;
      width: max-content;
    }

    &__subheading {
      text-align: center;
      font-size: 16px;
      line-height: 24px;
      margin-top: 30px;
    }
  }
}
</style>
