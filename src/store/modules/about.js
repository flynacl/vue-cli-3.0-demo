// initial state
const state = {
  description: 'This is an about page'
};

// getters
const getters = {};

// mutations
const mutations = {
  updateDescription(state, newDescription) {
    state.description = newDescription;
  }
};

// actions
const actions = {
  updateDescription({ state, commit }, newDescription) {
    commit('updateDescription', newDescription)
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}