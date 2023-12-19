import React, { Component } from 'react'
import styles from './Downloads.module.css';

export default class Downloads extends Component {
  render() {
    return (
      <div className={styles.downloadsScreen}>
        <div className={styles.content}>
          <p className={styles.title}>Downloads</p>
            <p className={styles.text}>Soft Resume</p>
        </div>
      </div>
    )
  }
}
