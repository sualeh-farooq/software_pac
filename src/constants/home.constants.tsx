import { FAQItem, Industry, StatCardData, SocialLink } from "@/types/home.type";
import { Images } from "../../public/Images";



export const STAGES = [
	{
		id: 1,
		title: "Planning",
		description:
			"We begin by clarifying your business goals, KPIs, and success metrics, then scope the right AI use cases for your roadmap. Our team maps data sources, integration points, and constraints, defines risks and assumptions, and prepares timelines so our artificial intelligence development services stay aligned with your technical stack, budget, and commercial priorities.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
			<path d="M34.1327 24.7105C33.5708 29.3895 30.5062 31.2591 29.1826 32.6163C27.857 33.9775 28.0944 34.2486 28.1835 36.2448C28.1983 36.4918 28.1624 36.7392 28.078 36.9718C27.9937 37.2044 27.8625 37.4172 27.6927 37.5972C27.5229 37.7772 27.3181 37.9205 27.0908 38.0183C26.8635 38.1161 26.6186 38.1663 26.3712 38.1659H21.1125C20.8652 38.1655 20.6206 38.1147 20.3937 38.0166C20.1667 37.9185 19.9621 37.7752 19.7923 37.5954C19.6225 37.4157 19.4912 37.2032 19.4062 36.971C19.3213 36.7388 19.2845 36.4917 19.2983 36.2448C19.2983 34.2861 19.4803 33.8311 18.3011 32.6163C16.7975 31.1127 13.26 28.9898 13.26 23.1514C13.251 21.7012 13.5425 20.2649 14.1161 18.9329C14.6898 17.601 15.5331 16.4023 16.593 15.4124C17.6529 14.4226 18.9064 13.663 20.2744 13.1817C21.6424 12.7003 23.0953 12.5076 24.5415 12.6156C25.9877 12.7236 27.3959 13.1301 28.6772 13.8093C29.9585 14.4886 31.0852 15.4259 31.9863 16.5622C32.8874 17.6985 33.5433 19.0092 33.9127 20.4116C34.2821 21.814 34.357 23.2777 34.1327 24.7105Z" stroke="#828282" strokeWidth="2.96767" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M20.695 38.0573V41.0487C20.695 41.8658 21.1501 42.5365 21.71 42.5365H25.7717C26.3356 42.5365 26.7887 41.8638 26.7887 41.0487V38.0573M22.1987 17.2045C21.0305 17.205 19.9103 17.6694 19.0844 18.4956C18.2586 19.3219 17.7946 20.4423 17.7946 21.6105M38.2478 23.5513H41.8763M34.5956 11.6569L37.1696 9.08292M36.5741 33.6335L39.148 36.2055M23.7419 4.70264V7.63668M10.3675 9.08094L12.9237 11.6569M8.38909 36.2055L10.9453 33.6335M9.23587 23.5513H5.60938" stroke="#828282" strokeWidth="2.96767" strokeLinecap="round" strokeLinejoin="round" />
		</svg>),
		bgColor: "bg-[#F2F2F2]",
		iconBg: "bg-[#EAEAEA]",
		titleColor: "text-line-primary",
		ringColor: "ring-ring-line-secondary",
		hoverRing: "hover:ring-line-primary/60",
		substeps: ["Use Case Definition", "Data Preparation"],
	},
	{
		id: 2,
		title: "Development",
		description:
			"With the plan approved, we move into iterative development sprints focused on fast learning and visible outcomes. Engineers set up environments, repositories, and pipelines, then implement models, APIs, and UX flows. Weekly demos, testable increments, and tight feedback loops ensure your AI features evolve with real input and measurable, documented progress across each sprint cycle.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
			<path d="M13.2951 18.0322L6.44353 23.7413L13.2951 29.4504C13.5224 29.6366 13.7105 29.8659 13.8486 30.1252C13.9868 30.3845 14.0723 30.6686 14.1001 30.961C14.1279 31.2535 14.0976 31.5486 14.0108 31.8293C13.924 32.1099 13.7825 32.3707 13.5945 32.5964C13.4065 32.8221 13.1756 33.0084 12.9152 33.1445C12.6549 33.2806 12.3701 33.3637 12.0775 33.3892C11.7848 33.4147 11.4899 33.382 11.21 33.293C10.93 33.204 10.6704 33.0604 10.4462 32.8706L1.54316 25.4514C1.29242 25.2425 1.09067 24.9811 0.952222 24.6855C0.813772 24.39 0.742004 24.0677 0.742004 23.7413C0.742004 23.415 0.813772 23.0926 0.952222 22.7971C1.09067 22.5015 1.29242 22.2401 1.54316 22.0312L10.4462 14.612C10.9004 14.2398 11.4833 14.0621 12.0678 14.1178C12.6524 14.1734 13.1913 14.4578 13.5672 14.909C13.943 15.3602 14.1253 15.9416 14.0744 16.5266C14.0234 17.1116 13.7433 17.6528 13.2951 18.0322ZM45.9395 22.0312L37.0365 14.612C36.8123 14.4222 36.5527 14.2786 36.2727 14.1896C35.9928 14.1006 35.6979 14.0679 35.4053 14.0934C35.1126 14.1189 34.8278 14.202 34.5675 14.3381C34.3071 14.4742 34.0762 14.6605 33.8882 14.8862C33.7002 15.1119 33.5587 15.3727 33.4719 15.6533C33.3851 15.934 33.3548 16.2291 33.3826 16.5216C33.4105 16.814 33.4959 17.0981 33.6341 17.3574C33.7722 17.6167 33.9603 17.846 34.1876 18.0322L41.0392 23.7413L34.1876 29.4504C33.9603 29.6366 33.7722 29.8659 33.6341 30.1252C33.4959 30.3845 33.4105 30.6686 33.3826 30.961C33.3548 31.2535 33.3851 31.5486 33.4719 31.8293C33.5587 32.1099 33.7002 32.3707 33.8882 32.5964C34.0762 32.8221 34.3071 33.0084 34.5675 33.1445C34.8278 33.2806 35.1126 33.3637 35.4053 33.3892C35.6979 33.4147 35.9928 33.382 36.2727 33.293C36.5527 33.204 36.8123 33.0604 37.0365 32.8706L45.9395 25.4514C46.1903 25.2425 46.392 24.9811 46.5305 24.6855C46.6689 24.39 46.7407 24.0677 46.7407 23.7413C46.7407 23.415 46.6689 23.0926 46.5305 22.7971C46.392 22.5015 46.1903 22.2401 45.9395 22.0312ZM30.4372 5.3269C30.1624 5.22698 29.8707 5.18217 29.5786 5.19502C29.2865 5.20788 28.9999 5.27815 28.735 5.40182C28.47 5.52549 28.2321 5.70013 28.0347 5.91578C27.8373 6.13143 27.6843 6.38386 27.5845 6.65864L15.7138 39.303C15.5126 39.8577 15.5398 40.4695 15.7896 41.0041C16.0393 41.5387 16.491 41.9522 17.0455 42.1539C17.289 42.2437 17.5465 42.2896 17.806 42.2893C18.263 42.2893 18.7089 42.1488 19.0832 41.8866C19.4575 41.6245 19.7421 41.2534 19.8982 40.824L31.7689 8.17957C31.8688 7.90482 31.9136 7.61308 31.9008 7.32101C31.8879 7.02894 31.8177 6.74226 31.694 6.47735C31.5703 6.21245 31.3957 5.9745 31.18 5.7771C30.9644 5.5797 30.712 5.42672 30.4372 5.3269Z" fill="#708FB4" />
		</svg>),
		bgColor: "bg-[#f4f9ff]",
		iconBg: "bg-[#e9f3ff]",
		titleColor: "text-[#708fb4]",
		ringColor: "ring-[#9FCBFF]",
		hoverRing: "hover:ring-[#9FCBFF]/60",
		substeps: ["Model Selection", "RAG & Prompt Tuning", "Fine-Tuning"],
	},
	{
		id: 3,
		title: "Deployment",
		description:
			"Once features are validated, we prepare them for deployment into real products and environments. Our team hardens APIs, reviews security, optimizes performance, and integrates with your cloud, data, and monitoring stack. We manage rollouts, canary releases, and fallbacks so new AI capabilities reach users safely with minimal disruption and clear stakeholder visibility for your teams.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
			<path d="M42.2612 8.69714C42.2059 7.79338 41.8219 6.94108 41.1816 6.30083C40.5414 5.66058 39.6891 5.2766 38.7853 5.22125C36.35 5.07843 30.1327 5.29915 24.9708 10.4592L24.2975 11.1288H13.792C13.3046 11.1271 12.8218 11.2224 12.3715 11.409C11.9213 11.5956 11.5126 11.8698 11.1693 12.2157L4.79806 18.5832C4.31031 19.0707 3.96812 19.6845 3.8099 20.3558C3.65167 21.027 3.68369 21.729 3.90234 22.3831C4.12099 23.0371 4.51763 23.6172 5.04772 24.0583C5.57781 24.4995 6.22037 24.7841 6.90325 24.8802L13.792 25.841L21.6415 33.6905L22.6041 40.5866C22.6979 41.2706 22.9817 41.9145 23.4234 42.445C23.8651 42.9756 24.4469 43.3715 25.1025 43.5877C25.4838 43.7127 25.8828 43.7753 26.284 43.7732C26.7702 43.7729 27.2514 43.6765 27.7002 43.4897C28.1491 43.3028 28.5565 43.0292 28.8993 42.6844L35.2686 36.3132C35.614 35.9696 35.8878 35.5608 36.074 35.1106C36.2603 34.6604 36.3554 34.1777 36.3537 33.6905V23.1849L37.0214 22.5191C42.1833 17.3498 42.404 11.1288 42.2612 8.69714ZM14.0961 15.5803H19.846L14.0498 21.3821L8.99917 20.6773L14.0961 15.5803ZM28.1184 13.6086C29.3884 12.3281 30.9039 11.317 32.5739 10.6359C34.2439 9.95486 36.0342 9.6178 37.8375 9.64494C37.8657 11.4489 37.529 13.2399 36.8475 14.9104C36.1661 16.5809 35.1539 18.0965 33.872 19.3659L23.7411 29.4912L17.9912 23.7414L28.1184 13.6086ZM31.9022 33.3863L26.8033 38.4852L26.0985 33.4345L31.9022 27.6365V33.3863ZM18.5477 37.4669C16.9321 39.6648 13.6899 42.2893 7.41888 42.2893C6.82858 42.2893 6.26245 42.0548 5.84504 41.6374C5.42763 41.22 5.19313 40.6539 5.19313 40.0636C5.19313 33.787 7.8121 30.5448 10.0156 28.9348C10.2487 28.7389 10.5196 28.593 10.8114 28.506C11.1032 28.419 11.4097 28.3928 11.712 28.429C12.0143 28.4652 12.306 28.5631 12.569 28.7165C12.832 28.87 13.0607 29.0757 13.241 29.3211C13.4213 29.5665 13.5493 29.8463 13.6171 30.1431C13.685 30.4399 13.6912 30.7475 13.6354 31.0468C13.5796 31.3462 13.463 31.6309 13.2927 31.8833C13.1225 32.1358 12.9023 32.3506 12.6457 32.5146C11.5551 33.3177 10.2957 34.8331 9.83012 37.6523C12.6513 37.1868 14.1648 35.9274 14.9679 34.8368C15.1318 34.5802 15.3467 34.36 15.5991 34.1897C15.8516 34.0195 16.1363 33.9029 16.4356 33.8471C16.7349 33.7913 17.0425 33.7975 17.3394 33.8653C17.6362 33.9332 17.916 34.0612 18.1613 34.2415C18.4067 34.4217 18.6125 34.6505 18.766 34.9134C18.9194 35.1764 19.0173 35.4681 19.0535 35.7704C19.0897 36.0728 19.0635 36.3793 18.9765 36.6711C18.8895 36.9629 18.7435 37.2337 18.5477 37.4669Z" fill="#709D86" />
		</svg>),
		bgColor: "bg-[#f1fff8]",
		iconBg: "bg-[#e5f5ed]",
		titleColor: "text-[#709d86]",
		ringColor: "ring-[#A0FDCE]",
		hoverRing: "hover:ring-[#A0FDCE]/60",
		substeps: ["Integration & APIs",
			"Infrastructure & Scaling",
			"Monitoring"
		],
	},
	{
		id: 4,
		title: "Optimization",
		description:
			"After launch, we focus on optimization so your AI product keeps improving instead of slowly degrading. We monitor accuracy, latency, adoption, and cost, then tune prompts, retrain models, and refine infrastructure. Regular reviews turn usage data into a roadmap of enhancements that compound ROI over time for your organization, for every release cycle.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
			<g clipPath="url(#clip0_1882_19968)">
				<mask id="mask0_1882_19968" maskUnits="userSpaceOnUse" x="3" y="5" width="48" height="36">
					<path d="M11.1585 38.3025C4.19433 31.3582 4.19433 20.081 11.1585 13.1367C18.1028 6.17254 29.38 6.17254 36.3243 13.1367C43.2885 20.081 43.2885 31.3582 36.3243 38.3025" stroke="white" strokeWidth="3.9569" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M27.9221 34.6852C22.9706 36.994 17.0849 34.8518 14.776 29.9004C12.4671 24.9489 14.6094 19.0632 19.5608 16.7543C24.5122 14.4454 50.6377 13.1778 50.6377 13.1778C50.6377 13.1778 32.8735 32.3763 27.9221 34.6852Z" fill="black" />
					<path d="M26.2498 31.099C23.279 32.4843 19.7476 31.1991 18.3622 28.2281C16.9768 25.2572 18.2623 21.7258 21.2331 20.3405C24.204 18.9551 43.4654 16.5223 43.4654 16.5223C43.4654 16.5223 29.2208 29.7136 26.2498 31.099Z" fill="white" />
				</mask>
				<g mask="url(#mask0_1882_19968)">
					<path d="M47.4828 0H0V47.4828H47.4828V0Z" fill="#B37676" />
				</g>
			</g>
			<defs>
				<clipPath id="clip0_1882_19968">
					<rect width="47.4828" height="47.4828" fill="white" />
				</clipPath>
			</defs>
		</svg>),
		bgColor: "bg-[#fff6f6]",
		iconBg: "bg-[#ffeeee]",
		titleColor: "text-[#b37676]",
		ringColor: "ring-[#FFC5C5]",
		hoverRing: "hover:ring-[#FFC5C5]/60",
		substeps: ["Security & Compliance", "Maintenance & Retraining"],
	},
] as const;

