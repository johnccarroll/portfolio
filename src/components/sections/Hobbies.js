import React from "react";
import {
  useTheme,
  Typography,
  Grid,
  styled,
  useMediaQuery,
} from "@mui/material";
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericSubText,
  StyledGenericTitle,
} from "./Styles";
import hobbies from "../../content/hobbies.json";
import { useInView, InView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import "animate.css";

//Component styles
const StyledHobbiesGrid = styled(Grid)({
  padding: "2rem 0rem 2rem 0rem",
  justifyContent: "center",
  animation: "fadeInUp",
  animationDuration: "1.5s",
});
const StyledHobbiesGridTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(26px, 2vw, 30px) !important",
  color: theme.palette.textMain.main,
  textAlign: "center",
  marginTop: "1rem !important",
}));
const StyledHobbiesGridSubText = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(16px, 1.5vw, 18px) !important",
  color: theme.palette.textSecondary.main,
  textAlign: "center",
}));
const StyledHobbiesGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column !important",
  alignItems: "center",
  padding: "4rem 4rem 4rem 4rem !important",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 4rem 2rem 4rem !important",
  },
  textAlign: "center",
  color: theme.palette.textMain.main,
  minWidth: "33%",
  flexGrow: "1",
}));

//End component styles

const Hobbies = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("md"));

  const [hobbiesContainer, hobbiesContainerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
      <Scroll.Element name="Hobbies">
        <StyledGenericRoot ref={hobbiesContainer}>
          <StyledGenericContainer>
            <div
                style={
                  hobbiesContainerInView
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                }
                className={
                  hobbiesContainerInView
                      ? "animate__animated animate__fadeInUp"
                      : ""
                }
            >
              <StyledGenericTitle component="h1">
                Hobbies
                <StyledDivider />
              </StyledGenericTitle>
              <StyledGenericSubText component="h1">
                Here are some things that I do for fun!
              </StyledGenericSubText>
            </div>

            <StyledHobbiesGrid container spacing={1}>
              {hobbies.map((hobby) => (
                  <InView key={hobby.id} threshold={0.8} triggerOnce={true}>
                    {({ ref, inView }) => (
                        <StyledHobbiesGridItem item xs={12} sm={4} ref={ref}>
                          <div
                              style={
                                inView
                                    ? { visibility: "visible" }
                                    : { visibility: "hidden" }
                              }
                              className={
                                inView ? "animate__animated animate__fadeInUp" : ""
                              }
                          >
                            <img
                                src={hobby.imagePath}
                                alt={hobby.name}
                                width={sm ? hobby.smallWidth : hobby.largeWidth}
                                height={sm ? hobby.smallHeight : hobby.largeHeight}
                            />
                            <StyledHobbiesGridTitle>
                              {hobby.name}
                            </StyledHobbiesGridTitle>
                            <br />
                            <StyledHobbiesGridSubText>
                              {hobby.description}
                            </StyledHobbiesGridSubText>
                            <br />
                            <StyledHobbiesGridSubText>
                              {hobby.description2}
                            </StyledHobbiesGridSubText>
                            <br />
                          </div>
                        </StyledHobbiesGridItem>
                    )}
                  </InView>
              ))}
            </StyledHobbiesGrid>
          </StyledGenericContainer>
        </StyledGenericRoot>
      </Scroll.Element>
  );
};

export default Hobbies;
