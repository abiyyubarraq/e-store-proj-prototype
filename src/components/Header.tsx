import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { ReactComponent as Logo } from "../assets/ab.rm.svg"
import { auth } from "../firebase/firebase.utils"
import { signOutSuccess } from "../redux/users/userSlice"
import "../styles/header.scss"
import CartIcon from "./CartIcon"
import CartDropDown from "./CartDropDown"
import { toggleisHidden } from "../redux/cart/cartSlice"

const Header = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)
  const isHidden = useAppSelector((state) => state.cart.isHidden)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isHidden) {
      dispatch(toggleisHidden())
    }
  }, [location])
  const handleLogout = () => {
    dispatch(signOutSuccess())
    auth.signOut()
    navigate("/")
  }
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" width={60} height={60} />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {isAuthenticated ? (
          <div className="option" onClick={handleLogout}>
            SIGNOUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGNIN
          </Link>
        )}
        <CartIcon />
      </div>
      {isHidden ? null : <CartDropDown />}
    </div>
  )
}

export default Header
