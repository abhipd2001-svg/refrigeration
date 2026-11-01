import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_PHONE, WHATSAPP_NUMBER, formatPhoneLink, formatWhatsAppLink } from '../data/contact';

const Footer = () => {
  const phoneLink = formatPhoneLink(BUSINESS_PHONE);
  const whatsappLink = formatWhatsAppLink(WHATSAPP_NUMBER);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Shiva Shakti Refrigeration</h3>
          <p>AC Repair • AC Service • Chillers • Cooling Chambers • Dairy Cooling Systems</p>
          <p>Agra, Uttar Pradesh</p>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-links">
            {phoneLink && (
              <li>
                <a href={phoneLink}>
                  <FaPhoneAlt />
                  <span>Call Now</span>
                </a>
              </li>
            )}
            {whatsappLink && (
              <li>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </li>
            )}
          </ul>
          {!phoneLink && !whatsappLink && <p>Contact options are not configured.</p>}
        </div>

        <div>
          <h4>Service Area</h4>
          <p>Service available in Agra and surrounding areas within approximately 100 km.</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Shiva Shakti Refrigeration. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
