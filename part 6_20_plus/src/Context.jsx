import { createContext, useReducer } from 'react'


const notifReducer = (state, action) => {
    console.log(action.payload)
    console.log(action.type)
    switch(action.type){    
        case "VOTE": return `You voted for ${action.payload}`
        case "CREATED": return `New anecdote: ${action.payload}`
        case "ERROR": return `An error occurred: ${action.payload}`
        case "CLEAR": return null
        default: return null
    }
}


const AnecdoteContext = createContext()

export const AnecdoteContextProvider = (props) => {

    const [notif, notifDispatch] = useReducer(notifReducer, null)

    return(
        <AnecdoteContext.Provider value={[notif, notifDispatch] }>
            {props.children}
        </AnecdoteContext.Provider>
    )
}

export default AnecdoteContext

