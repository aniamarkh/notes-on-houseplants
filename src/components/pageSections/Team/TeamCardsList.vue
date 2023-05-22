<script setup>
import { ref, computed } from 'vue';
import teamMembersCards from '/src/data/teamMembersCards';
import TeamMemberCard from './TeamMemberCard.vue';
import ButtonComponent from '../../ButtonComponent.vue';

const isCollapsed = ref(true);
const cardsListClass = computed(() => {
  return isCollapsed.value ? 'team__cards--collapsed' : 'team__cards--expanded';
});

const buttonMessage = ref('See all team');
const toggleCards = () => {
  isCollapsed.value
    ? (buttonMessage.value = 'See less team')
    : (buttonMessage.value = 'See all team');
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <div :class="cardsListClass">
    <TeamMemberCard
      v-for="(card, index) of teamMembersCards"
      :key="index"
      :name="card.name"
      :role="card.role"
      :desc="card.desc"
      :img="card.photo"
    />
  </div>
  <ButtonComponent class="team__button" color="black" @click="toggleCards">{{
    buttonMessage
  }}</ButtonComponent>
</template>

<style lang="scss">
@import '../../../_config.scss';

.team__cards {
  width: 100%;
  @include flex-row;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 39px;
  margin-bottom: 35px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.team__cards--collapsed {
  @extend .team__cards;
  height: 725px;
}

.team__cards--expanded {
  @extend .team__cards;
  height: 1100px;
}

.team__button {
  margin-left: auto;
  .button--black {
    padding: 20px 75px !important;
  }
}

@media (max-width: 900px) {
  .team__cards {
    @include flex-column;
    align-items: center;
    flex-wrap: nowrap;
    gap: 30px;
    padding: 10px 0;
    margin-bottom: 30px;
  }

  .team__cards--collapsed {
    height: 1355px;
  }

  .team__cards--expanded {
    height: auto;
    margin-bottom: 20px;
  }

  .team__button {
    margin-left: 0;
    margin: 0 auto;
    max-width: 390px;
    width: 100% !important;
  }
}

@media (min-width: 901px) and (max-width: 1439px) {
  .team__cards {
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    margin-bottom: 30px;
  }

  .team__button {
    margin-left: 0;
    margin: 0 auto;
    .button--black {
      padding: 20px 135px !important;
    }
  }
}
</style>
