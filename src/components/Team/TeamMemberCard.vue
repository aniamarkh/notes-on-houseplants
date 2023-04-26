<script setup>
import { ref } from 'vue';
defineProps({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const linkRef = ref(null);

const openLink = () => {
  const link = linkRef.value.href;
  window.open(link, '_blank');
};
</script>

<template>
  <div class="team-card">
    <div class="card__icon" @click="openLink">
      <a ref="linkRef" href="https://www.linkedin.com/" target="_blank"></a>
    </div>
    <div class="card__top">
      <img class="card__img" :alt="name + ' photo'" :src="img" />
      <div class="card__member-info">
        <h4 class="member-info__name">{{ name }}</h4>
        <p class="member-info__role">{{ role }}</p>
      </div>
    </div>
    <div class="card__separator"></div>
    <p class="card__desc">{{ desc }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '../../style.scss';
.team-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 38px 34px 0 34px;
  width: 387px;
  min-height: 331px;
  background: $bg-color;
  border: 1px solid $dark;
  box-shadow: 0px 5px 0px $dark;
  border-radius: 45px;
}

.card__top {
  @include flex-row;
  align-items: flex-end;
  gap: 20px;
}

.card__member-info {
  @include flex-column;
  font-size: 20px;

  .member-info__role {
    font-size: 18px;
  }
}

.card__separator {
  width: 317px;
  height: 1px;
  background-color: $dark;
  margin: 27px 0;
}

.card__desc {
  font-size: 18px;
}
.card__icon {
  background: url('/assets/team/in-icon.png');
  width: 34px;
  height: 34px;
  background-size: 34px;
  position: absolute;
  top: 39px;
  right: 35px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
