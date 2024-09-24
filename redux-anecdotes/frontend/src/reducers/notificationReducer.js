import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState:'',
    reducers: {
    setNotificationMessage(_state, action){
        return action.payload
        },
    clearNotification(_state, _action){
        return ''
    }
    },
})

export const setNotification = (message,timeOut) => {
    return dispatch => {
        dispatch(setNotificationMessage(`${message}`))
        setTimeout(() => {
            dispatch(clearNotification())
          }, timeOut * 1000)
    }
}


  export const { setNotificationMessage, clearNotification } = notificationSlice.actions
  export default notificationSlice.reducer