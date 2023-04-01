<template >
       <li class="list-group-item" :class="[{like: movie_1.like}, {fovourite: movie_1.fovourite}]">
        <span class="list-group-item-label" @click="$emit('onToggle', {id: movie_1.id, prop: 'like'} )">{{movie_1.name}}</span>
        <div class="d-flex justify-content-center align-items-center">
            <input type="number" class="list-group-item-input" :value="movie_1.viewers">
            <button @click="$emit('onToggle', {id: movie_1.id, prop: 'fovourite'})" type="button" class="btn-cookie btn-sm">
                <i class="fas fa-cookie"></i>
            </button>
            <button type="button" class="btn-trash btn-sm" @click="$emit('OnRemove', movie_1.id)">
                <i class="fas fa-trash"></i>
            </button>
            <i class="fas fa-star"></i>
        </div>
       </li>
</template>
<script>
export default {
    props:{
        movie_1:{
            type: Object,
            required: true,
        },
    },
}
</script>
<style scoped>
    .list-group-item{
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: none;
        border-bottom: 1px solid #3d5a80;
    }
    .list-group-item:last-child{
        border-bottom: none;
    }
    .list-group-item-input{
        border: 0;
        outline: none;
    }
    .list-group-item button{
        width: 35px;
        height: 35px;
        margin: 3px;
        font-size: 17px;
        border: none;
        cursor: pointer;
    }
    .list-group-item .btn-cookie{
        color: #e09f3e;
    }
    .list-group-item .btn-trash{
        color: #e5383b;
    }
    .list-group-item .fa-star{
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 16px;
        color: #e09f3e;
        transition: 500ms all;
        transform: translateX(30px);
        opacity: 0;
    }
    .list-group-item-label{
        cursor: pointer;
    }
    .list-group-item.like .fa-star{
        opacity: 1;
        transform: translateX(0);
    }
    .list-group-item.fovourite .list-group-item-label{
        color: #e09f3e;
    }
    .list-group-item.fovourite .list-group-item-input{
        color: #e09f3e;
    }
</style>