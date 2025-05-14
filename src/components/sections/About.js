import { React } from "react";
import { useTheme } from "@mui/material";
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
                        Hey there! I’m John, a full-stack developer who loves technology and problem-solving. Right now, I’m working as a Senior Software Development Engineer at CVS Health.
                    </StyledGenericSubText>
                    <br />
                    <StyledGenericSubText component="h1" align="center">
Beyond my professional life, I stay active through skiing, running, cycling, and weightlifting. I also have a passion for exploring new technologies and gadgets, and I’m an avid car enthusiast.                    </StyledGenericSubText>
                    <br />
                    <StyledGenericSubText component="h1" align="center">
                        I am also online tutor, specializing in Computer Science. With a 5-star rating and over 100 students, I am passionate about
                        sharing my knowledge and helping others.
                    </StyledGenericSubText>
                    <br />
                </StyledGenericContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    );
};

export default About;