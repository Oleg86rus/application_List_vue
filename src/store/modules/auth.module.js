import axios from 'axios'
import { ID_TOKEN } from '../../../DB'
import { error } from '@/utils/error'
const TOKEN_KEY = 'jwt-token'

export default {
	namespaced: true,
	state() {
		return {
			token: localStorage.getItem(TOKEN_KEY)
		}
	},
	mutations: {
		setToken(state, token) {
			state.token = token
			localStorage.setItem(TOKEN_KEY, token)
		},
		logout(state) {
			state.token = null
			localStorage.removeItem(TOKEN_KEY)
		}
	},
	actions: {
		async login({ commit }, payload) {
			try{
				const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${ID_TOKEN}`
				const {data} = await axios.post(url,
					{ ...payload, returnSecureToken: true })
				console.log('DATA: ', data)
				commit('setToken', data.idToken)
			} catch (e) {
				console.log(error(e.response.data.error.message))
			}

			// console.log(payload)
			//
		}
	},
	getters: {
		token(state) {
			return state.token
		},
		isAuthenticated(_, getters) {
			return !!getters.token
		}
	}
}