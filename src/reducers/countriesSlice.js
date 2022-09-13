import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
    name: 'countries',
    initialState:{
        value: []
    },
    reducers:{
        getCountries: state => {

        },
        isLoading: state => {

        },
        search: state =>{

        }
    }
})

export const {getCountries,isLoading,search} = countriesSlice.actions
export default countriesSlice.reducer