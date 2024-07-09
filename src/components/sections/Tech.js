import React from "react";
import { Typography, styled, Box, useTheme } from "@mui/material";
import {
    StyledDivider, StyledGenericContainer, StyledGenericRoot, StyledGenericSubText, StyledGenericTitle,
} from "./Styles";
import "animate.css";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";

// Importing all SVG icons
import adobexd from '../../assets/icons/adobexd.svg';
import angular from '../../assets/icons/angular.svg';
import aws from '../../assets/icons/aws.svg';
import azure from '../../assets/icons/azure.svg';
import bootstrap from '../../assets/icons/bootstrap.svg';
import css from '../../assets/icons/css.svg';
import dart from '../../assets/icons/dart.svg';
import docker from '../../assets/icons/docker.svg';
import express from '../../assets/icons/express.svg';
import figma from '../../assets/icons/figma.svg';
import firebase from '../../assets/icons/firebase.svg';
import flask from '../../assets/icons/flask.svg';
import flutter from '../../assets/icons/flutter.svg';
import git from '../../assets/icons/git.svg';
import html from '../../assets/icons/html.svg';
import javascript from '../../assets/icons/javascript.svg';
import jira from '../../assets/icons/jira.svg';
import kubernetes from '../../assets/icons/kubernetes.svg';
import mongo from '../../assets/icons/mongo.svg';
import node from '../../assets/icons/node.svg';
import notion from '../../assets/icons/notion.svg';
import postgres from '../../assets/icons/postgres.svg';
import react from '../../assets/icons/react.svg';
import restapis from '../../assets/icons/restapis.svg';
import springboot from '../../assets/icons/springboot.svg';
import sql from '../../assets/icons/sql.svg';
import trello from '../../assets/icons/trello.svg';
import typescript from '../../assets/icons/typescript.svg';

// Component styles
const StyledCategoryContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    animation: "fadeInUp",
    animationDuration: "1s",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
}));

const StyledCategoryBelt = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    marginTop: "1rem",
    width: "100%",
    gap: "0.5rem",
    justifyContent: "center",
}));

const StyledCategoryItem = styled("div")(({ theme }) => ({
    background: theme.palette.backgroundSecondary.main,
    borderRadius: "1rem",
    padding: "0.6rem",
    minWidth: "7.5rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    flex: "0 1 18%",
    [theme.breakpoints.down("md")]: {
        padding: "0.4rem",
        flex: "0 1 24%",
    },
    [theme.breakpoints.down("xs")]: {
        padding: "0.3rem",
        flex: "0 1 30%",
    },
}));

const StyledCategoryText = styled(Typography)(({ theme }) => ({
    fontSize: "1.2rem !important",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
        fontSize: "1rem !important",
    },
    [theme.breakpoints.down("xs")]: {
        fontSize: "0.8rem !important",
    },
}));

const techStack = {
    "Development": ["Flutter", "Dart", "Angular", "React", "Javascript", "Typescript", "HTML", "CSS", "Bootstrap"],
    "Server Side & Cloud": ["Spring Boot", "REST APIs", "Node", "Azure", "AWS"],
    "Containerization & Databases": ["Docker", "Kubernetes", "Firebase", "Postgres"],
    "Version Control & Management": ["Git", "Jira", "Trello", "Notion", "Figma"],
};

// Icon mapping
const iconMap = {
    "Flutter": flutter,
    "Dart": dart,
    "Angular": angular,
    "React": react,
    "Javascript": javascript,
    "Typescript": typescript,
    "HTML": html,
    "CSS": css,
    "Bootstrap": bootstrap,
    "Spring Boot": springboot,
    "REST APIs": restapis,
    "Node": node,
    "Azure": azure,
    "AWS": aws,
    "Docker": docker,
    "Kubernetes": kubernetes,
    "Firebase": firebase,
    "Postgres": postgres,
    "Git": git,
    "Jira": jira,
    "Trello": trello,
    "Notion": notion,
    "Figma": figma,
};

// End component styles

const Tech = () => {
    const theme = useTheme();
    const [techContainer, techContainerInView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <Scroll.Element name="Tech">
            <StyledGenericRoot>
                <StyledGenericContainer
                    style={{ overflow: "hidden" }}
                    ref={techContainer}
                    sx={techContainerInView ? { visibility: "visible" } : { visibility: "hidden" }}
                    className={techContainerInView ? "animate__animated animate__fadeInUp" : ""}
                >
                    <StyledGenericTitle component="h1" align="center" style={{ color: theme.palette.textMain.main }}>
                        Tech Stack
                        <StyledDivider />
                    </StyledGenericTitle>
                    {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
                        <Box key={categoryIndex} mb={4}>
                            <Typography variant="h6" align="center" style={{ color: theme.palette.textMain.main }}>{category}</Typography>
                            <StyledCategoryContainer>
                                <StyledCategoryBelt>
                                    {technologies.map((tech, techIndex) => (
                                        <StyledCategoryItem key={techIndex}>
                                            <img src={iconMap[tech]}
                                                 alt={`${tech} icon`}
                                                 width="30" height="30"/>
                                            <StyledCategoryText component="h1">
                                                {tech}
                                            </StyledCategoryText>
                                        </StyledCategoryItem>
                                    ))}
                                </StyledCategoryBelt>
                            </StyledCategoryContainer>
                        </Box>
                    ))}
                </StyledGenericContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    );
};

export default Tech;