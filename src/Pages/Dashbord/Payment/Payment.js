import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../Shared/Loading/Loading";

const stripePromise = loadStripe(
  "pk_test_51M671rJZylc1J1HpM7DGPP7HjUWNKn19r5f0FdzymAARh0C0SaPgKlbP6Wem18NGDZojt6ApXJrL3ijv9uPD33PG00P9mCpJI7"
);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-3xl">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
