import { createSlice } from "@reduxjs/toolkit"

var initialState = null

const notifSlice = createSlice({
    name: "notification",
    initialState,
    reducers:{
        createNotif(state, action){
            return action.payload
        },
        deleteNotif(state){
            return null
        }
    }
})

export const {createNotif, deleteNotif} = notifSlice.actions
export default notifSlice.reducer