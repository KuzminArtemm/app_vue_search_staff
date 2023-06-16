<template>
  <div class="cardlist-wrapper">
    <div>
      <card-item-vue
        :key="usercard.id"
        :usercard="usercard"
        v-for="usercard in filteredCards"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardItemVue from "./CardItemVue.vue";
export default {
  props: {
    usercard: {
      type: Object,
    },
  },
  components: { CardItemVue },
  name: "card-list-vue",
  computed: {
    ...mapState({
      cards: (state) => state.card.cards,
      isSearching: (state) => state.card.isSearching,
      searchQuery: (state) => state.card.searchQuery,
      filteredCards() {
        const searchRegExp = new RegExp(this.searchQuery, "i");
        return this.cards.filter((el) => searchRegExp.test(el.username));
      },
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.cardlist-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;
  width: 240px;
  height: 370px;
  margin-left: 20px;
}
</style>
