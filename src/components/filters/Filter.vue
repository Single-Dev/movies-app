<template>
    <div class="btn-group">
        <Button v-for="btn in FilterBtns"
        type="button"
        :class="[filterName == btn.name ? 'btn-dark': 'btn-outline-dark']"
        @click="FilterFunc(btn.name)"
        >
        {{ btn.title }}
        </Button>


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
            filter: "all",
            FilterBtns:[
            {
                title: 'Barcha kinolar',
                name:'all'
            },
            {
                title: 'Mashxur kinolar',
                name:'popular'
            },
            {
                title: "Yangi",
                name:'new'
            },
            ]
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