import React from "react"
import { Link, NavigateFunction, useNavigate } from "react-router-dom"

interface Items {
  title: string
  imageUrl: string
  size?: string
}

const Items: React.FC<Items> = ({ title, imageUrl, size }) => {
  const navigate = useNavigate
  return (
    <Link to={`/shop/${title}`} className={`height: ${size ? "380px" : "240px"} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </Link>
  )
}
export default Items
