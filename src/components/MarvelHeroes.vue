<template>
    <div class="heroes">
        <div>
            <button v-on:click="toggle = !toggle">switch</button>
        </div>
        <div v-if="toggle">
            <hero-card
                    class="hero"
                    v-for="hero in getAllHeroes"
                    v-bind:key="hero.id"
                    v-bind:hero="hero"
            />
        </div>
        <div v-else>
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
	import {mapGetters, mapActions} from 'vuex';
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
		created() {
			this.fetchHeroes();
			console.log("created!");
		}
	}
</script>

<style scoped>
    .heroes {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .hero {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
    }
</style>