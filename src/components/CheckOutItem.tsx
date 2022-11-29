import React from "react"
import { cartProps } from "../redux/cart/cartSlice"
import { useAppDispatch } from "../redux/hooks"
import { incrementQuantity, decrementQuantity, removeItem } from "../redux/cart/cartSlice"

function CheckOutItem(props: cartProps) {
  const dispatch = useAppDispatch()
  return (
    <div className="CheckoutItemContainer">
      <div className="ImageContainer">
        <img src={props.imageUrl} alt="item" />
      </div>
      <span className="TextContainer">{props.name}</span>
      <span className="QuantityContainer">
        <div onClick={() => dispatch(incrementQuantity(props))}>&#10094;</div>
        <span>{props.quantity}</span>
        <div onClick={() => dispatch(decrementQuantity(props))}>&#10095;</div>
      </span>
      <span className="TextContainer">${props.price}</span>
      <div className="RemoveButtonContainer" onClick={() => dispatch(removeItem(props))}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckOutItem
