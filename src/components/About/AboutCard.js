import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Divyansh Sharma </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />
            I am currently employed as a software developer at U4RAD Technologies.
            <br />
            I have completed B. Tech in Computer Science and Engineering at IPEC Ghaziabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs and Poetry
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "But what can a decent man speak of with most pleasure?
            Answer:Of himself.Well,so I will talk about myself."{" "}
          </p>
          <footer className="blockquote-footer">Dostoyevsky</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
