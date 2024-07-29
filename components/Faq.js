const faqs = [
  [
    {
      question: "What is Hitex Consortium Limited?",
      answer:
        "Hitex Consortium Limited is a company limited by shares, legally registered by the Uganda Registration Services Bureau (URSB) and the Uganda Revenue Authority (URA). Established in 2021, the company specializes in human health, animal health, plant and environmental health, and Monitoring, Evaluation, and Learning (MEL).",
    },
    {
      question: "Where is Hitex Consortium Limited located?",
      answer: "Hitex Consortium Limited is located in Uganda.",
    },
    {
      question: "What expertise does Hitex Consortium Limited offer?",
      answer:
        "Hitex Consortium Limited has a team of highly skilled technical experts certified by the International Federation of Biosafety Associations (IFBA) and the African Society for Laboratory Medicine (ASLM) for Biorisk management and auditing of Laboratory Quality Management Systems.",
    },
    {
      question:
        "What are the core services provided by Hitex Consortium Limited?",
      answer:
        "The core services include:\n- Biorisk Management (Biosafety Biosecurity) Consultancy\n- Waste Management, Waste Transportation, and Supply of Incinerators\n- Total Quality Management (TQM)\n- Biological Risk Assessments",
    },
    {
      question: "What additional features does Hitex Consortium Limited offer?",
      answer:
        "Hitex Consortium Limited offers training, mentorship/coaching, curriculum development, and audits.",
    },
  ],
  [
    {
      question: "What industries does Hitex Consortium Limited serve?",
      answer:
        "Hitex Consortium Limited serves a wide range of industries including health facilities, laboratories, research institutions, animal holding facilities, academia, plant health, water, and environmental laboratories.",
    },
    {
      question: "What is Biorisk Management and why is it important?",
      answer:
        "Biorisk Management (Biosafety Biosecurity) involves the implementation of practices and procedures to manage risks associated with the handling of microorganisms and other biological materials. It is crucial for ensuring the safety of personnel, the public, and the environment from potential biohazards.",
    },
    {
      question:
        "How does Hitex Consortium Limited ensure quality in its services?",
      answer:
        "Hitex Consortium Limited employs certified experts to conduct thorough audits and assessments, ensuring that all services meet high standards of quality and compliance with international regulations.",
    },
    {
      question:
        "Can Hitex Consortium Limited provide custom training programs?",
      answer:
        "Yes, Hitex Consortium Limited offers custom training programs tailored to the specific needs of organizations and their staff.",
    },
    {
      question: "How can I contact Hitex Consortium Limited for services?",
      answer:
        "You can contact Hitex Consortium Limited through their official website or by reaching out to their office in Uganda for more information on services and consultations.",
    },
  ],
];

const Faq = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* <li>
            <div className={styles.faq__item} onClick={() => setShow(!show)}>
              How do i make an appointment?
            </div>
            <p className={show ? styles.faq__para : styles.faq__para1}>
              If you would like to make an appointment with one of our
              practitioners, please contact our reception staff. Alternatively
              you may book your appointments online. Every effort will be made
              to accommodate your preferred time and choice of practitioner.
            </p>
          </li> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)",
          gap: "2rem",
        }}
      >
        <div>
          {faqs[0].map(({ question, answer }, index) => (
            <div key={index} style={{ marginTop: "2rem" }}>
              <div>
                <h3 style={{ color: "#E94E36", fontWeight: "300" }}>
                  Qn :- {question}
                </h3>
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  lineHeight: "1.8rem",
                  color: "rgb(130, 129, 129)",
                }}
              >
                <p>A: {answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          {faqs[1].map(({ question, answer }, index) => (
            <div key={index} style={{ marginTop: "2rem" }}>
              <div>
                <h3 style={{ color: "#E94E36", fontWeight: "300" }}>
                  Qn :- {question}
                </h3>
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  lineHeight: "1.8rem",
                  color: "rgb(130, 129, 129)",
                }}
              >
                <p>A: {answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
