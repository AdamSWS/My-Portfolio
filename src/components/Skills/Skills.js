import React, { Component } from 'react';
import styles from './Skills.module.css';

export default class Skills extends Component {
  render() {
    return (
      <div className={styles.skillsScreen}>
        <div className={styles.content}>
          <p className={styles.title}>Technical Skills</p>
          <p className={styles.text}>My journey in programming started with C and since has expanded to include a variety of languages. I
            currently build my personal projects with C++, Python or JavaScript, but I also have experience working
            with F#, Java, and some other languages.</p>
          <p className={styles.text}>More recently in my programming career, I have taken more time to learn about Frontend-Development. This
            website, for example, is my updated portfolio built with React and Bootstrap. I am somewhat new to React
            and look forward to making more projects with it.</p>
        </div>
      </div>
    )
  }
}
