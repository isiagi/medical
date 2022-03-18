import Image from 'next/image';

const BioRisk = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 2rem',
        lineHeight: '40px',
        backgroundColor: '#fff'
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
            color: 'whitesmoke'
          }}
        >
          Biological Risk Assessments
        </h2>
        <Image src={'/assets/nn.jpg'} alt="bio" width="1000px" height="400px" />
        <p style={{ textAlign: 'center', color: 'grey' }}>
          our team supporting the facility to conduct risk assessment{' '}
        </p>
      </div>
      <div>
        <p>
          In the wake of global emerging and re-emerging diseases like Ebola,
          Marburg, and more recently SARS-CoV-2 among others, it’s imperative to
          set up systems which are able to detect and avert any hazards or
          threats arising from such work which involves these biological agents
          and their toxins. Throughout our Organization’s work, we promote the
          One Health approach, recognizing the interdependence of animal, human
          and environmental health. Our biorisk management strategies are based
          on guidance provided through the WHO Biosafety manual 4th edition and
          the OIE. We utilize guidelines from ISO 31010:2019- Risk Assessment
          techniques and ISO 31000:2018- Risk Management guidelines to conduct
          our assessments and set up effective mitigation measures.{' '}
        </p>
      </div>
    </div>
  );
};

export default BioRisk;
