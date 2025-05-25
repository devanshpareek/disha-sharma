import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const navigate = useNavigate();
  return (
    <Col
      style={{
        padding: "1rem",
      }}
      size={12}
      sm={6}
      md={4}
    >
      <div
        onClick={() => {
          navigate(`/skills/${title.split(" ").join("-").toLowerCase()}`);
        }}
        className="proj-imgbx"
      >
        <div className="project-card">
          <div className={"project-cardInner"}>
            <div className={"project-cardBack"}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>{description}</div>
              </div>
            </div>
            <div className={"project-cardFront"}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={imgUrl}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>{title}</h4>

    </Col>
  );
};
