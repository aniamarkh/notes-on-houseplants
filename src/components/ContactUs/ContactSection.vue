<script setup>
// import Button from '../ButtonComponent.vue';
import SectionTitle from '../SectionTitle.vue';
</script>

<template>
  <section class="contact">
    <SectionTitle
      class="contact__title"
      heading="Contact Us"
      subheading="Connect with Us: Let's Discuss Your Digital Marketing Needs"
    />
    <div class="contact__form-wrapper">
      <div class="form-wrapper__swither">
        <div class="switcher__radio">
          <input id="hi" type="radio" value="hi" />
          <label for="hi">Say Hi</label>
        </div>
        <div class="switcher__radio">
          <input id="quote" type="radio" value="quote" />
          <label for="quote">Get a Quote</label>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../../style.scss';

.section-title {
  max-width: 600px;
}
</style>
