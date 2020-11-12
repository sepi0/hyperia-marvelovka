<template>
    <div class="wrapper">
        <div class="hero-card" v-on:click="isShown = !isShown">
            <img v-bind:src="hero.thumbnail.path + '.' + hero.thumbnail.extension" alt="picture">
            <h3>{{ hero.name }}</h3>
            <transition name="fade">
                <div v-show="isShown" class="sub-card">
                    <p>{{ hero.description }}</p>
                    <button v-on:click="removeFromFavorites(hero)">Remove from Favorites</button>
                    <button v-on:click="addToFavorites(hero)">Add to Favorites</button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'

	export default {
		name: "HeroCard",
		props: {
			hero: Object,
		},
		data: () => ({
			isShown:    false,
			isFavorite: false,
		}),
		computed: mapState(['favoriteHeroes']),
		methods: {
			...mapActions(['addToFavorites', 'removeFromFavorites']),
		},
	}
</script>

<style scoped>
    .wrapper {
        width: 500px;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
        box-shadow: 5px 10px 10px rgba(30, 30, 30, 0.1);
        transition: transform 0.33s ease-in-out;
    }

    .wrapper:hover {
        cursor: pointer;
        transform: translateY(-5px);
    }

    .hero-card {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 10px;
        align-self: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .33s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>