export const MODELS = [
	{
		title: "AI Consulting & Strategy",
		description: "We shape roadmaps in 2–4 weeks, prioritize use cases, and align teams, data, and infrastructure together.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
			<path fillRule="evenodd" clipRule="evenodd" d="M12.75 1.77051C13.0318 1.77051 13.302 1.88245 13.5013 2.08171C13.7006 2.28096 13.8125 2.55122 13.8125 2.83301V4.62226C14.5208 4.60994 15.2291 4.6038 15.9375 4.60384V2.83301C15.9375 2.55122 16.0494 2.28096 16.2487 2.08171C16.448 1.88245 16.7182 1.77051 17 1.77051C17.2818 1.77051 17.552 1.88245 17.7513 2.08171C17.9506 2.28096 18.0625 2.55122 18.0625 2.83301V4.60384C18.8199 4.60384 19.5283 4.60998 20.1875 4.62226V2.83301C20.1875 2.55122 20.2994 2.28096 20.4987 2.08171C20.698 1.88245 20.9682 1.77051 21.25 1.77051C21.5318 1.77051 21.802 1.88245 22.0013 2.08171C22.2006 2.28096 22.3125 2.55122 22.3125 2.83301V4.71292C22.6808 4.74126 23.0298 4.77715 23.3594 4.82059C25.0197 5.04442 26.3642 5.51476 27.4252 6.57442C28.4849 7.63551 28.9552 8.97992 29.1791 10.6403C29.2225 10.9708 29.2584 11.3198 29.2867 11.6872H31.1667C31.4485 11.6872 31.7187 11.7991 31.918 11.9984C32.1172 12.1976 32.2292 12.4679 32.2292 12.7497C32.2292 13.0315 32.1172 13.3017 31.918 13.501C31.7187 13.7002 31.4485 13.8122 31.1667 13.8122H29.3774C29.3897 14.4714 29.3958 15.1797 29.3958 15.9372H31.1667C31.4485 15.9372 31.7187 16.0491 31.918 16.2484C32.1172 16.4476 32.2292 16.7179 32.2292 16.9997C32.2292 17.2815 32.1172 17.5517 31.918 17.751C31.7187 17.9502 31.4485 18.0622 31.1667 18.0622H29.3958C29.3958 18.8196 29.3897 19.528 29.3774 20.1872H31.1667C31.4485 20.1872 31.7187 20.2991 31.918 20.4984C32.1172 20.6976 32.2292 20.9679 32.2292 21.2497C32.2292 21.5315 32.1172 21.8017 31.918 22.001C31.7187 22.2002 31.4485 22.3122 31.1667 22.3122H29.2867C29.2584 22.6805 29.2225 23.0295 29.1791 23.3591C28.9552 25.0194 28.4849 26.3638 27.4252 27.4249C26.3642 28.4846 25.0197 28.9549 23.3594 29.1788C23.0289 29.2222 22.6799 29.2581 22.3125 29.2864V31.1663C22.3125 31.4481 22.2006 31.7184 22.0013 31.9176C21.802 32.1169 21.5318 32.2288 21.25 32.2288C20.9682 32.2288 20.698 32.1169 20.4987 31.9176C20.2994 31.7184 20.1875 31.4481 20.1875 31.1663V29.3771C19.5283 29.3894 18.8199 29.3955 18.0625 29.3955V31.1663C18.0625 31.4481 17.9506 31.7184 17.7513 31.9176C17.552 32.1169 17.2818 32.2288 17 32.2288C16.7182 32.2288 16.448 32.1169 16.2487 31.9176C16.0494 31.7184 15.9375 31.4481 15.9375 31.1663V29.3955C15.18 29.3955 14.4717 29.3894 13.8125 29.3771V31.1663C13.8125 31.4481 13.7006 31.7184 13.5013 31.9176C13.302 32.1169 13.0318 32.2288 12.75 32.2288C12.4682 32.2288 12.198 32.1169 11.9987 31.9176C11.7994 31.7184 11.6875 31.4481 11.6875 31.1663V29.2864C11.3192 29.2581 10.9702 29.2222 10.6406 29.1788C8.98024 28.9549 7.63583 28.4846 6.57474 27.4249C5.51508 26.3638 5.04474 25.0194 4.82091 23.3591C4.77747 23.0285 4.74158 22.6796 4.71324 22.3122H2.83333C2.55154 22.3122 2.28128 22.2002 2.08203 22.001C1.88277 21.8017 1.77083 21.5315 1.77083 21.2497C1.77083 20.9679 1.88277 20.6976 2.08203 20.4984C2.28128 20.2991 2.55154 20.1872 2.83333 20.1872H4.62258C4.61026 19.4789 4.60412 18.7705 4.60416 18.0622H2.83333C2.55154 18.0622 2.28128 17.9502 2.08203 17.751C1.88277 17.5517 1.77083 17.2815 1.77083 16.9997C1.77083 16.7179 1.88277 16.4476 2.08203 16.2484C2.28128 16.0491 2.55154 15.9372 2.83333 15.9372H4.60416C4.60416 15.1797 4.6103 14.4714 4.62258 13.8122H2.83333C2.55154 13.8122 2.28128 13.7002 2.08203 13.501C1.88277 13.3017 1.77083 13.0315 1.77083 12.7497C1.77083 12.4679 1.88277 12.1976 2.08203 11.9984C2.28128 11.7991 2.55154 11.6872 2.83333 11.6872H4.71324C4.74158 11.3188 4.77747 10.9699 4.82091 10.6403C5.04474 8.97992 5.51508 7.63551 6.57474 6.57442C7.63583 5.51476 8.98024 5.04442 10.6406 4.82059C10.9711 4.77715 11.3201 4.74126 11.6875 4.71292V2.83301C11.6875 2.55122 11.7994 2.28096 11.9987 2.08171C12.198 1.88245 12.4682 1.77051 12.75 1.77051ZM10.9225 6.92717C9.49874 7.11842 8.67708 7.47826 8.07783 8.07751C7.47858 8.67676 7.11874 9.49842 6.92749 10.9222C6.73199 12.3785 6.72916 14.2967 6.72916 16.9983C6.72916 19.6998 6.73199 21.6194 6.92749 23.0758C7.11874 24.4995 7.47858 25.3212 8.07783 25.9204C8.67708 26.5197 9.49874 26.8795 10.9239 27.0708C12.3802 27.2663 14.2984 27.2691 17 27.2691C19.7016 27.2691 21.6212 27.2663 23.0775 27.0708C24.5012 26.8795 25.3229 26.5197 25.9222 25.9204C26.5214 25.3212 26.8812 24.4995 27.0725 23.0743C27.268 21.618 27.2708 19.6998 27.2708 16.9983C27.2708 14.2967 27.268 12.3785 27.0725 10.9208C26.8812 9.49701 26.5214 8.67534 25.9222 8.07609C25.3229 7.47684 24.5012 7.11701 23.0761 6.92576C21.6197 6.73026 19.7016 6.72742 17 6.72742C14.2984 6.72742 12.3802 6.73167 10.9225 6.92717ZM14.0958 8.85242H19.9042C20.8448 8.85242 21.6566 8.85242 22.3068 8.94026C23.0038 9.03376 23.6711 9.24484 24.2122 9.78601C24.7534 10.3272 24.9645 10.9958 25.058 11.6914C25.1458 12.3417 25.1458 13.1534 25.1458 14.0955V19.901C25.1458 20.8431 25.1458 21.6548 25.058 22.3051C24.9645 23.0021 24.7534 23.6693 24.2122 24.2105C23.6711 24.7517 23.0024 24.9628 22.3068 25.0563C21.6566 25.1441 20.8448 25.1441 19.9027 25.1441H14.0972C13.1552 25.1441 12.3434 25.1441 11.6932 25.0563C10.9976 24.9628 10.3289 24.7517 9.78774 24.2105C9.24658 23.6693 9.03549 23.0007 8.94199 22.3051C8.85416 21.6548 8.85416 20.8431 8.85416 19.901V14.0969C8.85416 13.1548 8.85416 12.3431 8.94199 11.6928C9.03549 10.9973 9.24658 10.3286 9.78774 9.78742C10.3289 9.24626 10.9976 9.03517 11.6932 8.94167C12.3434 8.85384 13.1552 8.85384 14.0972 8.85384M11.9779 11.0468C11.5175 11.1092 11.373 11.2098 11.2922 11.2905C11.2115 11.3713 11.1109 11.5158 11.0486 11.9762C10.9834 12.4678 10.9806 13.135 10.9806 14.1663V19.833C10.9806 20.8643 10.9834 21.533 11.0486 22.0232C11.1109 22.4836 11.2115 22.6281 11.2922 22.7088C11.373 22.7896 11.5175 22.8902 11.9779 22.9525C12.4695 23.0177 13.1367 23.0205 14.1681 23.0205H19.8347C20.8661 23.0205 21.5347 23.0177 22.0249 22.9525C22.4853 22.8902 22.6298 22.7896 22.7106 22.7088C22.7913 22.6281 22.8919 22.4836 22.9542 22.0232C23.0194 21.5316 23.0222 20.8643 23.0222 19.833V14.1663C23.0222 13.135 23.0194 12.4663 22.9542 11.9762C22.8919 11.5158 22.7913 11.3713 22.7106 11.2905C22.6298 11.2098 22.4853 11.1092 22.0249 11.0468C21.5333 10.9817 20.8661 10.9788 19.8347 10.9788H14.1681C13.1367 10.9788 12.4681 10.9817 11.9779 11.0468ZM18.2254 13.3022C18.4548 13.4658 18.6097 13.7139 18.6562 13.9918C18.7027 14.2696 18.6369 14.5546 18.4733 14.784L17.6488 15.9372H18.4167C18.6119 15.9372 18.8033 15.9911 18.9699 16.0928C19.1365 16.1945 19.2719 16.3401 19.3612 16.5137C19.4504 16.6873 19.4902 16.8821 19.476 17.0768C19.4618 17.2715 19.3943 17.4585 19.2808 17.6173L17.2578 20.4507C17.1782 20.5678 17.0759 20.6677 16.9571 20.7448C16.8383 20.8218 16.7052 20.8742 16.5658 20.8991C16.4264 20.924 16.2834 20.9207 16.1453 20.8895C16.0072 20.8583 15.8767 20.7998 15.7615 20.7175C15.6463 20.6352 15.5487 20.5306 15.4745 20.41C15.4002 20.2894 15.3509 20.1552 15.3292 20.0153C15.3076 19.8753 15.3142 19.7324 15.3486 19.5951C15.383 19.4577 15.4445 19.3286 15.5295 19.2153L16.3512 18.0622H15.5833C15.3881 18.0621 15.1967 18.0083 15.0301 17.9066C14.8635 17.8049 14.7281 17.6592 14.6388 17.4856C14.5496 17.3121 14.5098 17.1172 14.524 16.9225C14.5382 16.7279 14.6057 16.5408 14.7192 16.382L16.7422 13.5487C16.8233 13.435 16.9261 13.3385 17.0445 13.2646C17.163 13.1907 17.2949 13.1408 17.4327 13.1179C17.5704 13.0951 17.7114 13.0995 17.8474 13.1312C17.9834 13.1628 18.1119 13.2209 18.2254 13.3022Z" fill="var(--color-primary)" />
		</svg>),
		features: [
			"Use-case roadmap",
			"Priority alignment",
			"Stakeholder buy-in",
			"KPI definition",

		],
	},
	{
		title: "Dedicated AI Development Team",
		description: "Our embedded squad scales with you, delivering weekly demos and supporting 10x growth safely, end-to-end.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
			<path d="M1.21429 32.5813C1.23213 31.0707 1.63055 29.5889 2.37272 28.273C3.15581 26.9038 4.28462 25.7642 5.64628 24.9681C7.00794 24.172 8.55474 23.7473 10.132 23.7364C13.3134 23.7437 16.3249 25.502 17.8913 28.273C18.6331 29.5882 19.0315 31.069 19.0497 32.5789M23.9554 3.2053V1.21387M30.753 5.65087L32.3826 4.50701M17.153 5.65087L15.521 4.50701M10.1296 19.5034C10.7314 19.5174 11.33 19.4109 11.8901 19.1902C12.4502 18.9696 12.9606 18.6392 13.3912 18.2184C13.8218 17.7977 14.1639 17.2952 14.3975 16.7403C14.6311 16.1855 14.7515 15.5895 14.7515 14.9875C14.7515 14.3855 14.6311 13.7896 14.3975 13.2347C14.1639 12.6799 13.8218 12.1773 13.3912 11.7566C12.9606 11.3359 12.4502 11.0055 11.8901 10.7848C11.33 10.5641 10.7314 10.4576 10.1296 10.4716C8.95001 10.4989 7.82797 10.9867 7.00339 11.8307C6.17882 12.6746 5.71717 13.8076 5.71717 14.9875C5.71717 16.1674 6.17882 17.3004 7.00339 18.1444C7.82797 18.9883 8.95001 19.4761 10.1296 19.5034ZM28.8927 12.1303C28.8886 11.473 28.7547 10.8231 28.4987 10.2177C28.2427 9.61237 27.8696 9.06354 27.401 8.60275C26.9323 8.14197 26.3772 7.77829 25.7676 7.53262C25.1579 7.28694 24.5058 7.1641 23.8486 7.17115C23.1916 7.19153 22.5451 7.34148 21.9463 7.61239C21.3474 7.88331 20.808 8.26985 20.3589 8.74982C19.9098 9.22979 19.56 9.79374 19.3295 10.4093C19.099 11.0248 18.9924 11.6799 19.0157 12.3367C19.0641 13.2151 19.3421 14.0653 19.822 14.8026C20.3018 15.5399 20.9667 16.1383 21.7503 16.5382V18.9667C21.7547 19.1095 21.8144 19.2451 21.9168 19.3448C22.0192 19.4444 22.1563 19.5004 22.2992 19.501H25.6044C25.7477 19.5011 25.8855 19.4453 25.9884 19.3456C26.0913 19.2459 26.1513 19.11 26.1557 18.9667V16.4944C26.9636 16.0819 27.6448 15.4583 28.1271 14.69C28.6094 13.9217 28.8723 13.0372 28.8927 12.1303Z" stroke="var(--color-primary)" strokeWidth="2.42857" strokeLinecap="round" strokeLinejoin="round" />
		</svg>),
		features: [
			"Cross-functional squad",
			"Embedded delivery",
			"Flexible capacity",
			"Product scaling"

		],
	},
	{
		title: "End-to-End Product Development",
		description: "We own delivery from discovery to launch in 8–16 weeks, integrating UX, backend, data, and APIs.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
			<path d="M13.8125 25.5C9.9875 25.5 6.26875 23.5875 4.0375 20.1875H9.5625V18.0625H1.0625V26.5625H3.1875V22.6312C5.84375 25.8187 9.66875 27.625 13.8125 27.625V25.5ZM29.75 21.25V19.125H27.5187C27.4125 18.4875 27.0938 17.85 26.775 17.2125L28.3688 15.6188L26.8812 14.1312L25.2875 15.725C24.7562 15.4062 24.1187 15.0875 23.375 14.9813V12.75H21.25V14.9813C20.6125 15.0875 19.975 15.4062 19.3375 15.725L17.7438 14.1312L16.2562 15.6188L17.85 17.2125C17.5312 17.7438 17.2125 18.3813 17.1063 19.125H14.875V21.25H17.1063C17.2125 21.8875 17.5312 22.525 17.85 23.1625L16.2562 24.7562L17.7438 26.2438L19.3375 24.65C19.8688 24.9688 20.5063 25.2875 21.25 25.3937V27.625H23.375V25.3937C24.0125 25.2875 24.65 24.9688 25.2875 24.65L26.8812 26.2438L28.3688 24.7562L26.775 23.1625C27.0938 22.6312 27.4125 21.9937 27.5187 21.25H29.75ZM22.3125 23.375C20.5063 23.375 19.125 21.9937 19.125 20.1875C19.125 18.3813 20.5063 17 22.3125 17C24.1187 17 25.5 18.3813 25.5 20.1875C25.5 21.9937 24.1187 23.375 22.3125 23.375ZM18.0625 7.4375H23.5875C20.0813 2.01875 12.8562 0.53125 7.4375 4.0375C4.14375 6.1625 2.125 9.88125 2.125 13.8125H0C0 6.1625 6.1625 0 13.8125 0C17.9562 0 21.7812 1.80625 24.4375 4.99375V1.0625H26.5625V9.5625H18.0625V7.4375Z" fill="var(--color-primary)" />
		</svg>),
		features: [
			"Full ownership",
			"Discovery & UX",
			"Seamless integrations",
			"Launch planning",

		],
	},
	{
		title: "Maintenance & Support",
		description: "We monitor and optimize continuously, targeting 99.9% uptime, lower latency, and predictable costs after launch.",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
			<path d="M14.2376 15.027L4.22173 25.0428C3.95829 25.306 3.74931 25.6185 3.60672 25.9624C3.46414 26.3064 3.39075 26.6751 3.39075 27.0474C3.39075 27.4198 3.46414 27.7885 3.60672 28.1324C3.74931 28.4764 3.95829 28.7889 4.22173 29.052C4.75305 29.5832 5.47359 29.8816 6.22489 29.8816C6.97619 29.8816 7.69673 29.5832 8.22806 29.052L18.2439 19.0333M24.3568 19.5504L29.8506 25.0443C30.3818 25.5756 30.6802 26.2961 30.6802 27.0474C30.6802 27.7987 30.3818 28.5193 29.8506 29.0506C29.3193 29.5818 28.5988 29.8802 27.8475 29.8802C27.0962 29.8802 26.3756 29.5818 25.8443 29.0506L17.0482 20.2559M9.53848 8.36443L6.53089 9.3646L3.52756 4.35668L5.53073 2.35352L10.5401 5.35827L9.53848 8.36443ZM9.53848 8.36443L13.5476 12.3736" stroke="var(--color-primary)" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M14.2376 15.0271C13.0419 11.977 13.2757 7.97493 15.7407 5.50993C18.2057 3.04493 22.7532 2.50518 25.2564 4.00826L20.9497 8.31493L20.5488 12.7222L24.9561 12.3227L29.2627 8.01459C30.7672 10.5193 30.2261 15.0668 27.7611 17.5303C25.2961 19.9953 21.2954 20.2291 18.2453 19.0334" stroke="var(--color-primary)" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />
		</svg>),
		features: [
			"Performance monitoring",
			"Cost optimization",
			"Security updates",
			"SLA support"

		],
	},
] as const;

