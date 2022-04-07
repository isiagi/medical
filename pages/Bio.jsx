import Image from 'next/image';

const Bio = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 2rem',
        // lineHeight: '40px',
        backgroundColor: 'whitesmoke',
        minHeight: '100vh'
      }}
    >
      <div>
        <h2
          style={{
            marginTop: '5rem',
            marginBottom: '2rem',
            textAlign: 'center',
            // backgroundColor: 'rgb(28, 28, 143)',
            padding: '2.5rem 0',
            color: 'rgb(28, 28, 143)',
          }}
        >
          Biorisk management (Biosafety Biosecurity) Consultancy
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'flex-start',
          width: '100%',
          flexWrap: 'wrap',
          lineHeight: '27px',
        }}
      >
        <p style={{ width: '50rem' }}>
          Biosafety Biosecurity is our niche; Through our highly skilled
          experts, we provide high quality Biorisk management consultancy
          services to individuals and institutions on the best approaches to
          establish and implement functional and resilient Biosafety Biosecurity
          systems under the one health approach in line with the requirements of
          national and international standards. Our Biorisk management experts
          have technical expertise in implementation of ISO 15190:2020
          (Requirements for safety in Medical laboratories), ISO 35001: 2019
          (Biorisk management for laboratories and other related organization),
          ISO 15189:2012(Requirements for quality and competence - Medical
          laboratories) , ISO 14001:2015 (Environmental management system) ISO
          45001:2018 (Occupational health and safety management systems) WHO
          Biosafety manual 4th edition and Office International des Epizooties
          (OIE) Quality Standards &Guidelines for Veterinary labs; Infectious
          Diseases 2002,2008. Our team has worked closely with the Uganda
          Ministry of Health, the animal health, plant health sectors to develop
          the National BRM one health training curriculum, developed the
          national BRM mentorship and assessment framework and tools, national
          policy and guidelines for healthcare waste management and currently
          working on the national framework for BRM certification among others.{' '}
        </p>

        <Image
          src={'/assets/safety.jpg'}
          alt="bio"
          width="400px"
          height="100%"
        />
      </div>
      <div style={{ lineHeight: '27px', marginTop: '10px' }}>
        <h2 style={{ textAlign: 'center', color: 'rgb(28, 28, 143)' }}>
          Biosecurity{' '}
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'flex-start',
            width: '100%',
            flexWrap: 'wrap',
            lineHeight: '27px',
            marginBlock: '2rem'
          }}
        >
          <Image
            src={'/assets/gif.jpg'}
            alt="bio"
            width="400px"
            height="100%"
          />
          <p style={{ width: '50rem' }}>
            As much as biological agents and their toxins can be used in
            research for the advancement of science, there is a great potential
            for their mis-use as well to pose a threat to public health and
            safety, agriculture or the environment. Global events in the recent
            past have highlighted the need to protect laboratories / containment
            facilities and the materials they contain from being intentionally
            compromised in ways that may harm people, livestock, agriculture or
            the environment. At Hitex consortium we recognize the dual use
            nature of these biological agents. Through our highly skilled team,
            we conduct Biosecurity risk assessment for our customers to help
            them identify the potential threats with their systems and help them
            build strong mitigations measures that prevent theft, mis‐use or
            intentional release of these organisms and their toxins. <br />
            Our teams work with our customers specifically to build well
            embedded biosecurity systems right from ensuring the integrity of
            the staff working with this biological agents to ensuring systems
            are set up for proper accountability of these agents as well setting
            up systems to detect and deter any biosecurity threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
