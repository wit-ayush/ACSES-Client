import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../../theme/index";
import logo from "../../assets/logo-removed.png";

import { useGlitch } from "react-powerglitch";

export function LogoHome() {
  const theme = useTheme().theme;

  const glitch = useGlitch({
    duration: 1000,
    iterationCount: Infinity,
    probability: 0.1,
    seed: 420,
  });
  return (
    <div
      className="mt-6 w-full flex flex-col justify-evenly items-center h-full py-10 z-10 bg-transparent"
      style={{
        color: theme.primary_text,
      }}
    >
      <div id="typing" className="w-4/5 h-2/5 text-xl md:text-4xl text-center">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Association of CSE students",
            1000,
            "Associate for knowledge & innovation",
            1000,
            "ACSES",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>
      <img
        src={logo}
        className="logoIMG w-[150px] md:w-[200px] z-100"
        alt="logo"
        ref={glitch.ref}
        onClick={glitch.startGlitch}
      />
    </div>
  );
}
