import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function Donate() {
  const [product] = React.useState({
    name: "Help a Developer",
    price: 1,
    description: "Thank you!"
  });

  async function handleToken(token, addresses) {
    console.log({token, addresses})
    const response = await axios.post(
      "http://localhost:3007/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>{product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_reJ1gPlT5b6yX5bGa5byalsA000zHz5Qqq"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </div>
  );
}
