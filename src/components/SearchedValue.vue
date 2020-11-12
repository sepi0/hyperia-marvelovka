<template>
    <div class="outside-wrapper">
        <h3 v-on:click="toggle = !toggle">Naposledy hladane..</h3>
        <div v-show="toggle" class="inside-wrapper">
            <div class="search-val" v-for="item in getPreviousSearches" v-bind:key="item">
                <p>{{ item }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
	export default {
		name: "SearchedValue",
        computed: mapGetters(["getPreviousSearches"]),
        data: () => ({
            toggle: true
        })
	}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');
    .search-val {
        height: 20px;
        margin: 10px;
        padding: 10px 15px;
        background-color: red;
        color: white;
        border-radius: 500px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .inside-wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .outside-wrapper {
        margin: 0 auto;
        margin-bottom: 40px;
        width: 500px;
        display: flex;
        flex-direction: column;
    }
    p, h3 {
        font-family: 'Kalam', cursive;
        cursor: pointer;
    }
    h3 {
        transition: transform 0.33s ease-in-out;
    }
    h3:hover {
        transform: translateY(-5px);
    }
</style>