import React from "react"
import { cartProps } from "../redux/cart/cartSlice"
import { PropsCollectionItem } from "./CollectionItems"

const CartItem = (props: cartProps) => {
  return (
    <div className="cartItemContainer">
      <img className="carItemImage" src={props.imageUrl} />
      <div className="itemDetails">
        <span>{props.name}</span>
        <span>
          {props.quantity} x ${props.price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
