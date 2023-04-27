<script setup>
import LinkComponent from '../LinkComponent.vue';
</script>

<template>
  <div class="case-card">
    <p class="case-card__text"><slot></slot></p>
    <LinkComponent icon="/assets/services-cards/link-icon-black.svg" />
  </div>
</template>

<style scoped lang="scss">
@import '../../style.scss';
.case-card {
  width: 300px;
  @include flex-column;

  &__text {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;

    color: $bg-color;
  }
}

.link {
  margin-top: 14px;
  flex-direction: row-reverse;
  color: $accent-color;
  gap: 6px;
  width: 155px;
}

@media (max-width: 900px) {
  .case-card {
    width: 350px;
    height: 250px;
    background: $dark;
    color: $bg-color;
    border-radius: 45px;
    padding: 45px 50px;
    @include flex-column;

    &__text {
      width: 250px;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
