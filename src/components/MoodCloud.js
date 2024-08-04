import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import profileImage from "../assets/img/camera-img.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Wordcloud } from "./WordCloud";

// green : #4a513e
// blue: #b46849
// pink :#b59e59
const words = [
  {
    text: "Dancing",
    value: 1,
    color: "#b46849",
  },
  {
    text: "Spread love",
    value: 1,
    color: "#b59e59",
  },
  {
    text: "Sketching",
    value: 1,
    color: "#4a513e",
  },
  {
    text: "Journaling",
    value: 1,
    color: "#b46849",
  },
  {
    text: "Conversations",
    value: 1,
    color: "#b59e59",
  },
  {
    text: "Painting",
    value: 1,
    color: "#4a513e",
  },
  {
    text: "Art",
    value: 1,
    color: "#b59e59",
  },
  {
    text: "Artist",
    value: 1,
    color: "#4a513e",
  },
  {
    text: "Nature",
    value: 1,
    color: "#4a513e",
  },
  {
    text: "Animals",
    value: 1,
    color: "#b46849",
  },
  {
    text: "Flowers",
    value: 1,
    color: "#b59e59",
  },
  {
    text: "Stretching",
    value: 1,
    color: "#b46849",
  },
  {
    text: "Reading",
    value: 1,
    color: "#4a513e",
  },
  {
    text: "Psychology",
    value: 1,
    color: "#4a513e",
  },
  {
    text: "Filming",
    value: 1,
    color: "#b59e59",
  },
];

export const MoonCloud = () => {
  return (
    <section className="project" id="mywork">
      <Container
        style={{
          display: "flex",
          justifyContent:'center'
        }}
      >
        <Row>
          <Col>
            <div className="profile-container">
              <div className="profile-image-wrapper">
                <img className="profile-image" src={profileImage}></img>
              </div>
              <div className="profile-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </Col>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Mood Cloud</h2>
                  <Wordcloud words={words} />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
