<script setup>
import { ref } from 'vue';
import Header from './HeaderComponent.vue';
import Hero from './HeroComponent.vue';
import SectionLayout from './SectionLayout.vue';
import pageSectionsData from '../data/pageSections';
import FormsWrapper from './ContactUs/FormsWrapper.vue';
import FooterSection from './FooterSection.vue';
const selectedOption = ref('sayHi');

const updateSelectedOption = (value) => {
  selectedOption.value = value;
};
</script>

<template>
  <Header :selected-option="selectedOption" @update:selected-option="updateSelectedOption" />
  <Hero :selected-option="selectedOption" @update:selected-option="updateSelectedOption" />
  <!-- <SectionLayout
    v-for="(section, index) of pageSectionsData"
    :key="index"
    :section-name="section.name"
    :section-heading="section.heading"
    :section-subheading="section.subheading"
    :dynamic-component="section.component"
  >
  </SectionLayout>
  <FormsWrapper :selected-option="selectedOption" @update:selected-option="updateSelectedOption" />
  <FooterSection /> -->
</template>

<style lang="scss">
@import '../_config.scss';

.services__title {
  max-width: 800px !important;
}

.case-studies__title {
  max-width: 850px !important;
}

.process__title {
  max-width: 750px !important;
}

.team__title {
  max-width: 650px !important;
}

.testimonials__title {
  margin-top: 100px !important;
  max-width: 780px !important;
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

  .team__title {
    margin: 60px auto 32px;
  }

  .testimonials__title {
    margin: 56px 0 40px !important;
  }
}
</style>
