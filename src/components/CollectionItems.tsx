import React from "react"

//import './collection-item.styles.scss';

export interface PropsCollectionItem {
  id?: number | string
  name?: string
  price?: any
  imageUrl?: string
}

const CollectionItem: React.FC<PropsCollectionItem> = (props: PropsCollectionItem) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${props.imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{props.name}</span>
      <span className="price">${props.price}</span>
    </div>
  </div>
)

export default CollectionItem
