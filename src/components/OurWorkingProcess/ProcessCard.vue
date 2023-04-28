<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
  opened: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const isOpen = ref(props.opened);
const cardClass = computed(() => {
  return isOpen.value ? 'process-card--open' : 'process-card--close';
});

const cardNumber = computed(() => {
  return '0' + (props.index + 1);
});

const toggleCard = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div :class="cardClass">
    <div class="card__top">
      <h3 class="card__title">
        <h1 class="card__number">{{ cardNumber }}</h1>
        {{ title }}
      </h3>
      <div class="card__button" @click="toggleCard"></div>
    </div>
    <div class="card__bottom">
      <div class="card__separator"></div>
      <p class="card__desc">{{ desc }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../_config.scss';

.process_card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  padding: 41px 55px 41px 60px;
  width: 1234px;
  height: 279px;
  background: $accent-color;
  border: 1px solid $dark;
  box-shadow: 0px 5px 0px $dark;
  border-radius: 45px;
  transition: all 0.2s ease-in-out;
}

.card__button {
  background: url('/assets/minus-icon.png');
  background-size: 58px;
  width: 58px;
  height: 59px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}

.process-card--open {
  @extend .process_card;
}

.process-card--close {
  @extend .process_card;
  background: $grey;
  height: 159px;
  &:hover {
    transform: scale(1.01);
  }

  .card__bottom {
    visibility: hidden;
  }

  .card__top .card__button {
    background: url('/assets/plus-icon.png');
    background-size: 58px;
    width: 58px;
    height: 59px;
  }
}

.card__top {
  @include flex-row;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .card__title {
    @include flex-row;
    align-items: center;
    gap: 27px;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
  }

  .card__number {
    font-weight: 500;
    font-size: 60px;
    line-height: 77px;
  }
}

.card__bottom {
  @include flex-column;
  width: 100%;

  .card__separator {
    width: 1114px;
    height: 1px;
    background-color: $text-color;
    margin: 28px 0;
  }

  .card__desc {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }
}

@media (max-width: 900px) {
  .process-card--open {
    width: 100%;
    padding: 30px;
    height: auto;

    .card__desc {
      margin-top: 20px;
    }

    .card__title {
      width: 300px;
    }

    .card__button {
      background-size: 30px;
      width: 30px;
      height: 30px;
    }
  }

  .process-card--close {
    width: 100%;
    padding: 30px;
    height: 102px;

    .card__desc {
      margin-top: 20px;
    }

    .card__title {
      width: 300px;
    }

    .card__top .card__button {
      background-size: 30px;
      width: 30px;
      height: 30px;
    }
  }

  .card__top {
    height: 50px;
    .card__title {
      gap: 33px;
      font-size: 18px;
      line-height: 23px;
    }

    .card__number {
      font-size: 30px;
      line-height: 38px;
    }
  }

  .card__separator {
    display: none;
  }
}
</style>
