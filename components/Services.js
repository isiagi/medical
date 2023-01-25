import Image from 'next/image';
import React from 'react';

import styles from '../styles/Services.module.css';
import Header from './Header';
import { GiBiohazard } from 'react-icons/gi';
import { ImEqualizer2 } from 'react-icons/im';
import { GiNuclearWaste } from 'react-icons/gi';
import { MdOutlineHourglassTop } from 'react-icons/md';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

const Services = () => {
  return (
    <div className={styles.services__container}>
      <Header
        first="Awesome Services"
        middle="Our Core Services"
        last="we utilise the
          training, mentorship and audit approaches to improve our programming
          as deliever our Services below."
      />
      <div className={styles.services__wrapper}>
        <div className={styles.service__flex}>
          <div className={styles.service__item}>
            <div className={styles.service__img}>
              <Image src={'/assets/gif.jpg'} alt={'picture'} layout="fill" />
            </div>
            <div className={styles.service__detail}>
              <div className={styles.service__icon}>
                <GiBiohazard />
              </div>
              <h3>Biosafety Biosecurity (Biorisk management) Consultancy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum
              </p>
            </div>
          </div>

          <div className={styles.service__item}>
            <div className={styles.service__img}>
              <Image src={'/assets/nn.jpg'} alt={'picture'} layout="fill" />
            </div>
            <div className={styles.service__detail}>
              <div className={styles.service__icon}>
                <MdOutlineHourglassTop />
              </div>
              <h3>Biological Risk Assessments / Management Consultancy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum
              </p>
            </div>
          </div>

          <div className={styles.service__item}>
            <div className={styles.service__img}>
              <Image src={'/assets/image.png'} alt={'picture'} layout="fill" />
            </div>
            <div className={styles.service__detail}>
              <div className={styles.service__icon}>
                <GiNuclearWaste />
              </div>
              <h3>
                Establishment of Waste management systems & supply/repair of
                incinerators
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum
              </p>
            </div>
          </div>

          <div className={styles.service__item}>
            <div className={styles.service__img}>
              <Image src={'/assets/nn.jpg'} alt={'picture'} layout="fill" />
            </div>
            <div className={styles.service__detail}>
              <div className={styles.service__icon}>
                <AiOutlineSafetyCertificate />
              </div>
              <h3>Biosafety Cabinet Certification</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum
              </p>
            </div>
          </div>

          <div className={styles.service__item}>
            <div className={styles.service__img}>
              <Image src={'/assets/total.jpg'} alt={'picture'} layout="fill" />
            </div>
            <div className={styles.service__detail}>
              <div className={styles.service__icon}>
                <ImEqualizer2 />
              </div>
              <h3>Total Quality management (TQM)</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
