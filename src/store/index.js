import Vue from 'vue';
import Vuex from 'Vuex';
import createLogger from 'vuex/dist/logger';
import img from './modules/img.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        img
    },
    plugins: [createLogger()]
})