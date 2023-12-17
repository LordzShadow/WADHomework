<template>
    <div class="form">
        <span style="color: black;">Add a post</span>
        <label for="body">Body</label>
        <input type="body" name="body">
        <div class="container">
            <button @click="Add" class="center">Add</button>
        </div>
    </div>
</template>


<script lang="ts">
export default {
    name: "AddPost",

data: function() {
    return {
        email: '',
        password: '',
    }
},
methods: {

    Add() {
        console.log("Adding a post");
    }
},
}
</script>


<style scoped>
.form {
    display: flex;
    flex-direction: column;
    max-width: 420px;
    margin: 30px auto;
    background: rgb(167, 154, 154);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: rgb(8, 110, 110);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid white;
    color: blue;
}

button {
    background: rgb(8, 110, 110);
    border: 0;
    padding: 10px 20px;
    margin: 20px 20px 20px 20px;
    color: white;
    border-radius: 20px;
    align-items: center;
    text-align: center;
}

.center {
    margin: auto;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    width: 30%;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}


</style>