export const TABS = [
	"Quality",
	"Security",
	"Compliance",
	"Data Privacy",
	"Health & Pharma",
	"App Distribution",
	"Industry Protocols",
] as const;

export const TAB_CONTENT: Record<string, { title: string; subtitle: string; bullets: string[]; description: string }> = {
	Quality: {
		title: "Standards & Compliances",
		subtitle: "Tools & Practices used",
		bullets: [
			"ISO 9001",
			"CMMI",
			"ISO/IEC 9001"

		],
		description: "Automated testing suites, CI/CD pipelines, peer code reviews."
	},
	Security: {
		title: "Standards & Compliances",
		subtitle: "Tools & Practices used",
		bullets: [
			"OWASP Top 10",
			"NIST CSF",
			"ISO 27001",
			"OWASP Mobile Security Testing Guide",
			"ITIL",
			"COBIT"

		],
		description: "SAST with SonarQube, DAST with OWASP ZAP, Pen testing with Burp Suite, secure SDLC reviews."
	},
	Compliance: {
		title: "Standards & Compliances",
		subtitle: "Tools & Practices used",
		bullets: [
			"GDPR",
			"DPDP Act 2023 (India)",
			"HIPAA",
			"FISMA",
			"PCIDSS",
			"PSD2",
			"SOC 2 Type II",
			"EMV",
			"CCPA",
			"3DS",
			"✔✔ PIPEDA"

		],
		description: "Data encryption at rest and in transit, audit trails, access control with Vault/KMS, secure payment flows."
	},
	"Data Privacy": {
		title: "Standards & Compliances",
		subtitle: "Tools & Practices used",
		bullets: [
			"ISO/IEC 27018",
			"✓ Local data residency regulations (EU, US, APAC)",
			"W3C Standards"

		],
		description: "Consent management platforms, anonymization & pseudonymization techniques, privacy audits."
	},
	"Health & Pharma": {
		title: "Standards & Compliances",
		subtitle: "Tools & Practices used",
		bullets: [
			"ISO 13485 (medical devices)"
		],
		description: "Compliance-driven software validation, risk-based testing, traceability matrices."
	},
	"App Distribution": {
		title: "Standards & Compliances",
		subtitle: "Tools & Practices used",
		bullets: [
			"✔✔ Apple App Store Guidelines",
			"✓ Google Play Store Guidelines"

		],
		description: "Pre-launch compliance checks, automated app store validation."
	},
	"Industry Protocols": {
		title: "Standards & Compliances",
		subtitle: "Tools & Practices used",
		bullets: [
			"✓ OWASP",
			"BPMN"

		],
		description: "Standardized modeling, secure design protocols."
	}
};

