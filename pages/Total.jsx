import Image from 'next/image';
import Mini from '../components/Mini';
import Services from '../components/Services';

import total from '../public/assets/total.jpg'

const Total = () => {

  // Stud3ntp@55
  return (
    <div>
      <Mini
        head={'Total Quality Management (TQM)'}
        sub="Total Quality Management"
      />
      {/* <div style={{ padding: '8rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            // gridAutoRows: '350px',
            gap: '2rem',
          }}
        >
          <div style={{ position: 'relative', border: '1px solid red'}}>
            <Image
              src={total}
              alt="bio"
              layout="fill"
              objectFit="cover"
              className=''
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ lineHeight: '2rem' }}>
              <span style={{ color: 'rgb(28, 28, 143)' }}>
                <b>Hitex consortium Limited</b>
              </span>{' '}
              we focus on the customer to nurture organizational growth and
              improve systems. Our approach involves working with all members of
              an organization to participate in improving processes, products,
              services, and the culture in which they work. To create meaningful
              change, we focus our approach on the eight principles of total
              quality management: Customer-focused, Total employee involvement,
              Process-centered, Integrated system, Strategic and systematic
              approach, Continual improvement, Fact-based decision making and
              effective Communications strategies.{' '}
            </p>
            <p style={{ lineHeight: '2rem' }}>
              We utilize these principles to support our customers improve their
              systems. Our experts have worked closely with the health systems
              in Uganda to support laboratory quality management systems{' '}
              <b>(LQMS)</b>
              improvement towards attainment of international accreditation to
              ISO 15189:2012. Our teams possess competencies in implementation
              of ISO 9000 certification frameworks.
            </p>
          </div>
        </div>
      </div> */}
      <div style={{ padding: '8rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            // gridAutoRows: '450px',
            gap: '2rem',
          }}
        >
          <div style={{ position: 'relative',height:'450px'}}>
            <Image
              src={total}
              alt="bio"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ lineHeight: '2rem' }}>
              There are enormous biosafety and biosecurity risks resulting from
              poor Healthcare waste Management (HCWM) across healthcare
              facilities and the final disposal sites. The situation has further
              been exacerbated by the lack of well-designed systems and final
              disposal infrastructure to handle the ever-increasing waste
              management requirements. Critical to this is the rapid advancement
              in technology resulting in the development and employment of novel
              point-of-care testing (POCT) technologies both at static and
              outreach sites, generation of liquid waste from laboratory
              procedures with some of this waste presenting carcinogenic
              elements upon consumption. As the advancement in technology is
              happening rapidly compared to the mitigation measures, at Hitex we
              believe there is need work with our customers to map out their
              work routines and proactively design systems that would enable
              safe and secure disposal of the various waste streams generated by
              the facility. Our team has worked with the Uganda ministry of
              health department of National health laboratory and diagnostic
              services to develop: The national policy and guidelines on waste
              management, assessment tool for HCWM, and the waste management
              training curriculum. We also supply incinerators and provide after
              installation services to our customers based on their need
            </p>
          </div>
        </div>
        
      </div>
      <br />
    </div>
  );
};

export default Total;
