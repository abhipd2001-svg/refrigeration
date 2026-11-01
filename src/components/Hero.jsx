import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { BUSINESS_PHONE, WHATSAPP_NUMBER, formatPhoneLink, formatWhatsAppLink } from '../data/contact';

const Hero = () => {
  const phoneLink = formatPhoneLink(BUSINESS_PHONE);
  const whatsappLink = formatWhatsAppLink(WHATSAPP_NUMBER);

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">AC Repair & Cooling Specialists</span>
          <h1 id="hero-title">Reliable Cooling Solutions</h1>
          <p>
            Shiva Shakti Refrigeration provides dependable AC, cold room, bulk milk cooler, and commercial refrigeration
            solutions for homes, shops, dairy units, and industrial businesses.
          </p>

          {(phoneLink || whatsappLink) && (
            <div className="hero-actions">
              {phoneLink && (
                <a className="btn btn-solid" href={phoneLink}>
                  <FaPhoneAlt />
                  <span>Call Now</span>
                </a>
              )}
              {whatsappLink && (
                <a className="btn btn-outline" href={whatsappLink} target="_blank" rel="noreferrer">
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          )}

          <div className="service-area-badge" aria-label="Service area Agra and nearby areas within 100 km">
            <FaMapMarkerAlt />
            <span>Serving Agra and surrounding areas within approximately 100 km</span>
          </div>

          <div className="hero-proof-row" aria-label="Service highlights">
            <div>
              <strong>16+</strong>
              <span>Years of field experience</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Enquiry support</span>
            </div>
            <div>
              <strong>100 km</strong>
              <span>Service coverage</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Cooling system service illustration">
          <img
            src="https://res.cloudinary.com/axbq7ret/image/upload/v1789878013/WhatsApp_Image_2026-09-18_at_6.14.54_AM.jpg"
            alt="Walk-in cold room with commercial refrigeration equipment"
            loading="eager"
          />
          <div className="hero-visual-label">
            <span className="hero-label-dot" />
            <span>Built for reliable cooling</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
