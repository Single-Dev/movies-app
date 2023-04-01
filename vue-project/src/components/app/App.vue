<template>
    <div class="app">
        <div class="content">
            <AppInfo
            :allMoviesCount="movies.length"
            :fovouriteMoviesCount="movies.filter(c => c.fovourite).length"
            />
            <Box>
                <SearchPanel :Term="onTermHandler"/>
                <Filters :UpdateFilterHandler="UpdateFilterHandler" :filterName="filter"/>
            </Box>
            <MovieList
            :movies="onFilterHandler(SearchHandler(movies, term), filter)"
            @onToggle="onToggleHandler"
            @OnRemove="OnRemoveHandler"
            />
            <MovieAddForm @createMovie="createMovie"/>
        </div>
    </div>
</template>


<script>
import AppInfo from '../app-info/AppInfo.vue';
import SearchPanel from '../search-panel/SearchPanel.vue'
import Filters from '../filters/Filter.vue'
import MovieList from '../movie-list/MovieList.vue'
import MovieAddForm from '../movie-add-form/MovieAddForm.vue'
import axios from 'axios'
export default{
    components:{
        AppInfo,
        SearchPanel,
        Filters,
        MovieList,
        MovieAddForm,
    },
    data() {
        return {
            movies: [],
            term: '',
            filter:'all'
        }
    },
    methods:{
        createMovie(item){
            this.movies.push(item)
        },
        onToggleHandler({id, prop}){
            this.movies = this.movies.map(item=>{
                if (item.id == id){
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        },
        OnRemoveHandler(id){
            this.movies = this.movies.filter(c => c.id != id)
        },
        SearchHandler(arr, term){
            if (term.length ==0){
                return arr
            }
            
            let result = arr.filter(c=> c.name.toLowerCase().indexOf(term) > -1)
            if(result.length == 0){
                console.log('topilmadi');
            }
            return result
        },
        onTermHandler(term){
            this.term = term
        },
        onFilterHandler(arr, filter){
            switch (filter) {
                case 'popular':
                    return arr.filter(c => c.like)            
                case 'mostViewrs':
                    return arr.filter(c => c.viewers > 500)
                default:
                    return arr
            }
        },
        UpdateFilterHandler(filter){
            this.filter = filter
        },
        async getApidata(){
            try {
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/?_limit=10')
                const newArr = data.map(item => ({
                    id: item.id,
                    name: item.title,
                    like: false,
                    fovourite: false,
                    viewers: item.id * 15
                }))
                console.log(newArr);
                this.movies = newArr
            } catch (error) {
                alert(error.message)
            }
        }
    },
    mounted() {
        this.getApidata()
    }
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
</style>


