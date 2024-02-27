import "./TeamListingSection.css";
import Tilt from "react-parallax-tilt";
import React from "react";
import { useTheme } from "../../theme";
import {
  yashKamble,
  abhishekJS,
  abhishekvc,
  aditycp,
  anishtech,
  ashwikaPr,
  ayushtech,
  bhushanFin,
  dhruvmarketing,
  sakshiS,
  ishaniPR,
  mrunalPR,
  nishita,
  omkarD,
  parnika,
  ritik,
  ruchi,
  shravaniNk,
  tushar,
  vaibhavKore,
  vaibhavAg,
  vinay,
} from "../../assets/teams/index";

export const TeamListing = () => {
  const { theme } = useTheme();
  // const teamlist = [
  //   {
  //     id: 1,
  //     headname: "Aditya Ningule",
  //     headdesg: "Chairperson",
  //     img: aditycp,
  //   },
  //   {
  //     id: 2,
  //     headname: "Abhishek Gupta",
  //     headdesg: "Vice Chairperson",
  //     img: abhishekvc,
  //   },
  //   {
  //     id: 3,
  //     headname: "Sakshi Bisen",
  //     headdesg: "Secretary",
  //     img: sakshiS,
  //   },
  //   {
  //     id: 4,
  //     headname: "Abhishek Nagare",
  //     headdesg: "Joint Secretary",
  //     img: abhishekJS,
  //   },
  //   {
  //     id: 4,
  //     headname: "Vaibhav Kore",
  //     headdesg: "Technical Head",
  //     img: vaibhavKore,
  //   },
  //   {
  //     id: 4,
  //     headname: "Anish Gade",
  //     headdesg: "Technical Head",
  //     img: anishtech,
  //   },
  //   {
  //     id: 4,
  //     headname: "Ayush Tripathi",
  //     headdesg: "Technical Head",
  //     img: ayushtech,
  //   },
  //   {
  //     id: 4,
  //     headname: "Bhushan Jadhav",
  //     headdesg: "Head of Finance",
  //     img: bhushanFin,
  //   },
  //   {
  //     id: 4,
  //     headname: "Dhruv Hogade",
  //     headdesg: "Head of Marketing",
  //     img: dhruvmarketing,
  //   },
  //   {
  //     id: 4,
  //     headname: "Vinay Racha",
  //     headdesg: "Head of Marketing",
  //     img: vinay,
  //   },
  //   {
  //     id: 4,
  //     headname: "Vinay Racha",
  //     headdesg: "Head of Marketing",
  //     img: vinay,
  //   },

  //   {
  //     "Vaibhav Agarwal": {
  //       designation: "Head of Marketing",
  //       image: vaibhavAg,
  //     },
  //   },
  //   {
  //     "Yash Kamble": {
  //       designation: "Head of Marketing",
  //       image: yashKamble,
  //     },
  //   },
  //   {
  //     "Ruchi Bhanushali": {
  //       designation: "Head of Operations",
  //       image: ruchi,
  //     },
  //   },
  //   {
  //     "Shravani Nikam": {
  //       designation: "Head of Operations",
  //       image: shravaniNk,
  //     },
  //   },
  //   {
  //     "Tushar Kumare": {
  //       designation: "Head of Operations",
  //       image: tushar,
  //     },
  //   },
  //   {
  //     "Nishita Sanghavi": {
  //       designation: "Head of Creatives",
  //       image: nishita,
  //     },
  //   },

  //   {
  //     "Parnika Das": {
  //       designation: "Head of Creatives",
  //       image: parnika,
  //     },
  //   },
  //   {
  //     "Omkar Deshmukh": {
  //       designation: "Head of Creatives",
  //       image: omkarD,
  //     },
  //   },
  //   {
  //     "Ritik Singh": {
  //       designation: "Head of Creatives",
  //       image: ritik,
  //     },
  //   },
  //   {
  //     "Ashwika Iyer": {
  //       designation: "Head of Public Relations",
  //       image: ashwikaPr,
  //     },
  //   },
  //   {
  //     "Mrunal Jadhav": {
  //       designation: "Head of Public Relations",
  //       image: mrunalPR,
  //     },
  //   },
  //   {
  //     "Ishani Mathur": {
  //       designation: "Head of Public Relations",
  //       image: ishaniPR,
  //     },
  //   },
  //   {
  //     id: 1,
  //     headname: "Ayush Tripathi 2",
  //     headdesg: "Tech Head 2",
  //     img: "https://media.licdn.com/dms/image/D4D03AQEk9jMDPeowOg/profile-displayphoto-shrink_100_100/0/1671098673298?e=1703116800&v=beta&t=pprdZUFf12B_l5sQRFv7t8vkBZ-TNEaDtbisK_3axIM",
  //   },
  // ];
  const teamlist = [
    {
      id: 1,
      headname: "Aditya Ningule",
      headdesg: "Chairperson",
      img: aditycp,
    },
    {
      id: 2,
      headname: "Abhishek Gupta",
      headdesg: "Vice Chairperson",
      img: abhishekvc,
    },
    {
      id: 3,
      headname: "Sakshi Bisen",
      headdesg: "Secretary",
      img: sakshiS,
    },
    {
      id: 4,
      headname: "Abhishek Nagare",
      headdesg: "Joint Secretary",
      img: abhishekJS,
    },
    {
      id: 5,
      headname: "Vaibhav Kore",
      headdesg: "Technical Head",
      img: vaibhavKore,
    },
    {
      id: 6,
      headname: "Anish Gade",
      headdesg: "Technical Head",
      img: anishtech,
    },
    {
      id: 7,
      headname: "Ayush Tripathi",
      headdesg: "Technical Head",
      img: ayushtech,
    },
    {
      id: 8,
      headname: "Bhushan Jadhav",
      headdesg: "Head of Finance",
      img: bhushanFin,
    },
    {
      id: 9,
      headname: "Dhruv Hogade",
      headdesg: "Head of Marketing",
      img: dhruvmarketing,
    },
    {
      id: 10,
      headname: "Vinay Racha",
      headdesg: "Head of Marketing",
      img: vinay,
    },
    {
      id: 11,
      headname: "Vaibhav Agarwal",
      headdesg: "Head of Marketing",
      img: vaibhavAg,
    },
    {
      id: 12,
      headname: "Yash Kamble",
      headdesg: "Head of Marketing",
      img: yashKamble,
    },
    {
      id: 13,
      headname: "Ruchi Bhanushali",
      headdesg: "Head of Operations",
      img: ruchi,
    },
    {
      id: 14,
      headname: "Shravani Nikam",
      headdesg: "Head of Operations",
      img: shravaniNk,
    },
    {
      id: 15,
      headname: "Tushar Kumare",
      headdesg: "Head of Operations",
      img: tushar,
    },
    {
      id: 16,
      headname: "Nishita Sanghavi",
      headdesg: "Head of Creatives",
      img: nishita,
    },
    {
      id: 17,
      headname: "Parnika Das",
      headdesg: "Head of Creatives",
      img: parnika,
    },
    {
      id: 18,
      headname: "Omkar Deshmukh",
      headdesg: "Head of Creatives",
      img: omkarD,
    },
    {
      id: 19,
      headname: "Ritik Singh",
      headdesg: "Head of Creatives",
      img: ritik,
    },
    {
      id: 20,
      headname: "Ashwika Iyer",
      headdesg: "Head of Public Relations",
      img: ashwikaPr,
    },
    {
      id: 21,
      headname: "Mrunal Jadhav",
      headdesg: "Head of Public Relations",
      img: mrunalPR,
    },
    {
      id: 22,
      headname: "Ishani Mathur",
      headdesg: "Head of Public Relations",
      img: ishaniPR,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: theme.primary_background,
      }}
      className="product-card-container"
    >
      {teamlist.map((item2) => {
        const { id, headname, headdesg, img } = item2;

        return (
          <Tilt
            key={id}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={false}
            transitionSpeed={2000}
            scale={1.02}
          >
            <div className="product-card" style={{ width: 280 }} key={id}>
              <div className="product-card-image">
                <Tilt
                  transitionSpeed={2000}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  scale={1.2}
                >
                  <img
                    src={img}
                    style={{
                      flex: 1,
                      height: "100%",
                      width: "100%",
                      backgroundSize: "cover",
                    }}
                  />
                </Tilt>
              </div>

              <div className="product-card-details">
                <h3 style={{ color: theme.primary_text }}>{headname}</h3>
                <div className="price-container">
                  <p
                    style={{ color: theme.primary_text }}
                    className="discount-price"
                  >
                    {headdesg}
                  </p>
                </div>
              </div>

              <div className="product-card-buttons">
                <button
                  disabled={true}
                  onClick={() => alert("Clicked")}
                  style={{
                    backgroundColor: theme.primary_background,
                    color: theme.primary_text,
                  }}
                  className="cart-btn"
                >
                  Linkedin
                </button>
              </div>
            </div>
          </Tilt>
        );
      })}
    </div>
  );
};
