import { useDispatch } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

const AnecdoteFilter = () => {
  const dispatch = useDispatch()
   
  const handleChange = (event) => {
    event.preventDefault()    
        const content = event.target.value    
        dispatch(filterAnecdotes(content))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default AnecdoteFilter
