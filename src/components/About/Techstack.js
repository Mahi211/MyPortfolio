import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
    DiReact,
    DiPython,
    DiGit,
    DiMsqlServer,
} from "react-icons/di";
import {
    SiDotnet,
    SiBlazor,
    SiGithub,
    SiJupyter
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

const techStackData = [
    { icon: <TbBrandCSharp />, name: "C#" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <VscAzure />, name: "Azure" },
    { icon: <SiBlazor />, name: "Blazor" },
    { icon: <DiMsqlServer />, name: "SQL Server" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiJupyter />, name: "Jupyter Notebook" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiPython />, name: "Python" },
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

