import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
const url = require('url')

export default new Vuex.Store ({
    state: {
        mainMenu: {'About me': '#about-me', 'Relationships': '#relationships', 'Requirments': '#requirments', 'Users': '#users', 'Sign Up': '#sign-up'},
        apiLink: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=',
        apiLink2: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=',
        submitBool: false,
        apiUsers: []
    },
    mutations: {
        changeApiLink(state, payload) {
            state.apiLink = payload
        },
        refreshUsers(state, payload) {
            let queryPage = url.parse(state.apiLink).query.split('&')[0].slice(-1)
            let queryCount = url.parse(state.apiLink).query.split('&')[1].slice(-1)
            if(+queryPage > 1) {
                let count = +queryCount
        
                axios
                    .get(state.apiLink2 + count)
                    .then(response => {
                    state.apiUsers = response.data.users.sort((a, b) => b.registration_timestamp - a.registration_timestamp);
                    })
                    .catch(error => console.log(error));
                }
        }
    }
})
