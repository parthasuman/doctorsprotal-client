import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/clock.svg";
import Infocard from "./Infocard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00 pm everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Our Locations",
      description: "Open 9.00 am to 5.00 pm everyday",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "Open 9.00 am to 5.00 pm everyday",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid mt-24 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardData.map((card) => (
        <Infocard key={card.id} card={card}></Infocard>
      ))}
    </div>
  );
};

export default InfoCards;