import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TierList from "../../Assets/Projects/TierList.png";
import IMS from "../../Assets/Projects/TestIMS.png";
import ChatBot from "../../Assets/Projects/ChatBot.png";  // Adjust the path if necessary


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
              imgPath={TierList}
              isBlog={false}
              title="FPL Tier List"
              description="A Fantasy Premier League tool built with Blazor and Azure, featuring a dynamic AI-powered tier list for ranking players based on upcoming gameweeks. Uses real-time FPL data and position-based rankings. Currently being redesigned with a more intuitive and visually appealing UI using Lovable."
              ghLink="https://github.com/Mahi211/FPLStaticWebApp"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IMS}
              isBlog={false}
              title="Inventory Management System (IMS)"
              description="C#/.NET inventory management system showcasing a use-case driven architecture for maintainability and scalability.  Improved efficiency through real-time inventory tracking and automated transactions. View the code and documentation on GitHub."
              ghLink="https://github.com/mahi211/ims"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatBot}
              isBlog={false}
              title="Crypto Helper"
              description="In Progress: An AI chatbot that provides real-time cryptocurrency prices, trends, and news. It also helps beginners understand crypto concepts in a simple and easy-to-follow way. Built using .NET, React, and Azure Functions."
              ghLink=""  
              demoLink=""  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
