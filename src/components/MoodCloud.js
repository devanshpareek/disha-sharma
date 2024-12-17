import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import profileImage from "../assets/img/DishaImage.jpg";
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
          justifyContent: "center",
        }}
      >
        <Row>
          <Col>
            <div className="profile-container">
              <div className="profile-image-wrapper">
                <img className="profile-image" src={profileImage}></img>
              </div>
              <div className="profile-content">
                I'm a digital storyteller who turns ideas into compelling
                content. With a passion for creativity and a knack for
                understanding people and life, I transform brands into stories
                that resonate. My focus is on building authentic connections
                with your target audience. I've had the pleasure of working with
                diverse clients across various industries, from home decor and
                accessories to wellness and lifestyle. Ready to bring your
                brand's story to life? Let's chat! Explore my portfolio to see
                my work in action.
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
