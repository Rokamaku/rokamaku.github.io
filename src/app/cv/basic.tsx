import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { GrStar } from 'react-icons/gr';
import styles from '../../styles/Cv.module.scss';

export interface BasicData {
  name?: string,
  label?: string,
  image?: string,
  email?: string,
  phone?: string,
  url?: string,
  summary?: string,
  location?: {
    address?: string,
    postalCode?: string,
    city?: string,
    countryCode?: string,
    region?: string
  },
  profiles?: {
    network?: string,
    username?: string,
    url?: string,
    iconName?: string
  }[],
  topSkills?: string[];
}

export interface BasicProps {
  data: BasicData;
}

export const Basic: React.FunctionComponent<BasicProps> = (props) => {
  let { data } = props;
  let networkIcon: Record<string, any> = {
    Linkedin: <FaLinkedin className={styles.profileLinkIcon}/>,
    Github: <FaGithub className={styles.profileLinkIcon}/>,
    Twitter: <FaTwitter className={styles.profileLinkIcon}/>
  }
  return (
    <div className={styles.capsule}>
      <div className={styles.capsuleBlock}>
        <div className={styles.profileImageContainer}>
          <img className={styles.profileImage} src={data.image} alt="My Avatar" width={150} height={150} placeholder="blur" />
        </div>
        <div className={styles.profileInfoContainer} >
          <h1 className={styles.profileName}>{data.name}</h1>
          <div className={styles.profileTitle}>{data.label}</div>
          <div className={styles.profileSummaryStatement}>{data.summary}</div>
          <div className={styles.profileTopSkillContainer}>
            {data.topSkills?.map(it => (
              <span key={it} className={`${styles.profileTopSkill} ${it}`}>{it}</span>
            ))}
          </div>
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfo} >
              <a className={styles.profileLink} target="_blank" rel="noreferrer" href={`mailto:${data.email}`}>
                <FaEnvelope className={styles.profileLinkIcon} />
                <span className={styles.contactInfoEmail}>{data.email}</span>
              </a>
            </div>
            <div className={styles.contactInfo} >
              <FaPhone className={styles.profileLinkIcon} />
              <span>{data.phone}</span>
            </div>
          </div>
          {data.profiles?.map(pr => (
            <div key={pr.network} className={styles.profileLinkContainer}>
              <a className={styles.profileLink} target="_blank" rel="noreferrer" href={pr.url}>
                { networkIcon[pr?.network ?? ''] }
                <span className={styles.profileLinkText}>{pr.network}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.mobileHide}>
        <div className={styles.capsuleDivider} ></div>
        <div className={styles.capsuleBotton}>
          <span className={styles.sectionHalf}>
            <MdLocationOn className={styles.icon} size={35}/>
            <span className={styles.iconText}>{`${data.location?.city}, ${data.location?.countryCode}`}</span>
          </span>
          <span className={styles.sectionHalf}>
            <GrStar className={styles.icon} size={35} />
            <span className={styles.iconText}>3 years professional experience</span>
          </span>
        </div>
      </div>
    </div>
  )
}