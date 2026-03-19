import React from "react";
import PrivacyContent from "./privacy-content-section";

// This matches the structure of your PRIVACY_SECTIONS array
interface PrivacyPageProps {
  sections: any[]; 
  
}

export default function PrivacyPage({ sections }: PrivacyPageProps) {
  return (
    <div className="bg-white py-10">
      {sections.map((item,index) => (
        <PrivacyContent key={index} section={item} />
      ))}
    </div>
  );
}