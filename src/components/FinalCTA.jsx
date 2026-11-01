import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_PHONE, WHATSAPP_NUMBER, formatPhoneLink, formatWhatsAppLink } from '../data/contact';

const FinalCTA = () => {
  const phoneLink = formatPhoneLink(BUSINESS_PHONE);
  const whatsappLink = formatWhatsAppLink(WHATSAPP_NUMBER);

  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta-inner">
        <div>
          <span className="eyebrow light">Need Assistance?</span>
          <h2 id="final-cta-title">Quick support for AC repair, servicing, and cooling-system enquiries</h2>
        </div>

        {(phoneLink || whatsappLink) && (
          <div className="final-cta-actions">
            {phoneLink && (
              <a className="btn btn-light" href={phoneLink}>
                <FaPhoneAlt />
                <span>Call Now</span>
              </a>
            )}
            {whatsappLink && (
              <a className="btn btn-outline-light" href={whatsappLink} target="_blank" rel="noreferrer">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FinalCTA;
