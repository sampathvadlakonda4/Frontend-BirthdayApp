import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            userDetails: [],
        }
    },
    mutations: {
        createUserDetails(state,payload){
            state.userDetails = payload
        }
    }
})

export default store
