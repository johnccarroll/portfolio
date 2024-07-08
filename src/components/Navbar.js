import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import navbarData from "../content/navbar.json";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  Box,
  List,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  Slide,
  styled,
} from "@mui/material";
import { Link } from "react-scroll";

//Component Styles//
const StyledAppBarContainer = styled("div")(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  placeSelf: "center",
  justifyContent: "center",
  maxWidth: "1200px",
  width: "90vw !important",
  [theme.breakpoints.down("sm")]: {
    width: "100vw !important",
  },
}));
const StyledAppBar = styled(AppBar)(({ theme, isScrolled }) => ({
  transition:
    "all 0.4s cubic-bezier(0.645,0.045,0.355,1), background-color 0ms !important",
  transitionDelay: "0.1s",
  boxShadow: isScrolled
    ? "1px 0px 4px -1px rgb(0 0 0 / 20%), 0px 2px 20px 0px rgb(0 0 0 / 14%), 1px -1px 12px 0px rgb(0 0 0 / 12%) !important"
    : "none !important",
  backgroundColor: theme.palette.background.main + " !important",
  padding: isScrolled ? "0.5rem 5rem 0.5rem 5rem" : "2rem 5rem 2rem 5rem",
  [theme.breakpoints.down("sm")]: {
    padding: isScrolled ? "0.5rem 2rem 0.5rem 2rem" : "1rem 2rem 1rem 2rem",
  },
}));
const StyledAppBarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "& p": {
    color: theme.palette.textMain.main + " !important",
    transform: "none",
    transition: "transform 150ms ease-in-out 0s !important",
    cursor: "pointer",
    fontSize: "1.2rem",
    padding: "0.5rem",
    "&:hover": {
      color: theme.palette.textSecondary.main + " !important",
      transform: "translateY(-2px)",
    },
  },
}));
const StyledAppBarButton = styled(Button)(({ theme }) => ({
  padding: "10px 8px",
  color: theme.palette.textMain.main + " !important",
  transform: "none",
  transition: "transform 150ms ease-in-out 0s !important",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.textSecondary.main + " !important",
    transform: "translateY(-2px)",
  },
}));
const StyledAppBarDrawerLink = styled(Link)(({ theme }) => ({
  "& p": {
    animation: "fadeIn",
    animationDuration: "2s",
    color: theme.palette.textMain.main + " !important",
    cursor: "pointer",
    fontSize: "1.75rem",
    padding: "0",
    "&:hover": {
      color: theme.palette.textSecondary.main + " !important",
    },
  },
}));
const StyledResumeLink = styled("a")(({ theme }) => ({
  cursor: "pointer",
  textDecoration: "none",
  "& p": {
    borderRadius: "8px !important",
    padding: "0.25rem 0.5rem",
    fontSize: "1.2rem",
    backgroundColor: theme.palette.backgroundSecondary.main + " !important",
    color: "#FFFFFF",
    transition: "background-color 200ms ease-in-out 0s !important",
    "&:hover": {
      backgroundColor: theme.palette.buttonHover.main + " !important",
    },
  },
}));
const StyledDrawerIcon = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.textMain.main,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}));
const StyledDrawerCloseIcon = styled(CloseIcon)(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "1s",
  position: "fixed",
  top: "32px",
  right: "32px",
  color: theme.palette.textMain.main,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}));
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& div.MuiPaper-root": {
    background: "transparent",
    backdropFilter: "blur(10px)",
    height: "100vh !important",
    boxShadow: "none !important",
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.textMain.main,
    zIndex: "2 !important",
  },
}));
const StyledDrawerList = styled(List)(({ theme }) => ({
  display: "flex",
}));
//End component style//

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const MuiTheme = useTheme();
  const collapse = useMediaQuery(MuiTheme.breakpoints.down("sm"));

  //disable animations on appbar after they have animated once
  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true);
    }, 1000);
  }, []);

  //capture window scroll height for changing navbar styles
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //save the user's selected color theme choice
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  //hide the AppBar when scrolling down
  const trigger = useScrollTrigger({
    target: window,
  });

  const toggleDrawer = (isOpen) => (event) => {
    event.preventDefault();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(isOpen);
  };

  const drawer = (
    <>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          animation: !hasAnimated ? "fadeIn" : "",
          animationDuration: "2s",
        }}
      >
        <StyledDrawerIcon />
      </Button>

      <StyledDrawer
        anchor={"top"}
        variant="temporary"
        transitionDuration={1}
        disableScrollLock={true}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Button onClick={toggleDrawer(false)}>
          <StyledDrawerCloseIcon />
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <StyledDrawerList>
            <StyledResumeLink
              href={
                process.env.PUBLIC_URL +
                "/Maximilian Oberholtzer Resume 2023.pdf"
              }
              target="_blank"
            >
              <Typography
                sx={{
                  padding: "0.5rem 1rem !important",
                  fontSize: "1.75rem !important",
                  transition:
                    "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms ease-in-out 0s !important",
                  animation: "fadeIn",
                  animationDuration: "2s",
                }}
              >
                Resume
              </Typography>
            </StyledResumeLink>
          </StyledDrawerList>
          {navbarData.map((data) => (
            <StyledDrawerList key={data.id}>
              <StyledAppBarDrawerLink
                onClick={toggleDrawer(false)}
                to={data.name}
                smooth={true}
                duration={1000}
              >
                <Typography>{data.name}</Typography>
              </StyledAppBarDrawerLink>
            </StyledDrawerList>
          ))}
          <List>
            <Button
              sx={{
                color: MuiTheme.palette.textMain.main,
                animation: "fadeIn",
                animationDuration: "2s",
              }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
            </Button>
          </List>
        </Box>
      </StyledDrawer>
    </>
  );

  const navbar = (
    <>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <StyledAppBarButton
          aria-label="Change theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
        </StyledAppBarButton>
      </div>
      {navbarData.map((data) => (
        <div
          key={data.id}
          className={
            !hasAnimated ? "animate__animated animate__fadeInDown" : ""
          }
        >
          <StyledAppBarLink
            href={`#${data.name}`}
            to={data.name}
            smooth={true}
            duration={1000}
          >
            <Typography>{data.name}</Typography>
          </StyledAppBarLink>
        </div>
      ))}
      <div
        style={{ paddingLeft: "4px" }}
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <StyledResumeLink
          href={
            process.env.PUBLIC_URL + "/John-Carroll-Resume.pdf"
          }
          target="_blank"
        >
          <Typography>Resume</Typography>
        </StyledResumeLink>
      </div>
    </>
  );

  return (
  <Slide appear={false} direction="down" in={!trigger}>
    <StyledAppBar position="fixed" isScrolled={isScrolled}>
      <StyledAppBarContainer>
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
            }}
          >
            <svg
              viewBox="0 0 130 50"
              style={{
                width: "100px",
                height: "50px", // Adjust the height to match the new SVG aspect ratio
                animation: !hasAnimated
                  ? collapse
                    ? "fadeIn"
                    : "fadeInDown"
                  : "",
                animationDuration: collapse ? "2s" : "1s",
              }}
            >
              <g
                style={{
                  fill: "none",
                  stroke: MuiTheme.palette.textMain.main,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
                transform="matrix(1.435701,0,0,1.6553562,-107.1174,-60.879264)"
              >
                <g transform="translate(73.6666,61.9764)">
                  <path
                    d="M 498,183 129,343 554,504"
                    style={{ strokeWidth: "0.7382in" }}
                    transform="scale(0.0352777,-0.0352777)"
                  />
                  <path
                    d="m 113,101 22,-38 35,-28.4 47,-18.8 67,9.4 66,40.9 37,59.9 16,47 85,482"
                    style={{ strokeWidth: "0.7382in" }}
                    transform="matrix(0.0352777,0,0,-0.0352777,17.78,0)"
                  />
                  <path
                    d="m 551,97.6 -75,-50.4 -92,-31.4 -88,12.6 -72,44 -51,75.6 -19,79 13,119 28,111 57,91 76,69 78,35 85,6 73,-15 41,-32 12,-19"
                    style={{ strokeWidth: "0.7382in" }}
                    transform="matrix(0.0352777,0,0,-0.0352777,34.9955,0)"
                  />
                  <path
                    d="M 34.6,-142 485,709"
                    style={{ strokeWidth: "0.7382in" }}
                    transform="matrix(0.0352777,0,0,-0.0352777,55.774,0)"
                  />
                  <path
                    d="M 104,183 529,346 161,504"
                    style={{ strokeWidth: "0.7382in" }}
                    transform="matrix(0.0352777,0,0,-0.0352777,69.2148,0)"
                  />
                </g>
              </g>
            </svg>
          </Typography>
          {collapse ? drawer : navbar}
        </Toolbar>
      </StyledAppBarContainer>
    </StyledAppBar>
  </Slide>
);
};

export default Navbar;
