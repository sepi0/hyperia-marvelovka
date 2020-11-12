const state = {
	searchedValues: [],
}

const getters = {
	getPreviousSearches: state => state.searchedValues,
}

const actions = {
	addToPreviousSearches({commit}, value) {
		commit('setPreviousSearches', value)
	}
}

const mutations = {
	setPreviousSearches: (state, searched) => state.searchedValues.push(searched)
}

export default {
	state,
	getters,
	actions,
	mutations
}