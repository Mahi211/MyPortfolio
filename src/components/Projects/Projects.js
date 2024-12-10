import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="FPL Tier List"
              description="A Fantasy Premier League tool built with Blazor and Azure, featuring a dynamic tier list system for ranking players. Uses real-time data from the FPL API to calculate player ratings and tiers (S+ to F) based on performance metrics for upcoming gameweeks. Includes position-based rankings and a clean, responsive UI."
              ghLink="https://github.com/Mahi211/FPLStaticWebApp"
              demoLink="https://proud-smoke-04f912f03.5.azurestaticapps.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Inventory Management System (IMS)"
              description="C#/.NET inventory management system showcasing a use-case driven architecture for maintainability and scalability.  Improved efficiency through real-time inventory tracking and automated transactions. View the code and documentation on GitHub."
              ghLink="https://github.com/mahi211/ims"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
