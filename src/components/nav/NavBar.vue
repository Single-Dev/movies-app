<template>
    <div v-for="btn in NavButtons" class="btn-group">
        <a  :class="[btn.path == path ? 'btn-dark': 'btn-outline-dark']" :href="btn.path">
            <i :class="btn.icon"></i>
            <span>{{ btn.name }}</span>
        </a>
       
    </div>
</template>
<script>
export default {
    data() {
        return {
            NavButtons: [
                {
                    name: 'Home',
                    icon: 'fas fa-home',
                    path: '/'
                }
            ],
            path: route.path
        }
    },
}
</script>
<style lang="">
    
</style>