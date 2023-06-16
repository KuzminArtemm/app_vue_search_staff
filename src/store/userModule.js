import axios from "axios";

export const userModule = {
  state: () => ({
    cards: [],
    isSearching: false,
    searchQuery: "",
    singleCardSelected: null,
    isActive: "",
  }),
  getters: {},
  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    },
    setSearching(state, bool) {
      state.isSearching = bool;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setIsActive(state, isActive) {
      state.isActive = isActive;
    },
    setSingleCardSelected(state, singleCardSelected) {
      state.singleCardSelected = singleCardSelected;
    },
  },
  actions: {
    async getUsers({ state, commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        );
        commit("setCards", response.data);
        console.log("response", response.data);
      } catch (e) {
        alert("Error");
      } finally {
      }
    },
  },
};
