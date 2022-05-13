<template>
  <div>
    <watch-list-form class="mb-4"></watch-list-form>

    <watch-list-item
    v-for="(movie, index) in myMovies"
    :key="index"
    :movie="movie"
    :index="index"
    >
    </watch-list-item>
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm.vue'
import WatchListItem from '@/components/WatchListItem.vue'
import { mapState } from 'vuex'

export default {
  name:"WatchListView",
  components: {
    WatchListForm, WatchListItem
  },
  computed :{
    ...mapState([
      'myMovies'
    ])
  }
}
</script>

<style>

</style>