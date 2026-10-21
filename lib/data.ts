export interface FocusArea {
  id: string;
  category: string;
  badge: string;
  title: string;
  image: string;
  causeOption: string;
  description: string;
  highlights: string[];
  impactMetric: string;
}

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "children",
    category: "children",
    badge: "CHILDREN",
    title: "Child Welfare & Education",
    image: "/images/v26_1754.png",
    causeOption: "Child Welfare & Education",
    description:
      "Every child deserves foundational care, safe classrooms, and holistic development. In rural Bundelkhand and Uttar Pradesh, we support over 500 children with school kits, remedial coaching, and regular pediatric health checkups.",
    highlights: [
      "Deployment of digital learning kits & classroom supplies",
      "Remedial after-school tutoring for slow-paced learners",
      "Quarterly pediatric nutrition monitoring & health camps",
      "Child protection & anti-child-labor grassroots drives",
    ],
    impactMetric: "500+ Children Supported",
  },
  {
    id: "youth",
    category: "youth",
    badge: "YOUTH",
    title: "Youth Development & Skills",
    image: "/images/v26_1771.png",
    causeOption: "Youth Development & Skills",
    description:
      "Bridging the critical gap between raw talent and economic self-sufficiency. We provide technical certifications, interview prep, career mentorship, and micro-entrepreneurship incubation for rural youth.",
    highlights: [
      "Short-term technical certifications aligned to regional industries",
      "One-on-one career counseling and mentorship network",
      "Apprenticeship placements with verified manufacturing and IT partners",
      "Rural micro-enterprise guidance and seed funding linkages",
    ],
    impactMetric: "1,800+ Youth Trained & Certified",
  },
  {
    id: "women",
    category: "women",
    badge: "WOMEN",
    title: "Women Empowerment & Collectives",
    image: "/images/v26_1788.png",
    causeOption: "Women Empowerment",
    description:
      "Fostering financial self-reliance and collective leadership among rural women. We incubate Self-Help Groups (SHGs), deliver tailoring and artisanal skill workshops, and provide direct market linkages.",
    highlights: [
      "Forming and sustaining 120+ active Self-Help Groups (SHGs)",
      "Vocational training in advanced tailoring, handicraft, and food processing",
      "Financial literacy and zero-collateral micro-credit facilitation",
      "Legal rights, maternal wellness, and gender parity community workshops",
    ],
    impactMetric: "350+ Women Economically Empowered",
  },
  {
    id: "digital",
    category: "digital",
    badge: "DIGITAL",
    title: "Education & Digital Literacy",
    image: "/images/v26_1805.png",
    causeOption: "Education & Digital Literacy",
    description:
      "Democratizing modern digital opportunities for underprivileged rural students. We build modern solar-powered computer labs and provide foundational digital courses to prepare youth for the 21st-century economy.",
    highlights: [
      "High-speed computer labs established in rural schools",
      "Digital curriculum covering basic computing, coding, and internet safety",
      "Merit scholarships for underprivileged rural students",
      "Digital teacher capacity training modules",
    ],
    impactMetric: "25+ Digital Classrooms Established",
  },
  {
    id: "health",
    category: "health",
    badge: "HEALTH",
    title: "Healthcare & Preventive Wellness",
    image: "/images/v26_1822.png",
    causeOption: "Healthcare & Well-Being",
    description:
      "Bringing primary medical checkups, maternal care, and preventive health screenings straight to rural doorsteps where hospital access is severely constrained.",
    highlights: [
      "Free doorstep multi-specialty mobile health camps",
      "Maternal & child malnutrition intervention programs",
      "Menstrual hygiene education & free biodegradable sanitary pad distribution",
      "Preventive diagnostic screenings for diabetes, anemia, and hypertension",
    ],
    impactMetric: "700+ Screenings Conducted",
  },
  {
    id: "community",
    category: "community",
    badge: "COMMUNITY",
    title: "Community & Rural Infrastructure",
    image: "/images/v26_1839.png",
    causeOption: "General Support",
    description:
      "Strengthening grassroots governance, local civic capacity, and community infrastructure to ensure self-sustained rural transformation.",
    highlights: [
      "Facilitating gram sabha citizen participation workshops",
      "Connecting underserved households to official government welfare schemes",
      "Community drinking water points & solar street lamp installations",
      "Youth leadership councils for village dispute resolution and public development",
    ],
    impactMetric: "25+ Village Ecosystems Transformed",
  },
  {
    id: "environment",
    category: "environment",
    badge: "ENVIRONMENT",
    title: "Environment & Climate Resilience",
    image: "/images/v26_1856.png",
    causeOption: "Environment & Ecology",
    description:
      "Restoring native biodiversity and ground water reserves in Bundelkhand’s drought-prone landscape through mass community afforestation and rainwater harvesting.",
    highlights: [
      "Mass plantation drives with 1,200+ indigenous trees planted",
      "Check-dam restoration and rooftop rainwater harvesting units",
      "Zero-waste village campaigns and plastic recycling incentives",
      "Solar lighting and clean renewable energy awareness drives",
    ],
    impactMetric: "1,200+ Native Saplings Thriving",
  },
  {
    id: "innovation",
    category: "innovation",
    badge: "INNOVATION",
    title: "Frontier Technology & Innovation",
    image: "/images/v26_1873.png",
    causeOption: "Technology & Innovation",
    description:
      "Inspiring rural youth to explore emerging technologies including drone mechanics, artificial intelligence, robotics, and clean electric mobility fundamentals.",
    highlights: [
      "Hands-on robotics and electronics demonstration labs",
      "Drone piloting and agricultural aerial mapping workshops",
      "Introduction to AI and digital problem-solving",
      "EV mechanic apprenticeship prep camps",
    ],
    impactMetric: "800+ Students Engaged in Tech Camps",
  },
];

