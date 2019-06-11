import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user:{}

    },
    mutations:{

    },
    actions:{
        getUser( {state} ){
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((res)=>{
                state.user = res.data
            }).catch(err=>{
                // eslint-disable-next-line
                console.log(err)
            })
        },

    },
})