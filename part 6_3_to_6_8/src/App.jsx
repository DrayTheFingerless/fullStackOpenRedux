
import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'

const App = () => {
  

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdotesList/>
      <h2>Add new anecdote</h2>
      <AnecdoteForm/>
    </div>
  )
}

export default App