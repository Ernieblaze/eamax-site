// Single source of truth for all business contact details.
// Update these values once and they propagate across the whole site.

export const BUSINESS = {
  name: "Ea_max IT Services",
  shortName: "Ea_max",
  rsuTag: "RSU",
  tagline: "Fast. Reliable. Secure.",
  motto: "Shaping Your Future",
  // Digits only, international format, no "+" or spaces (used for wa.me links)
  whatsapp: "2348159074358",
  phones: ["08159074358", "09138577793"],
  emails: ["ernestanabs@gmail.com", "eamaxofficial@gmail.com"],
  address: "Office 1, Rivers State University Shopping Complex, Behind UBA Bank (Main Campus), Port Harcourt.",
  hours: "Mon – Sat, 8:30am – 5:00pm",
  socials: {
    whatsappChannel: "https://whatsapp.com/channel/",
    facebook: "https://www.facebook.com/",
    facebookName: "RSU Intuition",
  },
} as const;

/**
 * Build a wa.me deep link with a pre-filled, URL-encoded message.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Standard order/enquiry link for a named service.
 */
export function orderLink(serviceName: string): string {
  return whatsappLink(
    `Hello Mr. Ernest, I want to enquire about ${serviceName}.`
  );
}

export const GENERAL_WHATSAPP = whatsappLink(
  "Hello Mr. Ernest, I'd like to make an enquiry about your services."
);
