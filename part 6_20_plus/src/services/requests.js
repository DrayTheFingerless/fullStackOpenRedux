import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => 
    axios.get(baseURL).then(res => res.data)

export const addAnecdote = newAnecdote => 
    axios.post(baseURL, newAnecdote).then(res => res.data)

export const updateAnecdote = changedAnecdote =>
    axios.put(`${baseURL}/${changedAnecdote.id}`, changedAnecdote).then(res => res.data)