import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAnecdote = async(event) => {
        event.preventDefault()    
        const content = event.target.anecdote.value    
        dispatch(addAnecdote(content))
    }

    return (
        <form onSubmit={newAnecdote}>        
            <input name="anecdote" />         
            <button type="submit">add</button>
        </form>
        )
}

export default AnecdoteForm