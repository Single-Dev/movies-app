<template>
    <div class="app">
        <div class="content">
            <AppInfo :allMoviesCount="movies_count" :fovouriteMoviesCount="movies.filter(c => c.fovourite).length" />
            <Box>
                <SearchPanel :Term="onTermHandler" />
                <Filters :UpdateFilterHandler="UpdateFilterHandler" :filterName="filter" />
            </Box>
            <Box v-if="!movies.length && !isLoading">
                <p class="text-danger text-center">Kinolar Topilmadi.</p>
            </Box>
            <Box v-else-if="isLoading">
                <loader/>
            </Box>
            <MovieList v-else :movies="onFilterHandler(SearchHandler(movies, term), filter)" @onToggle="onToggleHandler"
                @OnRemove="OnRemoveHandler" />
            <Box class="d-flex justify-content-center">
                <PaginationBtns
                class="pagination pagination-sm"
                v-for="pageNumber in totalPages"
                :pageNumber="pageNumber"
                :page="page"
                @Pagenation="Pagenation"
                />
            </Box>
            <MovieAddForm @createMovie="createMovie" />
        </div>
    </div>
</template>


<script>
import AppInfo from '../app-info/AppInfo.vue';
import SearchPanel from '../search-panel/SearchPanel.vue'
import Filters from '../filters/Filter.vue'
import MovieList from '../movie-list/MovieList.vue'
import MovieAddForm from '../movie-add-form/MovieAddForm.vue'
import PaginationBtns from '../pagination-btns/PaginationBtns.vue' 
import axios from 'axios'
export default {
    components: {
        AppInfo,
        SearchPanel,
        Filters,
        MovieList,
        MovieAddForm,
        PaginationBtns
    },
    data() {
        return {
            movies: [],
            term: '',
            filter: 'all',
            isLoading: false,
            limit: 10,
            page: 1,
            totalPages: 0,
            movies_count: 0,
        }
    },
    methods: {
        async createMovie(item) {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts/', item)
            this.movies.push(response.data)
        },
        onToggleHandler({ id, prop }) {
            this.movies = this.movies.map(item => {
                if (item.id == id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        },
        OnRemoveHandler(id) {
            this.movies = this.movies.filter(c => c.id != id)
        },
        SearchHandler(arr, term) {
            if (term.length == 0) {
                return arr
            }

            let result = arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)
            return result
        },
        onTermHandler(term) {
            this.term = term
        },
        onFilterHandler(arr, filter) {
            switch (filter) {
                case 'popular':
                    return arr.filter(c => c.like)
                case 'mostViewrs':
                    return arr.filter(c => c.viewers > 500)
                default:
                    return arr
            }
        },
        UpdateFilterHandler(filter) {
            this.filter = filter
        },
        async getApidata() {
            try {
                this.isLoading = true
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/',{
                    params:{
                        _limit: this.limit,
                        _page: this.page
                    }
                })
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.movies_count = response.headers['x-total-count']
                const newArr = response.data.map(item => ({
                    id: item.id,
                    name: item.title,
                    like: false,
                    fovourite: false,
                    viewers: item.id * 15
                }))
                this.movies = newArr
            } catch (error) {
                alert(error.message)
            } finally {
                this.isLoading = false
            }
        },
        Pagenation(page_number){
            this.page = page_number
        }
    },
    mounted() {
        this.getApidata()
    },
    watch:{
        page(){
            this.getApidata()
        }
    }
}
</script>

<style>
.container {
    height: 100vh;
    color: #000;
}

.content {
    width: 1000px;
    min-height: 700px;
    background-color: #fff;
    margin: 0 auto;
    padding: 5rem 10px;
}
</style>


