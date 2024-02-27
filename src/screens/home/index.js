import React from "react";
import { useTheme } from "../../theme"; // Make sure to adjust the import path
import useWindowSize from "../../hooks/useWindowSize";
import {
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import Upcoming from "./Upcoming";
import { LogoHome } from "./LogoHome";
import { useInView } from "framer-motion";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { slideAnimation } from "../../config/motion";
import { useRef } from "react";
import "./index.css";

const Home = () => {
  const ref = useRef(null);
  const inview = useInView(ref);

  const { theme } = useTheme();
  const windowSize = useWindowSize();
  return (
    <motion.div
      ref={ref}
      style={{
        flex: 1,
        display: "block",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        zIndex: 10,
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          transform: inview ? "none" : "translateX(-200px)",
          opacity: inview ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <motion.div
          key="first"
          id="scene"
          className="w-full flex flex-col justify-evenly items-center bg-transparent"
          style={{ height: "70vh" }}
        >
          <LogoHome />
        </motion.div>
        <motion.div className="flex flex-col justify-center h-1/5 items-center p-2 bg-transparent z-10">
          <div
            className="text-center md:text-2xl leading-relaxed md:px-2 md:w-3/5 bg-transparent"
            style={{
              color: theme.primary_text,
            }}
          >
            <h1 className="mb-4 md:mb-16 text-2xl">
              Association of Computer Science and Engineering Students
            </h1>
            <article>
              Welcome to the official webpage of ACSES (formerly known as ITSA),
              the Techno-cultural committee and Home committee for the students
              of the IT, AI/ML, DS, and MCA departments within the Computer
              Science and Engineering (CSE) domain. ACSES is dedicated to
              fostering the growth and development of students within our
              department. We strive to create a vibrant and inclusive community
              by organizing a diverse range of events. From technical workshops
              and coding competitions to cultural fun events, ACSES offers a
              platform for students to enhance their skills, explore their
              passions, and connect with like-minded individuals. Join us in our
              mission to inspire creativity, innovation, and personal growth
              within the realm of technology and culture.
            </article>
          </div>
        </motion.div>

        <motion.h1
          style={{
            color: theme.primary_text,
          }}
          className="text-center text-4xl align-center font-bold mt-8 w-full z-100 animate-pulse"
        >
          UPCOMING
        </motion.h1>
        <motion.div
          {...slideAnimation("down")}
          id="upcoming"
          className="h-screen w-full  flex flex-col justify-center items-center bg-inherit p-0 md:p-2"
        >
          <Upcoming />
        </motion.div>
        <footer className="flex flex-col justify-evenly items-center p-4 bg-gray-600">
          <div className="text-center items-center">
            <h1 className="text-white text-2xl">ACSES</h1>
          </div>
          <div className="w-2/5 flex flex-row justify-around items-center pb-4">
            <IconButton href="https://www.instagram.com/acses.spit/">
              <Instagram />
            </IconButton>
            <IconButton href="https://www.linkedin.com/company/itsa-s-p-i-t/">
              <LinkedIn />
            </IconButton>
          </div>
          <div className="w-3/5 text-white items-center text-center">
            Developed by{" "}
            <strong>
              <a className="w-4/5 text-blue-400" href="#">
                Anish Gade
              </a>
            </strong>
            {", "}
            <strong>
              <a
                className="w-4/5 text-blue-400"
                href="https://www.linkedin.com/in/vaibhav-kore-9ab28922a/"
              >
                Vaibhav Kore
              </a>
            </strong>{" "}
            and{" "}
            <strong>
              <a className="w-4/5 text-blue-400" href="#">
                Ayush Tripathi
              </a>
            </strong>{" "}
          </div>
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default Home;
