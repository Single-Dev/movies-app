<template >
    <div class="box"><slot></slot></div>
</template>
<script>
export default {
    name:'Box'
}
</script>
<style>
.box{
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #fcf5f5;
    border-radius: 5px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0,  .15);
    width: 750px;
}

@media (max-width: 750px) {
    .box {
        width: 330px;
    }
}


</style>