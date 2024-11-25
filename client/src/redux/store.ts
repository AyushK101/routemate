import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { useDispatch } from "react-redux";
import { userApi } from "./apis/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { routemateApi } from "./apis/routemate";


export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [routemateApi.reducerPath]: routemateApi.reducer,


  },
  //? enables caching, invalidation, polling and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(routemateApi.middleware)
})


//? refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch)


export type RootStore = ReturnType<typeof store.getState> 

/**
 * @NOTE 
 * - This type reflects the dispatch function that is tied to your specific Redux store. 
 *  By using typeof store.dispatch, you get the exact dispatch function type that is compatible
 *  with your store’s actions.
*/
export type AppDispatch = typeof store.dispatch

/**
 * @NOTE
 * pre-typing dispatch instead of manually typing everytime like
 *  const dispatch = useDispatch();  // Use the default useDispatch hook
 * >Manually type the dispatch
 * const typedDispatch = dispatch as AppDispatch;  // Cast the dispatch function
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

