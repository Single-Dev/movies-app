<template>
   <div class="add-form-div">
    <h3>Yangi kino qo'shish</h3>
    <form class="form-group d-flex">
        <input type="text" class="form-control" placeholder="Kino nomi">
        <input type="text" class="form-control" placeholder="Ko'rilgan soni">
        <button type="submit" class="btn btn-outline-dark">Qo'shish</button>
    </form>
   </div>
</template>
<script>
export default {
    
}
</script>
<style>
.add-form-div{
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #fcf5f5;
    border-radius: 5px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0,  .15);
}
</style>