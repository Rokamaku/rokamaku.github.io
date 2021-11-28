import React, { useEffect, useState } from 'react'
import { FaBriefcase } from 'react-icons/fa';
import styles from '../../styles/Cv.module.scss';
import { toFormatDateWithMonth } from '../helper/time';
import { useFilteredSkills } from '../hooks/useFilteredSkills';

export interface WorkData {
  name?: string;
  projectName?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  teamSize?: number;
  highlights?: {
    description?: string;
    keywords?: string[];
  }[];
  keywords?: string[];
}

export interface WorkProps {
  data: WorkData[];
  keywords?: string[];
  onKeywordSelect: (keyword: string, isSelected?: boolean) => void;
}

interface WorkLocal extends Omit<WorkData, 'keywords'> {
  keywords?: {
    name: string;
    isSelected?: boolean;
  }[];
}

export const Work: React.FunctionComponent<WorkProps> = (props) => {
  const workData = useFilteredSkills(props.data, props.keywords || []);

  return (
    <>
      <div className={styles.sectionHeadingContainer}>
        <FaBriefcase className={styles.icon} />
        <span className={styles.sectionHeading} >Work Experience</span>
      </div>
      {
        (workData as WorkLocal[]).map(it => (
          <div key={it.name} className={`${styles.experienceContainer} ${it.keywords?.toString()}`} >
            <div className={styles.experienceTitleContainer} >
              <span className={styles.experienceTitle} >{it.position}</span>
              <span className={styles.experienceDuration} >{toFormatDateWithMonth(it.startDate)} - {toFormatDateWithMonth(it.endDate)}</span>
            </div>
            <div className={styles.experienceSubtitleContainer} >
              <span className={styles.experienceSubtitle}>{it.name}</span>
            </div>
            <div className={styles.workSummaryStatement}>
              Project: {it.projectName}
            </div>
            <div className={styles.workSummaryStatement}>
              Description: {it.summary}
            </div>
            <div className={styles.workSummaryStatement}>
              Team size: {it.teamSize}
            </div>
            <div className={styles.workSummaryStatement}>
              Responsibility:
              <ul className={styles.experienceAccomplishmentList}>
                {
                  it.highlights?.map(hl => (
                    <li key={hl.description} className={`${styles.experienceAccomplishment}`} >{hl.description}</li>
                  ))
                }
              </ul>
              <div className={styles.experienceSkillContainerIndent}>
                {
                  it.keywords?.map(kw => (
                    <span key={kw.name} className={`${styles.experienceSkill} ${kw.isSelected ? styles.skillSelected : ''}`}
                      onClick={() => props.onKeywordSelect(kw.name, !kw.isSelected)}>{kw.name}</span>
                  ))
                }
              </div>
            </div>
          </div>

        ))
      }
    </>
  )
}