//React
import React from "react";
//Stripe
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey =
    "pk_test_51I7EpNGtLIt6um2qQSRitK16zmYkbx5hZuR6cB7woWvjaoLgZvcgDszb1Vr2X4UWIFd0xn7vh2hlsLYX5mHiLf4100ro5uzHyF";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      // image='https://svgshare.com/i/CUz.svg'
      description={`Your total payment is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
