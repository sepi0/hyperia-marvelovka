<template>
    <div>
        <form v-on:submit="onSubmit">
            <input type="text" v-model="searchValue" placeholder="Hladaj hrdinu...">
            <input type="submit"/>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
	export default {
		name: "SearchComponent",
        data: () => ({
            searchValue: "",
        }),
        methods: {
			...mapActions(['addToPreviousSearches']),
			onSubmit(e) {
				e.preventDefault();
				this.addToPreviousSearches(this.searchValue)
            }
        }
	}
</script>

<style scoped>
    div {
        margin-bottom: 50px;
    }
</style>