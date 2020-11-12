<template>
    <div id="app">
        <search-component/>
        <searched-value/>
        <marvel-heroes v-show="ukazVsetkych"/>
    </div>
</template>

<script>
	import MarvelHeroes from "@/components/MarvelHeroes";
	import SearchComponent from "@/components/SearchComponent";
    import SearchedValue from "@/components/SearchedValue";
	export default {
		name: 'App',
		components: {
			MarvelHeroes,
			SearchComponent,
            SearchedValue
		},
        data: () => ({
            ukazVsetkych: true
        })
	}
</script>

<style>
    #app {
        text-align: center;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
