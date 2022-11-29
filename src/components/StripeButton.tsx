import React from "react"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"

type Props = {
  price: number
}

function StripeButton(props: Props) {
  const priceForStripe = props.price * 100
  const publishableKey = "pk_test_51M9W07AjbMbDfpGhvuCXLtbO0C12gbityqRMjUiIMoSboaMt4Zb7xjVE7ra5nReG3G6D28YpXmom6TkDSH054MHJ00V8QxKVQ0"

  const onToken = (token: any) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment")
      })
      .catch((error) => {
        console.log("Payment Error: ", error)
        alert("There was an issue with your payment! Please make sure you use the provided credit card.")
      })
  }
  return <StripeCheckout label="Pay Now" name="E-Store Proj" billingAddress shippingAddress image="https://svgur.com/i/oSN.svg" description={`Your total is $${props.price}`} amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey} />
}

export default StripeButton
