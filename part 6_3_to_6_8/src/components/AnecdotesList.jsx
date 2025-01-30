import { sendVote } from "../reducers/anecdoteReducer"
import { useSelector, useDispatch } from 'react-redux'

const AnecdotesList = () => {
    const anecdotes = useSelector(state => { 
      console.log(state.filter.length)
        if ( state.filter.length === 0  ) {
          return state.anecdotes    
        }    
        return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
      })

    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(sendVote(id))
    }

    return(
    <div>{anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      </div>)
}

export default AnecdotesList