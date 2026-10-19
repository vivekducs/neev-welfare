export const SITE_CONFIG = {
  name: "Neev Welfare Foundation",
  shortName: "Neev Welfare",
  tagline: "Building Foundations for India's Sustainable Future",
  description:
    "Neev Welfare Foundation is a registered Section 8 non-profit organization (80G & 12A certified) dedicated to grassroots transformation, foundational education, women empowerment, rural healthcare, environment & sustainability, and climate resilience across India.",
  url: "https://www.neevwelfare.org",
  ogImage: "/images/v26_1649.png",
  logo: "/images/v26_3521.png",
  cin: "U88900UP2026NPL252980",
  registration: "Registered Section 8 Non-Profit Organization, Govt. of India",
  taxExemption: "100% Tax Exemption under Section 80G & 12A of the Income Tax Act",
  ngoDarpan: "UP/2026/1222089",
  contact: {
    address: "H. No-03, Ward No-01, Village Khajraha, Post Nauta, District Jhansi, Uttar Pradesh, India, Pin Code - 284202",
    phone: "+91 8756377826",
    phoneDisplay: "+91 8756377826",
    email: "info@neevwelfare.org",
    supportEmail: "info@neevwelfare.org",
    hours: "Monday to Friday (5 days): 9:30 AM – 6:00 PM IST",
    workingDays: "Monday to Friday (5 days)",
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
