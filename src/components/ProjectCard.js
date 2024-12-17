import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const navigate = useNavigate();
  return (
    <Col size={12} sm={6} md={4}>
      <div
        onClick={() => {
          navigate(`/skills/${title.split(" ").join("-").toLowerCase()}`);
        }}
        className="proj-imgbx"
      >
        <div className="project-card">
          <div className={"project-cardInner"}>
            <div className={"project-cardFront"}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>{title}</h4>
              </div>
            </div>
            <div className={"project-cardBack"}>
              <div
                style={{
                  height: "100%",
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
    </Col>
  );
};
