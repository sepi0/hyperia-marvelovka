import axios from 'axios';
import crypto from 'crypto-js';

const public_key = "9eb1ba062f0352a68dcb6a46e3224214";
const private_key = "02e8726a411ab2235d8eb9df8b0fb8c23a8f1f48";


const limit = 100;

const ts = new Date().getTime();
const hash = crypto.MD5(ts + private_key + public_key);


const state = {
	heroes: [],
	favoriteHeroes: [],
};

const getters = {
	getAllHeroes: 			state => state.heroes,
	getFavoriteHeroes: 		state => state.favoriteHeroes,
};

const actions = {
	async fetchHeroes({ commit }) {
		let heroes = [];
		for (let i = 0, offset = 0; i < 15; i++) {
			let base_url = `https://gateway.marvel.com:443/v1/public/characters`;
				base_url += `?ts=${ts}&apikey=${public_key}&hash=${hash}`;
				base_url += `&limit=${limit}&offset=${offset}`;
			await axios.get(base_url)
				.then(res => {
					heroes = heroes.concat(res.data.data.results)
					offset += 100;
					console.log(heroes)
				})
				.catch(e => console.error(e));
		}
		commit('setHeroes', heroes);
	},
	addToFavorites({ commit }, hero) {
		commit('setFavorite', hero)
		console.log(state.favoriteHeroes)
	},
	removeFromFavorites({ commit }, hero) {
		commit('removeFavorite', hero)
		console.log(state.favoriteHeroes)
	},
};

const mutations = {
	setHeroes: (state, heroes) 				=> state.heroes = heroes,
	setFavorite: (state, hero) 				=> state.favoriteHeroes.push(hero),
	removeFavorite: (state, heroToRemove) 	=> state.favoriteHeroes = state.favoriteHeroes.filter(hero => heroToRemove.id !== hero.id),
};

export default {
	state,
	getters,
	actions,
	mutations
}