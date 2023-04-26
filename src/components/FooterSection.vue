<script setup>
import Button from './ButtonComponent.vue';
import pageNavItems from '../data/pageNavItems.js';

const scrollUp = () => {
  window.scrollTo(0, 0);
};
</script>

<template>
  <footer class="footer">
    <div class="footer__links">
      <img class="links__logo" src="../assets/logo-white.png" @click="scrollUp" />
      <ul class="links__sections">
        <li v-for="(item, index) of pageNavItems" :key="index" class="sections__item">
          <a :href="item.href">{{ item.title }}</a>
        </li>
      </ul>
      <ul class="links__social">
        <li class="social__item--linkedin"></li>
        <li class="social__item--facebook"></li>
        <li class="social__item--twitter"></li>
      </ul>
    </div>
    <div class="footer__contacts">
      <div class="contacts__info">
        <h4 class="info__title">Contact us:</h4>
        <p class="info__paragraph">Email: info@positivus.com</p>
        <p class="info__paragraph">Phone: 555-567-8901</p>
        <p class="info__paragraph">Address: 1234 Main St Moonstone City, Stardust State 12345</p>
      </div>
      <div class="contacts__sub">
        <input class="sub__input" type="email" placeholder="Email" />
        <Button color="green">Subscribe to news</Button>
      </div>
    </div>
    <div class="footer__separator"></div>
    <div class="footer__rights">
      <a class="rights__item" target="_blank" href="https://github.com/aniamarkh/positivus-landing">
        <img class="item__icon" src="../assets/github-mark-white.png" alt="github icon" />
        Anna Marchenko @aniamarkh, 2023
      </a>
      <a
        class="rights__item"
        target="_blank"
        href="https://www.figma.com/community/file/1230604708032389430"
      >
        Layout link
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '../style.scss';

.footer {
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 55px 60px 50px;
  width: 1241px;
  height: 514px;
  color: $bg-color;
  background: $dark;
  border-radius: 45px 45px 0px 0px;
}

.footer__links {
  @include flex-row;
  justify-content: space-between;
  width: 100%;
}

.links__logo {
  width: 180px;
  cursor: pointer;
}

.links__sections,
.links__social {
  list-style-type: none;
  @include flex-row;
  gap: 20px;
}

.sections__item {
  line-height: 23px;
  text-decoration: underline;
  @include transition-ease;

  &:hover {
    color: $accent-color;
  }
}

.social__item {
  width: 30px;
  height: 30px;
  cursor: pointer;
  @include transition-ease;
  &:hover {
    transform: scale(1.1);
  }
}

.social__item--linkedin {
  @extend .social__item;
  background: url('../assets/in-icon.png');
}

.social__item--facebook {
  @extend .social__item;
  background: url('../assets/faceb-icon.png');
}

.social__item--twitter {
  @extend .social__item;
  background: url('../assets/tw-icon.png');
}

.footer__contacts {
  @include flex-row;
  align-items: start;
  margin-top: 66px;
  gap: 184px;
}

.contacts__info {
  width: 300px;

  .info__title {
    background: $accent-color;
    color: $text-color;
    border-radius: 7px;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    width: 126px;
    padding: 0 7px;
    margin-bottom: 27px;
  }

  .info__paragraph {
    font-size: 18px;
    margin-top: 20px;
  }
}

.contacts__sub {
  @include flex-row;
  gap: 20px;
  width: 634px;
  height: 184px;
  background: #292a32;
  border-radius: 14px;
  padding: 58px 40px;

  .sub__input {
    padding: 22px 35px;
    color: $bg-color;
    gap: 10px;
    font-size: 18px;
    width: 285px;
    height: 67px;
    background: #292a32;
    border: 1px solid #ffffff;
    border-radius: 14px;
  }
}

.footer__separator {
  width: 100%;
  height: 1px;
  background-color: $bg-color;
  margin: 50px 0;
}

.footer__rights {
  @include flex-row;
  width: 100%;
  justify-content: space-between;
}

.rights__item {
  @include transition-ease;
  height: 20px;
  &:hover {
    color: $accent-color;
  }
}

.item__icon {
  width: 18px;
}
</style>
