import { FaMoneyBillWave, FaTools, FaMapMarkedAlt, FaHeadset } from 'react-icons/fa';

const reasons = [
  {
    icon: FaMoneyBillWave,
    title: 'Affordable & Competitive Pricing',
    description: 'Reliable service support with budget-friendly, practical pricing for local AC and cooling needs.',
  },
  {
    icon: FaTools,
    title: 'Wide Range of AC & Cooling Services',
    description: 'Support for residential, commercial, heavy-duty, chiller, cooling chamber, and dairy cooling systems.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Service Across Agra & Nearby Areas',
    description: 'Helping customers in Agra and surrounding locations within approximately 100 km of the service area.',
  },
  {
    icon: FaHeadset,
    title: 'Easy Booking Through Call or WhatsApp',
    description: 'Quick and convenient enquiry support through direct phone or WhatsApp communication.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-block alt-bg" aria-labelledby="why-us-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Why Choose Us</span>
          <h2 id="why-us-title">Straightforward Support for AC & Cooling Needs</h2>
        </div>

        <div className="reasons-grid">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="reason-card">
              <div className="reason-icon" aria-hidden="true">
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

export default WhyChooseUs;
