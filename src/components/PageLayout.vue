<script setup>
import { ref } from 'vue';
import Header from './HeaderComponent.vue';
import HeroSection from './HeroSection.vue';
import ServicesSection from './Services/ServicesSection.vue';
import CaseStudiesSection from './CaseStudies/CaseStudiesSection.vue';
import OurWorkingProcessSection from './OurWorkingProcess/OurWorkingProcessSection.vue';
import TeamSection from './Team/TeamSection.vue';
import TestimonialsSection from './Testimonials/TestimonialsSection.vue';
import ContactSection from './ContactUs/ContactSection.vue';
import FooterSection from './FooterSection.vue';

const selectedOption = ref('sayHi');

const updateSelectedOption = (value) => {
  selectedOption.value = value;
};
</script>

<template>
  <Header :selected-option="selectedOption" @update:selected-option="updateSelectedOption" />
  <HeroSection :selected-option="selectedOption" @update:selected-option="updateSelectedOption" />
  <ServicesSection />
  <CaseStudiesSection />
  <OurWorkingProcessSection />
  <TeamSection />
  <TestimonialsSection />
  <ContactSection
    :selected-option="selectedOption"
    @update:selected-option="updateSelectedOption"
  />
  <FooterSection />
</template>
