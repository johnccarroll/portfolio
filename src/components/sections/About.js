import { React } from "react";
import { Typography, useTheme } from "@mui/material";
import {
    StyledDivider, StyledGenericContainer, StyledGenericRoot, StyledGenericSubText, StyledGenericTitle,
} from "./Styles";
import "animate.css";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";

const About = () => {
    const theme = useTheme();
    const [aboutContainer, aboutContainerInView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <Scroll.Element name="About">
            <StyledGenericRoot>
                <StyledGenericContainer
                    style={{ overflow: "hidden" }}
                    ref={aboutContainer}
                    sx={aboutContainerInView ? { visibility: "visible" } : { visibility: "hidden" }}
                    className={aboutContainerInView ? "animate__animated animate__fadeInUp" : ""}
                >
                    <StyledGenericTitle component="h1" align="center" style={{ color: theme.palette.textMain.main }}>
                        About Me
                        <StyledDivider />
                    </StyledGenericTitle>
                    <StyledGenericSubText component="h1" align="center">
                        Hey there! My name is John. I am a dedicated and enthusiastic full-stack developer with a
                        passion for technology and problem-solving. Currently, I'm working as a Senior Analyst in
                        Application Development at CVS Health.
                    </StyledGenericSubText>
                    <br />
                    <StyledGenericSubText component="h1" align="center">
                        Outside my professional life, I am an online tutor, specializing in Computer Science,
                        through Wyzant. With a 5-star rating and over 100 students, I am passionate about
                        sharing my knowledge and helping others.
                    </StyledGenericSubText>
                    <br />
                </StyledGenericContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    );
};

export default About;