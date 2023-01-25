import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import styles from '../styles/About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Mini from '../components/Mini';

const data = [
  {
    id: 1,
    img: '/assets/account.jpg',
    title: 'Accountability',
    content:
      'As a company and as individuals, we accept full responsibility for our performance and acknowledge our accountability for the ultimate outcome of all that we do. We strive for continuous improvement, believing that competence, reliability, and rigorous adherence to process discipline are the keys to excellence.',
  },
  {
    id: 2,
    img: '/assets/inte.jpg',
    title: 'Intergrity',
    content:
      'Credibility is the key to our success; therefore, all of our processes, decisions and actions ultimately are driven by integrity. We are honest and forthright in all our dealings with our customers. We strictly comply with the laws and regulations governing our business, not only as a legal obligation and as a competitive necessity, but because it is the right thing to do.',
  },
  {
    id: 3,
    img: '/assets/qua.jpg',
    title: 'Quality',
    content:
      'The client/patient comes first in everything we do. Our company came into existence for serving and satisfying our valued customers and we ensure that we make a positive difference in the success and future of our clients.',
  },
  {
    id: 4,
    img: '/assets/col.jpeg',
    title: 'Colaboration',
    content:
      'We believe in teamwork and value meaningful partnerships with other organizations and individuals that share and will enable us to deliver our mission and vision. We achieve excellence by putting collective goals ahead of personal interests. ',
  },
];

const Ab = () => {
  return (
    <div className={styles.about__wrapper} id="about">
      {/* <div className={styles.about__head}>
        <h4 style={{ fontSize: '1.7rem' }}>About Us</h4>
        <div className={styles.about__item}>
          <p style={{ fontSize: '18px' }}>
            Our philosophy is to deliver high quality services to our customers
            at all times irrespective of the circumstances.{' '}
          </p>
        </div>
      </div> */}
      <Mini head={"About Us"} sub="About Us" />
      <div className={styles.about__container}>
        
        <div style={{ marginBottom: '4rem' }}>
          <div className={styles.about__item1}>
            <h3
              style={{
                textAlign: 'center',
                fontSize: '1.5em',
                margin: '1rem 0',
              }}
            >
              Mission /{' '}
              <span style={{ color: 'rgb(236, 75, 54)' }}>Vision</span>
            </h3>
            <Tabs style={{ fontSize: '18px' }}>
              <TabList>
                <Tab>Our Vision</Tab>
                <Tab>MISSION</Tab>
              </TabList>

              <TabPanel>
                <p>
                  To provide high quality life impacting services to the
                  customers we serve and earn a reputation of the most
                  appreciated, valued, referred and respected Consultancy
                  Company.
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  To be a competitive and reliable partner helping people feel
                  confident & delivering on their success aspirations by
                  rendering excellent services with honesty, ethics and
                  unparalleled quality.
                </p>
              </TabPanel>
            </Tabs>
          </div>
          <div style={{background: '#fff', padding: '16px 32px', width: '100%'}}>
          <h3
            style={{
              textAlign: 'center',
              fontSize: '1.5em',
              margin: '1rem 0',
              paddingBlock: '2rem',
            }}
          >
            Our Values
          </h3>
          {/* <div className={styles.about__wra}>
            {data.map((item) => (
              <div
                className={styles.about__wrap}
                style={{
                  background: `linear-gradient(rgba(3, 17, 144, 0.8), rgba(3, 17, 144, 0.8)),url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                key={item.id}
              >
                <h3
                  style={{ color: 'rgb(236, 75, 54)' }}
                >{`${item.id}. ${item.title}`}</h3>
                <p style={{ color: 'whitesmoke' }}>{item.content}</p>
              </div>
            ))}
          </div> */}
          <Splide
            options={{
              rewind: true,
              width: '100%',
              perPage: 3,
              focus: 'center',
              arrows: true,
              gap: '1rem',
              autoplay: true,
              breakpoints: {
                640: {
                  destroy: true,
                },
              },
            }}
          >
            {data.map((item) => (
              <SplideSlide key={item.id}>
                <div className={styles.helo} data-splide-interval="1000">
                  <Image src={item.img} alt="" width="400px" height="200" />
                  <h3 style={{ color: 'rgb(236, 75, 54)' }}>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
          </div>
          <div>
            <h3
              style={{
                textAlign: 'center',
                fontSize: '1.5em',
                margin: '1rem 0',
                paddingBlock: '2rem',
              }}
            >
              Certifications
            </h3>
            <div
              style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
            >
              <Image
                src={'/assets/lov.jpg'}
                alt=""
                width="600px"
                height="400"
                style={{ objectFit: 'cover', overflow: 'hidden' }}
              />
              <Image src={'/assets/ho.jpg'} alt="" width="600px" height="600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ab;
