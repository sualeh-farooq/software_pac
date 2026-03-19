import { FAQItem } from "@/types/home.type";

// ─── Nav Groups (Footer) ───────────────────────────────────────────────────
export const IT_NAV_GROUPS = [
  {
    title: "Services",
    links: [
      { label: "Proactive IT Support", href: "/services" },
      { label: "Network Infrastructure", href: "/services" },
      { label: "Cybersecurity", href: "/services" },
      { label: "Cloud Services", href: "/services" },
      { label: "IT Strategy & Consulting", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
] as const;

// ─── Contact Cards (Footer) ────────────────────────────────────────────────
export const IT_CONTACT_CARDS = [
  {
    label: "Email Us",
    value: "info@softwarepac.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "mailto:info@softwarepac.com",
  },
  {
    label: "Call Us",
    value: "+1 (800) 000-0000",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "tel:+18000000000",
  },
  {
    label: "Our Office",
    value: "123 Tech Park Dr, Suite 400, City, ST 00000",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "https://maps.google.com",
  },
] as const;

// ─── Social Links ──────────────────────────────────────────────────────────
export const IT_SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" fill="white" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
] as const;

// ─── IT Services FAQs ─────────────────────────────────────────────────────
export const IT_FAQS: FAQItem[] = [
  {
    id: 1,
    question: "What is Managed IT Services?",
    answer:
      "Managed IT Services means we take full responsibility for monitoring, managing, and maintaining your IT infrastructure — proactively preventing issues before they impact your business. Instead of reacting to problems, we anticipate them, keeping your systems running securely and efficiently 24/7.",
  },
  {
    id: 2,
    question: "How does your proactive monitoring work?",
    answer:
      "Our team deploys advanced monitoring tools across your entire IT environment — servers, endpoints, networks, and cloud systems. We watch for anomalies, performance degradation, and security events around the clock. When something needs attention, our engineers act before it becomes a costly outage.",
  },
  {
    id: 3,
    question: "What cybersecurity services are included?",
    answer:
      "Our cybersecurity services include threat detection and response, firewall management, endpoint protection, security patch management, compliance reporting, and rapid incident response. Every solution is built on a security-first foundation to protect your data and business continuity.",
  },
  {
    id: 4,
    question: "Can you support our existing IT infrastructure?",
    answer:
      "Absolutely. We begin with a thorough assessment of your current environment, then integrate our monitoring and management tools with minimal disruption. We work with virtually all platforms, vendors, and cloud providers — adapting to your existing setup rather than forcing costly replacements.",
  },
  {
    id: 5,
    question: "How quickly do you respond to IT incidents?",
    answer:
      "For critical incidents, our SLA guarantees a response time of less than one hour. Our helpdesk is available 24/7/365, and for high-priority issues our engineers engage immediately to contain, investigate, and resolve the problem as fast as possible.",
  },
  {
    id: 6,
    question: "What makes you different from other IT providers?",
    answer:
      "We don't just fix tickets — we take ownership of your technology environment as if it were our own. Our proactive approach, deep expertise across industries and platforms, and commitment to strategic alignment means your IT investments always support your business goals, not just keep the lights on.",
  },
  {
    id: 7,
    question: "What are your uptime and service level guarantees?",
    answer:
      "We offer a 99.9% uptime guarantee for critical systems, backed by defined SLAs for response and resolution times. Every client receives detailed monthly reports on system health, incident history, and performance metrics so you always have full visibility into your IT environment.",
  },
  {
    id: 8,
    question: "How do you help with cloud services?",
    answer:
      "We handle the entire cloud journey — from migration planning and architecture design to security hardening, cost optimization, and ongoing management. Whether you're moving to a single cloud, hybrid, or multi-cloud setup, we ensure a smooth transition and ongoing performance.",
  },
  {
    id: 9,
    question: "How do I get started?",
    answer:
      "Getting started is simple. Contact us to schedule a free IT infrastructure assessment — no cost, no obligation. Our team will evaluate your current environment, identify risks and opportunities, and recommend a tailored managed services solution that fits your needs and budget.",
  },
];

// ─── Hero Stats (empty — no stats ticker on IT hero) ─────────────────────
export const IT_HERO_STATS = [] as const;

// ─── Commitment Stats ─────────────────────────────────────────────────────
export const COMMITMENT_STATS = [
  {
    value: "99.9%",
    label: "Uptime Guarantee",
    description: "Committed to maximum availability for your critical systems",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#0a1329" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22 4 12 14.01 9 11.01" stroke="#0a1329" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "24/7",
    label: "Support Coverage",
    description: "Round-the-clock monitoring and helpdesk availability",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#0a1329" strokeWidth="2" />
        <polyline points="12 6 12 12 16 14" stroke="#0a1329" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "<1hr",
    label: "Response Time",
    description: "Rapid incident response for critical issues",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="#0a1329" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;
