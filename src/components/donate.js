import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import Slider from '@material-ui/core/Slider';


import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function Donate() {

  // const [product, setProduct] = React.useState({
  //   name: "Your contribution supports the future of NYC developers community. Hawkathon couldn't exist without your support. We attract bright software engineers from around the country, encouraging them to learn and build in a mentorship-focused environment. ",
  //   price: 1,
  //   description: "Thank you!"
  // });


  const [iname, setIName] = React.useState("Your contribution supports the future of NYC developers community. Hawkathon couldn't exist without your support. We attract bright software engineers from around the country, encouraging them to learn and build in a mentorship-focused environment. ");
  const [iprice, setIPrice] = React.useState(1);
  const [idescription, setIDescription] = React.useState("Thank you!");

  const product = {name: iname, price: iprice, description: idescription}


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
          value={iprice}
          onChange={(e, value) => setIPrice(value)}
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
