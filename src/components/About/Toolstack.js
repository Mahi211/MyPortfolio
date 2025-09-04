import React from "react";
import { Col, Row, OverlayTrigger, Tooltip} from "react-bootstrap";
import {
  SiVisualstudio,
  SiPostman,
  SiGithubactions,
  SiSupabase,
  SiDocker,
} from "react-icons/si";

const toolStackData = [
    { icon: <SiVisualstudio />, name: "Visual Studio" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiSupabase />, name: "Supabase" },
];

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {toolStackData.map((tool, index) => (
                <Col xs={4} md={2} className="tech-icons" key={index}>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
                    >
                        <div>{tool.icon}</div>
                    </OverlayTrigger>
                </Col>
            ))}
        </Row>
    );
}

export default Toolstack;