export const HOME_STATS: StatCardData[] = [
	{
		value: "Honest",
		label: "We build trust through clear, truthful communication, never hiding behind jargon or fine print. Our transparent approach empowers clients with clarity, confidence, and a sense of partnership they can rely on.",
		icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
		</svg>,
	},
	{
		value: "Enduring",
		label: "We are built to last. With relentless determination and hard work, we tackle every challenge head on. Our foundation is solid because we never cut corners and never compromise our commitment to excellence.",
		icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
		</svg>,
	},
	{
		value: "Redemptive",
		label: "We believe in second chances and bold new beginnings. Past rejections do not define future potential, we recognize opportunity where others see obstacles and choose to count you out.",
		icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
		</svg>,
	},
	{
		value: "Optimistic",
		label: "We face every challenge with courageous hearts and an unwavering belief in what’s possible. Our optimism drives innovation and fuels our mission: to create powerful pathways for businesses to thrive, no matter the odds.",
		icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
		</svg>,
	},

];
export const HOW_IT_WORK_STATS: StatCardData[] = [
	{
		value: "Step 1: Apply in Minutes",
		label: "Submit your inquiry or application with no hard credit pull or upfront fees.",
		icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
		</svg>,
	},
	{
		value: "Step 2: Talk With a Real Expert",
		label: "One of our advisors will reach out to learn more about your business and recommend the right path forward.",
		icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
		</svg>,
	},
	{
		value: "Step 3: Get Funded — Fast",
		label: "Once underwriting is complete, funds can be deposited in your business account in as little as 24 hours for some programs.",
		icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
		</svg>,
	},


];

export const WHY_STATS: StatCardData[] = [
	{
		value: "We work for you — not one lender.",
		label: "Most providers only offer their own loans. We partner with a nationwide network of over 80 underwriters and guide you toward the best available deal, every time.",
		icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
		</svg>,
	},
	{
		value: "Real Guidance",
		label: "We are built to last. With relentless determination and hard work, we tackle every challenge head on. Our foundation is solid because we never cut corners and never compromise our commitment to excellence.",
		icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
		</svg>,
	},
	{
		value: "Better Offers",
		label: "Our network and strategic approach creates competition so you get better terms.",
		icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
		</svg>,
	},
	{
		value: "Risk-Free Pre-Approval",
		label: "We only use soft credit pulls for pre-approvals, so applying won’t affect your score.",
		icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
		</svg>,
	},

];

export const HEADERSTATS = [

];


export const CONTACT_FIELDS = [
	{ id: "contact-name", label: "Full Name", type: "text", placeholder: "Your Name" },
	{ id: "contact-legal-name", label: "Business Legal Name", type: "text", placeholder: "Legal Business Name" },
	{ id: "contact-phone", label: "Phone", type: "tel", placeholder: "+1 (555) 123-4567" },
	{ id: "contact-email", label: "Email", type: "email", placeholder: "email@example.com" },
] as const;


export const CONTACT_MAIN_FIELDS = [
	{ id: "contact-name", label: "Full Name", type: "text", placeholder: "Your Name" },
	{ id: "contact-legal-name", label: "Business Legal Name", type: "text", placeholder: "Legal Business Name" },
	{ id: "contact-phone", label: "Phone", type: "tel", placeholder: "+1 (555) 123-4567" },
	{ id: "contact-email", label: "Email", type: "email", placeholder: "email@example.com" },
] as const;

export const CONTACT_SELECT_FIELDS = [
	{
		id: "time-in-business",
		label: "Time in Business",
		options: [
			{ value: "", label: "Select..." },
			{ value: "less-than-1", label: "Less than 1 year" },
			{ value: "1-3-years", label: "1-3 years" },
			{ value: "3-5-years", label: "3-5 years" },
			{ value: "5-10-years", label: "5-10 years" },
			{ value: "more-than-10", label: "More than 10 years" },
		],
	},
	{
		id: "monthly-revenue",
		label: "Current Monthly Revenue",
		options: [
			{ value: "", label: "Select..." },
			{ value: "0-25k", label: "$0-25k" },
			{ value: "25-100k", label: "$25-100k" },
			{ value: "100-250k", label: "$100-250k" },
			{ value: "250k-1m", label: "$250k-1M" },
			{ value: "1m-plus", label: "$1M+" },
		],
	},
	{
		id: "desired-funding",
		label: "Desired Funding Amount",
		options: [
			{ value: "", label: "Select..." },
			{ value: "10k-50k", label: "$10k-50k" },
			{ value: "50k-100k", label: "$50k-100k" },
			{ value: "100k-250k", label: "$100k-250k" },
			{ value: "250k-500k", label: "$250k-500k" },
			{ value: "500k-plus", label: "$500k+" },
		],
	},
	{
		id: "industry",
		label: "Industry",
		options: [
			{ value: "", label: "Select..." },
			{ value: "retail", label: "Retail" },
			{ value: "manufacturing", label: "Manufacturing" },
			{ value: "technology", label: "Technology" },
			{ value: "healthcare", label: "Healthcare" },
			{ value: "finance", label: "Finance" },
			{ value: "real-estate", label: "Real Estate" },
			{ value: "education", label: "Education" },
			{ value: "hospitality", label: "Hospitality" },
			{ value: "other", label: "Other" },
		],
	},
] as const;


export const SOCIAL_LINKS: SocialLink[] = [

	{
		label: "Facebook",
		href: "",
		icon: Images.Facebook,
	},

] as const;

export const NAV_GROUPS = [
	{
		title: "Company",
		links: [
			{
				label: "About Us",
				href: "/about",
			},
			{
				label: "Contact ",
				href: "/contact",
			},


		],
	},
	{
		title: "Legal ",
		links: [
			{
				label: "Privacy Policy",
				href: "/privacy",
			},
			{
				label: "Terms of Service",
				href: "/terms",
			},

		],
	},

	{
		title: "Links",
		links: [
			{
				label: "Home",
				href: "/",
			},
			{
				label: "Business Funding",
				href: "/business-funding",
			},
			{
				label: "Partner with Us",
				href: "/partner-with-us",
			},
			{
				label: "About Us",
				href: "/about",
			},
		],
	},
] as const;

