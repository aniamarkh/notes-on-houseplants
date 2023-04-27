<script setup>
import { ref, computed } from 'vue';
import Button from '../ButtonComponent.vue';

const props = defineProps({
  formType: {
    type: String,
    default: 'getAQuote',
  },
});

const formRef = ref(null);
const handleSubmit = () => {
  formRef.value.reset();
};

const nameLabel = computed(() => (props.formType === 'getAQuote' ? 'Company Name' : 'Name'));
const messageLabel = computed(() =>
  props.formType === 'getAQuote' ? 'Tell about your project*' : 'Message*'
);
const buttonText = computed(() =>
  props.formType === 'getAQuote' ? 'Request a quote' : 'Send Message'
);
</script>

<template>
  <form ref="formRef" class="form" @submit.prevent="handleSubmit">
    <label class="form__label" for="name">{{ nameLabel }}</label>
    <input id="name" class="form__input--name" :placeholder="nameLabel" type="text" />
    <label class="form__label" for="email">Email*</label>
    <input id="email" class="form__input--email" placeholder="Email" type="email" />
    <label class="form__label" for="message">{{ messageLabel }}</label>
    <textarea
      id="message"
      class="form__input--message"
      :placeholder="messageLabel"
      type="text"
    ></textarea>
    <Button color="black" type="submit">
      <p class="button__text">{{ buttonText }}</p>
    </Button>
  </form>
</template>

<style scoped lang="scss">
@import '../../style.scss';
.button__text {
  text-align: center;
}

.form {
  @include flex-column;
  width: 556px;

  &__label {
    margin-bottom: 9px;
  }
}

.form__input {
  padding: 18px 30px;
  gap: 10px;
  width: 556px;
  height: 59px;
  background: $bg-color;
  border: 1px solid $text-color;
  border-radius: 14px;
  font-size: 18px;
  margin-bottom: 27px;
  &--name,
  &--email,
  &--message {
    @extend .form__input;
  }

  &--message {
    height: 190px;
    margin-bottom: 40px;
  }
}
</style>
