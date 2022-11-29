import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { db, collection, getDocs, query, where, getDoc, doc, setDoc } from "../../firebase/firebase.utils"
import { DocumentData } from "firebase/firestore"
import { shopProps } from "../../components/CollectionPrev"

interface shopState {
  collection: shopProps[]
  isFetching: boolean
  errorMassage: any
}
const initialState: shopState = {
  collection: [],
  isFetching: false,
  errorMassage: null,
}

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fetchStart(state) {
      state.isFetching = true
    },
    fetchSuccess(state, action: PayloadAction<shopProps[]>) {
      state.isFetching = false
      state.collection = action.payload
      state.errorMassage = null
    },
    fetchFail(state, action: PayloadAction<any>) {
      state.errorMassage = action.payload
      state.isFetching = false
    },
  },
})
export const { fetchStart, fetchSuccess, fetchFail } = shopSlice.actions
// selectors
//export const selectUser = (state) => state.currentUser.user
export default shopSlice.reducer
