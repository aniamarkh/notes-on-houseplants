<script setup>
import { ref, computed } from 'vue';
import teamMembersCards from '../../data/teamMembersCards';
import TeamMemberCard from './TeamMemberCard.vue';
import ButtonComponent from '../ButtonComponent.vue';

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
@import '../../_config.scss';
.button {
  width: 200px !important;
}
.team {
  @include flex-column;
}

.team__cards {
  width: 100%;
  @include flex-row;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 39px;
  margin-bottom: 40px;
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

@media (max-width: 900px) {
  .team {
    align-items: center;
    width: 100%;
  }

  .team__cards {
    @include flex-column;
    align-items: center;
    flex-wrap: nowrap;
    gap: 30px;
  }

  .team__cards--collapsed {
    height: 1340px;
  }

  .team__cards--expanded {
    height: auto;
    margin-bottom: 20px;
  }
}
</style>
