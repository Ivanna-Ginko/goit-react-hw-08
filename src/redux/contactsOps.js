import axios from "axios";
//import { dataFullfilledOperation, setError, setLoading } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://68136099129f6313e21115a8.mockapi.io/'


export const fetchDataThunk = createAsyncThunk("fetchContacts", async (_, thunkAPI) => {
    try {
        const response = await axios.get('/ContactsApp')
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
    try {
        await axios.delete(`/ContactsApp/${id}`)
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
} )

export const addContactThunk = createAsyncThunk('addContact', async (body, thunkAPI) => {
      try {
        const response = await axios.post(`/ContactsApp/`, body)
        console.log (response.data)
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  );

