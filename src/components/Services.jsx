import ServiceCard from './ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="section-block" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Our Services</span>
          <h2 id="services-title">AC Repair, Servicing & Cooling Support</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
