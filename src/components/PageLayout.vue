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
  <SectionLayout
    v-for="(section, index) of pageSectionsData"
    :key="index"
    :section-name="section.name"
    :section-heading="section.heading"
    :section-subheading="section.subheading"
    :dynamic-component="section.component"
  >
  </SectionLayout>
  <FormsWrapper :selected-option="selectedOption" @update:selected-option="updateSelectedOption" />
  <FooterSection />
</template>
