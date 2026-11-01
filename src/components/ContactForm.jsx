import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_PHONE, WHATSAPP_NUMBER, formatPhoneLink, formatWhatsAppLink } from '../data/contact';

const ContactForm = () => {
  const phoneLink = formatPhoneLink(BUSINESS_PHONE);
  const whatsappLink = formatWhatsAppLink(WHATSAPP_NUMBER);

  return (
    <section id="contact" className="section-block" aria-labelledby="contact-title">
      <div className="container contact-details-wrap">
        <div className="contact-copy">
          <span className="eyebrow">Contact Details</span>
          <h2 id="contact-title">Talk to Shiva Shakti Refrigeration</h2>
          <p>
            We provide AC, cold room, bulk milk cooler, and commercial refrigeration support in Agra and nearby areas.
          </p>
        </div>

        <div className="contact-details-card">
          {phoneLink && (
            <a className="contact-detail-item" href={phoneLink}>
              <span className="contact-detail-icon"><FaPhoneAlt /></span>
              <span>
                <strong>Call us</strong>
                <span>+{BUSINESS_PHONE}</span>
              </span>
            </a>
          )}
          {whatsappLink && (
            <a className="contact-detail-item" href={whatsappLink} target="_blank" rel="noreferrer">
              <span className="contact-detail-icon whatsapp-icon"><FaWhatsapp /></span>
              <span>
                <strong>WhatsApp us</strong>
                <span>+{WHATSAPP_NUMBER}</span>
              </span>
            </a>
          )}
          <div className="contact-detail-item">
            <span className="contact-detail-icon"><FaMapMarkerAlt /></span>
            <span>
              <strong>Service location</strong>
              <span>Agra, Uttar Pradesh and nearby areas</span>
            </span>
          </div>
          {!phoneLink && !whatsappLink && (
            <p>Call and WhatsApp details will be available when configured for this deployment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
