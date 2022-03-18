import React from 'react';
import Link from 'next/link';

const Ban = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '0 2rem',
        lineHeight: '30px',
        margin: '15px 0',
        fontSize: '1.2em'
      }}
    >
      <p>
        <span style={{color: 'rgb(28, 28, 143)'}}><b>Hitex consortium Limited</b></span> is a company limited by shares and by URSB
        legally registered established in 2021 in Uganda by a team of highly
        skilled technical experts in human health, animal health, plant health,
        economic planning and Monitoring Evaluation and Learning (MEL) of
        programs
      </p>
      <div
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
      </div>
    </div>
  );
};

export default Ban;
