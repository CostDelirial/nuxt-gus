export const state = () => ({
  items: []
});

export const mutations = {
  setItems(state, payload) {
    state.items = payload;
  }
}
