import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_PHONE, WHATSAPP_NUMBER, formatPhoneLink, formatWhatsAppLink } from '../data/contact';

const Header = () => {
  const phoneLink = formatPhoneLink(BUSINESS_PHONE);
  const whatsappLink = formatWhatsAppLink(WHATSAPP_NUMBER);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand-block" aria-label="Shiva Shakti Refrigeration home">
          <span className="brand-mark">SS</span>
          <div>
            <p className="brand-name">Shiva Shakti</p>
            <p className="brand-subtitle">Refrigeration</p>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#projects">Our Work</a>
          <a href="#why-us">Why Choose Us</a>
          <a href="#service-area">Service Area</a>
          <a href="#contact">Contact</a>
        </nav>

        {(phoneLink || whatsappLink) && (
          <div className="header-actions">
            {phoneLink && (
              <a className="btn btn-light btn-small" href={phoneLink}>
                <FaPhoneAlt />
                <span>Call Now</span>
              </a>
            )}
            {whatsappLink && (
              <a className="btn btn-solid btn-small" href={whatsappLink} target="_blank" rel="noreferrer">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
