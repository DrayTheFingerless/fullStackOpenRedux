import { addAnecdote } from "../services/requests"
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext } from "react"
import AnecdoteContext from "../Context"

const AnecdoteForm = () => {

  const [counter, notifDispatch] = useContext(AnecdoteContext)
  const queryClient = useQueryClient()
  const newNoteMutation = useMutation({ 
    mutationFn: addAnecdote,
    onSuccess: (data) => { 
      console.log("data" + data.content)
      notifDispatch({ type: 'CREATED', payload: data.content })
      setTimeout(() => {
        notifDispatch("CLEAR")
      }, 3000)
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] }) }, 
    onError: (error) => {
      notifDispatch({ type: 'ERROR', payload: error })
      setTimeout(() => {
        notifDispatch("CLEAR")
      }, 3000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newNoteMutation.mutate({content, votes: 0})
    
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
