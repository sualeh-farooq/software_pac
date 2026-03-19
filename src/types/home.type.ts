
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type StatCardData = {
	value: string;
	label: string;
	icon: React.ReactNode | StaticImageData;
};


export type FAQItem = {
	id: number;
	question: string;
	answer: string;
};





export type Industry = {
	title: string;
	description: string;
	projects: string;
	icon: ReactNode | StaticImageData;
	link?: string;
	href?: string;
};



export interface SocialLink {
	label: string;
	href: string;
	icon: StaticImageData;
}