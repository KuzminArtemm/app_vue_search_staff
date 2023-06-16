<template>
  <div>
    <div
      :class="{
        active: $store.state.card.isActive == usercard.id,
        notactive: $store.state.card.isActive !== usercard.id,
      }"
      @click="this.$store.commit('setIsActive', usercard.id)"
      class="card-wrapper"
    >
      <img class="card-img" src="../assets/svg/rectangle_4.svg" alt="" />
      <!-- <router-link style="text-decoration: none; color: inherit;" to="/users"> -->
      <div
        v-bind:on-click="$store.state.card.singleCardSelected"
        @click="this.$store.commit('setSingleCardSelected', usercard)"
        class="card-info"
      >
        <span class="card-username">{{ usercard.username }}</span>
        <br />
        <br />
        <span class="card-email">{{ usercard.email }}</span>
      </div>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      showComponent: false,
    };
  },
  name: "card-item-vue",
  props: {
    usercard: {
      type: Object,
    },
  },
  computed: {
    ...mapState({
      /* singleCardSelected: (state) => state.card.singleCardSelected, */
    }),
  },
  methods: {
    ...mapMutations(["setSingleCardSelected"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.card-wrapper {
  display: flex;
  width: 240px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 18px;
}
.card-img {
  background: url(../assets/svg/rectangle_4.svg);
  width: 70px;
  height: 70px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px 0px 0px 10px;
  border-right: 1px solid #e0e0e0;
}
.card-username {
  margin: 3px;
  font-weight: 600;
  font-size: 14px;
  color: $main-font-color;
}
.card-email {
  @include second-text;
  margin: 3px;
  font-size: 12px;
}
.card-info {
  height: 70px;
  width: 170px;
  padding: 1px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
.active {
  background: #e0e0e0;
}
.notactive {
  background: #ffffff;
}
</style>
