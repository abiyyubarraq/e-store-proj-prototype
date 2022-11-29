import React from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"

import CollectionItem, { PropsCollectionItem } from "./CollectionItems"

//import './collection-preview.styles.scss';

export interface shopProps {
  title: string
  items: PropsCollectionItem[]
  routeName: string
  id?: string | number
}

const CollectionPreview: React.FC<shopProps> = (props: shopProps) => {
  const shopState = useAppSelector((state) => state.shop)
  return (
    <div className="collection-preview">
      <Link to={`/shop/${props.routeName}`} className="title">
        {props.title.toUpperCase()}
      </Link>
      <div className="preview">
        {props.items
          .filter((item: PropsCollectionItem, idx: number) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
