import React, { useCallback, useState } from "react";
import { Basic, BasicData } from "./basic";
import { Timeline } from "./timeline";
import { Certificate, CertificateData } from "./certificate";
import { Education, EducationData } from "./education";
import { Interest, InterestData } from "../../app/cv/interest";
import { Project, ProjectData } from "./project";
import { Skill, SkillData } from "./skill";
import { Work, WorkData } from "./work";
import styles from '../../styles/Cv.module.scss';

export interface CvData {
  basics: BasicData;
  work: WorkData[];
  certificates: CertificateData[];
  education: EducationData[];
  skills: SkillData[];
  projects: ProjectData[];
  interests: InterestData[];
}

interface CvProps {
  data: CvData;
}

export const Cv: React.FunctionComponent<CvProps> = (props) => {
  const [ keywords, setKeywords ] = useState<string[]>([]);
  let { basics, work, skills, education, certificates, projects, interests }: CvData = props.data;

  const onKeywordSelect = (keyword: string, isSelected?: boolean) => {
    setKeywords(prev => {
      let isKeywordExisted = false;
      if (prev.some(kw => kw.toLowerCase() === keyword.toLowerCase())) {
        isKeywordExisted = true;
      }
      if (isSelected) {
        if (!isKeywordExisted) {
          return [ ...prev, keyword ]
        }
      } else {
        if (isKeywordExisted) {
          return prev.filter(kw => kw.toLowerCase() !== keyword.toLowerCase())
        }
      }
      return prev;
    })
    console.log('ahihi');
  }

  return (
    <div className={styles.resume}>
      <Basic data={basics} keywords={keywords} onKeywordSelect={onKeywordSelect}/>
      {/* <Timeline /> */}

      <div className={styles.capsule}>
        <div className={styles.capsuleBlock}>
          <div className={styles.mainPanel}>
            <Work data={work} keywords={keywords} onKeywordSelect={onKeywordSelect} />
            <Education data={education} keywords={keywords} onKeywordSelect={onKeywordSelect} />
            <Certificate data={certificates} keywords={keywords} onKeywordSelect={onKeywordSelect} />
            <Project data={projects} keywords={keywords} onKeywordSelect={onKeywordSelect} />
          </div>
          <div className={styles.rightPanel}>
            <Skill data={skills} keywords={keywords} onKeywordSelect={onKeywordSelect}/>
            <Interest data={interests} />
          </div>
        </div>
      </div>
    </div>
  )
}