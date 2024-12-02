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

export interface getCurrentUserApiType {
  _id: string;
  username: string;
  email: string;
  picture: string
}


type userSliceState = {
  user: getCurrentUserApiType | undefined
  authStatus: boolean
}


const initialState: userSliceState = {
  authStatus: false,
  user: undefined
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginUserSlice: (state,action: PayloadAction<userSliceState>) => {
      state.authStatus = action.payload.authStatus
      state.user = action.payload.user
    },
    logoutUserSlice: (state,action: PayloadAction<boolean>) => {
      state.authStatus = action.payload
      state.user = undefined
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