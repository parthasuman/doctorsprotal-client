import React from "react";
import Testimonial from "../../Testimonial/Testimonial";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
