import React from 'react';
import { BsFileCodeFill } from 'react-icons/bs';
import styles from '../../styles/Cv.module.scss';

export interface ProjectData {
  name?: string;
  description?: string;
  highlights?: string[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;
}

export interface ProjectProps {
  data: ProjectData[];
}

export const Project: React.FunctionComponent<ProjectProps> = (props) => {
  const { data } = props;
  return (
    <>
      <div className={`${styles.capsuleDivider} ${styles.capsuleSpacer}`}></div>
      <div className={`${styles.sectionHeadingContainer} ${styles.topMargin}`}>
        <BsFileCodeFill className={styles.icon} />
        <span className={styles.sectionHeading} >Projects</span>
      </div>
      {
        data.map(it => (
          <div key={it.name} className={styles.experienceContainer}>
            <div className={styles.experienceTitleContainer}>
              <span className={styles.experienceTitle}>{it.name}</span>
              <span className={styles.experienceDuration}>{`${it.startDate} - ${it.endDate}`}</span>
            </div>
            <div className={styles.experienceSubtitleContainer}>
              <span className={styles.customExperienceDescription}>{it.description}</span>
            </div>
            <div className={styles.experienceSkillContainerIndent}>
              {
                it.keywords?.map(kw => (
                  <span key={kw} className={styles.experienceSkill}>{kw}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  )
}