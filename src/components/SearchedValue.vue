<template>
    <div>
        <div v-for="item in getPreviousSearches" v-bind:key="item">
            <p>{{ item }}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
	export default {
		name: "SearchedValue",
        computed: mapGetters(["getPreviousSearches"])
	}
</script>

<style scoped>

</style>