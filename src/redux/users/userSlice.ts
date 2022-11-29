// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

interface currentUser {
  email: string | null
  uid: string | null
  displayName: string | null
  photoUrl: string | null
  token: string | null
}

interface userState {
  currentUser: currentUser | null
  error: any
  isAuthenticated: boolean
}

const initialState: userState = {
  currentUser: {
    token: localStorage.getItem("estoreProjToken"),
    displayName: localStorage.getItem("estoreProjUsername"),
    photoUrl: localStorage.getItem("estoreProjPhotoUrl"),
    uid: localStorage.getItem("estoreProjUID"),
    email: localStorage.getItem("estoreProjEmail"),
  },
  error: null,
  isAuthenticated: Boolean(localStorage.getItem("estoreProjToken")),
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess(state, action: PayloadAction<currentUser>) {
      state.currentUser = action.payload
      state.error = null
      state.isAuthenticated = true
    },
    signOutSuccess(state) {
      state.currentUser = null
      state.error = null
      state.isAuthenticated = false
    },
    signInFail(state, action: PayloadAction<any>) {
      state.currentUser = null
      state.error = action.payload
      state.isAuthenticated = false
    },
    // signOutFail(state) {},
    // signUpFail(state, action: PayloadAction) {},
  },
})
export const { signInSuccess, signOutSuccess, signInFail } = userSlice.actions
// selectors
//export const selectUser = (state) => state.currentUser.user
export default userSlice.reducer
