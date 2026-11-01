import { FaPhoneAlt, FaCommentDots, FaMapMarkerAlt, FaTools } from 'react-icons/fa';

const steps = [
  { icon: FaPhoneAlt, title: 'Call or WhatsApp', description: 'Reach out directly for a quick discussion about your AC or cooling issue.' },
  { icon: FaCommentDots, title: 'Tell us your issue', description: 'Share the type of AC or cooling system and the problem you are facing.' },
  { icon: FaMapMarkerAlt, title: 'Share your area', description: 'Tell us the area or location so the service request can be reviewed properly.' },
  { icon: FaTools, title: 'Get service assistance', description: 'Receive practical guidance and support for next steps in servicing or repair.' },
];

const HowItWorks = () => {
  return (
    <section className="section-block alt-bg" aria-labelledby="how-it-works-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">How It Works</span>
          <h2 id="how-it-works-title">Simple Steps to Get AC Support</h2>
        </div>

        <div className="steps-grid">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="step-item">
              <div className="step-number" aria-hidden="true">
                {index + 1}
              </div>
              <div className="step-icon" aria-hidden="true">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
