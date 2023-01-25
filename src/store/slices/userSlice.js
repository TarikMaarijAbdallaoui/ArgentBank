import { createSlice } from '@reduxjs/toolkit'
import { login, getUser } from '../actions/userActions'

const initialState = {
  token: '',
  info: {},
  status: 'idle', // success|failed
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: {
      token: '',
      info: {},
      status: 'idle', 
      error: null,
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      }).addCase(getUser.pending, (state, action) => {
        state.status= 'loading'
      }).addCase(getUser.fulfilled,(state, action) => {
        state.status = 'success'
        state.info = action.payload
      }).addCase(getUser.rejected,(state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const logout = userSlice.logout
export default userSlice.reducer
