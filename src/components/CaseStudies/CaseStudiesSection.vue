<script setup>
import SectionTitle from '../SectionTitle.vue';
import CaseStudiesCard from './CaseStudiesCard.vue';
</script>

<template>
  <section id="case-studies" class="case-studies">
    <SectionTitle
      class="case-studies__title"
      heading="Case Studies"
      subheading="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
    />
    <div class="case-studies__cards">
      <CaseStudiesCard>
        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50%
        increase in website traffic and a 25% increase in sales.
      </CaseStudiesCard>
      <div class="cards__separator"></div>
      <CaseStudiesCard>
        For a B2B software company, we developed an SEO strategy that resulted in a first page
        ranking for key keywords and a 200% increase in organic traffic.
      </CaseStudiesCard>
      <div class="cards__separator"></div>
      <CaseStudiesCard>
        For a national retail chain, we created a social media marketing campaign that increased
        followers by 25% and generated a 20% increase in online sales.
      </CaseStudiesCard>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../../style.scss';

.case-studies__cards {
  @include flex-row;
  align-items: flex-start;
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

.case-studies__title {
  max-width: 850px !important;
}

@media (max-width: 900px) {
  .case-studies__cards {
    align-items: center;
    background: none;
    width: auto;
    overflow: scroll;
    padding: 0 20px;
    gap: 20px;
    height: auto;
    border-radius: 0;
  }

  .cards__separator {
    display: none;
  }
}
</style>
