<template>
    <div class="heroes">
        <div>
            <button v-show="toggle" class="switch-button" v-on:click="toggle = !toggle">Oblubene</button>
            <button v-show="!toggle" class="switch-button" v-on:click="toggle = !toggle">Vsetci</button>
        </div>
        <div v-show="toggle">
            <hero-card
                    class="hero"
                    v-for="hero in getAllHeroes"
                    v-bind:key="hero.id"
                    v-bind:hero="hero"
            />
        </div>
        <div v-show="!toggle">
            <hero-card
                    class="hero"
                    v-for="hero in getFavoriteHeroes"
                    v-bind:key="hero.id"
                    v-bind:hero="hero"
            />
        </div>
    </div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import HeroCard from "@/components/HeroCard";

	export default {
		name: "MarvelHero",
		components: {
			HeroCard,
		},
		data: () => ({
			toggle: true
		}),
		computed: mapGetters(['getAllHeroes', "getFavoriteHeroes"]),
		methods: {
			...mapActions(['fetchHeroes'])
		},
        // TODO: ulozit hrdinov do local storage.
		created() {
			console.log("Fetching Heroes from MARVEL.API! They will be displayed after fetching is done.");
			this.fetchHeroes();
		}

		// TODO: zobrazit vyhladavaneho hrdinu.
	}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
    .heroes {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hero {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
    }
    .switch-button {
        font-family: 'Cairo', sans-serif;
        height: 40px;
        margin: 0 auto;
        padding: 10px 15px;
        background-color: red;
        color: white;
        border: none;
        border-radius: 500px;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.33s ease-in-out;
        transition: color 0.33s ease-in-out;
    }
    .switch-button:focus {
        outline: none;
    }
    .switch-button:hover {
        color: black;
        border: 2px solid red;
        background-color: white;
    }
</style>