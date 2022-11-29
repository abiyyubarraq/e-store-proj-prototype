import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PropsCollectionItem } from "../../components/CollectionItems"
export interface cartProps extends PropsCollectionItem {
  quantity?: any
}

interface cartState {
  isHidden: boolean
  cartItems: cartProps[]
}

const initialState: cartState = {
  isHidden: true,
  cartItems: [],
}

// const addItemToCart = (cartItems: cartProps[], cartItemToAdd: cartProps) => {
//   const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id)

//   if (existingCartItem) {
//     return cartItems.map((cartItem) => (cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
//   }
//   console.log(existingCartItem)
//   return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
// }

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleisHidden(state) {
      state.isHidden = !state.isHidden
    },

    addItem(state, action: PayloadAction<cartProps>) {
      // state.cartItems.push(action.payload)
      // state.cartItems = addItemToCart(state.cartItems, action.payload)

      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id)

      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity(state, action: PayloadAction<cartProps>) {
      const item: any = state.cartItems.find((item) => item.id === action.payload.id)
      item.quantity++
    },
    decrementQuantity(state, action: PayloadAction<cartProps>) {
      const item: any = state.cartItems.find((item) => item.id === action.payload.id)
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
      }
    },
    removeItem(state, action: PayloadAction<cartProps>) {
      // state.cartItems.push(action.payload)
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id)
      state.cartItems = removeItem
    },
    clearItemFromCart(state, action: PayloadAction<cartProps>) {
      state.cartItems.push(action.payload)
    },
    clearCart(state) {
      state.cartItems = []
    },
  },
})

export const { toggleisHidden, addItem, removeItem, incrementQuantity, decrementQuantity, clearItemFromCart, clearCart } = cartSlice.actions
// selectors
//export const selectUser = (state) => state.currentUser.user
export default cartSlice.reducer
