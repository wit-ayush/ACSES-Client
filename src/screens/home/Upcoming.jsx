import * as React from "react";
import img from "../../assets/Opensource.jpg";
import deskImg from "../../assets/Opensource.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../theme";

export default function Upcoming() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <motion.div className="h-4/5 w-4/5 flex flex-col justify-center items-center p-4 shadow shadow-xl">
      <motion.div className="cardCompo h-full w-full flex flex-col justify-center items-center relative p-2">
        <motion.div
          style={{
            backgroundImage: `url(${window.innerWidth < 768 ? img : deskImg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backdropFilter: "blur(20px)",
          }}
          className="w-full h-3/5 flex flex-col justify-center items-center border border-2 border-white rounded"
        >
          <motion.div
            style={{
              display: "flex",
              flex: 1,
              width: "100%",
              backgroundColor: "rgba(0, 0, 0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <motion.div className="h-4/5 w-4/5 flex flex-col justify-end items-center">
              <motion.div className="flex flex-col justify-center items-center w-full">
                <motion.button
                  style={{ backgroundColor: "rgba(0, 0, 0,0.8)" }}
                  onClick={() => navigate("/Events")}
                  className="animate-this bg-none text-sm p-2 m-2 border border-2 border-white"
                >
                  <motion.strong>PREVIOUS EVENTS</motion.strong>
                </motion.button>
                <motion.button
                  className="animate-this bg-none p-2 m-2 text-sm border border-2 border-white"
                  style={{ backgroundColor: "rgba(0, 0, 0,0.9)" }}
                >
                  <a href="https://chat.whatsapp.com/JsjhwyVrtkT6Mb7sF65CuP">
                    <strong>REGISTER</strong>
                  </a>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="h-2/5 min-h-2/5 w-full p-2 flex flex-col items-center md:flex-row justify-between font-serif"
          style={{
            backgroundColor: theme.mode === "dark" ? "#334155" : "#cbd5e1",
            color: theme.primary_text,
          }}
        >
          <motion.div className="h-2/3 md:h-full w-full md:w-2/5 px-2 flex flex-col justify-center items-center text-center">
            <strong className="font-bold text:xl md:text-2xl ">
              🌐 ACSES Tech Odyssey!!!{"   "}
              {"   "}
              <small>28th Feb 2024</small>
            </strong>
          </motion.div>
          <motion.div
            id="description-para"
            className="h-2/3 md:h-full w-full md:w-3/5 px-2 flex flex-col justify-center items-center overflow-y-auto"
          >
            <motion.article className="h-full text-base md:text-lg indent-20 text-justify px-2">
              🌐 ACSES Tech Odyssey! 🚀 ✨This meticulously crafted event by the
              ACSES Committee is designed to arm students with priceless
              insights into the intricate world of hackathons—unveiling the
              "hows," "whys," and resolving all lingering doubts. 🚀 ⭐ Step
              outside the hackathon bubble and immerse yourself in the vibrant
              world of open source—an essential cornerstone in the dynamic realm
              of today's tech. Delve deep, stay ahead of the curve, and
              transform into a tech trailblazer, ready to shape tomorrow's
              digital frontier! 🚀 💡 Explore beyond hackathons and plunge into
              the open-source panorama—a pivotal pillar in today's ever-evolving
              tech industry. 🌟 Benefits: - 📚 Unlock the secrets of hackathons
              - 🤝 Connect with industry leaders and peers - 🌐 Explore the
              open-source frontier like GSOC - 🚀 Shape your future in
              technology To be updated about the same join :
              https://chat.whatsapp.com/JsjhwyVrtkT6Mb7sF65CuP 🌟 Don't settle
              for being a spectator; become a catalyst in shaping the future of
              technology! 🎤🚀🔧 📞 Contact: - 📧 Mrunal Jadhav: 7030556145 - 📧
              Ashwika Iyer: 8291137239 - 📧 Ishani Mathur: 7976201251 Don't miss
              the chance to shape your tech destiny—join us at ACSES Tech
              Odyssey! 🌐🚀🔧
            </motion.article>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
