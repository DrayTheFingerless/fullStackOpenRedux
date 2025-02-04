import { vote } from "../reducers/anecdoteReducer"
import { createNotif, deleteNotif } from "../reducers/notificationReducer"
import { useSelector, useDispatch } from 'react-redux'

const AnecdotesList = () => {

    const anecdotes = useSelector(state => { 
      console.log(state.filter.length)
        if ( state.filter.length === 0  ) {
          return state.anecdotes    
        }    
        return state.anecdotes.filter(anecdote => 
          anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
      })

    const dispatch = useDispatch()

    const addVote = (id) => {
        const obj = anecdotes.find(a => a.id === id)
        const changedAnecdote = { ...obj, votes: obj.votes +1 }
        dispatch(vote(changedAnecdote))
        const notiftext = anecdotes.find(anecdote => anecdote.id === obj.id).content
        dispatch(createNotif("You voted for \"" + notiftext + "\""))
        setTimeout(() => {
          dispatch(deleteNotif())
        }, 5000)
    }

    return(
    <div>{anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      </div>)
}

export default AnecdotesList