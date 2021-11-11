import React from 'react';
import styles from '../../styles/Cv.module.scss';

export interface SkillData {
  name?: string,
  level?: string,
  keywords?: string[]
}

export interface SkillProps {
  data: SkillData[]
}

export const Skill: React.FunctionComponent<SkillProps> = (props) => {
  const { data } = props;
  return (
    <>
      <div className={styles.skillPanelHeading}>Skills</div>
      {
        data.map(it => (
          <div key={it.name}>
            <div className={styles.skillType}>{it.name}</div>
            <div className={styles.skillContainer}>
              {
                it.keywords?.map(skillName => (
                  <span key={skillName} className={`${styles.skill} ${skillName}`}>{skillName}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  )
}