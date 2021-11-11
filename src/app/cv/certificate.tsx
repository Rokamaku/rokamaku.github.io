import React from 'react';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import styles from '../../styles/Cv.module.scss';

export interface CertificateData {
  date?: string;
  issuer?: string;
  name?: string;
  url?: string;
}

export interface CertificateProps {
  data: CertificateData[]
}

export const Certificate: React.FunctionComponent<CertificateProps> = (props) => {
  const { data } = props;
  return (
    <>
      <div className={`${styles.capsuleDivider} ${styles.capsuleSpacer}`}></div>
      <div className={`${styles.sectionHeadingContainer} ${styles.topMargin}`}>
        <AiFillSafetyCertificate className={styles.icon} />
        <span className={styles.sectionHeading} >Training and Certifications</span>
      </div>
      {
        data.map(it => (
          <div key={it.name} className={styles.experienceContainer} >
            <div className={styles.experienceTitleContainer} >
              {it.url ? <a target="_blank" rel="noreferrer" href={it.url} ><span className={styles.experienceTitle}>{it.issuer} - {it.name}</span></a> :
                <span className={styles.experienceTitle}>{it.issuer} - {it.name}</span>}
              <span className={styles.experienceDuration}>{it.date}</span>
            </div>
          </div>
        ))
      }
    </>
  )
}