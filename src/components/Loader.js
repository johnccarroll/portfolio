import { React, useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material";
import { motion } from "framer-motion";
import "animate.css";

// Component styles
const StyledLoaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "fixed",
  backgroundColor: theme.palette.background.main,
}));

// End Component styles

const pathVariants = (delay) => ({
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
      delay,
    },
  },
});

const Loader = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 1800);
  }, []);

  return (
    <StyledLoaderContainer>
      <div className={hasLoaded ? "animate__animated animate__fadeOut" : ""}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 200"  // Updated viewBox to fit all characters
          width="40rem"  // Adjusted width
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M 498,183 129,343 554,504"
            transform="translate(50.000000,136.000000) scale(0.200000,-0.200000)"  // Adjusted translate for centering
            fill="none"
            stroke={theme.palette.textMain.main}
            strokeWidth="50"
            variants={pathVariants(0)}
          />
          <motion.path
            d="m 113,101 22,-38 35,-28.4 47,-18.8 67,9.4 66,40.9 37,59.9 16,47 85,482"
            transform="translate(180.000000,136.000000) scale(0.200000,-0.200000)"  // Adjusted translate for centering
            fill="none"
            stroke={theme.palette.textMain.main}
            strokeWidth="50"
            variants={pathVariants(0.25)}
          />
          <motion.path
            d="m 551,97.6 -75,-50.4 -92,-31.4 -88,12.6 -72,44 -51,75.6 -19,79 13,119 28,111 57,91 76,69 78,35 85,6 73,-15 41,-32 12,-19"
            transform="translate(310.000000,136.000000) scale(0.200000,-0.200000)"  // Adjusted translate for centering
            fill="none"
            stroke={theme.palette.textMain.main}
            strokeWidth="50"
            variants={pathVariants(0.25)}
          />
          <motion.path
            d="M 34.6,-142 485,709"
            transform="translate(440.000000,136.000000) scale(0.200000,-0.200000)"  // Adjusted translate for centering
            fill="none"
            stroke={theme.palette.textMain.main}
            strokeWidth="50"
            variants={pathVariants(0.5)}
          />
          <motion.path
            d="M 104,183 529,346 161,504"
            transform="translate(570.000000,136.000000) scale(0.200000,-0.200000)"  // Adjusted translate for centering
            fill="none"
            stroke={theme.palette.textMain.main}
            strokeWidth="50"
            variants={pathVariants(0.5)}
          />
        </motion.svg>
      </div>
    </StyledLoaderContainer>
  );
};

export default Loader;