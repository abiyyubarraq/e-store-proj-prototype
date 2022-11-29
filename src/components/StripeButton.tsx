import React from "react"
import StripeCheckout from "react-stripe-checkout"

type Props = {
  price: number
}

function StripeButton(props: Props) {
  const priceForStripe = props.price * 100
  const publishableKey = "pk_test_51M9W07AjbMbDfpGhvuCXLtbO0C12gbityqRMjUiIMoSboaMt4Zb7xjVE7ra5nReG3G6D28YpXmom6TkDSH054MHJ00V8QxKVQ0"

  const onToken = (token: any) => {}
  return <StripeCheckout label="Pay Now" name="E-Store Proj" billingAddress shippingAddress image="https://svgur.com/i/oSN.svg" description={`Your total is $${props.price}`} amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey} />
}

export default StripeButton