export interface Director {
  name: string;
  role: string;
  image: string;
  bullets: string[];
}

export const BOARD_OF_DIRECTORS: Director[] = [
  {
    name: "Mr. Karan Singh",
    role: "Founder and Managing Director",
    image: "/images/Karansing.jpeg",
    bullets: [
      "Visionary grassroots changemaker advancing social equity, foundational literacy & rural welfare.",
      "Spearheading community initiatives, youth mobilization, and educational outreach across India.",
      "Guiding transparent institutional governance and strategic development partnerships.",
    ],
  },
  {
    name: "Mrs. Monika",
    role: "Director, Women & Child Welfare",
    image: "/images/monikasing.jpeg",
    bullets: [
      "Championing women self-help collectives, micro-enterprises & financial self-reliance.",
      "Spearheading maternal healthcare camps, child nutrition, and girl-child education.",
      "Driving community-led skill incubation and grassroots family welfare in Uttar Pradesh.",
    ],
  },
  {
    name: "Mr. Sunil Kumar",
    role: "Director, Strategy & Growth",
    image: "/images/SunilKumar.jpeg",
    bullets: [
      "Orchestrating sustainable institutional expansion, CSR alignments & strategic growth.",
      "Establishing donor transparency, Schedule VII compliance & multilateral collaborations.",
      "Leading scalable rural development and high-impact interventions across states.",
    ],
  },
];

export interface TeamLead {
  name: string;
  role: string;
  initials?: string;
  image?: string;
  gradient?: string;
}

export const CORE_LEADERSHIP_TEAM: TeamLead[] = [
  {
    name: "Mr. Anuj Pal",
    role: "Lead - Corporate Relations & Fundraising",
    image: "/images/anuj.jpeg",
  },
  {
    name: "Mr. Dharmendra Kumar",
    role: "Lead - Operations",
    image: "/images/dharmendra.jpeg",
  },
  {
    name: "Mr. Himanshu Negi",
    role: "Lead - Communications & Branding",
    image: "/images/himanshu.jpeg",
  },
  {
    name: "Mr. Sailendra Kumar",
    role: "Lead - HR & Compliance",
    image: "/images/shailendra.jpeg",
  },
  {
    name: "Mr. Prabhat Singh Chauhan",
    role: "Lead - Industry Partnerships",
    image: "/images/Prabhat.jpeg",
  },
  {
    name: "Mr. Vivek Kumar",
    role: "Lead - Technology",
    image: "/images/Vivek.png",
  },
];

