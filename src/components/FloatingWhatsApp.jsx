import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER, formatWhatsAppLink } from '../data/contact';

const FloatingWhatsApp = () => {
  const whatsappLink = formatWhatsAppLink(WHATSAPP_NUMBER);

  if (!whatsappLink) {
    return null;
  }

  return (
    <a
      href={whatsappLink}
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;
