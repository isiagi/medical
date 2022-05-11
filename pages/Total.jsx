import Image from 'next/image';

const Total = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 2rem',
        lineHeight: '40px',
        backgroundColor: 'whitesmoke',
      }}
    >
      <div>
        <h2
          style={{
            marginTop: '5rem',
            marginBottom: '2rem',
            textAlign: 'center',
            backgroundColor: 'rgb(28, 28, 143)',
            padding: '2.5rem 0',
            color: 'whitesmoke',
          }}
        >
          Total Quality management (TQM)
        </h2>
        <Image src={'/assets/total.jpg'} alt="bio" width="1000px" height="400px" />
      </div>
      <div style={{paddingBottom: '4rem'}}>
        <p>
          <span style={{ color: 'rgb(28, 28, 143)' }}>
            <b>Hitex consortium Limited</b>
          </span>{' '}
          we focus on the customer to nurture organizational growth and improve
          systems. Our approach involves working with all members of an
          organization to participate in improving processes, products,
          services, and the culture in which they work. To create meaningful
          change, we focus our approach on the eight principles of total quality
          management: Customer-focused, Total employee involvement,
          Process-centered, Integrated system, Strategic and systematic
          approach, Continual improvement, Fact-based decision making and
          effective Communications strategies.{' '}
        </p>
        <p>
          We utilize these principles to support our customers improve their
          systems. Our experts have worked closely with the health systems in
          Uganda to support laboratory quality management systems <b>(LQMS)</b>
          improvement towards attainment of international accreditation to ISO
          15189:2012. Our teams possess competencies in implementation of ISO
          9000 certification frameworks.
        </p>
      </div>
    </div>
  );
};

export default Total;
