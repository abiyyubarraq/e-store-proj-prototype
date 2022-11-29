import React from "react"
import Page from "../components/Page"

import SignIn from "../components/SignIn"
import "../styles/signIn.scss"
import SignUp from "../components/SignUp"

const SignInAndSignUpPage = () => (
  <Page title="SignIn">
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  </Page>
)

export default SignInAndSignUpPage
