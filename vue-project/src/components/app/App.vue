<template>
    <div class="app">
        <div class="content">
            <AppInfo
            :allMoviesCount="movies.length"
            :fovouriteMoviesCount="movies.filter(c => c.fovourite).length"
            />
            <div class="search-panel">
                <SearchPanel/>
                <Filters/>
            </div>
            <MovieList :movies="movies"/>
            <MovieAddForm />
        </div>
    </div>
</template>


<script>
import AppInfo from '../app-info/AppInfo.vue';
import SearchPanel from '../search-panel/SearchPanel.vue'
import Filters from '../filters/Filter.vue'
import MovieList from '../movie-list/MovieList.vue'
import MovieAddForm from '../movie-add-form/MovieAddForm.vue';
export default{
    components:{
        AppInfo,
        SearchPanel,
        Filters,
        MovieList,
        MovieAddForm
    },
    data() {
        return {
            movies: [
                {
                    name: "Omar",
                    viewers: 455,
                    like: true,
                    fovourite: false,
                    
                },
                {
                    name: "Osamn",
                    viewers: 455,
                    like: false,
                    fovourite: false,
                },
                {
                    name: "Ertugrul",
                    viewers: 55,
                    like: false,
                    fovourite: true,
                },
            ],
        }
    },
}
</script>

<style>
.container{
    height: 100vh;
    color: #000;
}
.content{
    width: 1000px;
    min-height: 700px;
    background-color: #fff;
    margin: 0 auto;
    padding: 5rem 10px;
}
.search-panel{
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #fcf5f5;
    border-radius: 5px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0,  .15);
}
</style>


