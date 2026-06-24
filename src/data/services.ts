export type ServiceCategory =
  | "JAMB & UTME"
  | "Postgrad"
  | "NYSC"
  | "General";

export interface Service {
  id: string;
  name: string;
  description: string;
  /** Naira amount, or null when bundled in the general services package */
  price: number | null;
  category: ServiceCategory;
  /** lucide-style emoji glyph used as a lightweight icon */
  icon: string;
  featured?: boolean;
}

export const FILTERS: Array<"All" | ServiceCategory> = [
  "All",
  "JAMB & UTME",
  "Postgrad",
  "NYSC",
  "General",
];

export const SERVICES: Service[] = [
  {
    id: "postgrad-application",
    name: "Post Graduate Application",
    description:
      "Full handling of your postgraduate (Masters / PGD / PhD) application — from form purchase to submission.",
    price: 68700,
    category: "Postgrad",
    icon: "🎓",
    featured: true,
  },
  {
    id: "admission-2024-2025",
    name: "2024/2025 Admission (UG + PG)",
    description:
      "Complete undergraduate and postgraduate admission processing for the current academic session.",
    price: 25000,
    category: "General",
    icon: "📝",
    featured: true,
  },
  {
    id: "post-utme",
    name: "Post UTME / JAMB / Pre-Degree",
    description:
      "Register for Post-UTME, JAMB and Pre-Degree screening accurately and on time — no missed deadlines.",
    price: 10000,
    category: "JAMB & UTME",
    icon: "🧾",
    featured: true,
  },
  {
    id: "nysc-registration",
    name: "NYSC Registration (Online)",
    description:
      "Hassle-free online NYSC registration and mobilisation — correct details, the first time.",
    price: 10000,
    category: "NYSC",
    icon: "🪖",
    featured: true,
  },
  {
    id: "guidance-counselling",
    name: "Guidance and Counselling",
    description:
      "One-on-one academic and career counselling to help you choose the right path with confidence.",
    price: 1500,
    category: "General",
    icon: "🧭",
  },
  {
    id: "jamb-registration",
    name: "JAMB Registration",
    description:
      "Accurate JAMB UTME / DE registration with profile creation and exam town selection.",
    price: null,
    category: "JAMB & UTME",
    icon: "📚",
  },
  {
    id: "jamb-change",
    name: "JAMB Change of Course / Institution",
    description:
      "Switch your course or institution of choice on the JAMB CAPS portal quickly and correctly.",
    price: null,
    category: "JAMB & UTME",
    icon: "🔁",
  },
  {
    id: "rsu-id-card",
    name: "RSU ID Card Processing",
    description:
      "Get your Rivers State University student ID card processed and ready without the queues.",
    price: null,
    category: "General",
    icon: "🪪",
  },
  {
    id: "school-fee-payment",
    name: "School Fee Payment",
    description:
      "Secure payment of your school fees with instant confirmation and a verified receipt.",
    price: null,
    category: "General",
    icon: "💳",
  },
  {
    id: "freshers-clearance",
    name: "Year One (Freshers) Clearance",
    description:
      "Complete first-year clearance and documentation so you start your studies fully cleared.",
    price: null,
    category: "General",
    icon: "✅",
  },
  {
    id: "course-registration",
    name: "Course Registration",
    description:
      "Semester course registration done correctly — right units, right courses, no errors.",
    price: null,
    category: "General",
    icon: "🗂️",
  },
  {
    id: "waec-registration",
    name: "WAEC Registration",
    description:
      "Register for WAEC examinations with the correct subject combination and centre.",
    price: null,
    category: "General",
    icon: "🏫",
  },
  {
    id: "neco-registration",
    name: "NECO Registration",
    description:
      "Smooth NECO examination registration handled end to end on your behalf.",
    price: null,
    category: "General",
    icon: "🏫",
  },
  {
    id: "scholarship-applications",
    name: "Scholarship Applications",
    description:
      "Find and apply for scholarships you qualify for, with a complete, well-prepared submission.",
    price: null,
    category: "General",
    icon: "🏆",
  },
  {
    id: "hostel-booking",
    name: "Hostel Booking",
    description:
      "Reserve campus or off-campus accommodation early so you secure your space.",
    price: null,
    category: "General",
    icon: "🏠",
  },
  {
    id: "nda-application",
    name: "NDA Application",
    description:
      "Nigerian Defence Academy application processing, guided every step of the way.",
    price: null,
    category: "General",
    icon: "🎖️",
  },
  {
    id: "article-writing",
    name: "Article Writing & Assignment Help",
    description:
      "Academic research materials, well-written articles and assignment support that meet standards.",
    price: null,
    category: "General",
    icon: "✍️",
  },
  {
    id: "postgrad-clearance",
    name: "Post Graduate Clearance",
    description:
      "Postgraduate clearance and documentation handled accurately and promptly.",
    price: null,
    category: "Postgrad",
    icon: "📋",
  },
  {
    id: "part-time-applications",
    name: "Part Time Applications",
    description:
      "Part-time and sandwich programme applications processed for working students.",
    price: null,
    category: "General",
    icon: "🕒",
  },
];

export function formatNaira(price: number | null): string {
  if (price === null) return "Included in general services";
  return "₦" + price.toLocaleString("en-NG");
}
