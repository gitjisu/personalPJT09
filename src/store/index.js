import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const URL = 'https://api.themoviedb.org/3/movie/now_playing/'
const API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    movies: [],
    selected: null,
    myMovies: [],
  },
  getters: {

  },
  mutations: {
    SEARCH_MOVIE (state, data) {
      state.movies = data
    },
    SELECT_MOVIE (state) {
      const nums = _.range(state.movies.length)
      state.selected = state.movies[_.sampleSize(nums, 1)]
    },
    ADD_MOVIE (state, data) {
      state.myMovies.push(data)
    }

  },
  actions: {
    searchMovie ({commit}) {
      axios.get(URL, {
        params: {
          'api_key': API_KEY,
          'region': 'KR',
          'page': 1,
          'language': 'ko',
        }
      })
      .then(res => {
        commit('SEARCH_MOVIE', res.data.results)
      }
    )},
    selectMovie ({commit}) {
      commit('SELECT_MOVIE')
    },
    addMovie({commit}, data) {
      if (data.trim()) {
        commit('ADD_MOVIE', data)
      }
    }
  },
})
