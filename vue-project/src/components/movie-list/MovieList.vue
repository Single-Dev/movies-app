<template>
    <div class="movie-list">
        <h3>Kinolar</h3>
        <ul >
            <MovieListItem  v-for="movie in movies" :movie_1="movie" :key="movie.id" @onLike="$emit('onlike', movie.id)"/>
        </ul>
    </div>
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
.movie-list {
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #fcf5f5;
    border-radius: 5px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, .15);
}
</style>