<script setup>
import ProcessCard from './ProcessCard.vue';
import processCardsData from '../../data/processCards';
</script>

<template>
  <div class="process__cards">
    <ProcessCard
      v-for="(card, index) of processCardsData"
      :key="index"
      :opened="card.opened"
      :title="card.title"
      :desc="card.desc"
      :index="index"
    />
  </div>
</template>

<style lang="scss">
@import '../../_config.scss';

.process__cards {
  padding: 10px 0;
  width: 100%;
  @include flex-column;
  gap: 30px;
}

@media (max-width: 900px) {
  .process__cards {
    gap: 18px;
    padding: 10px 0;
  }
}

@media (max-width: 1439px) {
  .process__cards {
    gap: 18px;
    padding: 10px 0;
    align-items: center;
  }
}
</style>
