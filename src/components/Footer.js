import React, { useRef } from "react";
import "./Footer.css"; // External CSS for styling
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/whatsappicon.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "@emailjs/browser";

export const theme = {
  type: "dark",
  primary: "#545fc4",
  primary400: "#6e76c7",
  primary600: "#3644c9",
  primary80: "#545fc4cc",
  primary50: "#545fc480",
  primary30: "#545fc44d",
  secondary: "#212121",
  secondary70: "#212121b3",
  secondary50: "#21212180",
  tertiary: "#eaeaea",
  tertiary80: "#eaeaeacc",
  tertiary70: "#eaeaeab3",
  tertiary50: "#eaeaea80",
};

const Footer = () => {
  const form = useRef();
  const handleContactForm = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_s85f3vd", "template_17rix9q", form.current, {
        publicKey: "5IZr2jFeTioV0ECDe",
      })
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("OOPS, Something went wrong ", error);
        }
      );
  };
  const useStyles = makeStyles((t) => ({
    input: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    message: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    label: {
      backgroundColor: `${theme.secondary}`,
      color: `${theme.primary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 600,
      fontSize: "0.9rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
      display: "inline-flex",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "21px",
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    detailsIcon: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      transition: "250ms ease-in-out",
      flexShrink: 0,
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    submitBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.08)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
  }));

  const classes = useStyles();
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-content-heading">
          <h1>
            The <span>‘EARTH’</span> without <span>‘ART’</span> is just ‘EH’
          </h1>
        </div>
        <div className="footer-content-details-wrapper">
          <div className="contacts-form">
            <form ref={form} onSubmit={handleContactForm}>
              <div className="input-container">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  placeholder="Full Name"
                  type="text"
                  name="Name"
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  placeholder="name@gmail.com"
                  type="email"
                  name="Email"
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Message" className="form-label">
                  Message
                </label>
                <textarea
                  placeholder="Type your message...."
                  type="text"
                  name="Message"
                  className={`form-message ${classes.message}`}
                />
              </div>

              <div className="submit-btn">
                <button type="submit" className={classes.submitBtn}>
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="footer-content-details">
            <div className="quote">
              <p>Disha Sharma</p>
            </div>
            <div className="work-links">
              <h3>Reach out</h3>
              <ul>
                <li>
                  <a href="mailto:04dishasharma@gmail.com">
                    04dishasharma@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="devansh-the-great">
          <a href="mailto:devansh.pareek1000@gmail.com">
            Designed by Devansh Pareek!
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
