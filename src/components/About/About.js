import React, { Component } from 'react';
import presentationDisplay from '../../assets/me_presentation.mov';
import styles from './About.module.css';

export default class About extends Component {
  render() {
    return (
      <div className={styles.aboutScreen}>
        <div className={styles.content}>
          <video className={styles.contentVideo} src={presentationDisplay} autoPlay loop muted />
          <p className={styles.title}>About Me</p>
          <p className={styles.text}>As a current Computer Science student at the University of Illinois at Chicago (since August 2020),
            I have been able to collaborate with colleagues in academic projects. I am currently looking to apply
            my programming skills in a professional setting.</p>
        </div>
      </div>
    )
  }
}

