import { createSlice } from "@reduxjs/toolkit";



const searchSlice = createSlice({
  name: "searchSlice",
  initialState : {
    query : "",
    activeTab : "photos",
    results: [],
    loading : false,
    error : null
  },
  reducers: {
    setQuery(state,action){
      state.query = action.payload

    },
    setActivetab(state,action){
      state.activeTab = action.payload

    },
    setResults(state,action){
      state.results = action.payload

    },
    setLoading(state){
      state.loading = true
      state.error = null

    },
    setError(state,action){
      state.loading = false
      state.error = action.payload


    }


  }

})

export const {setQuery,setActivetab,setResults,setLoading,setError} = searchSlice.actions
export default searchSlice.reducer
