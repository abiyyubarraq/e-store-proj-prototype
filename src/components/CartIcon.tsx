import React from "react"
import { ReactComponent as Cart } from "../assets/shoppingBag.svg"
import { toggleisHidden } from "../redux/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

function CartIcon() {
  const dispatch = useAppDispatch()
  const cartState = useAppSelector((state) => state.cart)

  const handleCart = () => {
    dispatch(toggleisHidden())
  }
  return (
    <div className="cart-div" onClick={handleCart}>
      <Cart className="cart-logo" width={24} height={24} />
      <span className="cart-span">{cartState.cartItems.length}</span>
    </div>
  )
}

export default CartIcon
