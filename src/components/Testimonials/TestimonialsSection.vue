<script setup>
import SectionTitle from '../SectionTitle.vue';
import SwitcherComponent from './SwitcherComponent.vue';
</script>

<template>
  <section id="testimonials" class="testimonials">
    <SectionTitle
      class="testimonials__title"
      heading="Testimonials"
      subheading="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
    />
    <SwitcherComponent />
  </section>
</template>

<style scoped lang="scss">
.testimonials__title {
  margin-top: 100px !important;
  max-width: 780px !important;
}

@media (max-width: 900px) {
  .testimonials {
    width: 100%;
    padding: 0 20px;
  }
  .testimonials__title {
    margin: 56px 0 40px !important;
  }
}
</style>
