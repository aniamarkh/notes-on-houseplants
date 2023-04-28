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
  .section {
    align-items: center;
  }
  .services__title {
    margin: 30px 0 40px !important;
  }

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

@media (max-width: 1439px) {
  .section {
    width: 100%;
    padding: 0 20px;
  }
}
</style>
