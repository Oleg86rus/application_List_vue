import axios from 'axios'
import { FB_URL } from '../../DB'

const requestAxios = axios.create({
	baseURL: FB_URL
})

export default requestAxios