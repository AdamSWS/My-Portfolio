import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import githubLogo from "../../assets/github_logo.png";
import styles from "./Projects.module.css";

export default class Projects extends Component {
  componentDidMount() {
    fetch("https://api.github.com/users/AdamSWS/repos")
      .then((response) => response.json())
      .then((data) => this.setState({ repos: data }))
      .catch((error) => console.error(error));
  }

  render() {
    const { repos } = this.state;
    return (
      <div className={styles.projectsScreen}>
        <div className={styles.content}>
          <p className={styles.title}>My Projects</p>
          <Carousel interval={4000} indicators={false} controls={false}>
            {repos.map((repo) => (
              <Carousel.Item key={repo.id}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <h3>{repo.name}</h3>
                  <p>{repo.description || "No description available"}</p>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={githubLogo}
                      alt="View Project on GitHub"
                      className={styles.image}
                    />
                  </a>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <button
            className={styles.carouselButton}
            onClick={() => this.carouselRef.current.prev()}
          >
            {"<"}
          </button>
          <button
            className={styles.carouselButton}
            onClick={() => this.carouselRef.current.next()}
          >
            {">"}
          </button>
        </div>
      </div>
    );
  }
}
