import { solutions } from '../data/solutions';

const Solutions = () => {
  return (
    <section id="solutions" className="section-block alt-bg" aria-labelledby="solutions-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Cooling Solutions</span>
          <h2 id="solutions-title">Equipment for Every Cooling Requirement</h2>
          <p>From dairy and food storage to everyday air conditioning, we design support around your space and usage.</p>
        </div>

        <div className="solutions-grid">
          {solutions.map(({ icon: Icon, title, description }) => (
            <article key={title} className="solution-card">
              <div className="service-icon" aria-hidden="true">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#contact" className="text-button" aria-label={`Enquire about ${title}`}>
                Discuss this solution
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;