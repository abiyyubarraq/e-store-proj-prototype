import React from "react"
import { PropsCollectionItem } from "./CollectionItems"
import CustomButton from "./CustButton"
import { addItem, cartProps } from "../redux/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

const CollectionItemCat = (props: PropsCollectionItem) => {
  const dispatch = useAppDispatch()

  function add() {
    dispatch(addItem(props))
  }

  return (
    <div className="collectionItemCatContainer">
      <div
        className="backroundImage image"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      />
      <div className="collectionItemFooter">
        <span className="nameItem">{props.name}</span>
        <span style={{ color: "green" }} className="priceItem">
          ${props.price}
        </span>
      </div>
      <CustomButton onClick={add} isInverted={true} isAdd={true}>
        Add to cart
      </CustomButton>
    </div>
  )
}

export default CollectionItemCat
