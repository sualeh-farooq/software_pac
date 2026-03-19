export interface FundingCard {
  id: number;
  title: string;
  description: string;
  amount: string;
  icon: React.ReactNode;
}

export const FUNDING_CARDS: FundingCard[] = [
  {
    id: 1,
    title: "Fast Funding",
    description:
      "Same-day approvals available — because when you need capital, you need it now.",
    amount: "Same-Day Decisions",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 8V12L15 15"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="var(--color-primary)"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Programs Built Around You",
    description:
      "We find the best fit for you across dozens of lenders so you don’t waste time applying everywhere.",
    amount: "20+ Lending Programs",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 7H21M3 12H21M3 17H14"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="18"
          cy="17"
          r="3"
          stroke="var(--color-primary)"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Soft Credit Pull",
    description:
      "Explore your options without hurting your credit.",
    amount: "No Impact to Score",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L4 7V12C4 17 7.5 21 12 22C16.5 21 20 17 20 12V7L12 2Z"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Human Support, Always",
    description:
      "We guide you through every step — from application to funding and beyond.",
    amount: "Real Experts. Real Help.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="8"
          r="4"
          stroke="var(--color-primary)"
          strokeWidth="2"
        />
        <path
          d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
