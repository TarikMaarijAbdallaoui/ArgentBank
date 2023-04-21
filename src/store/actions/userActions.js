import { createAsyncThunk } from '@reduxjs/toolkit'

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', options )
      const data = await response.json()

    console.log(data)
      if (data.status === 200) {
        const token = data.body.token
        localStorage.setItem('token', JSON.stringify(token))
        if (token) {
          dispatch(getUser(token))
          return token
  }} else {
          alert("Wrong login information. Please try again.")
  } 
      



      

      //dispatch(getUser(token))
        //      return token

    } catch (error) {
      console.log(error)
      //return rejectWithValue(error)
    }
  },
)

export const getUser = createAsyncThunk(
  'user/getUser',
  async (token, { rejectWithValue }) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    try {
      const response = await fetch(
        //'https://argentbank-server-production.up.railway.app/api/v1/user/profile',
        'http://localhost:3001/api/v1/user/profile',
        options,
      )
      const data = await response.json()
      console.log(data)

      return data.body
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const editUser = createAsyncThunk(
  'user/editUser',
  async ({ firstName, lastName, token }, { rejectWithValue }) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    }
    try {
      const response = await fetch(
        //'https://argentbank-server-production.up.railway.app/api/v1/user/profile',
        'http://localhost:3001/api/v1/user/profile',
        options,
      )
      const data = await response.json()

      return data.body
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
