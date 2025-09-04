import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
    DiReact,
    DiPython,
    DiGit,
    DiNodejs
} from "react-icons/di";
import {
    SiDotnet,
    SiGithub,
    SiOpenai,
    SiPostgresql
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

const techStackData = [
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiPython />, name: "Python" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiOpenai />, name: "OpenAi API" },
    { icon: <DiGit />, name: "Git" },
    { icon: <TbBrandCSharp />, name: "C#" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <VscAzure />, name: "Azure" },
];

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {techStackData.map((tech, index) => (
                <Col xs={4} md={2} className="tech-icons" key={index}>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
                    >
                        <div>{tech.icon}</div>
                    </OverlayTrigger>
                </Col>
            ))}
        </Row>
    );
}

export default Techstack;

