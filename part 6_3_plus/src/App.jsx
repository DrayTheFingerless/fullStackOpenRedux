
import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteFilter from './components/AnecdoteFilter'

const App = () => {
  

  return (
    <div>
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