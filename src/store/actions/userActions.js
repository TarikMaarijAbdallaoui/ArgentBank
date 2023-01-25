import { createAsyncThunk } from "@reduxjs/toolkit";


export const login = createAsyncThunk('user/login', async ({email, password}, {rejectWithValue, dispatch}) =>{
        const options = {
                method: 'POST',
                headers:{ 'Content-Type': 'application/json', 'Accept': 'application/json',},
                body: JSON.stringify({email, password})
        }
        try {
                const response = await  fetch('http://localhost:3001/api/v1/user/login', options)
                const data = await response.json()

                const token = data.body.token
                console.log(token)

                dispatch(getUser(token))

                return token
        } catch (error) {
              return rejectWithValue(error)  
        }
})

export const getUser = createAsyncThunk("user/getUser", async (token, {rejectWithValue}) => {
        const options = {
                method: 'POST',
                headers:{ 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                },
                
        }
        try {
                const response =  await fetch('http://localhost:3001/api/v1/user/profile', options)
                const data = await response.json()

                console.log(data)
                return data.body
        } catch (error) {
              return rejectWithValue(error)  
        }
} )