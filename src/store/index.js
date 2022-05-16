import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        username: ""
    },
    mutations: {
        setinfo(state, val) {
            state.username = val
        }
    },
    getters: {
        getUserName: (state) => {
            return state.username.toUpperCase()

        }
    }

})
export default store;