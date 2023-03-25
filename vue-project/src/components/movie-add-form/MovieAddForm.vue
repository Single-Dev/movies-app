<template>
   <div class="add-form-div">
    <h3>Yangi kino qo'shish</h3>
    <form class="form-group d-flex" @submit.prevent>
        <input type="text" class="form-control" placeholder="Kino nomi"
        :value="name" 
        @input="name = $event.target.value"
        >
        <input type="number" class="form-control" placeholder="Ko'rilgan soni"
        :value="viewers"
        @input="viewers = $event.target.value"
        >
        <button type="submit" class="btn btn-outline-dark" @click="addMovie">Qo'shish</button>
    </form>
   </div>
</template>
<script>
export default {
    data(){
        return{
            name: '',
            viewers: '',
        }
    },
    methods:{
        addMovie(){
            if (!this.name || !this.viewers) return
            const newMovie ={
                    name: this.name,
                    viewers: this.viewers,
                    like: false,
                    fovourite: false,
                    id: Date.now()
            }
            this.$emit("createMovie", newMovie)
            this.name = ""
            this.viewers = ""
        }
    }
}
</script>
<style>
.add-form-div{
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #fcf5f5;
    border-radius: 5px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0,  .15);
}
</style>