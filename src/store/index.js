import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import about from './modules/about'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    home,
    about
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})