import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './CustomNavbar.module.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" className={styles.navbar} data-bs-theme="dark">
        <Nav className={styles.navbarSection}>
          <Nav.Link href="#home-section" className={styles.navLink}>Home</Nav.Link>
          <Nav.Link href="#about-section" className={styles.navLink}>About</Nav.Link>
          <Nav.Link href="#skills-section" className={styles.navLink}>Skills</Nav.Link>
        </Nav>
        <Navbar.Brand className={styles.brand}>Adam Shaar</Navbar.Brand>
        <Nav className={styles.navbarSection}>
          <Nav.Link href="#projects-section" className={styles.navLink}>Projects</Nav.Link>
          <Nav.Link href="#downloads-section" className={styles.navLink}>Downloads</Nav.Link>
          <Nav.Link href="#contact-section" className={styles.navLink}>Contact</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