export interface ImpactStat {
  value: number;
  suffix: string;
  divisor?: number;
  label: string;
  sublabel: string;
  iconName: string;
}

export const IMPACT_STATS: ImpactStat[] = [
  {
    value: 500,
    suffix: "+",
    label: "Children Supported",
    sublabel: "Foundational schooling kits & remedial education",
    iconName: "GraduationCap",
  },
  {
    value: 1800,
    suffix: "+",
    label: "Youth Certified",
    sublabel: "Industry-aligned vocational & tech apprenticeships",
    iconName: "Briefcase",
  },
  {
    value: 350,
    suffix: "+",
    label: "Women Empowered",
    sublabel: "Self-help collectives & micro-enterprises launched",
    iconName: "Users",
  },
  {
    value: 700,
    suffix: "+",
    label: "Health Screenings",
    sublabel: "Rural doorstep mobile clinical diagnostic camps",
    iconName: "HeartPulse",
  },
  {
    value: 25,
    suffix: "+",
    label: "Digital Classrooms",
    sublabel: "Solar-backed computers and coding labs installed",
    iconName: "Laptop",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Native Trees Planted",
    sublabel: "Ecological regeneration across village commons",
    iconName: "Trees",
  },
  {
    value: 25,
    suffix: "+",
    label: "Villages Transformed",
    sublabel: "Empowering panchayats with clean civic facilities",
    iconName: "Building2",
  },
  {
    value: 100,
    suffix: "%",
    label: "80G Certified",
    sublabel: "Registered Section 8 nonprofit governance",
    iconName: "ShieldCheck",
  },
];

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: "Education" | "Livelihoods" | "Environment" | "Healthcare";
  image: string;
  excerpt: string;
  content: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: "Equipping 500+ Rural Students With Foundational STEM Kits",
    date: "October 2026",
    category: "Education",
    image: "/images/v26_2841.png",
    excerpt:
      "Our digital education wing deployed tablet-assisted interactive learning modules and hands-on science experiment kits across 6 primary schools in Garautha block, Jhansi.",
    content:
      "Our digital education wing successfully deployed tablet-assisted learning modules and hands-on scientific experiment kits across 6 primary schools in the Garautha block of Jhansi district.\n\nOver 500 rural students experienced interactive science experiments, foundational mathematics games, and computer basics for the first time. The initiative is paired with intensive teacher training sessions to ensure continuous and enthusiastic learning throughout the academic calendar.\n\nCommunity response has been overwhelmingly positive, with daily student attendance improving by 28% across participating village schools.",
  },
  {
    id: 2,
    title: "Garautha Women's Collective Inaugurates Tailoring Hub",
    date: "October 2026",
    category: "Livelihoods",
    image: "/images/v26_2860.png",
    excerpt:
      "Forty-five rural women completed advanced vocational tailoring and textile design, establishing their self-reliant apparel manufacturing center.",
    content:
      "Forty-five women graduated from our advanced vocational tailoring and textile design course, celebrating the official inauguration of the Garautha Women's Self-Reliant Apparel Hub.\n\nEquipped with 20 industrial sewing machines, the center has already secured bulk supply orders for school uniforms and eco-friendly cotton tote bags, ensuring steady independent income for all participating households.\n\nThe hub also integrates digital payment training, empowering women artisans to operate bank accounts and manage household savings directly.",
  },
  {
    id: 3,
    title: "Planting 5,000 Native Saplings Across Jhansi Rural Belt",
    date: "September 2026",
    category: "Environment",
    image: "/images/v26_2879.png",
    excerpt:
      "Youth councils, school children, and village elders partnered with our environmental cell to plant 5,000 indigenous trees with guaranteed community guardianship.",
    content:
      "Local youth councils, school children, and village elders joined hands with our ecological cell to plant 5,000 indigenous trees (Neem, Peepal, Banyan, and Jamun) across village commons and catchment borders.\n\nEvery sapling has been assigned to a local youth guardian to ensure watering and fencing protection, achieving an average survival rate exceeding 88% in past cohorts.\n\nThe project contributes to soil erosion prevention and groundwater recharge throughout the semi-arid Garautha basin.",
  },
];

