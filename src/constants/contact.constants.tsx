import { Images } from "../../public/Images";
import { FAQItem } from "../types/contact.type";
interface Stat {
  label: string;
  value: string;
  icon: string;
}
export const STATS: Stat[] = [
  { label: "Years of Experience", value: "10+", icon: "/ic-bag-fill.svg" },
  { label: "AI Engineers", value: "20+", icon: "/ic-voice-robot-2-solid.svg" },
  { label: "Projects Delivered", value: "50+", icon: "/ic-rocket-solid.svg" },
];

export const LOCATIONS = [
  { country: "Germany", flagKey: "Germany" },
  { country: "USA", flagKey: "USA" },

];
export const positions = [
  "top-0 left-0",              // Germany: Stays at the top anchor
  "top-[110px] left-[230px]",  // USA: Offset down and to the right
];
export const OFFICES = [
  {
    title: "Office – Germany",
    description: "", // Leave empty to only show address
    addressLines: [
      "Str. 20, 80993",
      "Andernacher",
      "München",
      "Germany",
    ],

  },
  {
    title: "Office – United States",
    description: "", // Leave empty to only show address
    addressLines: [
      "Office# 2451",
      "West Grapevine Mills Circle,",
      "Suite #213",
      "Grapevine, TX 76051",
      "United States",
    ],
    phone: "+1-702-819-6545",
  },
];
export const CONTACT_METHODS = [
  {
    icon: Images.EmailIcon,
    title: "Email",
    description: "For inquiries and support",
    detail: "blackflagfunding@gmail.com",
  },
  {
    icon: Images.PhoneIcon,
    title: "Call Us",
    description: "Talk to our team directly",
    detail: "+1-702-819-6545",
  },
];

export const CONTACT_FAQS: FAQItem[] = [
  {
    id: 1,
    question: "How quickly can I receive funding?",
    answer:
      "Most programs offer fast approvals — some as quickly as the same day. Once you apply, our team will guide you through every step to ensure smooth and timely funding.",
  },
  {
    id: 2,
    question: "Do I need perfect credit to qualify?",
    answer:
      "No, we work with businesses of all credit levels. Our soft credit pull allows you to explore options without hurting your score, and our HeroCredit program helps improve your fundability.",
  },
  {
    id: 3,
    question: "Which funding program is right for my business?",
    answer:
      "Every business is unique. We’ll help you find the best-fit funding solution — from term loans, lines of credit, SBA loans, to equipment financing — based on your goals, revenue, and growth plans.",
  },
  {
    id: 5,
    question: "How do I get started?",
    answer:
      "Fill out our simple application form with your business details and funding needs. Our team will review your info and guide you step by step — from matching you with the right programs to securing your funds.",
  },
] as const;