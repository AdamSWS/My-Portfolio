import React, { Component } from 'react';
import SelfieImage from '../../assets/selfie.png';
import styles from './Home.module.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.homeScreen}>
        <div className={styles.content}>
          <img src={SelfieImage} alt="Adam Shaar" className={styles.selfieImage} />
          <p className={styles.title}>Hello, my name is Adam Shaar</p>
          <p className={styles.text}>I am born and raised in Chicago, Illions. </p>
        </div>
      </div>
    );
  }
}