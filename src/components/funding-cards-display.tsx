"use client";

import React from "react";
import { FUNDING_CARDS } from "@/constants/funding-cards.constants";
import { StaticImageData } from "next/image";

interface FundingCardsDisplayProps {
  cards?: typeof FUNDING_CARDS;
  title?: string;
  description?: string;
}

const FundingCardsDisplay = ({
  cards = FUNDING_CARDS,
  title,
  description,
}: FundingCardsDisplayProps) => {
  return (
    <section className="bg-background-dark py-16 sm:py-24">
      <div className="max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto px-6 lg:px-10">
        {/* Optional Header */}
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-[44px] font-bold text-white mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* 4 Cards in One Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-primary">{card.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-heading mb-3">
                {card.title}
              </h3>

              <p className="text-sm text-subtext flex-grow mb-4">
                {card.description}
              </p>

       
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundingCardsDisplay;
