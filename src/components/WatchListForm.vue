<template>
  <div>
    <h1>My Movie List</h1>
    <div class="d-flex justify-content-center align-items-center">
      <input type="text" v-model="myMovie" class="form-control" @keyup.enter="[addMovie(myMovie), resetForm()]">
      <button @click="[addMovie(myMovie), resetForm()]" class="btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'



export default {
  name:"WatchListView",
  data() {
    return {
      myMovie:'',
    }
  },
  methods: {
    ...mapActions(['addMovie']),
    resetForm() {
      this.myMovie = ''
    },
  }
}
</script>

<style>
  .form-control{
    max-width: 20%;
  }
</style>