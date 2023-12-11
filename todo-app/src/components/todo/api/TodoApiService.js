import axios from 'axios'

const apiClient = axios.create(
{
    baseURL: 'http://localhost:8080'
});

export const retrieveTodosForUsernameApi
    = (username) => apiClient.get(`/users/${username}/todos`)


export const deleteTodoApi
    = (username, id) => apiClient.delete(`/users/${username}/todo/${id}`)

export const retrieveTodoApi
    = (username, id) => apiClient.get(`/users/${username}/todo/${id}`)