import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	name: '',
  	id: ''
  },
  mutations: {
  	setNameId(state, name, id) {
  		state.name = name;
  		state.id = id;
  	},
  	clearNameId(state) {
  		state.name = '';
  		state.id = '';
  	}
  },
  actions: {}
});

export const store = new Vuex.Store({})