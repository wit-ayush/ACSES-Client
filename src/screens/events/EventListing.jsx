import "./EventListingSection.css";
import Tilt from "react-parallax-tilt";
import React from "react";
import { useTheme } from "../../theme";
// import img from "../../assets/prevEvents"

export const EventListing = () => {
  const { theme } = useTheme();
  const names = {
    "2023-11-22": {
      title: "Mini project Exhibition",
      img: "mini_project.png",
    },
    "2023-10-23": {
      title: "CyberSaga",
      img: "cybersaga.jpg",
    },
    "2023-09-20": {
      title: "Engineers Caravaan",
      img: "e_g_c.png",
    },
    "2023-11-25": {
      title: "DBMS Bootcamp",
      img: "dbms_guest_lecture.png",
    },
    "2023-11-06": {
      title: "Cloud Computing Bootcamp",
      img: "cloud_bootcampt.png",
    },
    "2023-04-14": {
      title: "aiml bootcamp",
      img: "aimlbootcap.jpeg",
    },
    "2023-04-15": {
      img: "codeitout.jpeg",
      title: "Code it out",
    },
    "2023-04-14": {
      title: "javabootcamp",
      img: "javabootcamp.jpeg",
    },
    "2023-01-22": {
      title: "AcsesTreck",
      img: "treck.jpeg",
    },
    "2022-11-13": {
      title: "chess tournament",
      img: "chess.jpg",
    },
    "2022-11-19": {
      title: "Football Auction",
      img: "footballAuction.jpg",
    },
    "2022-02-12": {
      img: "iceCupFootball.jpg",
      title: "ice cup football",
    },
    "2022-02-12": {
      img: "icecupVolly.jpg",
      title: "ice cup vollyball",
    },
    "2022-02-13": {
      img: "turfcricket.jpg",
      title: "Ice cup cricket",
    },
    "2022-02-11": {
      img: "uiux.jpg",
      title: "UI/ux workshop",
    },
    "2022-02-04": {
      img: "codeitout22.jpg",
      title: "code it out",
    },
  };
  const eventslist = [];

  // Use Object.entries() to iterate through the original map
  Object.entries(names).forEach(([date, event]) => {
    // Generate an event object in the desired format
    const formattedEvent = {
      id: eventslist.length + 1, // Generate a unique ID, e.g., based on the array length
      eventname: event.title || "Event Name", // Use the title or a default name
      eventmonth: date, // Extract and format the month
      img: require(`../../assets/prevEvents/${event.img}`), // Replace with your image URL or hosting
    };

    // Push the formatted event to the transformedData array
    eventslist.push(formattedEvent);
  });

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: theme.primary_background,
      }}
      className="product-card-container"
    >
      {eventslist.map((product) => {
        const { id, eventname, eventmonth, img } = product;

        return (
          <Tilt
            key={product._id}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={false}
            transitionSpeed={2000}
            scale={1.02}
          >
            <div
              className="product-card w-[300px]"
              style={{ width: 350 }}
              key={id}
            >
              <div className="product-card-image">
                <Tilt
                  transitionSpeed={2000}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  scale={1.2}
                >
                  <img
                    style={{
                      flex: 1,
                      height: "100%",
                      width: "100%",
                      backgroundSize: "cover",
                    }}
                    src={img}
                  />
                </Tilt>
              </div>

              <div className="product-card-details">
                <h3
                  className="text-xl text-bold"
                  style={{ color: theme.primary_text }}
                >
                  {eventname}
                </h3>
                <div className="price-container">
                  <h6
                    style={{ color: theme.primary_text }}
                    className="text-base discount-price text-bold"
                  >
                    {eventmonth}
                  </h6>
                </div>
              </div>
            </div>
          </Tilt>
        );
      })}
    </div>
  );
};
