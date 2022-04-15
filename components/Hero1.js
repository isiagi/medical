import Link from 'next/link';
import Fader from './Fade';

const Hero1 = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap:'wrap',
      }}
    >
      {/* <div style={{ width: '25%' }}>
        <h1>
          <span style={{ color: 'rgb(28, 28, 143)' }}>HITEX</span>{' '}
          <span style={{ color: 'red' }}>CONSORTIUM LTD</span>
        </h1>
      </div> */}
      <div style={{ width: '65%' }}>
        <Fader />
      </div>
      <div
        style={{
          // borderTop: '3px solid rgb(18, 18, 124)',
          maxWidth: '400px',
          width: '35%',
          lineHeight: '25px',
          backgroundColor: 'whitesmoke',
          color: 'black',
          padding: '0.2rem',
          borderRadius: '10px',
          paddingLeft:'1rem',
          marginRight: '40px',
          marginTop: '80px',
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
            style={{ color: 'blue', textDecoration: 'underline',}}
          >
            <Link href="/Bio">Biosafety Biosecurity (Biorisk management) Consultancy </Link>
          </li>
          <li
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            <Link href="/BioRisk">Biological Risk Assessments & Management Consultancy  </Link>
          </li>
          <li
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            <Link href="/Total">Establishment of Waste management systems & supply/repair of incinerators </Link>
          </li>
          <li
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            <Link href="/BioRisk">Biosafety Cabinet Certification  </Link>
          </li>
          <li
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            <Link href="/BioRisk">Total Quality management (TQM)  </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero1;
