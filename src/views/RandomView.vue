<template>
  <div class="container justify-content-center">
    <button class="btn btn-primary"
      @click="selectMovie()"
    >PICK!</button>
    <div v-if="selected" class="card" style="width: 20rem;">
      <img :src="`https://www.themoviedb.org/t/p/original${ selected.poster_path }`" alt="poster">
      <a :href="`https://www.themoviedb.org/movie/${ selected.id }`" class="selectedMovieLink">
      <h5 class="card-title mt-2"><strong>{{ selected.title }}</strong></h5>
      <p class="card-text">{{ maxOverview }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: 'RandomView',
  computed: {
    ...mapState(['selected',]),
    maxOverview () {
      let text = this.selected.overview.substr(0, 70)
      return text + '... (더보기)'
    }
  },

  methods: {
    ...mapActions(['selectMovie'])
  }
}
</script>

<style scope>
  .card{
    position: relative;
    top: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .selectedMovieLink{
    text-decoration: none;
    color: black;
  }
  .card-text {
    font-size: 12px;
  }
</style>