import React, { ButtonHTMLAttributes } from "react"
import "../styles/custbutton.scss"
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogle?: boolean
  isInverted?: boolean
  isAdd?: boolean
  children?: React.ReactNode
  className?: string
  styles?: React.CSSProperties
  type?: "button" | "submit" | "reset"
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const CustomButton: React.FC<Props> = ({ children, isGoogle, isInverted, isAdd, onClick, type }) => (
  <button onClick={onClick} type={type} className={`${isGoogle ? "google-sign-in" : ""} ${isAdd ? "addStyle" : ""} ${isInverted ? "invertedButtonStyles" : "buttonStyles"}  custom-button`}>
    {children}
  </button>
)

export default CustomButton
