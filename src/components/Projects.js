import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import photographyImg from "../assets/img/photographyImg.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import useInView from "../Hooks/useInView";
import { useEffect, useState } from "react";
import TshirtDesigningPic from "../assets/work/Wolf-Fx/5-2.jpg"
import PhotographyImg from "../assets/work/JewlsByAs/img1.jpg"

const Projects = () => {
  const [setRef, isInView] = useInView({
    threshold: 0.1, // Adjust the threshold as needed
  });
  const projects = [
    {
      title: "Photography",
      description:
        "A picture is a secret about a secret, the more it tells you the less you know.",
      imgUrl: PhotographyImg,
    },
    {
      title: "Tshirt Designing",
      description: "Design & Development",
      imgUrl: TshirtDesigningPic,
    },
    {
      title: "Social Media",
      description: "Design & Development",
      imgUrl: photographyImg,
    },
    {
      title: "Brand Store",
      description: "Design & Development",
      imgUrl: photographyImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: photographyImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: photographyImg,
    },
  ];

  const [onceInView, setOnceInView] = useState(false);
  useEffect(() => {
    if (onceInView === false) {
      if (isInView) {
        setOnceInView(true);
      }
    }
  });
  console.log(isInView);
  return (
    <section
      ref={setRef}
      className="project smooth-scroll-section"
      id="projects"
    >
      {(isInView || onceInView) && (
        <Container className="animated-container">
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Skills</h2>
                    {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container> */}
                    <Row className="skillsContainer">
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      )}
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};

export default Projects;
