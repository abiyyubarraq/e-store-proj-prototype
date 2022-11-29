import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./users/userSlice"
import cartReducer from "./cart/cartSlice"
import shopReducer from "./Shop/shopSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(apiSlice.middleware)
  // },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
