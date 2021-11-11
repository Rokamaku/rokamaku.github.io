import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import styles from '../../styles/Cv.module.scss';

export interface EducationData {
  institution?: string;
  url?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  score?: string;
  courses?: string[];
}

export interface EducationProps {
  data: EducationData[];
}

export const Education: React.FunctionComponent<EducationProps> = (props) => {
  const { data } = props;
  return (
    <>
      <div className={`${styles.capsuleDivider} ${styles.capsuleSpacer}`}></div>
      <div className={`${styles.sectionHeadingContainer} ${styles.topMargin}`}>
        <FaUniversity className={styles.icon}/>
        <span className={styles.sectionHeading} >Education</span>
      </div>
      {
        data.map(it => (
          <div key={`${it.area}${it.studyType}`} className={styles.experienceContainer} >
            <div className={styles.experienceTitleContainer} >
              <span className={styles.experienceTitle}>{`${it.studyType} in ${it.area}`}</span>
              <span className={styles.experienceDuration}>{`${it.startDate} - ${it.endDate}`}</span>
            </div>
            <div className={styles.experienceSubtitleContainer} >
              <span className={styles.experienceSubtitle}>{it.institution}</span>
            </div>
            { it.score && <div className={styles.experienceSubtitleContainer} >
              <span className={styles.experienceSubtitle}>GPA: {it.score}</span>
            </div> }
          </div>
        ))
      }
    </>
  )
}