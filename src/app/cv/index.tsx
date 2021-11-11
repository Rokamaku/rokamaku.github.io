import React from "react";
import { Basic, BasicData } from "./basic";
import { Timeline } from "./timeline";
import { Certificate, CertificateData } from "./certificate";
import { Education, EducationData } from "./education";
// import { Interest, InterestData } from "../../app/cv/interest";
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
  // interests: InterestData;
}

interface CvProps {
  data: CvData;
}

export const Cv: React.FunctionComponent<CvProps> = (props) => {
  let { basics, work, skills, education ,certificates, projects
    // interests
  }: CvData = props.data;

  return (
    <div className={styles.resume}>
      {/* <div className={styles.topSpacer} /> */}
      <Basic data={basics} />
      <Timeline />

      <div className={styles.capsule}>
        <div className={styles.capsuleBlock}>
          <div className={styles.mainPanel}>
            <Work data={work} />
            <Education data={education} />
            <Certificate data={certificates} />
            <Project data={projects} />
          </div>
          <div className={styles.rightPanel}>
            <Skill data={skills} />
          </div>
          {/*
      <Interest data={interests}  /> */}
        </div>
      </div>
    </div>
  )
}