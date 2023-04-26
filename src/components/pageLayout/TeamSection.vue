<script setup>
import { ref, computed } from 'vue';
import SectionTitle from '../SectionTitle.vue';
import TeamMemberCard from '../TeamMemberCard.vue';
import teamMembersCards from '../../data/teamMembersCards';
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
  <section id="team" class="team">
    <SectionTitle
      heading="Team"
      subheading="Meet the skilled and experienced team behind our successful digital marketing strategies"
    />
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
    <ButtonComponent color="black" @click="toggleCards">{{ buttonMessage }}</ButtonComponent>
  </section>
</template>

<style scoped lang="scss">
@import '../../style.scss';

.team-section {
  position: relative;
}
.section-title {
  max-width: 650px;
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

.button--black {
  padding: 20px 76px;
  float: right;
}
</style>
