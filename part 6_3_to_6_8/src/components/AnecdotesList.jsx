import { sendVote } from "../reducers/anecdoteReducer"
import { useSelector, useDispatch } from 'react-redux'

const AnecdotesList = () => {
    const anecdotes = useSelector(state => state)
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