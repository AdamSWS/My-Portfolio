import React, { Component } from 'react';
import styles from './Contact.module.css';
import githubLg from '../../assets/github_logo.png';
import gmailLg from '../../assets/gmail_logo.png';
import handshakeLg from '../../assets/handshake_logo.png';
import linkedinLg from '../../assets/linkedin_logo.png';

export default class Contact extends Component {
  render() {
    return (
      <div className={styles.contactScreen}>
        <div className={styles.content}>
          <p className={styles.title}>Contact Me</p>
          <div className={styles.logoRow}>
            <a href="https://github.com/AdamSWS" target="_blank" rel="noopener noreferrer">
              <img src={githubLg} alt="GitHub" className={styles.logo} />
            </a>
            <a href="mailto:a.swshaar@gmail.com">
              <img src={gmailLg} alt="Email" className={styles.logo} />
            </a>
            <a href="https://uic.joinhandshake.com/stu/users/26566632" target="_blank" rel="noopener noreferrer">
              <img src={handshakeLg} alt="Handshake" className={styles.logo} />
            </a>
            <a href="https://www.linkedin.com/in/adamsws" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLg} alt="LinkedIn" className={styles.logo} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
