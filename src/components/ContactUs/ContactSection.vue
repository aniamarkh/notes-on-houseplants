<script setup>
// import Button from '../ButtonComponent.vue';
import Form from './DynamicForm.vue';
import SectionTitle from '../SectionTitle.vue';
defineProps({
  selectedOption: {
    type: String,
    default: 'sayHi',
  },
});

const emit = defineEmits(['update:selected-option']);

const handleChange = (event) => {
  emit('update:selected-option', event.target.value);
};
</script>

<template>
  <section id="contact-us" class="contact-us">
    <SectionTitle
      class="contact-us__title"
      heading="Contact Us"
      subheading="Connect with Us: Let's Discuss Your Digital Marketing Needs"
    />
    <div class="contact-us__wrapper">
      <div class="contact-us__switcher">
        <div class="switcher">
          <input
            id="sayHi"
            type="radio"
            class="switcher__input"
            name="switcher"
            value="sayHi"
            :checked="selectedOption === 'sayHi'"
            @change="handleChange"
          />
          <label class="switcher__label" for="sayHi">Say Hi</label>
        </div>
        <div class="switcher">
          <input
            id="getAQuote"
            type="radio"
            class="switcher__input"
            name="switcher"
            value="getAQuote"
            :checked="selectedOption === 'getAQuote'"
            @change="handleChange"
          />
          <label class="switcher__label" for="getAQuote">Get a Quote</label>
        </div>
      </div>
      <div class="form-wrapper__form">
        <Form :form-type="selectedOption" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../../style.scss';

.section-title {
  max-width: 600px;
}

.contact-us {
  &__wrapper {
    @include flex-column;
    gap: 45px;
    padding: 58px 99px 80px;
    width: 1240px;
    height: 773px;
    background-color: $grey;
    border-radius: 45px;
    background-image: url('/assets/form-illustration.png');
    background-size: 370px;
    background-repeat: no-repeat;
    background-position: center right;
  }

  &__switcher {
    @include flex-row;
    gap: 35px;
    align-items: center;
  }
}

.switcher {
  &__label {
    font-size: 18px;
  }

  &__input {
    &:checked,
    &:not(:checked) {
      position: absolute;
      opacity: 0;
    }

    &:checked + .switcher__label,
    &:not(:checked) + .switcher__label {
      position: relative;
      padding-left: 43px;
      cursor: pointer;
      line-height: 28px;
      display: inline-block;
      color: $text-color;
    }

    &:checked + .switcher__label:before,
    &:not(:checked) + .switcher__label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 28px;
      height: 28px;
      border: 1px solid $text-color;
      border-radius: 100%;
      background: $bg-color;
    }

    &:checked + .switcher__label:after,
    &:not(:checked) + .switcher__label:after {
      content: '';
      width: 16px;
      height: 16px;
      background: $accent-color;
      position: absolute;
      top: 7px;
      left: 7px;
      border-radius: 100%;
      @include transition-ease;
    }
    &:not(:checked) + .switcher__label:after {
      opacity: 0;
      transform: scale(0);
    }
    &:checked + .switcher__label:after {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
