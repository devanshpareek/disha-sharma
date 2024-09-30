import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import handWaveVdo from "../assets/Videos/contact-me.gif";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import temp from "../assets/img/reachout.gif"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isWorkPage, setIsWorkPage] = useState(
    window.location.pathname.includes("my-work")
  );

  useEffect(() => {
    setIsWorkPage(window.location.pathname.includes("my-work"));
  }, [window.location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar
        expand="md"
        className={
          isWorkPage ? "scrolled scrolled--work" : scrolled ? "scrolled" : ""
        }
      >
        <Container>
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              justifyContent: "center",
            }}
          >
            <Nav
              style={{
                marginLeft: 0,
              }}
            >
              <Nav.Link
                href={isWorkPage ? "/" : "#home"}
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href={isWorkPage ? "/" : "#skills"}
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href={isWorkPage ? "/" : "#myWorld"}
                className={
                  activeLink === "myWorld"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("myWorld")}
              >
                My World
              </Nav.Link>
              <Nav.Link
                href={isWorkPage ? "/" : "#my-work"}
                className={
                  activeLink === "my-work"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("my-work")}
              >
                My Work
              </Nav.Link>
              <Nav.Link
                href={isWorkPage ? "/" : "#projects"}
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                बातें
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a className="nav-link" href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a className="nav-link" href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a className="nav-link" href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
          <div>
            <img className="hand-wave" src={temp}></img>
          </div>
        </Container>
      </Navbar>
    </Router>
  );
};
