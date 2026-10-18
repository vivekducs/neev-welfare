export const SITE_CONFIG = {
  name: "Neev Welfare Foundation",
  shortName: "Neev Welfare",
  tagline: "Building Foundations for Rural India's Sustainable Future",
  description:
    "Neev Welfare Foundation is a registered Section 8 non-profit organization (80G & 12A certified) dedicated to grassroots transformation, foundational education, women empowerment, rural healthcare, and environmental sustainability in Jhansi & Bundelkhand, Uttar Pradesh.",
  url: "https://www.neevwelfare.org",
  ogImage: "/images/v26_1649.png",
  logo: "/images/v26_3521.png",
  cin: "U88900UP2026NPL252980",
  registration: "Registered Section 8 Non-Profit Organization, Govt. of India",
  taxExemption: "100% Tax Exemption under Section 80G & 12A of the Income Tax Act",
  ngoDarpan: "UP/2026/1222089",
  contact: {
    address: "Garautha, Jhansi District, Bundelkhand, Uttar Pradesh - 284202, India",
    phone: "+91 96963 87400",
    phoneDisplay: "+91 96963 87400",
    email: "info@neevwelfare.org",
    supportEmail: "info@neevwelfare.org",
    hours: "Monday – Saturday: 9:30 AM – 6:00 PM IST",
  },
  social: {
    facebook: "https://facebook.com/neevwelfare",
    twitter: "https://twitter.com/neevwelfare",
    instagram: "https://instagram.com/neevwelfare",
    linkedin: "https://linkedin.com/company/neev-welfare-foundation",
    youtube: "https://youtube.com/@neevwelfare",
  },
};

export interface NavItem {
  label: string;
  shortLabel?: string;
  href: string;
  description?: string;
  badge?: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Home", shortLabel: "Home", href: "/" },
  { label: "About Us", shortLabel: "About", href: "/about" },
  { label: "Our Programs", shortLabel: "Programs", href: "/programs" },
  { label: "Leadership & Team", shortLabel: "Team", href: "/team" },
  { label: "Our Impact", shortLabel: "Impact", href: "/impact" },
  { label: "Get Involved", shortLabel: "Get Involved", href: "/get-involved" },
  { label: "News & Updates", shortLabel: "News", href: "/news" },
  { label: "Contact Us", shortLabel: "Contact", href: "/contact" },
];
