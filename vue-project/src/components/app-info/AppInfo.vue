<template>
    <div class="app-info">
        <p >Barcha kinolar: {{ allMoviesCount }}</p>
        <p >Sevimli kinolar: {{ fovouriteMoviesCount }}</p>
    </div>
</template>

<script>
export default{
    props:{
        allMoviesCount:{
            type: Number,
            required: true,
        },
        fovouriteMoviesCount:{
            type: Number,
            required: true,
        }
    }
}
</script>

<style scoped>
.app-info{
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #fcf5f5;
    border-radius: 5px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0,  .15);
}
p{
    font-size: 1.5rem;
    text-transform: uppercase;
}
</style>