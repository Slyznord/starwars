import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        people: [],
        isLoad: false
    },
    mutations: {
        SET_DATA(state, data) {
            state.people = data
        },
        TOGGLE_LOAD(state) {
            state.isLoad = !state.isLoad
        }
    },
    actions: {
        async getData({ commit, dispatch }, id) {
            try {
                commit('TOGGLE_LOAD')
                
                const data = await axios.get('https://swapi.dev/api/people', {
                    params: {
                        page: id
                    }
                }).then(result => {
                    commit('TOGGLE_LOAD')
                    return result.data
                });
                
                commit('SET_DATA', data)
            } catch(error) {
                throw error
            }
        }
    },
    modules: {
    }
})
