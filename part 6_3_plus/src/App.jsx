
import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notification from './components/Notification'
import { initAnecdotes } from './reducers/anecdoteReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {    
    dispatch(initAnecdotes())   
  }, []) 

  return (
    <div>
      <Notification/>
      <h2>Anecdotes</h2>
      <AnecdotesList/>
      <h2>Add new anecdote</h2>
      <AnecdoteForm/>
      <h2>Filter</h2>
      <AnecdoteFilter/>
    </div>
  )
}

export default App