import axios from 'axios'
import { FB_URL } from '../../DB'
import router from '../router'

const requestAxios = axios.create({
	baseURL: FB_URL
})

requestAxios.interceptors.response.use(null, error => {
	if (error.response.status === 401) {
		router.push('/auth?message=auth')
	}
	return Promise.reject(error)
})

export default requestAxios