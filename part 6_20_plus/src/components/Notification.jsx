import { useContext } from "react"
import AnecdoteContext from "../Context"

const Notification = () => {

  const [notif] = useContext(AnecdoteContext)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (notif === null) return null

  return (
    <div style={style}>
      {notif}
    </div>
  )
}

export default Notification
