<template>
    <div>
        <input type="text" class="search" placeholder="kinolarni qidirsh">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.search{
    width: 100%;
    background-color: #fcf5f5;
    border-radius: 5px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0,  .15);
    padding: 15px 20px;
    outline: none;
    margin-bottom: 1rem;
}
.search::placeholder{
    text-transform: uppercase;
    font-size: 1rem;
}
</style>