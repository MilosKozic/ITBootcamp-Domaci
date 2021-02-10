import axios from 'axios'

export const getQuotes=()=> axios.get('http://localhost:3005/quotes')
export const getUsers=()=> axios.get('http://localhost:3005/users')
export const postUsers=(user)=> axios.post('http://localhost:3005/users',user)
export const postQuotes=(quotes)=> axios.post('http://localhost:3005/quotes',quotes)