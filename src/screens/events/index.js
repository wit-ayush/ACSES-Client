import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { useTheme } from "../../theme";
import { EventListing } from "./EventListing";
import "./events.css";

const Events = () => {
  const window = useWindowSize();
  const { theme } = useTheme();

  return (
    <div className="page-container z-10 p-2 md:p-4">
      <EventListing className="products-container" />
    </div>
  );
};

export default Events;
