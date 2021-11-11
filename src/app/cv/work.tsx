import React from 'react'
import { FaBriefcase } from 'react-icons/fa';
import styles from '../../styles/Cv.module.scss';

export interface WorkData {
  name?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  keywords?: string[];
}

export interface WorkProps {
  data: WorkData[];
}

export const Work: React.FunctionComponent<WorkProps> = (props) => {
  const { data } = props;
  return (
    <>
      <div className={styles.sectionHeadingContainer}>
        <FaBriefcase className={styles.icon} />
        <span className={styles.sectionHeading} >Work Experience</span>
      </div>
      {data.map(it => (
        <div key={it.name} className={`${styles.experienceContainer} ${it.keywords?.toString()}`} >
          <div className={styles.experienceTitleContainer} >
            <span className={styles.experienceTitle} >{it.position}</span>
            <span className={styles.experienceDuration} >{it.startDate} - {it.endDate}</span>
          </div>
          <div className={styles.experienceSubtitleContainer} >
            <span className={styles.experienceSubtitle}>{it.name}</span>
          </div>
          <ul className={styles.experienceAccomplishmentList}>
            {
              it.highlights?.map(hl => (
                <li key={hl} className={`${styles.experienceAccomplishment}`} >{hl}</li>
              ))
            }
          </ul>
        </div>

      ))
      }
    </>
  )
}