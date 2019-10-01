import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import Slider from '@material-ui/core/Slider';


import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function Donate() {

  const [product, setProduct] = React.useState({
    name: "Your contribution supports the future of NYC developers community. Hawkathon couldn't exist without your support. We attract bright software engineers from around the country, encouraging them to learn and build in a mentorship-focused environment. ",
    price: 0,
    description: "Thank you!"
  });

  const [name, setName] = React.useState("Help a Developer");
  const [price, setPrice] = React.useState(0);
  const [description, setDescription] = React.useState("Thank you!");

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
    <div className="container-donate">
      <div className="product-donate">
        <h1>{product.name}</h1>
      </div>
      <div className="slider-donate">
        <Slider
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          value={price}
          onChange={(e, value) => setPrice(value)}
        />
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
