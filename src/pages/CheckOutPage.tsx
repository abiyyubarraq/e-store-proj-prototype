import React, { useEffect, useState } from "react"
import "../styles/checkoutpage.scss"
import CheckOutItem from "../components/CheckOutItem"
import { useAppSelector } from "../redux/hooks"
import { cartProps } from "../redux/cart/cartSlice"
import StripeButton from "../components/StripeButton"

function CheckOutPage() {
  const cartState = useAppSelector((state) => state.cart)

  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    if (cartState.cartItems) {
      let totalPrice = cartState.cartItems.reduce((accumalatedQuantity, cartItem: cartProps) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0)
      setTotal(totalPrice)
    }
  }, [cartState.cartItems])

  return (
    <div className="CheckoutPageContainer">
      <div className="CheckoutHeaderContainer">
        <div className="HeaderBlockContainer">
          <span>Product</span>
        </div>
        <div className="HeaderBlockContainer">
          <span>Description</span>
        </div>
        <div className="HeaderBlockContainer">
          <span>Quantity</span>
        </div>
        <div className="HeaderBlockContainer">
          <span>Price</span>
        </div>
        <div className="HeaderBlockContainer">
          <span>Remove</span>
        </div>
      </div>
      {cartState.cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} name={cartItem.name} imageUrl={cartItem.imageUrl} id={cartItem.id} price={cartItem.price} quantity={cartItem.quantity} />
      ))}
      {/* map */}
      <div className="TotalContainer">TOTAL: ${total}</div>

      <div className="WarningContainer">
        {" "}
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>
    </div>
  )
}

export default CheckOutPage