export const CONTACT_CARDS = [
	{
		label: "Email",
		value: "blackflagfunding@gmail.com",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
			<path d="M5.66667 7.08203H28.3333C29.1125 7.08203 29.75 7.71953 29.75 8.4987V25.4987C29.75 26.2779 29.1125 26.9154 28.3333 26.9154H5.66667C4.8875 26.9154 4.25 26.2779 4.25 25.4987V8.4987C4.25 7.71953 4.8875 7.08203 5.66667 7.08203Z" stroke="white" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M4.25 9.20703L17 16.9987L29.75 9.20703" stroke="white" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
		</svg>),
		link: "mailto:blackflagfunding@gmail.com",
	},
	{
		label: "Phone",
		value: "+1-702-819-6545",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
			<path d="M5.43054 5.66536H11.7914L13.8413 10.7909L10.5475 12.9867C10.3536 13.1161 10.1945 13.2914 10.0846 13.497C9.97461 13.7026 9.91709 13.9322 9.91712 14.1654C9.92137 14.2985 9.91712 14.1668 9.91712 14.1668V14.1965C9.91783 14.2599 9.92067 14.3232 9.92562 14.3864C9.93318 14.5035 9.9497 14.6593 9.9752 14.8539C10.0305 15.2364 10.1367 15.7634 10.3435 16.3839C10.76 17.6305 11.576 19.2441 13.1655 20.8336C14.755 22.4231 16.3686 23.2391 17.6139 23.6556C18.2358 23.8624 18.7614 23.9673 19.1467 24.0239C19.3641 24.0555 19.5831 24.0745 19.8026 24.0806L19.821 24.082H19.8324C19.8324 24.082 19.991 24.0735 19.8338 24.082C20.0968 24.0819 20.3546 24.0085 20.5783 23.8702C20.802 23.7318 20.9827 23.5339 21.1003 23.2986L22.0495 21.4003L28.3338 22.4486V28.5686C25.3432 29.0007 17.2654 29.4271 10.9187 23.0804C4.57204 16.7338 4.99704 8.65453 5.43054 5.66536ZM12.8539 14.8539L15.4138 13.1482C15.9546 12.7875 16.3549 12.2518 16.5476 11.6309C16.7403 11.01 16.7136 10.3418 16.472 9.73828L14.4221 4.61278C14.2118 4.08706 13.8487 3.63644 13.3798 3.31903C12.9109 3.00162 12.3576 2.83199 11.7914 2.83203H5.35687C4.06912 2.83203 2.85787 3.72595 2.64679 5.12278C2.16512 8.29895 1.51204 17.6801 8.91554 25.0836C16.319 32.4871 25.7002 31.8326 28.8764 31.3524C30.2732 31.1399 31.1671 29.93 31.1671 28.6423V22.4486C31.1672 21.7779 30.9294 21.1289 30.4959 20.6171C30.0624 20.1053 29.4614 19.7639 28.7999 19.6535L22.5155 18.6066C21.9178 18.5068 21.3039 18.6013 20.7639 18.8762C20.2238 19.1511 19.7861 19.5918 19.515 20.1338L19.0249 21.1155C18.8516 21.0724 18.6801 21.0228 18.5106 20.9668C17.6323 20.6749 16.4125 20.0743 15.1687 18.8304C13.9249 17.5866 13.3242 16.3669 13.0324 15.4871C12.9636 15.2789 12.9045 15.0676 12.8553 14.8539H12.8539Z" fill="white" />
		</svg>),
		link: "tel:+12142041049",
	},
	{
		label: "Location",
		value: "1230 W Morehead St, Ste 214, Charlotte, NC 28208",
		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
			<path d="M17.0013 2.83203C10.768 2.83203 5.66797 7.93203 5.66797 14.1654C5.66797 21.8154 15.5846 30.457 16.0096 30.882C16.293 31.0237 16.718 31.1654 17.0013 31.1654C17.2846 31.1654 17.7096 31.0237 17.993 30.882C18.418 30.457 28.3346 21.8154 28.3346 14.1654C28.3346 7.93203 23.2346 2.83203 17.0013 2.83203ZM17.0013 27.907C14.0263 25.0737 8.5013 18.982 8.5013 14.1654C8.5013 9.49036 12.3263 5.66536 17.0013 5.66536C21.6763 5.66536 25.5013 9.49036 25.5013 14.1654C25.5013 18.8404 19.9763 25.0737 17.0013 27.907ZM17.0013 8.4987C13.8846 8.4987 11.3346 11.0487 11.3346 14.1654C11.3346 17.282 13.8846 19.832 17.0013 19.832C20.118 19.832 22.668 17.282 22.668 14.1654C22.668 11.0487 20.118 8.4987 17.0013 8.4987ZM17.0013 16.9987C15.443 16.9987 14.168 15.7237 14.168 14.1654C14.168 12.607 15.443 11.332 17.0013 11.332C18.5596 11.332 19.8346 12.607 19.8346 14.1654C19.8346 15.7237 18.5596 16.9987 17.0013 16.9987Z" fill="white" />
		</svg>),
		link: "https://www.google.com/maps/place/Karachi,+Pakistan",
	},
] as const;



