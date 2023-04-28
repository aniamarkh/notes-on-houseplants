<script setup>
import CaseStudiesCard from './CaseStudiesCard.vue';
</script>

<template>
  <div class="case-studies__cards">
    <CaseStudiesCard>
      For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase
      in website traffic and a 25% increase in sales.
    </CaseStudiesCard>
    <div class="cards__separator"></div>
    <CaseStudiesCard>
      For a B2B software company, we developed an SEO strategy that resulted in a first page ranking
      for key keywords and a 200% increase in organic traffic.
    </CaseStudiesCard>
    <div class="cards__separator"></div>
    <CaseStudiesCard>
      For a national retail chain, we created a social media marketing campaign that increased
      followers by 25% and generated a 20% increase in online sales.
    </CaseStudiesCard>
  </div>
</template>

<style scoped lang="scss">
@import '../../_config.scss';

.case-studies__cards {
  @include flex-row;
  gap: 64px;
  padding: 70px 60px;
  width: 1234px;
  height: 326px;
  background: $dark;
  border-radius: 45px;
}

.cards__separator {
  width: 1px;
  height: 186px;
  background: $bg-color;
}

@media (max-width: 1300px) {
  .case-studies__cards {
    align-items: flex-start;
    background: none;
    width: auto;
    overflow: scroll;
    padding: 0;
    gap: 20px;
    height: auto;
    border-radius: 0;
  }

  .cards__separator {
    display: none;
  }
}
</style>
