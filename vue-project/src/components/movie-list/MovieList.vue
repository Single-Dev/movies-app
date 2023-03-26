<template>
    <Box >
        <h3>Kinolar</h3>
        <ul >
            <MovieListItem
            v-for="movie in movies"
            :movie_1="movie"
            :key="movie.id"
            @onToggle="$emit('onToggle', $event)"
            @OnRemove="$emit('OnRemove', $event)"
            />
        </ul>
    </Box>
</template>
<script>
import MovieListItem from '../movie-list-item/MovieListItem.vue';

export default {
    components: {
        MovieListItem
    },
    props:{
        movies:{
            type: Array,
            required: true,
        }
    }
}
</script>
<style scoped>

</style>