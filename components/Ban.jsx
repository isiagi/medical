import React from 'react';
import Link from 'next/link';

const Ban = () => {
  return (
    <div
      style={{
        // display: 'flex',
        padding: '0 2rem',
        lineHeight: '28px',
        margin: '15px 0',
        paddingBottom: '3rem',
        // fontSize: '17px'
      }}
    >
      <p style={{ fontSize: '17px' }}>
        <span style={{ color: 'rgb(28, 28, 143)' }}>
          <b>Hitex consortium Limited</b>
        </span>{' '}
        is a company limited by shares and legally registered by URSB and URA.
        Established in 2021 in Uganda by a team of highly skilled technical
        experts in human health, animal health, plant and environmental health,
        as well as Monitoring Evaluation and Learning (MEL) of programs.
      </p>

      <p style={{ fontSize: '17px', paddingTop: '5px' }}>
        Our experts are certified by the International Federation of Biosafety
        Associations (IFBA) and the African society for Laboratory medicine
        (ASLM) for Biorisk management and auditing of Laboratory quality
        management systems respectively.
      </p>

      <p style={{ fontSize: '17px', paddingTop: '5px' }}>
        Through our highly skilled experts, we aim at building strong Biorisk
        management systems (Biosafety Biosecurity) across all organizations
        (Health Facilities-Laboratories, research institutions, animal holding
        facilities, academia, plant health, water and environment laboratories)
        that interact with microorganisms specifically those flagged ‘high
        importance’.
      </p>
      {/* <div
        style={{
          borderTop: '3px solid rgb(18, 18, 124)',
          backgroundColor: 'whitesmoke',
        }}
      >
        {' '}
        <p>
          We work with government and non-government agencies, industry, legally
          registered companies, highly skilled individual consultants and
          academic institutions to accomplish our missions in the following
          strategic areas
        </p>
        <ul>
          <li
            style={{ color: 'rgb(18, 18, 124)', textDecoration: 'underline' }}
          >
            <Link href="/Bio">Biorisk management (Biosafety Biosecurity)</Link>
          </li>
          <li
            style={{ color: 'rgb(18, 18, 124)', textDecoration: 'underline' }}
          >
            <Link href="/BioRisk">Biological Risk Assessments </Link>
          </li>
          <li
            style={{ color: 'rgb(18, 18, 124)', textDecoration: 'underline' }}
          >
            <Link href="/Total">Total Quality management (TQM)</Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Ban;
