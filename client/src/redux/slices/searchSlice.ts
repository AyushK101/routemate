import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchRouteTableType } from "../../types";



const initialState:{routes: SearchRouteTableType[]}= {
  routes: []
};


const searchFormSlice = createSlice({
  name: "searchFormSlice",
  initialState,
  reducers: {
    setSearchTable: (state,action: PayloadAction<SearchRouteTableType[]>) => {
      state.routes = action.payload
    },
    unsetSearchTable: (state) => {
      //? Search about it 
      state.routes = []
    }
  }
})

export const {setSearchTable, unsetSearchTable } = searchFormSlice.actions

export default searchFormSlice.reducer