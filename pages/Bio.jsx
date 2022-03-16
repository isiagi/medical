import Image from 'next/image';

const Bio = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 2rem', lineHeight: '40px'
      }}
    >
      <div>
        <h2 style={{ margin: '2rem 0', textAlign: 'center' }}>
          Biorisk management (Biosafety Biosecurity) Consultancy services
        </h2>
        <Image
          src={'/assets/nn.jpg'}
          alt="bio"
          width="1000px"
          height="400px"
        />
        <p style={{textAlign: 'center', color: 'grey'}}>our team supporting the facility to conduct risk assessment </p>
      </div>
      <div>
        <p>
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
      </div>
    </div>
  );
};

export default Bio;
