import { createSlice } from "@reduxjs/toolkit"

var initialState = null

const notifSlice = createSlice({
    name: "notification",
    initialState,
    reducers:{
        startNotif(state, action){
            return action.payload
        },
        deleteNotif(state){
            return null
        }
    }
})

export const {startNotif, deleteNotif} = notifSlice.actions

export const createNotif = (text, time) => {
    return dispatch => {
        dispatch(startNotif(text))
        setTimeout(() => {
          dispatch(deleteNotif())
        }, time)
    }
}

export default notifSlice.reducer