export const INDUSTRIES: Industry[] = [
	{
		title: "Term Loans",
		description:
			"Bank-style installment loans with set repayment terms and consistent payment amounts.",
		projects: "Learn More",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
				<path d="M3 6H21V8H3V6Z" fill="var(--color-primary)" />
				<path d="M3 10H21V12H3V10Z" fill="var(--color-primary)" />
				<path d="M3 14H21V16H3V14Z" fill="var(--color-primary)" />
				<path d="M3 18H21V20H3V18Z" fill="var(--color-primary)" />
			</svg>
		),
		link: "loans/term-loans",
	},
	{
		title: "Business Line of Credit",
		description:
			"Draw only what you need; pay interest only on the used amount.",
		projects: "Learn More",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
				<path d="M4 4H20V20H4V4Z" stroke="var(--color-primary)" strokeWidth="2" />
				<path d="M8 4V20" stroke="var(--color-primary)" strokeWidth="2" />
			</svg>
		),
		link: "loans/business-line-of-credit",
	},
	{
		title: "Cashflow Financing",
		description:
			"Access cash now by borrowing against future revenue; receive funding in as little as 24 hours.",
		projects: "Learn More",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
				<path d="M12 2V22M2 12H22" stroke="var(--color-primary)" strokeWidth="2" />
			</svg>
		),
		link: "loans/cashflow-financing",
	},
	{
		title: "Equipment Financing",
		description:
			"Financing for office furniture, medical devices, and industrial equipment.",
		projects: "Learn More",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
				<path d="M3 3H21V7H3V3Z" fill="var(--color-primary)" />
				<path d="M3 9H21V21H3V9Z" stroke="var(--color-primary)" strokeWidth="2" />
			</svg>
		),
		link: "loans/equipment-financing",
	},
	{
		title: "SBA Loans",
		description:
			"Government-backed loans at prime + rates; funding in as little as 2 weeks.",
		projects: "Learn More",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
				<circle cx="12" cy="12" r="10" stroke="var(--color-primary)" strokeWidth="2" />
				<path d="M12 6V12L16 14" stroke="var(--color-primary)" strokeWidth="2" />
			</svg>
		),
		link: "loans/sba-loans",
	},
	{
		title: "Startup Financing",
		description:
			"0% APR credit lines (6–24 months), Unsecured term loans and even SBA options.",
		projects: "Learn More",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
				<path d="M12 2L15 8H9L12 2Z" fill="var(--color-primary)" />
				<path d="M12 22V8" stroke="var(--color-primary)" strokeWidth="2" />
			</svg>
		),
		link: "loans/startup-financing",
	},
	{
		title: "Commercial Real Estate Loans",
		description:
			"Funds fix-and-flips, ground up construction, commercial mortgages (up to $50M), and cash out refinances.",
		projects: "Learn More",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
				<path d="M3 21V3H21V21H3Z" stroke="var(--color-primary)" strokeWidth="2" />
				<path d="M3 10H21" stroke="var(--color-primary)" strokeWidth="2" />
				<path d="M10 3V21" stroke="var(--color-primary)" strokeWidth="2" />
			</svg>
		),
		link: "loans/commercial-real-estate",
	},
	{
		title: "Cannabis Financing",
		description:
			"Cannabis Business Financing You Can Count On.",
		projects: "Learn More",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
				<path d="M12 2C13.1046 2 14 2.89543 14 4V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V4C10 2.89543 10.8954 2 12 2Z" fill="var(--color-primary)" />
				<path d="M8 6H16" stroke="var(--color-primary)" strokeWidth="2" />
			</svg>
		),
		link: "loans/cannabis-financing",
	},
	{
		title: "HeroCredit",
		description:
			"Build a Fundable Business Profile, Without Using Your Personal Credit.",
		projects: "Learn More",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
				<circle cx="12" cy="12" r="10" stroke="var(--color-primary)" strokeWidth="2" />
				<path d="M8 12L10 14L16 10" stroke="var(--color-primary)" strokeWidth="2" />
			</svg>
		),
		link: "loans/herocredit",
	},
];
// export const SOLUTIONS = [
// 	{
// 		title: "AI Chatbot Development",
// 		description:
// 			"We design chatbots that handle support, onboarding, and FAQs while integrating with your systems and tools.",
// 		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
// 			<path d="M13.4583 12.7503H13.4725M20.5417 12.7503H20.5558M25.5 5.66699C26.6272 5.66699 27.7082 6.11476 28.5052 6.91179C29.3022 7.70882 29.75 8.78982 29.75 9.91699V21.2503C29.75 22.3775 29.3022 23.4585 28.5052 24.2555C27.7082 25.0526 26.6272 25.5003 25.5 25.5003H18.4167L11.3333 29.7503V25.5003H8.5C7.37283 25.5003 6.29183 25.0526 5.4948 24.2555C4.69777 23.4585 4.25 22.3775 4.25 21.2503V9.91699C4.25 8.78982 4.69777 7.70882 5.4948 6.91179C6.29183 6.11476 7.37283 5.66699 8.5 5.66699H25.5Z" stroke="var(--color-primary)" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round"/>
// 			<path d="M13.4583 18.417C13.92 18.8882 14.471 19.2625 15.0792 19.518C15.6873 19.7736 16.3403 19.9052 17 19.9052C17.6596 19.9052 18.3127 19.7736 18.9208 19.518C19.5289 19.2625 20.08 18.8882 20.5416 18.417" stroke="var(--color-primary)" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round"/>
// 		</svg>),
// 		link: "ai-chatbot-development"
// 	},
// 	{
// 		title: "AI Agent Development",
// 		description:
// 			"We build task-driven AI agents that call APIs, update records, and complete workflows autonomously across departments.",
// 		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
// 			<g clipPath="url(#clip0_2020_177)">
// 				<path d="M13.8125 3.1875C13.8125 2.90571 13.7006 2.63546 13.5013 2.4362C13.302 2.23694 13.0318 2.125 12.75 2.125C12.4682 2.125 12.198 2.23694 11.9987 2.4362C11.7994 2.63546 11.6875 2.90571 11.6875 3.1875V4.25H7.4375C6.59212 4.25 5.78137 4.58582 5.1836 5.1836C4.58582 5.78137 4.25 6.59212 4.25 7.4375V13.8125C4.25 14.6579 4.58582 15.4686 5.1836 16.0664C5.78137 16.6642 6.59212 17 7.4375 17H12.937C13.0277 16.7563 13.1495 16.5261 13.3025 16.3094C13.6638 15.7994 14.1737 15.4169 14.7687 15.2022L15.7887 14.875H7.4375C7.15571 14.875 6.88546 14.7631 6.6862 14.5638C6.48694 14.3645 6.375 14.0943 6.375 13.8125V7.4375C6.375 7.15571 6.48694 6.88546 6.6862 6.6862C6.88546 6.48694 7.15571 6.375 7.4375 6.375H18.0625C18.3443 6.375 18.6145 6.48694 18.8138 6.6862C19.0131 6.88546 19.125 7.15571 19.125 7.4375V11.4261L19.4076 10.5612C19.6414 9.92375 20.0239 9.41375 20.5339 9.0525C20.7591 8.891 20.9978 8.76563 21.25 8.67638V7.4375C21.25 6.59212 20.9142 5.78137 20.3164 5.1836C19.7186 4.58582 18.9079 4.25 18.0625 4.25H13.8125V3.1875ZM5.3125 20.1875H13.6276C13.9586 20.5247 14.365 20.7781 14.8134 20.927L17.0659 21.6707C17.3868 21.7791 17.6842 21.9491 18.0667 22.2891L18.088 22.3125H5.3125C5.03071 22.3125 4.76046 22.4244 4.5612 22.6237C4.36194 22.823 4.25 23.0932 4.25 23.375V24.1188C4.25 26.1269 5.117 27.4656 6.54925 28.356C8.04525 29.2867 10.2106 29.75 12.75 29.75C15.3064 29.75 17.4718 29.2846 18.9614 28.356C19.5606 27.9841 20.06 27.5315 20.4382 26.9832L20.5551 27.0789C20.8526 27.2914 21.1714 27.4401 21.5114 27.5251C21.2657 28.0538 21.1935 28.6466 21.3053 29.2188C20.9324 29.5739 20.5236 29.8894 20.0855 30.1601C18.122 31.3862 15.5061 31.875 12.75 31.875C10.0087 31.875 7.39287 31.382 5.42725 30.1601C3.39787 28.9 2.125 26.8919 2.125 24.1188V23.375C2.125 22.5296 2.46083 21.7189 3.0586 21.1211C3.65637 20.5233 4.46712 20.1875 5.3125 20.1875ZM11.1562 10.625C11.1562 11.0477 10.9883 11.4531 10.6895 11.752C10.3906 12.0508 9.98519 12.2188 9.5625 12.2188C9.13981 12.2188 8.73443 12.0508 8.43555 11.752C8.13666 11.4531 7.96875 11.0477 7.96875 10.625C7.96875 10.2023 8.13666 9.79693 8.43555 9.49805C8.73443 9.19916 9.13981 9.03125 9.5625 9.03125C9.98519 9.03125 10.3906 9.19916 10.6895 9.49805C10.9883 9.79693 11.1562 10.2023 11.1562 10.625ZM15.9375 12.2188C16.3602 12.2188 16.7656 12.0508 17.0645 11.752C17.3633 11.4531 17.5312 11.0477 17.5312 10.625C17.5312 10.2023 17.3633 9.79693 17.0645 9.49805C16.7656 9.19916 16.3602 9.03125 15.9375 9.03125C15.5148 9.03125 15.1094 9.19916 14.8105 9.49805C14.5117 9.79693 14.3438 10.2023 14.3438 10.625C14.3438 11.0477 14.5117 11.4531 14.8105 11.752C15.1094 12.0508 15.5148 12.2188 15.9375 12.2188ZM23.1158 11.2242L23.8552 13.5001C24.0846 14.1924 24.4727 14.8213 24.9885 15.3368C25.5043 15.8523 26.1336 16.2399 26.826 16.4688L29.104 17.2082L29.1486 17.221C29.3242 17.2828 29.4762 17.3975 29.5837 17.5494C29.6913 17.7013 29.749 17.8828 29.749 18.0689C29.749 18.255 29.6913 18.4365 29.5837 18.5883C29.4762 18.7402 29.3242 18.855 29.1486 18.9168L26.8727 19.6562C26.18 19.8848 25.5503 20.2723 25.0341 20.7878C24.5178 21.3033 24.1294 21.9324 23.8999 22.6249L23.1604 24.8986C23.0986 25.0742 22.9838 25.2262 22.832 25.3337C22.6801 25.4413 22.4986 25.499 22.3125 25.499C22.1264 25.499 21.9449 25.4413 21.793 25.3337C21.6412 25.2262 21.5264 25.0742 21.4646 24.8986L20.7251 22.6249C20.4594 21.8198 19.9797 21.1022 19.3375 20.5487C18.8731 20.1455 18.3336 19.8379 17.7501 19.6435L15.4721 18.904C15.2966 18.8422 15.1446 18.7275 15.037 18.5756C14.9295 18.4237 14.8717 18.2422 14.8717 18.0561C14.8717 17.87 14.9295 17.6885 15.037 17.5367C15.1446 17.3848 15.2966 17.27 15.4721 17.2082L17.7501 16.4688C18.4343 16.234 19.0546 15.8437 19.5624 15.3286C20.0701 14.8135 20.4514 14.1876 20.6762 13.5001L21.4158 11.2264C21.4771 11.0501 21.5918 10.8973 21.7439 10.7892C21.896 10.681 22.078 10.6229 22.2647 10.6229C22.4513 10.6229 22.6333 10.681 22.7855 10.7892C22.9376 10.8973 23.0523 11.0501 23.1136 11.2264M33.5367 28.0798L31.9111 27.5527C31.4166 27.3884 30.9672 27.1112 30.5984 26.7431C30.2296 26.375 29.9515 25.9261 29.7861 25.432L29.2591 23.8064C29.2151 23.6809 29.1332 23.5721 29.0247 23.4952C28.9162 23.4182 28.7865 23.3769 28.6535 23.3769C28.5205 23.3769 28.3908 23.4182 28.2823 23.4952C28.1738 23.5721 28.0919 23.6809 28.0479 23.8064L27.5166 25.432C27.3549 25.9223 27.0823 26.3687 26.7201 26.7365C26.3578 27.1043 25.9155 27.3836 25.4277 27.5527L23.8021 28.0798C23.7086 28.1131 23.624 28.1676 23.555 28.239C23.486 28.3104 23.4345 28.3969 23.4045 28.4915C23.3744 28.5862 23.3667 28.6865 23.3818 28.7846C23.397 28.8828 23.4347 28.9761 23.4919 29.0572C23.5684 29.1635 23.6768 29.2485 23.8021 29.291L25.4277 29.8201C25.9231 29.9853 26.3732 30.2638 26.7421 30.6334C27.1109 31.0031 27.3885 31.4537 27.5527 31.9494L28.0798 33.5729C28.1237 33.6984 28.2057 33.8071 28.3142 33.8841C28.4226 33.961 28.5524 34.0023 28.6854 34.0023C28.8184 34.0023 28.9481 33.961 29.0566 33.8841C29.1651 33.8071 29.247 33.6984 29.291 33.5729L29.8201 31.9494C29.985 31.4551 30.2626 31.0059 30.6311 30.6374C30.9995 30.269 31.4487 29.9913 31.943 29.8265L33.5686 29.2995C33.6941 29.2555 33.8029 29.1736 33.8798 29.0651C33.9568 28.9566 33.9981 28.8269 33.9981 28.6939C33.9981 28.5609 33.9568 28.4311 33.8798 28.3227C33.8029 28.2142 33.6941 28.1322 33.5686 28.0883L33.5367 28.0798Z" fill="var(--color-primary)" />
// 			</g>
// 			<defs>
// 				<clipPath id="clip0_2020_177">
// 					<rect width="34" height="34" fill="white" />
// 				</clipPath>
// 			</defs>
// 		</svg>),
// 		link: "ai-agent-development"
// 	},
// 	{
// 		title: "Machine Learning Development",
// 		description:
// 			"We develop machine learning models for prediction, classification, and recommendations, turning historical data into business intelligence.",
// 		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
// 			<path d="M20.5416 2.83301C21.6511 2.83301 22.7232 3.2336 23.5608 3.96111C24.3984 4.68861 24.9452 5.69409 25.1005 6.79259C26.1128 6.95036 27.0609 7.38822 27.8374 8.05666C28.6139 8.72511 29.1879 9.59747 29.4944 10.5751C29.801 11.5528 29.8279 12.5967 29.5722 13.5888C29.3164 14.581 28.7882 15.4818 28.0471 16.1893C28.9848 16.6612 29.7729 17.3841 30.3237 18.2776C30.8745 19.1711 31.1664 20.2 31.1666 21.2497V21.6038C31.1668 22.9514 30.6867 24.2549 29.8125 25.2804C28.9383 26.306 27.7273 26.9864 26.3967 27.1997C25.7861 29.4848 23.7036 31.1663 21.2585 31.1663C19.5188 31.1663 17.9718 30.3305 17 29.0357C16.5049 29.6977 15.8621 30.235 15.1228 30.6049C14.3835 30.9747 13.5681 31.167 12.7415 31.1663C10.2963 31.1663 8.21523 29.4848 7.60323 27.1997C6.27265 26.9864 5.06162 26.306 4.18745 25.2804C3.31327 24.2549 2.83318 22.9514 2.83331 21.6038V21.2497C2.83334 20.2003 3.12474 19.1716 3.67503 18.2781C4.22532 17.3847 5.01289 16.6615 5.94998 16.1893C5.20893 15.4816 4.68072 14.5805 4.4251 13.5882C4.16948 12.5958 4.19666 11.5518 4.50355 10.5741C4.81044 9.59634 5.38479 8.72402 6.16166 8.05574C6.93852 7.38747 7.88688 6.94993 8.89948 6.79259C9.02446 5.90973 9.40312 5.08216 9.98946 4.41038C10.5758 3.73861 11.3446 3.25155 12.2024 3.00835C13.0603 2.76516 13.9703 2.77629 14.822 3.04041C15.6736 3.30453 16.4303 3.81026 17 4.49618C17.4313 3.97512 17.9724 3.55583 18.5847 3.26831C19.197 2.98079 19.8652 2.83214 20.5416 2.83301ZM13.4583 4.95801C12.8008 4.95801 12.1702 5.21921 11.7053 5.68414C11.2403 6.14908 10.9791 6.77966 10.9791 7.43718V7.79134C10.9791 8.07314 10.8672 8.34339 10.6679 8.54265C10.4687 8.7419 10.1984 8.85385 9.91665 8.85385H9.73956C8.84722 8.85385 7.99143 9.20833 7.36044 9.83931C6.72946 10.4703 6.37498 11.3261 6.37498 12.2184C6.37498 13.1108 6.72946 13.9666 7.36044 14.5975C7.99143 15.2285 8.84722 15.583 9.73956 15.583H9.91665C10.7056 15.5831 11.4664 15.8757 12.0521 16.4043C12.6377 16.9329 13.0065 17.6599 13.0871 18.4447L13.1041 18.7705V19.3315C13.7137 19.5781 14.2185 20.029 14.5321 20.6069C14.8456 21.1849 14.9484 21.8539 14.8228 22.4993C14.6972 23.1447 14.351 23.7264 13.8436 24.1445C13.3362 24.5627 12.6992 24.7914 12.0416 24.7914C11.3841 24.7914 10.7471 24.5627 10.2397 24.1445C9.73225 23.7264 9.38608 23.1447 9.26048 22.4993C9.13488 21.8539 9.23767 21.1849 9.55123 20.6069C9.86479 20.029 10.3696 19.5781 10.9791 19.3315V18.7705L10.9735 18.6614C10.9465 18.3999 10.8235 18.1577 10.6283 17.9816C10.4331 17.8055 10.1795 17.708 9.91665 17.708H8.49998C7.56067 17.708 6.65983 18.0812 5.99564 18.7453C5.33145 19.4095 4.95831 20.3104 4.95831 21.2497V21.6038C4.95831 22.5432 5.33145 23.444 5.99564 24.1082C6.65983 24.7724 7.56067 25.1455 8.49998 25.1455C8.72999 25.146 8.95364 25.2211 9.13732 25.3596C9.32099 25.498 9.45477 25.6924 9.51856 25.9133L9.5554 26.1117H9.55823C9.63126 26.9077 9.99739 27.6483 10.5856 28.1896C11.1738 28.731 11.9421 29.0345 12.7415 29.0413C13.5878 29.0417 14.3996 28.7063 14.9988 28.1087C15.598 27.5111 15.9356 26.7001 15.9375 25.8538V13.1038H14.6681C14.4216 13.7134 13.9707 14.2182 13.3927 14.5318C12.8148 14.8453 12.1458 14.9481 11.5004 14.8225C10.8549 14.6969 10.2733 14.3507 9.85511 13.8433C9.43693 13.3359 9.20824 12.6989 9.20824 12.0413C9.20824 11.3838 9.43693 10.7468 9.85511 10.2394C10.2733 9.73195 10.8549 9.38578 11.5004 9.26018C12.1458 9.13458 12.8148 9.23737 13.3927 9.55093C13.9707 9.86449 14.4216 10.3693 14.6681 10.9788H15.9375V7.43718C15.9375 6.77966 15.6763 6.14908 15.2113 5.68414C14.7464 5.21921 14.1158 4.95801 13.4583 4.95801ZM25.1175 17.708C24.8018 18.2536 24.3133 18.6783 23.7291 18.915V20.1872C23.7291 21.0326 23.3933 21.8433 22.7955 22.4411C22.1978 23.0389 21.387 23.3747 20.5416 23.3747H18.0625V25.8538C18.0625 27.6105 19.4947 29.0413 21.2585 29.0413C22.0578 29.0345 22.8262 28.731 23.4144 28.1896C24.0026 27.6483 24.3687 26.9077 24.4417 26.1117H24.4446L24.4814 25.9133C24.5452 25.6924 24.679 25.498 24.8626 25.3596C25.0463 25.2211 25.27 25.146 25.5 25.1455C25.9651 25.1455 26.4256 25.0539 26.8553 24.8759C27.285 24.6979 27.6754 24.4371 28.0043 24.1082C28.3332 23.7793 28.5941 23.3889 28.7721 22.9592C28.95 22.5295 29.0416 22.0689 29.0416 21.6038V21.2497C29.0416 20.7846 28.95 20.324 28.7721 19.8943C28.5941 19.4646 28.3332 19.0742 28.0043 18.7453C27.6754 18.4165 27.285 18.1556 26.8553 17.9776C26.4256 17.7996 25.9651 17.708 25.5 17.708H25.1175ZM12.0416 21.2497C11.8538 21.2497 11.6736 21.3243 11.5408 21.4571C11.4079 21.59 11.3333 21.7701 11.3333 21.958C11.3333 22.1459 11.4079 22.326 11.5408 22.4589C11.6736 22.5917 11.8538 22.6663 12.0416 22.6663C12.2295 22.6663 12.4097 22.5917 12.5425 22.4589C12.6754 22.326 12.75 22.1459 12.75 21.958C12.75 21.7701 12.6754 21.59 12.5425 21.4571C12.4097 21.3243 12.2295 21.2497 12.0416 21.2497ZM20.5416 4.95801C19.8863 4.958 19.2577 5.21745 18.7931 5.67963C18.3285 6.14181 18.0658 6.76912 18.0625 7.42443V21.2497H20.5416C20.8234 21.2497 21.0937 21.1377 21.2929 20.9385C21.4922 20.7392 21.6041 20.469 21.6041 20.1872V18.915C21.1633 18.7369 20.7744 18.4508 20.4733 18.0828C20.1722 17.7149 19.9685 17.2771 19.8811 16.8098C19.7938 16.3424 19.8254 15.8606 19.9732 15.4088C20.1211 14.9569 20.3803 14.5495 20.727 14.2242C21.0737 13.8988 21.4967 13.666 21.957 13.5472C22.4174 13.4284 22.9002 13.4273 23.3611 13.5442C23.8219 13.6611 24.2459 13.8922 24.594 14.216C24.942 14.5399 25.2029 14.9462 25.3526 15.3974C26.1052 15.1387 26.7415 14.6215 27.1487 13.9378C27.5558 13.2541 27.7074 12.4482 27.5764 11.6633C27.4454 10.8784 27.0403 10.1654 26.4331 9.651C25.826 9.1366 25.0561 8.85415 24.2604 8.85385H24.0833C23.8015 8.85385 23.5313 8.7419 23.332 8.54265C23.1328 8.34339 23.0208 8.07314 23.0208 7.79134V7.43718C23.0208 6.77966 22.7596 6.14908 22.2947 5.68414C21.8297 5.21921 21.1992 4.95801 20.5416 4.95801ZM22.6666 15.583C22.4788 15.583 22.2986 15.6576 22.1658 15.7905C22.0329 15.9233 21.9583 16.1035 21.9583 16.2913C21.9583 16.4792 22.0329 16.6594 22.1658 16.7922C22.2986 16.9251 22.4788 16.9997 22.6666 16.9997C22.8545 16.9997 23.0347 16.9251 23.1675 16.7922C23.3004 16.6594 23.375 16.4792 23.375 16.2913C23.375 16.1035 23.3004 15.9233 23.1675 15.7905C23.0347 15.6576 22.8545 15.583 22.6666 15.583ZM12.0416 11.333C11.8538 11.333 11.6736 11.4076 11.5408 11.5405C11.4079 11.6733 11.3333 11.8535 11.3333 12.0413C11.3333 12.2292 11.4079 12.4094 11.5408 12.5422C11.6736 12.6751 11.8538 12.7497 12.0416 12.7497C12.2295 12.7497 12.4097 12.6751 12.5425 12.5422C12.6754 12.4094 12.75 12.2292 12.75 12.0413C12.75 11.8535 12.6754 11.6733 12.5425 11.5405C12.4097 11.4076 12.2295 11.333 12.0416 11.333Z" fill="var(--color-primary)" />
// 		</svg>),
// 	link: "machine-learning-development"
// 	},
// 	{
// 		title: "Generative AI Development",
// 		description:
// 			"We build generative AI that drafts content, summarizes documents, and personalizes interactions across marketing and support.",
// 		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
// 			<path d="M15.8907 27.4607C16.2956 28.551 17.0708 29.4644 18.0808 30.0411C19.0908 30.6178 20.2714 30.8213 21.4161 30.6159C22.5609 30.4105 23.5971 29.8093 24.3436 28.9174C25.0901 28.0256 25.4994 26.8997 25.5 25.7366V18.4167L17 13.6709" stroke="var(--color-primary)" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
// 			<path d="M7.38649 21.2706C6.64411 22.1664 6.24026 23.2947 6.24558 24.4581C6.2509 25.6215 6.66504 26.746 7.41558 27.635C8.16612 28.524 9.20529 29.1208 10.3513 29.3211C11.4974 29.5214 12.6774 29.3125 13.685 28.7308L19.8333 25.1409V15.3008" stroke="var(--color-primary)" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
// 			<path d="M8.49999 10.8092C6.52941 10.4749 4.55174 11.3688 3.49349 13.202C2.84105 14.3322 2.66422 15.6753 3.00188 16.9359C3.33954 18.1964 4.16404 19.2713 5.29408 19.9241L11.3333 23.4856L19.8333 18.7426" stroke="var(--color-primary)" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
// 			<path d="M18.1092 6.53977C17.7044 5.44946 16.9292 4.53613 15.9192 3.95939C14.9092 3.38266 13.7286 3.17921 12.5839 3.3846C11.4391 3.59 10.4029 4.19117 9.65641 5.08305C8.90991 5.97494 8.5006 7.10079 8.5 8.26385V15.4421L17 20.3296" stroke="var(--color-primary)" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
// 			<path d="M26.6135 12.731C27.3559 11.8352 27.7597 10.707 27.7544 9.54353C27.7491 8.38011 27.3349 7.25559 26.5844 6.36662C25.8339 5.47766 24.7947 4.88083 23.6486 4.68052C22.5026 4.48021 21.3226 4.68916 20.315 5.27084L14.1667 8.86067V18.7008" stroke="var(--color-primary)" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
// 			<path d="M25.5 23.0953C27.4706 23.4296 29.4482 22.5357 30.5065 20.7025C31.1589 19.5723 31.3358 18.2292 30.9981 16.9686C30.6604 15.7081 29.8359 14.6332 28.7059 13.9804L22.6029 10.4189L14.1667 15.2639" stroke="var(--color-primary)" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
// 		</svg>),
// 		link: "generative-ai-development"
// 	},
// 	{
// 		title: "Deep Learning Development",
// 		description:
// 			"We design deep learning models for perception and language tasks demanding accuracy and robustness in deployment.",
// 		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
// 			<path d="M5.66669 29.7503V26.917C5.66669 26.1378 5.94435 25.471 6.49969 24.9167C7.05502 24.3623 7.7218 24.0846 8.50002 24.0837H9.20835V21.2503H8.50002C7.72085 21.2503 7.05408 20.9731 6.49969 20.4187C5.9453 19.8644 5.66763 19.1971 5.66669 18.417V15.5837C5.66669 14.8045 5.94435 14.1377 6.49969 13.5833C7.05502 13.0289 7.7218 12.7513 8.50002 12.7503H9.20835V9.91699H8.50002C7.72085 9.91699 7.05408 9.6398 6.49969 9.08541C5.9453 8.53102 5.66763 7.86377 5.66669 7.08366V4.25033C5.66669 3.47116 5.94435 2.80438 6.49969 2.24999C7.05502 1.6956 7.7218 1.41794 8.50002 1.41699H12.75C13.5292 1.41699 14.1964 1.69466 14.7518 2.24999C15.3071 2.80533 15.5843 3.4721 15.5834 4.25033V7.08366C15.5834 7.86283 15.3062 8.53008 14.7518 9.08541C14.1974 9.64074 13.5301 9.91794 12.75 9.91699H12.0417V12.7503H12.75C13.5292 12.7503 14.1964 13.028 14.7518 13.5833C15.3071 14.1387 15.5843 14.8054 15.5834 15.5837H19.8334C19.8334 14.8045 20.111 14.1377 20.6664 13.5833C21.2217 13.0289 21.8885 12.7513 22.6667 12.7503H26.9167C27.6959 12.7503 28.3631 13.028 28.9184 13.5833C29.4738 14.1387 29.751 14.8054 29.75 15.5837V18.417C29.75 19.1962 29.4728 19.8634 28.9184 20.4187C28.364 20.9741 27.6968 21.2513 26.9167 21.2503H22.6667C21.8875 21.2503 21.2207 20.9731 20.6664 20.4187C20.112 19.8644 19.8343 19.1971 19.8334 18.417H15.5834C15.5834 19.1962 15.3062 19.8634 14.7518 20.4187C14.1974 20.9741 13.5301 21.2513 12.75 21.2503H12.0417V24.0837H12.75C13.5292 24.0837 14.1964 24.3613 14.7518 24.9167C15.3071 25.472 15.5843 26.1388 15.5834 26.917V29.7503C15.5834 30.5295 15.3062 31.1967 14.7518 31.7521C14.1974 32.3074 13.5301 32.5846 12.75 32.5837H8.50002C7.72085 32.5837 7.05408 32.3065 6.49969 31.7521C5.9453 31.1977 5.66763 30.5304 5.66669 29.7503ZM8.50002 29.7503H12.75V26.917H8.50002V29.7503ZM8.50002 18.417H12.75V15.5837H8.50002V18.417ZM22.6667 18.417H26.9167V15.5837H22.6667V18.417ZM8.50002 7.08366H12.75V4.25033H8.50002V7.08366Z" fill="var(--color-primary)" />
// 		</svg>),
// 	},
// 	{
// 		title: "Prompt Engineering",
// 		description:
// 			"We craft and iterate prompts that improve reliability, reduce hallucinations, and align outputs with business objectives.",
// 		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
// 			<path d="M22.6667 25.5003C23.4181 25.5003 24.1388 25.7988 24.6701 26.3302C25.2015 26.8615 25.5 27.5822 25.5 28.3337C25.5 27.5822 25.7985 26.8615 26.3299 26.3302C26.8612 25.7988 27.5819 25.5003 28.3333 25.5003C27.5819 25.5003 26.8612 25.2018 26.3299 24.6705C25.7985 24.1391 25.5 23.4184 25.5 22.667C25.5 23.4184 25.2015 24.1391 24.6701 24.6705C24.1388 25.2018 23.4181 25.5003 22.6667 25.5003ZM22.6667 8.50033C23.4181 8.50033 24.1388 8.79884 24.6701 9.33019C25.2015 9.86154 25.5 10.5822 25.5 11.3337C25.5 10.5822 25.7985 9.86154 26.3299 9.33019C26.8612 8.79884 27.5819 8.50033 28.3333 8.50033C27.5819 8.50033 26.8612 8.20181 26.3299 7.67046C25.7985 7.13911 25.5 6.41844 25.5 5.66699C25.5 6.41844 25.2015 7.13911 24.6701 7.67046C24.1388 8.20181 23.4181 8.50033 22.6667 8.50033ZM12.75 25.5003C12.75 23.246 13.6455 21.084 15.2396 19.4899C16.8337 17.8959 18.9957 17.0003 21.25 17.0003C18.9957 17.0003 16.8337 16.1048 15.2396 14.5107C13.6455 12.9167 12.75 10.7547 12.75 8.50033C12.75 10.7547 11.8545 12.9167 10.2604 14.5107C8.66635 16.1048 6.50434 17.0003 4.25 17.0003C6.50434 17.0003 8.66635 17.8959 10.2604 19.4899C11.8545 21.084 12.75 23.246 12.75 25.5003Z" stroke="var(--color-primary)" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
// 		</svg>),
// 			link: "hire-prompt-engineers"
// 	},
// 	{
// 		title: "RAG Solutions",
// 		description:
// 			"We implement retrieval-augmented generation pipelines that ground responses in your data, improving relevance, accuracy, and trust.",
// 		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
// 			<path d="M19.8333 4.25V9.91667C19.8333 10.2924 19.9826 10.6527 20.2482 10.9184C20.5139 11.1841 20.8743 11.3333 21.25 11.3333H26.9166" stroke="var(--color-primary)" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
// 			<path d="M17 29.75H9.91665C9.1652 29.75 8.44453 29.4515 7.91318 28.9201C7.38182 28.3888 7.08331 27.6681 7.08331 26.9167V7.08333C7.08331 6.33189 7.38182 5.61122 7.91318 5.07986C8.44453 4.54851 9.1652 4.25 9.91665 4.25H19.8333L26.9166 11.3333V16.2917M12.75 12.75H14.1666M12.75 18.4167H21.25M12.75 24.0833H17M26.9166 31.875C27.2075 30.6726 27.8242 29.5737 28.6989 28.6989C29.5737 27.8242 30.6726 27.2075 31.875 26.9167C30.6726 26.6258 29.5737 26.0091 28.6989 25.1344C27.8242 24.2597 27.2075 23.1607 26.9166 21.9583C26.6258 23.1607 26.0091 24.2597 25.1344 25.1344C24.2596 26.0091 23.1607 26.6258 21.9583 26.9167C23.1607 27.2075 24.2596 27.8242 25.1344 28.6989C26.0091 29.5737 26.6258 30.6726 26.9166 31.875Z" stroke="var(--color-primary)" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round" />
// 		</svg>),
// 	},

