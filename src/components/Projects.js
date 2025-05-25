import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import photographyImg from "../assets/img/photographyImg.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import useInView from "../Hooks/useInView";
import { useEffect, useState } from "react";
import TshirtDesigningPic from "../assets/work/Wolf-Fx/5-2.jpg";
import PhotographyImg from "../assets/work/JewlsByAs/img1.jpg";
import BrandStoreCover from "./Skills/BrandStore/Media/cover.png";
import SocialMediaCover from "./ReelsSkills/Media/Cover.jpg";
import BaatenCover from "../assets/img/baaten-cover.png";

const Projects = () => {
  const [setRef, isInView] = useInView({
    threshold: 0.1, // Adjust the threshold as needed
  });
  const projects = [
    {
      title: "Photography",
      description:
        "My photos aim to tell a story while keeping things real and honest. For me, simplicity is the key.  I strive to highlight the authenticity of objects rather than making them appear extraordinary.",
      imgUrl: PhotographyImg,
    },
    {
      title: "Social Media",
      description:
        "Social media is my playground. Whether I’m jumping on a trend or coming up with something totally fresh, I always find ways to make things pop. I love creating content that’s fun, meaningful, and true to a brand’s vibe. Reels, posts, stories—you name it, I’m here to make it happen while keeping the brand’s heart at the center.",
      imgUrl: SocialMediaCover,
    },
    {
      title: "Brand Store",
      description:
        "Optimizing brand stores on platforms like Amazon, enhancing the customer’s shopping experience. I’ve worked on designing visually appealing layouts, improving product descriptions to drive engagement and sales.",
      imgUrl: BrandStoreCover,
    },
    {
      title: "Apparel Designing",
      description:
        "Who knew that my love for clothes would turn into actually designing them? Getting to work on activewear has been amazing. It’s like mixing style with function and creating outfits that make you feel ready to take on the world.",
      imgUrl: TshirtDesigningPic,
    },
    {
      title: "बातें",
      description:
        "This segment is where I let my creativity flow without boundaries and try to create a conversation with my art.",
      imgUrl: BaatenCover,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: photographyImg,
    // },
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
    </section>
  );
};

export default Projects;
