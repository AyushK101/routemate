import { createSlice, PayloadAction } from "@reduxjs/toolkit"; //!!

/**
 * @NOTE
 * As createSlice creates your actions as well as your reducer for you,
 *  you don't have to worry about type safety here. Action types can just be provided inline:
 * 
 */

/**
 * @NOTE
 * Slice will produce (an) action that we will use for dispatch and a
 *  reducer that we will use in configureStore.
 */

/**
 * @NOTE : before toolkit
 * The process involved explicitly defining action types, action creators, and reducers.
 */

/**
 * @example
 * 
 * ! Action Types (Constants)
 * const LOGIN = 'user/LOGIN';
 * const LOGOUT = 'user/LOGOUT';
 * 
 * ! Action Creators
 * export const loginUser = (user: User) => ({
 *  type: LOGIN,
 *  payload: user
 * });
 * 
 * ! Reducer
 *  const initialState = {
 *    authStatus: false,
 *    user: null
 *  };
 *  
 *  export const userReducer = (state = initialState, action: { type: string, payload: any }) => {
 *    switch (action.type) {
 *      case LOGIN:
 *        return {
 *          ...state,
 *          authStatus: true,
 *          user: action.payload
 *        };
 *      case LOGOUT:
 *        return {
 *          ...state,
 *          authStatus: false,
 *          user: null
 *        };
 *      default:
 *        return state;
 *    }
 *  };
 * 
 */


// type authStatusType = {
//   authStatus: boolean
// }

type userSliceState = {
  _id: string | undefined
  authStatus: boolean
}


const initialState: userSliceState = {
  authStatus: false,
  _id: ""
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginUserSlice: (state,action: PayloadAction<userSliceState>) => {
      state.authStatus = action.payload.authStatus
      state._id = action.payload._id
    },
    logoutUserSlice: (state,action: PayloadAction<boolean>) => {
      state.authStatus = action.payload
      state._id = undefined
    }
  }
})

//action creators
export const { loginUserSlice, logoutUserSlice } = userSlice.actions

//action types
export type loginUserSliceType = typeof userSlice.actions.loginUserSlice
export type logoutUserSliceType = typeof userSlice.actions.logoutUserSlice


//reducer export to store
export default userSlice.reducer