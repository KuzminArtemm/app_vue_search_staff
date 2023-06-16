<template>
  <div v-if="!singleCardSelected" class="user-wrapper">
    <div>Выберите сотрудника, чтобы посмотреть его профиль</div>
  </div>
  <div v-else class="user-active">
    <img class="user-img" src="../assets/svg/rectangle_4.svg" alt="" />
    <div class="user-content">
      <p class="user-name">{{ singleCardSelected.name }}</p>
      <p class="user-email">
        <strong class="user-email_strong">email: </strong
        >{{ singleCardSelected.email }}
      </p>
      <p class="user-phone">
        <strong class="user-phone_strong">phone: </strong
        >{{ singleCardSelected.phone }}
      </p>
      <p class="user-about">
        <strong class="user-about_strong">О себе:</strong>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui
        voluptatibus earum. Quisquam, dolorem ducimus. Deserunt, beatae iusto.
        Quaerat error deleniti distinctio enim. Ducimus necessitatibus
        consequuntur similique aliquid distinctio velit consequatur animi optio
        doloribus quae?
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "user-card-vue",
  computed: {
    ...mapState({
      singleCardSelected: (state) => state.card.singleCardSelected,
    }),
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/variables.scss";
.user-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 975px;
  height: 575px;
  background: #ffffff;
  border-left: 1px solid #dededd;
  border-radius: 0px 10px 10px 0px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  @include second-text;
}
.user-active {
  display: flex;
}
.user-img {
  width: 424px;
  height: 286px;
  margin-left: 21px;
  margin-top: 30px;

  background: url("../assets/svg/rectangle_4.svg"), #ffffff;
  border: 1px solid #e0e0e0;
}
.user-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 439px;
  height: 286px;
  margin: 30px 30px 30px 61px;
}
.user-name {
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: $second-font-color;
  margin-bottom: 10px;
}
.user-email,
.user-phone,
.user-about {
  @include second-text;
}
.user-email_strong,
.user-phone_strong,
.user-about_strong {
  color: $main-font-color;
}
</style>