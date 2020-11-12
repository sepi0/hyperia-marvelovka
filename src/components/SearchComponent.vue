<template>
    <div>
        <form v-on:submit="onSubmit">
            <input type="text" v-model="searchValue" placeholder="Hladaj hrdinu...">
            <input class="submit" type="submit" value="Hladaj"/>
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
			...mapActions(['addToPreviousSearches', 'findHero']),
			onSubmit(e) {
				e.preventDefault();
				this.addToPreviousSearches(this.searchValue)
            }
        }
	}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
    div {
        margin-bottom: 10px;
    }
    input {
        font-family: 'Cairo', sans-serif;
        margin: 10px;
        padding: 10px 5px;
    }
    .submit {
        background-color: black;
        padding: 10px 10px;
        color: white;
        border: none;
    }
</style>