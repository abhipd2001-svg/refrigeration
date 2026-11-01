const normalizeNumber = (number = '') => number.replace(/\D/g, '');

export const BUSINESS_PHONE = normalizeNumber(import.meta.env.VITE_BUSINESS_PHONE);
export const WHATSAPP_NUMBER = normalizeNumber(import.meta.env.VITE_WHATSAPP_NUMBER || BUSINESS_PHONE);

export const formatPhoneLink = (phone = BUSINESS_PHONE) => phone ? `tel:${phone}` : null;
export const formatWhatsAppLink = (number = WHATSAPP_NUMBER) => number ? `https://wa.me/${number}` : null;
