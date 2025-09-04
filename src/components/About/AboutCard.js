import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamud Nur </span>
            from <span className="purple"> Stockholm, Sweden.</span>
            <br />
            Recently completed the course <span className="purple"><em>IBM: Building AI Solutions Using Advanced Algorithms and Open Source Frameworks.</em></span>
            <br />
            I have also studied Bsc in Business at Sodertorns
            University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work towards good to ensure greatness!"{" "}
          </p>
          <footer className="blockquote-footer">Mohamud Nur</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
