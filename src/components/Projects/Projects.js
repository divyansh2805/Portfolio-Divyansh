import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import ecg from "../../Assets/Projects/ecg.png";
import savarrior from "../../Assets/Projects/savarrior.jpg";
import bank from "../../Assets/Projects/bank.png";
import corona from "../../Assets/Projects/corona.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={savarrior}
              isBlog={false}
              title="Savarrior"
              description="Savarrior is a platform where animal rescuers and animal lovers can work together and save animals.It can handle a high value of traffic upto 200 users."
              ghLink="https://github.com/divyansh2805/Savarrior"
              demoLink="https://savarrior.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Bank-App"
              description="Banking Application with Spring Boot: Implemented a robust banking application leveraging Spring Boot, incorporating Command Query Responsibility Segregation (CQRS) for enhanced performance and scalability. Seamlessly manages transactions, accounts, and user interactions, ensuring secure and efficient banking operations."
              ghLink="https://github.com/divyansh2805/BANK_APP"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={corona}
              isBlog={false}
              title="Covid-19 Analysis"
              description="Conducted Covid-19 analysis using Python and Data Science techniques.We have employed Data Analysis methodologies to merge and analyze two datasets.And then we investigate spread of virus in two nations."
              ghLink="https://github.com/divyansh2805/Covid-19Analysis.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecg}
              isBlog={false}
              title="Read my ECG!"
              description="Developed a comprehensive tool to analyze 12-lead ECG data from CSV or XLSX files, extracting crucial metrics. Utilizing Django for an intuitive front-end interface, users can easily input files and obtain vital ECG values. Rigorously tested with over 100 files, yielding accurate and reliable results. Enhancing cardiac health assessment with efficiency and precision."
              ghLink="https://github.com/divyansh2805/READMYECG"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio-Divyansh"
              description="Welcome to my project portfolio website! Crafted with React, HTML, and CSS, this platform showcases my development journey and projects. Clean and modern design ensures easy navigation. Each project features detailed descriptions, technologies used, and demo links. Explore a diverse range of projects.Interested in collaboration or have questions?."
              ghLink="https://github.com/divyansh2805/Portfolio-Divyansh"
              demoLink="https://portfoliodivyansh.netlify.app/"
            />
          </Col>

          

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
