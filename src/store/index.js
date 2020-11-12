import Vuex from 'vuex';
import Vue from 'vue';
import marvelheroes from './modules/marvelheroes';
import searchedValues from "@/store/modules/searchedValues";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		marvelheroes,
		searchedValues
	}
})