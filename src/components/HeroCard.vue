<template>
    <div class="inside-wrapper">
        <div class="hero-card" v-on:click="isShown = !isShown">
            <img v-bind:src="hero.thumbnail.path + '.' + hero.thumbnail.extension" alt="picture">
            <h3>{{ hero.name }}</h3>
            <transition name="fade">
                <div v-show="isShown" class="sub-card">
                    <p>{{ hero.description }}</p>
                    <div class="button-wrapper">
                        <div class="fav-button" v-on:click="removeFromFavorites(hero)">Odstranit z oblubenych</div>
                        <div class="fav-button" v-on:click="addToFavorites(hero)">Pridat k oblubenym</div>
                    </div>
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
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
    .fav-button {
        margin: 5px 10px;
        background-color: red;
        color: white;
        padding: 5px 20px;
    }
    .inside-wrapper {
        width: 500px;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
        box-shadow: 5px 10px 10px rgba(30, 30, 30, 0.1);
        transition: transform 0.33s ease-in-out;
    }

    .inside-wrapper:hover {
        cursor: pointer;
        transform: translateY(-5px);
    }

    .hero-card {
        font-family: 'Cairo', sans-serif;
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

    .button-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .33s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>