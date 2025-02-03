import { createSlice } from "@reduxjs/toolkit"

//const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
    name: "anecdotes",
    initialState: [],
    reducers: {
      createAnecdote(state,action){
        state.push(action.payload)
      },
      sendVote(state,action){
        const id = action.payload
        const anecdoteToVote = state.find(a => a.id === id)
        const changedAnecdote = { 
          ...anecdoteToVote, 
          votes: anecdoteToVote.votes + 1 
        }
        return state.map(anecdote =>
          anecdote.id !== id ? anecdote : changedAnecdote 
        ).sort((a, b) => b.votes-a.votes)
      },
      setAnecdotes(state,action){
        return action.payload
      }
    }
  })

export const { createAnecdote, sendVote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer