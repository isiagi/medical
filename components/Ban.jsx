import React from 'react';
import Link from 'next/link';

const Ban = () => {
  return (
    <div
      style={{
        // display: 'flex',
        // padding: '0 2rem',
        lineHeight: '28px',
        // margin: '15px 0',
        // paddingBottom: '3rem',
        color: 'rgb(130, 129, 129)',
        // fontSize: '17px'
      }}
    >
      <p style={{ fontSize: '17px' }}>
        <span style={{ fontSize: '20px' }}>Hitex consortium Limited</span> is a
        company limited by shares and legally registered by URSB and URA.
        Established in 2021 in Uganda by a team of highly skilled technical
        experts in human health, animal health, plant and environmental health,
        as well as Monitoring Evaluation and Learning (MEL).
      </p>

      <p style={{ fontSize: '17px', paddingTop: '5px' }}>
        Our experts are certified by the International Federation of Biosafety
        Associations (IFBA) and the African society for Laboratory medicine
        (ASLM) for Biorisk management and auditing of Laboratory quality
        management systems respectively.
      </p>

      <p
        style={{
          fontSize: '17px',
          paddingTop: '5px',
          color: 'color: rgb(130, 129, 129)',
        }}
      >
        Through our highly skilled experts, we aim at building strong Biorisk
        management systems (Biosafety Biosecurity) across all organizations
        (Health Facilities-Laboratories, research institutions, animal holding
        facilities, academia, plant health, water and environment laboratories)
        that interact with microorganisms specifically those flagged ‘high
        importance’.
      </p>
    </div>
  );
};

export default Ban;
