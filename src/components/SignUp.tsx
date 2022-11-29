import React, { useState } from "react"
import { useAppDispatch } from "../redux/hooks"
import FormInput from "./FormInput"
import CustomButton from "./CustButton"
import { auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "../firebase/firebase.utils"
import { signInFail, signInSuccess } from "../redux/users/userSlice"

function SignUp() {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirPass, setconfirPass] = useState("")
  const dispatch = useAppDispatch()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (pass !== confirPass) {
      alert("passwords don't match")
      return
    }

    createUserWithEmailAndPassword(auth, email, pass)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: displayName,
        })
          .then(async () =>
            dispatch(
              signInSuccess({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
                token: await userAuth.user.getIdToken(),
              })
            )
          )
          .catch((error) => {
            dispatch(signInFail(error))
          })
      })
      .catch((err) => {
        dispatch(signInFail(err))
      })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput type="text" name="displayName" value={displayName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)} label="Display Name" required />
        <FormInput type="email" name="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} label="Email" required />
        <FormInput type="password" name="password" value={pass} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)} label="Password" required />
        <FormInput type="password" name="confirmPassword" value={confirPass} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setconfirPass(e.target.value)} label="Confirm Password" required />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
