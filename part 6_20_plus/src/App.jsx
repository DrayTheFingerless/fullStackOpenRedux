import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from '@tanstack/react-query'
import { getAnecdotes } from './services/requests'

const App = () => {

  const handleVote = (anecdote) => {
    console.log('vote')
  }

  var anecdotes = []


  const { isPending, isError, data, error } = useQuery(
    {
      queryKey: ["anecdotes"],
      queryFn: getAnecdotes,
      retry: 1
    }
  )

  console.log(JSON.parse(JSON.stringify(data)))

  if(isPending) {
    return(
      <div>
        Data is loading...
      </div>
    )
  }

  if(isError) {
    return(
      <div>
        <h1>{error.message}</h1>
      </div>
    )
  }

  anecdotes = data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