// 	{
// 		title: "Conversational AI Design",
// 		description:
// 			"We design conversational experiences that feel natural and efficient across chatbots, voice assistants, and in-product interfaces.",
// 		icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
// 			<path d="M9.91663 8.49967V7.08301C9.91663 5.07984 9.91663 4.07826 10.54 3.45634C11.1605 2.83301 12.162 2.83301 14.1666 2.83301H19.8333C21.8365 2.83301 22.838 2.83301 23.46 3.45634C24.0833 4.07684 24.0833 5.07842 24.0833 7.08301V8.49967C24.0833 10.5028 24.0833 11.5044 23.46 12.1263C22.8395 12.7497 21.8379 12.7497 19.8333 12.7497H18.4166L14.1666 15.583V12.7497C12.1635 12.7497 11.1619 12.7497 10.54 12.1263C9.91663 11.5058 9.91663 10.5043 9.91663 8.49967Z" stroke="var(--color-primary)" strokeWidth="2.125" strokeLinejoin="round" />
// 			<path d="M5.08582 26.5477C4.19474 27.1455 1.86007 28.3638 3.28241 29.8882C3.97657 30.6333 4.75149 31.166 5.72332 31.166H11.2767C12.2485 31.166 13.0234 30.6333 13.7176 29.8882C15.1399 28.3638 12.8052 27.1455 11.9142 26.5491C10.9069 25.8651 9.71749 25.4995 8.49999 25.4995C7.28249 25.4995 6.09305 25.8637 5.08582 26.5477ZM22.0858 26.5477C21.1947 27.1455 18.8601 28.3638 20.2824 29.8882C20.9766 30.6333 21.7515 31.166 22.7233 31.166H28.2767C29.2485 31.166 30.0234 30.6333 30.7176 29.8882C32.1399 28.3638 29.8052 27.1455 28.9142 26.5491C27.9069 25.8651 26.7175 25.4995 25.5 25.4995C24.2825 25.4995 23.093 25.8637 22.0858 26.5477ZM11.3333 19.1243C11.3333 19.8758 11.0348 20.5965 10.5035 21.1278C9.9721 21.6592 9.25144 21.9577 8.49999 21.9577C7.74854 21.9577 7.02787 21.6592 6.49652 21.1278C5.96517 20.5965 5.66666 19.8758 5.66666 19.1243C5.66666 18.3729 5.96517 17.6522 6.49652 17.1209C7.02787 16.5895 7.74854 16.291 8.49999 16.291C9.25144 16.291 9.9721 16.5895 10.5035 17.1209C11.0348 17.6522 11.3333 18.3729 11.3333 19.1243ZM28.3333 19.1243C28.3333 19.8758 28.0348 20.5965 27.5035 21.1278C26.9721 21.6592 26.2514 21.9577 25.5 21.9577C24.7485 21.9577 24.0279 21.6592 23.4965 21.1278C22.9652 20.5965 22.6667 19.8758 22.6667 19.1243C22.6667 18.3729 22.9652 17.6522 23.4965 17.1209C24.0279 16.5895 24.7485 16.291 25.5 16.291C26.2514 16.291 26.9721 16.5895 27.5035 17.1209C28.0348 17.6522 28.3333 18.3729 28.3333 19.1243Z" stroke="var(--color-primary)" strokeWidth="2.125" />
// 		</svg>),
// 	},
// ];

