import React from "react";
import { TeamListing } from "./TeamListing";
import "../events/events.css";

const Events = () => {
  return (
    <div className="w-full h-full page-container z-10 p-0 md:p-4">
      <TeamListing className="products-container" />
    </div>
  );
};

export default Events;
