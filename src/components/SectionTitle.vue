<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="section-title">
    <h2 class="section-title__heading">{{ heading }}</h2>
    <p class="section-title__subheading">{{ subheading }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '../style.scss';

.section-title {
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 140px 0 80px;
  height: 51px;
  max-width: 800px;
}

.section-title__heading {
  font-weight: 500;
  font-size: 40px;
  line-height: 51px;
  padding: 0px 7px;
  background-color: #b9ff66;
  border-radius: 7px;
  white-space: nowrap;
}

.section-title__subheading {
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
}
</style>
