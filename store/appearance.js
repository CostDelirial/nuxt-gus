export const state = () => ({
  theme: { },
  style: { }
});

export const mutations = {
  setTheme(state, payload) {
    state.theme = payload;
  },
  setStyle(state, payload) {
    state.style = payload;
  }
}
