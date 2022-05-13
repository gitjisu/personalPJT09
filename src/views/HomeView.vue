<template>
  <div class="home row" id="homeViewer">
    <movie-card
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      class="col-6 col-lg-3 "
    >
    </movie-card>
  </div>
</template>

<script>
import { mapState } from "vuex"
import MovieCard from "@/components/MovieCard.vue"

export default {
  name: 'HomeView',
  components: {
    MovieCard
  },
  computed: {
    ...mapState(['movies'])
  },
}
</script>

<style>
#homeViewer {
	max-width: 1000px;
  margin: auto;
}
</style>