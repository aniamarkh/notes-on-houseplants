<script setup>
import SectionTitle from '../SectionTitle.vue';
import ProcessCard from '../ProcessCard.vue';
import processCardsData from '../../data/processCards';
</script>

<template>
  <section class="working-process">
    <SectionTitle
      heading="Our Working Process"
      subheading="Step-by-Step Guide to Achieving Your Business Goals"
    />
    <div class="working-process__cards">
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

<style scoped lang="scss">
@import '../../style.scss';

.section-title {
  max-width: 750px;
}

.working-process__cards {
  width: 100%;
  @include flex-column;
  gap: 30px;
}
</style>
