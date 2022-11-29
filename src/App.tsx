import React, { Suspense, useEffect, lazy } from "react"
import "./App.scss"
import Homepage from "./pages/Homepage"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header"
import { useAppSelector } from "./redux/hooks"
import Loader from "./components/Loader"
import CheckOutPage from "./pages/CheckOutPage"
import NotFound from "./components/NotFound"
const Shop = React.lazy(() => import("./pages/Shop"))
const ShopCat = React.lazy(() => import("./pages/ShopCat"))
const SignInAndSignUpPage = React.lazy(() => import("./pages/SignInPage"))

function App() {
  const userState = useAppSelector((state) => state.user)
  useEffect(() => {
    if (userState.isAuthenticated) {
      localStorage.setItem("estoreProjToken", String(userState.currentUser?.token))
      localStorage.setItem("estoreProjUsername", String(userState.currentUser?.displayName))
      localStorage.setItem("estoreProjPhotoUrl", String(userState.currentUser?.photoUrl))
      localStorage.setItem("estoreProjUID", String(userState.currentUser?.uid))
      localStorage.setItem("estoreProjEmail", String(userState.currentUser?.email))
    } else {
      localStorage.removeItem("estoreProjToken")
      localStorage.removeItem("estoreProjUsername")
      localStorage.removeItem("estoreProjPhotoUrl")
      localStorage.removeItem("estoreProjUID")
      localStorage.removeItem("estoreProjEmail")
    }
  }, [userState.isAuthenticated])
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/checkout" element={<CheckOutPage />}></Route>
          <Route path="/shop/:catId" element={<ShopCat />}></Route>
          <Route path="/signin" element={userState.isAuthenticated ? <Navigate to="/" replace /> : <SignInAndSignUpPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
