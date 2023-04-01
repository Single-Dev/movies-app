<template >
    <li
    class="page-item"
    :class="[{ 'active': pageNumber == page }]"
    @click="$emit('Pagenation', pageNumber)"
    >
        <span class="page-link">{{ pageNumber }}</span>
    </li>
</template>

<script>
export default {
    props: {
        pageNumber: {
            type: Number,
            required: true,
        },
        page: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            page_1: 1
        }
    },
    methods:{
        
    },
}
</script>

<style scoped>
li{
    cursor: pointer;
}
</style>