import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
/*  let date = new Date();*/
/*  let year = date.getFullYear();*/
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/*add information here if needed*/}
        </Col>
        <Col md="4" className="footer-copywright">
          {/*<h3> add copy if needed </h3>*/}
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/mahi211"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohamud-nur-2243481ba/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
