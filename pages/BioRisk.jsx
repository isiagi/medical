import Image from 'next/image';
import Mini from '../components/Mini';
import Utility from '../components/Utility';

const BioRisk = () => {
  return (
    <div style={{}}>
      <Mini
        head="Biological Risk Assessments"
        sub="Biological Risk Assessments"
      />
      <div style={{padding: "8rem 2rem"}}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridAutoRows: '450px',
            gap: '2rem',
          }}
        >
          <div style={{ position: 'relative' }}>
            <Image
              src={'/assets/nn.jpg'}
              alt="bio"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div style={{marginBottom: '1rem'}}>
            <p style={{ lineHeight: '2rem' }}>
              In the wake of global emerging and re-emerging diseases like
              Ebola, Marburg, and more recently SARS-CoV-2 among others, it’s
              imperative to set up systems which are able to detect and avert
              any hazards or threats arising from such work which involves these
              biological agents and their toxins. Throughout our Organization’s
              work, we promote the One Health approach, recognizing the
              interdependence of animal, human and environmental health. Our
              biorisk management strategies are based on guidance provided
              through the WHO Biosafety manual 4th edition and the OIE. We
              utilize guidelines from ISO 31010:2019- Risk Assessment techniques
              and ISO 31000:2018- Risk Management guidelines to conduct our
              assessments and set up effective mitigation measures.{' '}
            </p>
          </div>
        </div>
      </div>
      <br />
      <Utility />
    </div>
  );
};

export default BioRisk;