export const HOME_FAQS: FAQItem[] = [
	{
		id: 1,
		question: "What is Black Flag Funding?",
		answer:
			"Black Flag Funding is a business funding platform that connects you to 20+ lending programs, including SBA loans, lines of credit, term loans, and invoice financing. Instead of pushing a single product, we match you with the best offer you qualify for and guide you through the entire process.",
	},
	{
		id: 2,
		question: "How is this different from going directly to a bank?",
		answer:
			"Traditional banks typically offer limited products and strict approval criteria. We compare multiple lenders and funding programs so you can access better-fit options without the bank runaround or confusing fine print.",
	},
	{
		id: 3,
		question: "What types of funding do you offer?",
		answer:
			"We provide access to SBA loans, business lines of credit, term loans, and invoice financing. Each program is designed to support different business needs such as growth, working capital, equipment purchases, or cash flow management.",
	},
	{
		id: 4,
		question: "How do I know which funding program is right for me?",
		answer:
			"Our team reviews your business profile, revenue, time in business, and goals to recommend the best-fit solution. We also help you build a long-term funding strategy so you can qualify for better offers over time.",
	},
	{
		id: 5,
		question: "What is HeroCredit and how does it help?",
		answer:
			"HeroCredit is our business credit-building software that shows you your Fundability Score, what lenders see, what may be holding you back, and clear steps to improve your profile. It helps you qualify for larger approvals, better terms, and funding without relying on a personal guarantee.",
	},
	{
		id: 6,
		question: "Will applying affect my credit score?",
		answer:
			"In most cases, we begin with a soft review to explore your options. A hard credit inquiry is typically only required if you choose to move forward with a specific lender and funding offer.",
	},
	{
		id: 7,
		question: "How quickly can I receive funding?",
		answer:
			"Funding timelines depend on the program. Lines of credit and term loans may be approved within a few days, while SBA loans can take longer due to additional documentation and processing requirements.",
	},
	{
		id: 8,
		question: "Do I need perfect credit to qualify?",
		answer:
			"No. We work with businesses across a wide range of credit profiles. If you do not qualify immediately, we provide guidance and a roadmap to strengthen your approval chances in the future.",
	},
	{
		id: 9,
		question: "How does the Partner Program work?",
		answer:
			"Our Partner Program allows consultants, brokers, and professionals to refer clients and earn competitive commissions on funded deals. There are no caps, and our team handles the funding process while keeping you informed.",
	},
	{
		id: 10,
		question: "How do I get started?",
		answer:
			"Click 'Apply Now' or 'See What You Qualify For,' submit your basic business details, and a funding specialist will review your information and guide you through the next steps.",
	},
];


export const Advantages = [
	{
		title: "Faster Decision-Making",
		description:
			"Our Large language models analyze data instantly, helping teams make quick, accurate, and confident decisions without delays or guesswork.",
		icon: undefined,
	},
	{
		title: "Enhanced Customer Experience",
		description:
			"Deliver personalized, responsive, and natural interactions that keep customers engaged and satisfied across every touchpoint.",
		icon: undefined,
	},
	{
		title: "Reduced Operational Costs",
		description:
			"Automate repetitive tasks and optimize processes, allowing teams to focus on strategic goals while saving significant resources.",
		icon: undefined,
	},
	{
		title: "Improved Accuracy & Insights",
		description:
			"Turn unstructured data into actionable insights, minimizing errors and enabling smarter, data-backed outcomes.",
		icon: undefined,
	},
	{
		title: "Scalable AI Solutions",
		description:
			"Easily expand your AI capabilities as you grow, maintaining performance and reliability without additional complexity.",
		icon: undefined,
	},
	{
		title: "Data-Driven Innovation",
		description:
			"Leverage intelligent models that learn from real data, driving creative, evidence-based improvements across products and services.",
		icon: undefined,
	},
	{
		title: "24/7 Automation & Support",
		description:
			"Keep operations running seamlessly around the clock with AI-driven automation and continuous system monitoring.",
		icon: undefined,
	},
	{
		title: "Competitive Advantage",
		description:
			"Gain a market edge through intelligent automation, better insights, and faster response times than traditional systems allow.",
		icon: undefined,
	},
] as const;