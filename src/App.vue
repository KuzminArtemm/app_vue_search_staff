<template>
  <div class="app">
    <div class="header-wrapper">
      <img class="logo" src="./assets/svg/жилфонд.svg" alt="жилфонд" />
      <p class="app-user">Пользователь</p>
    </div>

    <div class="components-wrapper">
      <sidebar-vue></sidebar-vue>
      <user-card-vue></user-card-vue>
    </div>
  </div>
</template>

<script>
import SidebarVue from "./components/SidebarVue.vue";
import UserCardVue from "./components/UserCardVue.vue";
export default {
  components: {
    SidebarVue,
    UserCardVue,
  },
};
</script>
<style lang="scss" scoped>
@import "./assets/variables.scss";
.app {
  font-family: $main-font-family;
  width: 1366px;
  height: 748px;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
}
.logo {
  padding-left: 50px;
  padding-top: 46px;
}
.app-user {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: $main-font-color;
  padding-top: 50px;
  padding-right: 50px;
}
.components-wrapper {
  display: flex;
  margin: 30px 50px 58px 50px;
}
</style>
