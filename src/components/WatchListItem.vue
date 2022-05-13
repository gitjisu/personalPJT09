<template>  
  <div class="d-flex justify-content-center m-0" >
    <p 
      class="list-group-item m-0 px-0 py-2 max-width"
      style="background-color: white;"
      v-if="(index % 2)"
    >
      {{ movie }}
    </p>
    <p 
      class="list-group-item m-0 px-0 py-2 max-width"
      style="background-color: lightgray;"
      v-if="!(index % 2)"
    >
      {{ movie }}
    </p>
  </div>
</template>

<script>
export default {
  name:"WatchListItem",
  props: {
    movie: String,
    index: Number,
  }
}
</script>

<style>
.list-group-item {
  width: 500px;
  border: 0px;
}

.max-width {
  width: 100%;
}
</style>