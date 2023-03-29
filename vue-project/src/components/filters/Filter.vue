<template>
    <div class="btn-group">
        <Button 
        type="button"
        @click="FilterFunc('all')"
        :class="[filterName == 'all' ? 'btn-dark': 'btn-outline-dark']"
        >Barchasi</Button>
        <Button type="button"
        @click="FilterFunc('popular')"
        :class="[filterName == 'popular' ? 'btn-dark': 'btn-outline-dark']"
        >Mashxurlar</Button>
        <Button type="button"
        @click="FilterFunc('mostViewrs')"
        :class="[filterName == 'mostViewrs' ? 'btn-dark': 'btn-outline-dark']"
        >Ko'p ko'rilgan</Button>
    </div>
</template>
<script>
export default {
    props:{
        UpdateFilterHandler:{
            type: Function,
            required: true
        },
        filterName:{
            type: String,
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