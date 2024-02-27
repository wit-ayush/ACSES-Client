import React from "react";
import { useTheme } from "../../theme"; // Make sure to adjust the import path
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {
  slideAnimation,
  headTextAnimation,
  headContainerAnimation,
} from "../../config/motion";

const Contacts = () => {
  const { theme } = useTheme();
  const items = [
    {
      id: 1,
      title: "Aditya Ningule",
      subtitle: "Chairperson",
      num: "9604447767",
      mail: "aditya.ningule@spit.ac.in",
    },
    {
      id: 2,
      title: " Mrunal Jadhav",
      subtitle: "PR Head",
      num: "7030556145",
      mail: "",
    },
    {
      id: 3,
      title: "Ashwika Iyer",
      subtitle: "PR Head",
      num: "8291137239",
      mail: "",
    },
    {
      id: 4,
      title: "Ishani Mathur",
      subtitle: "PR Head",
      num: "7976201251",
      mail: "",
    },
  ];
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div
      id="parent-parent-container"
      className="w-screen h-screen justify-center flex flex-col items-center z-10"
    >
      <div className="h-4/5 w-full px-4 md:px-2 md:h-full md:w-full justify-center flex flex-col items-center z-100">
        <AnimatePresence>
          <motion.div
            key={"motion-parent"}
            {...slideAnimation("down")}
            className="h-full w-full md:h-3/5 md:w-4/5 flex flex-col justify-center items-center z-100"
          >
            <motion.h5
              {...headTextAnimation}
              key={"motion-first-header"}
              className="text-lg md:text-2xl font-bold text-center text-gray-400 mb-4 z-100"
            >
              Click to view
            </motion.h5>
            <motion.div
              // key={"motion-second-child"}
              {...slideAnimation("down")}
              id="parent-container"
              className="w-full h-3/5 md:h-full md:w-3/5 bg-indigo-900 flex space-between relative border border-white rounded-xl shadow-lg"
              style={{
                backgroundColor: "transparent",
                backdropFilter: "blur(3px)",
              }}
            >
              {items.map((item) => (
                <motion.div
                  className={`flex flex-col items-center justify-evenly absolute ${
                    item.id === 1
                      ? "top-5 left-5"
                      : item.id === 2
                      ? "top-5 right-5"
                      : item.id === 3
                      ? "bottom-5 left-5"
                      : "bottom-5 right-5"
                  } w-2/5 max-w-2/5 h-2/5 max-h-2/5 bg-violet-600 rounded-xl cursor-pointer shadow-md`}
                  layoutId={item.id}
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                >
                  <motion.h5>{item.subtitle}</motion.h5>
                  <motion.h2>{item.title}</motion.h2>
                </motion.div>
              ))}
              <AnimatePresence>
                {selectedItem && (
                  <motion.div
                    layoutId={selectedItem.id}
                    {...headContainerAnimation}
                    key={selectedItem.id}
                    transition={{ duration: 0.3 }}
                    style={{
                      color: "whitesmoke",
                      display: "flex",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      flexDirection: "column",
                      zIndex: 100,
                      backgroundColor: "hsla(242, 47%, 34%, 0.8)",
                      backdropFilter: "blur(5px)",
                    }}
                    className="background-blur rounded-2xl relative"
                  >
                    <motion.h5>{selectedItem.subtitle}</motion.h5>
                    <motion.h5>{selectedItem.title}</motion.h5>
                    <motion.p>{selectedItem.num}</motion.p>
                    <motion.p>{selectedItem.mail}</motion.p>
                    <motion.button
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "2px solid #fff",
                        borderColor: theme.primary_text,
                        cursor: "pointer",
                        borderRadius: "100%",
                      }}
                      className="absolute top-5 right-5"
                      onClick={() => setSelectedItem(null)}
                    >
                      <IconButton>
                        <Close
                          style={{
                            color: theme.primary_text,
                          }}
                        />
                      </IconButton>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <footer
        id="footer"
        className="flex flex-col justify-center items-center w-full bg-black text-white p-2"
      >
        <h3>Meet us at:</h3>
        <strong>Address: </strong>
        <p className="px-3">
          Bhartiya Vidya Bhavan's Sardar Patel Institue of Technology, Munshi
          Nagar, Andheri West, Mumbai
        </p>
      </footer>
    </div>
  );
};

export default Contacts;
