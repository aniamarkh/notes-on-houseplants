<script setup>
import SectionTitle from '../SectionTitle.vue';
import ProcessCard from './ProcessCard.vue';
import processCardsData from '../../data/processCards';
</script>

<template>
  <section id="process" class="process">
    <SectionTitle
      class="process__title"
      heading="Our Working Process"
      subheading="Step-by-Step Guide to Achieving Your Business Goals"
    />
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
  </section>
</template>

<style lang="scss">
@import '../../style.scss';

.section-title {
  max-width: 750px !important;
}

.process__cards {
  width: 100%;
  @include flex-column;
  gap: 30px;
}

@media (max-width: 900px) {
  .process__title {
    margin: 60px 0 40px !important;

    .section-title__heading {
      width: 230px !important;
      text-align: center;
      white-space: normal;
    }
  }

  .process__cards {
    padding: 0 20px;
    gap: 20px;
  }
}
</style>
