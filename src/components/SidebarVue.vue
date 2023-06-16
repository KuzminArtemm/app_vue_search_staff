<template>
  <div class="sidebar-wrapper">
    <p class="sidebar-title">Поиск сотрудников</p>

    <input
      @focus="showDiv = true"
      v-model="$store.state.card.searchQuery"
      @input="this.$store.commit('setSearchQuery', $event.target.value)"
      class="sidebar-input"
      type="search"
      placeholder="Введите id или имя"
    />
    <p class="sidebar-result">Результаты</p>
    <p v-if="!showDiv" class="sidebar-start">начните поиск</p>
    <div class="sidebar-searching" v-else>
      <card-list-vue />
    </div>
  </div>
</template>
<script>
import CardListVue from "./CardListVue.vue";

import { mapActions, mapMutations, mapState } from "vuex";

export default {
  components: { CardListVue },
  name: "sidebar-vue",
  data() {
    return {
      isCardsLoading: false,
      showDiv: false,
    };
  },
  computed: {
    ...mapState({
      /* searchQuery: (state) => state.card.searchQuery, */
      ...mapState({
        cards: (state) => state.card.cards,
        isSearching: (state) => state.card.isSearching,
      }),
    }),
  },

  methods: {
    ...mapMutations(["setSearchQuery"]),
    ...mapActions({
      getUsers: "getUsers",
    }),
  },
  mounted() {
    this.getUsers();
  },

  watch: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/variables.scss";

.sidebar-wrapper {
  width: 290px;
  height: 575px;
  border-left: 1px solid #dededd;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px 0px 0px 10px;
  background: #fdfdfd;
}

.sidebar-title {
  margin-top: 27px;
  margin-left: 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: $main-font-color;
}

.sidebar-input {
  box-sizing: border-box;
  margin-left: 20px;
  margin-top: 22px;
  width: 240px;
  height: 46px;
  background: #ffffff;
  border: 1.5px solid #e9ecef;
  border-radius: 8px;
  padding-left: 16px;
}

.sidebar-result {
  margin-left: 20px;
  margin-top: 22px;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: $main-font-color;
}
.sidebar-start {
  @include second-text;
  margin-left: 20px;
}
.sidebar-processing {
  @include second-text;
  margin-left: 20px;
}
</style>
