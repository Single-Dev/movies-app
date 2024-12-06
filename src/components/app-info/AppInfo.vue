<template>
    <Box>
        <p >Barcha kinolar: {{ allMoviesCount }}</p>
        <p >Yangi kinolar: {{ fovouriteMoviesCount }}</p>
    </Box>
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
p{
    font-size: 1.5rem;
    text-transform: uppercase;
}
</style>