import axios from "axios"
const url = 'http://localhost:4000/api'

export const axiosInstance = axios.create({
    baseURL: url
})