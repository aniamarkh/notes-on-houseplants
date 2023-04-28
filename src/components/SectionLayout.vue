<script setup>
import SectionTitle from './SectionTitle.vue';
import ServicesCardsList from './Services/ServicesCardsList.vue';
import CaseStudiesCardsList from './CaseStudies/CaseStudiesCardsList.vue';
import ProcessCardsList from './OurWorkingProcess/ProcessCardsList.vue';
import TeamCardsList from './Team/TeamCardsList.vue';
import SwitcherComponent from './Testimonials/SwitcherComponent.vue';
import FormsWrapper from './ContactUs/FormsWrapper.vue';

defineProps({
  sectionName: {
    type: String,
    required: true,
  },
  sectionHeading: {
    type: String,
    required: true,
  },
  sectionSubheading: {
    type: String,
    required: true,
  },
  dynamicComponent: {
    type: String,
    required: true,
  },
});

const components = {
  ServicesCardsList,
  CaseStudiesCardsList,
  ProcessCardsList,
  TeamCardsList,
  SwitcherComponent,
  FormsWrapper,
};
</script>

<template>
  <section :id="sectionName" :class="sectionName + ' section'">
    <SectionTitle
      :class="sectionName + '__title'"
      :heading="sectionHeading"
      :subheading="sectionSubheading"
    />
    <component :is="components[dynamicComponent]"></component>
  </section>
</template>

<style lang="scss">
@import '../_config.scss';

.section {
  @include flex-column;
}

@media (max-width: 1439px) {
  .section {
    width: 100%;
    padding: 0 20px;
  }
}
</style>
