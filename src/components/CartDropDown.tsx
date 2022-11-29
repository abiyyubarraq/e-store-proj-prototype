import React from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"
import CartItem from "./CartItem"
import CustomButton from "./CustButton"

function CartDropDown() {
  const navigate = useNavigate()
  const cartState = useAppSelector((state) => state.cart)
  return (
    <div className="cartDrop-div">
      <div className="cartItem-div">{cartState.cartItems.length ? cartState.cartItems.map((cartItem, index) => <CartItem key={cartItem.id} id={cartItem.id} quantity={cartItem.quantity} imageUrl={cartItem.imageUrl} name={cartItem.name} price={cartItem.price} />) : <span className="emptymess-span">Your cart is empty</span>}</div>

      <CustomButton onClick={() => navigate("/checkout")} className="cartButton" isInverted={true} styles={{ marginTop: "auto" }}>
        Checkout
      </CustomButton>
    </div>
  )
}

export default CartDropDown
