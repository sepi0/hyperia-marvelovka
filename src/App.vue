<template>
    <div id="app">
        <search-component/>
        <marvel-heroes/>
    </div>
</template>

<script>
	import MarvelHeroes from "@/components/MarvelHeroes";
	import SearchComponent from "@/components/SearchComponent";

	export default {
		name: 'App',
		components: {
			MarvelHeroes,
			SearchComponent,
		},
        data: () => ({
           searchValue: "",
        }),
	}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .favorites {
        margin: 0 auto;
    }
</style>