export interface MissionPillar {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  stat: string;
}

export const MISSION_PILLARS: MissionPillar[] = [
  {
    title: "Foundational Literacy & Tech",
    tagline: "Quality Education for Every Child",
    description:
      "Delivering quality primary education, STEM kits, digital literacy, and holistic mentorship to children in remote villages.",
    iconName: "GraduationCap",
    stat: "500+ Students",
  },
  {
    title: "Preventive Healthcare",
    tagline: "Dignified Health at Doorsteps",
    description:
      "Organizing mobile health clinics, pediatric nutrition screenings, and free maternal health diagnostic camps.",
    iconName: "HeartPulse",
    stat: "700+ Screenings",
  },
  {
    title: "Women Self-Reliance",
    tagline: "Economic Independence & Dignity",
    description:
      "Incubating women self-help collectives, micro-enterprises, vocational textile training, and financial literacy.",
    iconName: "Users",
    stat: "350+ Women",
  },
  {
    title: "Ecological Stewardship",
    tagline: "Climate Resilience in Bundelkhand",
    description:
      "Spearheading native afforestation, rainwater harvesting structures, clean solar adoption, and civic sustainability.",
    iconName: "Trees",
    stat: "1,200+ Trees",
  },
];

export interface CommunityEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  badge: string;
}

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    title: "Winter Tree Afforestation Sprint",
    date: "Nov 15, 2026",
    time: "8:00 AM – 1:00 PM",
    location: "Village Khajraha, Jhansi",
    category: "Tree Plantation & Clean Water",
    badge: "ENVIRONMENT",
  },
  {
    title: "Rural Health & Maternal Wellness Camp",
    date: "Oct 28, 2026",
    time: "9:00 AM – 4:00 PM",
    location: "Garautha Community Health Center, Jhansi",
    category: "Medical Camps / Healthcare",
    badge: "HEALTHCARE",
  },
  {
    title: "Youth Tech & Robotics Workshop",
    date: "Dec 05, 2026",
    time: "10:00 AM – 3:30 PM",
    location: "Neev Digital Center, Jhansi",
    category: "Tech Literacy & Computer Training",
    badge: "EDUCATION",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Is my donation eligible for 80G tax exemption?",
    answer:
      "Yes! Neev Welfare Foundation is a registered Section 8 non-profit organization with valid 80G and 12A certification from the Income Tax Department of India. Donors receive an official 80G donation receipt via email for their contribution.",
  },
  {
    question: "How can I volunteer with Neev Welfare Foundation?",
    answer:
      "We warmly welcome passionate changemakers! You can sign up through our online volunteer form on the 'Get Involved' page. Opportunities include teaching in digital classrooms, assisting in mobile medical camps, tree plantation drives, and remote mentoring for youth skills.",
  },
  {
    question: "How are donations utilized and tracked?",
    answer:
      "We maintain strict financial transparency. Over 88% of every rupee received directly funds ground-level social impact programs. Our audited financial statements and annual balance sheets are filed with the Ministry of Corporate Affairs and are open for donor review.",
  },
  {
    question: "Can corporates partner for CSR projects?",
    answer:
      "Yes. We are eligible for corporate CSR collaborations under Schedule VII of the Companies Act, 2013, with a registered MCA CSR-1 registration. We co-design tailored, measurable impact projects in Bundelkhand with comprehensive milestone tracking and audited reports.",
  },
];
