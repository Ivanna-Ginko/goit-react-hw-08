import {createSelector, createSlice, isAnyOf} from "@reduxjs/toolkit"
import { fetchDataThunk, deleteContactThunk, addContactThunk } from "./contactsOps"
import { selectNameFilter } from "./filtersSlice"


const slice = createSlice({
    name : "contacts",
    initialState: {
          items: [],
          loading: false,
          error: null
        },

    extraReducers: builder => {
        builder
        .addCase(fetchDataThunk.fulfilled, (state, action) => {
             state.loading = false;
              state.error = null;
            state.items = action.payload;
        })
        .addCase(deleteContactThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter((item) => item.id !== action.payload);
        })
        .addCase(addContactThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addMatcher(isAnyOf(addContactThunk.rejected, deleteContactThunk.rejected, fetchDataThunk.rejected ),
         (state, action) => {
            state.loading = false;
            state.error = action.payload;
       })
        .addMatcher(isAnyOf(addContactThunk.pending, deleteContactThunk.pending, fetchDataThunk.pending ),
         (state) => {
            state.loading = true;
            state.error = null;
       })
    }
})


export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;


export const SelectFilterContactsMemo = createSelector([selectContacts, selectNameFilter], (contacts, filterName)=>{

    console.log(filterName)
 
    if (!contacts) {return []}
    if (!filterName) {return contacts}
   
    const filterContacts = contacts.filter(ar=>ar.name.toLowerCase().includes(filterName.toLowerCase()));
    return filterContacts;
})

export const { addContact, deleteContact,dataFullfilledOperation, setError, setLoading } = slice.actions;
export default slice.reducer;


/*export const SelectFilterContacts = (state) => {
    const contacts = selectContacts(state);
    const filterName = selectFilter(state);

    console.log(filterName)
 
        if (!contacts) {return []}
        if (!filterName) {return contacts}
       
        const filterContacts = contacts.filter(ar=>ar.name.toLowerCase().includes(filterName.toLowerCase()));
        return filterContacts;
      
}*/