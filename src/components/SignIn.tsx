import React, { useState } from "react"
import FormInput from "./FormInput"
import CustomButton from "./CustButton"
import { signInFail, signInSuccess } from "../redux/users/userSlice"
import { useAppDispatch } from "../redux/hooks"
import { auth, db, doc, getDoc, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, provider, GoogleAuthProvider } from "../firebase/firebase.utils"
import { async } from "@firebase/util"
import { useNavigate } from "react-router-dom"

function SignIn() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, pass)
      .then(async (userAuth) => {
        dispatch(
          signInSuccess({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
            token: await userAuth.user.getIdToken(),
          })
        )
      })
      .then(() => navigate("/"))
      .catch((err) => {
        dispatch(signInFail(err))
      })
  }

  const googlesignIn = () => {
    signInWithPopup(auth, provider)
      .then(async (userAuth) => {
        dispatch(
          signInSuccess({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
            token: await userAuth.user.getIdToken(),
          })
        )
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result)
        // // const token = credential.accessToken
        // // The signed-in user info.
        // const user = result.user
        // console.log(user)
        // ...
      })
      .then(() => navigate("/"))
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  // const storeToDB = async (uid) => {
  //   const docRef = doc(db, "user", `${uid}`)
  //   const docSnap = await getDoc(docRef)
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data())
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!")
  //   }
  // }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      {/* <CustomButton onClick={storeToDB}>pencet</CustomButton> */}

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} label="email" required />
        <FormInput name="password" type="password" value={pass} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)} label="password" required />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={googlesignIn} isGoogle={true} isInverted={false}>
            Google Sign In
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
