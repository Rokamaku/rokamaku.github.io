import React from 'react';
import styles from '../../styles/Cv.module.scss';
import { FaStream } from "react-icons/fa";

export const Timeline: React.FunctionComponent = () => {
  return (
    <div className={styles.capsule}>
      <div className={styles.capsuleBlock}>
        <div className={styles.fullPanel}>
          <div className={styles.sectionHeadingContainer}>
            <FaStream className={styles.icon} />
            <span className={styles.sectionHeading}>Timeline</span>
          </div>
        </div>
      </div>
    </div>
  )
}