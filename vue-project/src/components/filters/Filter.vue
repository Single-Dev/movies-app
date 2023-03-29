<template>
    <div class="btn-group">
        <Button class="btn-dark" type="button" @click="FilterFunc('all')">Barchasi</Button>
        <Button class="btn-outline-dark" type="button" @click="FilterFunc('popular')">Mashxurlar</Button>
        <Button class="btn-outline-dark" type="button" @click="FilterFunc('mostViewrs')">Ko'p ko'rilgan</Button>
    </div>
</template>
<script>
export default {
    props:{
        UpdateFilterHandler:{
            type: Function,
            required: true
        }
    },
    data(){
        return{
            filter: "all"
        }
    },
    methods: {
        FilterFunc(filter){
            this.filter = filter
            this.UpdateFilterHandler(this.filter)
        }
    },
}
</script>
<style>
    
</style>