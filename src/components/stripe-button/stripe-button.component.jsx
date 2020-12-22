import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I109WC8jdImSBnlmMW5aPWw9gDql3fKfvy2WIWNBcXBgAPMXBqRb8xVrUDbxcsg1obyYsXkCAxiclXwEgbfZtd400FLNc5Klm';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful :)')
  }

  return(
    <StripeCheckout 
      label='Pay Now'
      name="My Fetch"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;