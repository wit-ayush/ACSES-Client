import * as React from "react";
import IMG from "../../assets/logo-removed.png";
import "./index.css";
import { ReactNavbar } from "overlay-navbar";
import "overlay-navbar/dist/lib/ReactNavbar.min.css";
import { useTheme } from "../../theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
export default function TemporaryDrawer(props) {
  const { theme } = useTheme();
  var navColor1, navColor2, navColor3, navColor4;
  if (theme.mode === "dark") {
    navColor1 = "rgb(18, 10, 53)";
    navColor2 = "rgb(18, 20, 63)";
    navColor3 = "rgb(23, 21, 69)";
    navColor4 = "rgb(30, 27, 75)";
  } else {
    navColor1 = "#E6DCFF";
    navColor2 = "#ddd6fe";
    navColor3 = "#D2CBF0";
    navColor4 = "#CDCDE6";
  }

  useEffect(() => {
    const toggleBTN = document.querySelector(".menuBurger");
    if (toggleBTN) {
      toggleBTN.classList.add("improvedBurger");
    }
    return () => {
      toggleBTN?.classList?.remove("improvedBurger");
    };
  }, []);

  return (
    <div id="navbar-container">
      <ReactNavbar
        link1Decoration="bold"
        navColor1={navColor1}
        navColor2={navColor2}
        navColor3={navColor3}
        navColor4={navColor4}
        link1Color={"rgb(255,255,255)"}
        link2Color={"rgb(255,255,255)"}
        link3Color={"rgb(255,255,255)"}
        link4Color={"rgb(255,255,255)"}
        link1Margin="2rem"
        link1Size="2rem"
        burgerColor="crimson"
        link1Text="HOME"
        link1Url="/"
        link4Text="CONTACTS"
        link4Url="/contacts"
        link2Text="EVENTS"
        link2Url="/events"
        link3Text="TEAM"
        link3Url="/team"
        logo={IMG}
        logoWidth="50%"
      />
    </div>
  );
}
export function ThemeIco() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="z-100">
      <div className="absolute right-8 top-10 z-100 w-fit h-fit">
        <IconButton
          onClick={toggleTheme}
          style={{ color: theme.primary_text, zIndex: 100 }}
        >
          {theme.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </div>
    </div>
  );
}
