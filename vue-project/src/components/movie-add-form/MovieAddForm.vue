<template>
   <Box >
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
        <Button type="submit" class="btn-outline-dark" @click="addMovie">Qo'shish</Button>
    </form>
</Box>
</template>
<script>

export default {
    data() {
        return {
            name: "",
            viewers: "",
        };
    },
    methods: {
        addMovie() {
            if (!this.name || !this.viewers)
                return;
            const newMovie = {
                name: this.name,
                viewers: this.viewers,
                like: false,
                fovourite: false,
                id: Date.now()
            };
            this.$emit("createMovie", newMovie);
            this.name = "";
            this.viewers = "";
        }
    },
}
</script>
<style scoped>

</style>