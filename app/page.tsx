"use client";

import { useState } from "react";
import "@/app/globals.css";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import Image, { StaticImageData } from "next/image";
import FeaturesSecCard from "@/app/_components/FeatureSecCard/FeatureSecCard";
import Navigation from "@/app/_components/Navigation/Navigation";
import Footer from "@/app/_components/Footer/Footer";

import rightArrow from "@/public/right arrow.png";
import whiteRightArrow from "@/public/white right arrow.svg";

import goodMark from "@/public/fluent-mdl2_check-mark.png";

// Hero Section Icons and Image imports
import acmeLogo from "@/public/acme.png";
import lumenLogo from "@/public/lumen.png";
import tupleLogo from "@/public/tuple.png";
import everestLogo from "@/public/everest.png";
import northridgeLogo from "@/public/northridge.png";
import cloudonixLogo from "@/public/cloudonix.png";
import heroImg from "@/public/HomePageHero image.png";

// The Problem Section Images imports
import launchMobileImg from "@/public/launch mobile app.svg";
import strategyImg from "@/public/strategy.svg";
import partnerOutreachImg from "@/public/partner outreach.svg";

// Solution Section Image imports
import solutionSecImg from "@/public/solution sec image.png";

// Features Section Icons and Image imports
import objectiveIcon from "@/public/stash_target.png";
import visibilityIcon from "@/public/proicons_eye.png";
import initiativeIcon from "@/public/oui_layers.png";
import userOwnershipIcon from "@/public/iconoir_user.png";
import featuresImage from "@/public/featuresSection Image.png";

// Pricing Section imports
import mostPopular from "@/public/most popular tag.png";

// Impact Section
import quoteImgTag from "@/public/quote.png";
import sarahJohnsonImg from "@/public/Sarah Johnson.svg";
import martinsIzuImg from "@/public/Martins Izu.svg";
import emmaWilsonImg from "@/public/Emma Wilson.svg";

import impactlogo1 from "@/public/logo1.svg";
import impactlogo2 from "@/public/logo2.svg";
import impactlogo3 from "@/public/logo3.svg";
import impactlogo4 from "@/public/logo4.svg";
import impactlogo5 from "@/public/logo5.svg";
import impactlogo6 from "@/public/logo6.svg";
import impactlogo7 from "@/public/logo7.svg";
import impactlogo8 from "@/public/logo8.svg";
import impactlogo9 from "@/public/logo9.svg";
import impactlogo10 from "@/public/logo10.svg";
import impactlogo11 from "@/public/logo11.svg";

// FAQ
import faqSecbgImg from "@/public/faq bg.svg";
import faqSecImg1 from "@/public/faq img1.svg";
import faqSecImg2 from "@/public/faq img2.svg";
import PricingCard from "./_components/PricingCard/PricingCard";

// ******************//

// Hero Section
const heroLogos = [
	lumenLogo,
	tupleLogo,
	everestLogo,
	northridgeLogo,
	cloudonixLogo,
];

// The Problem Section
interface theProblemSecCardDetail {
	num: string;
	img: StaticImageData;
	h1: string;
	p: string;
	br: string;
}

const theProblemSecCardDetails: theProblemSecCardDetail[] = [
	{
		num: "[01]",
		img: launchMobileImg,
		h1: "Priorities shift without visibility",
		p: "As teams grow, goals evolve — but updates don’t reach everyone. Work continues, but alignment fades.",
		br: "border-r border-[#D0D0D0]",
	},
	{
		num: "[02]",
		img: strategyImg,
		h1: " Strategy stays in documents",
		p: "Plans sit in slides and Notion pages. Execution happens elsewhere  disconnected from strategy.",
		br: "border-r border-[#D0D0D0]",
	},
	{
		num: "[03]",
		img: partnerOutreachImg,
		h1: "No clear ownership of outcomes",
		p: "Objectives are shared, but accountability isn’t. Teams move, but results stall.",
		br: "",
	},
];

// The Features Section
interface featuresSecCardDetail {
	num1: {
		img: StaticImageData;
		h1: string;
		p: string;
		pw: number;
	};
	num2: {
		img: StaticImageData;
		h1: string;
		p: string;
		pw: number;
	};
}

const featuresSecCardDetailsGroup1: featuresSecCardDetail[] = [
	{
		num1: {
			img: objectiveIcon,
			h1: "Clear Objectives",
			p: "Define company priorities and turn them into structured objectives your entire team can understand and work toward.",
			pw: 333,
		},
		num2: {
			img: visibilityIcon,
			h1: "Real-Time Visibility",
			p: "See progress across teams instantly and identify risks before they slow execution.",
			pw: 258,
		},
	},
];

//pw: "w-[258px] md:"
const featuresSecCardDetailsGroup2: featuresSecCardDetail[] = [
	{
		num1: {
			img: initiativeIcon,
			h1: "Initiative Alignment",
			p: "Connect strategic initiatives to clear owners and track how work contributes to company goals.",
			pw: 305,
		},
		num2: {
			img: userOwnershipIcon,
			h1: "Ownership & Accountability",
			p: "Assign clear ownership to every initiative and ensure progress is driven by the right people.",
			pw: 265,
		},
	},
];

// Pricing Section

const pricingInfoListTextsGroup1 = [
	{ txt: "Custom pricing", borderBottom: "0.5px solid" },
	{
		txt: "Unlimited teams and workspaces",
		borderBottom: "0.5px solid",
	},
	{
		txt: "SSO & advanced permissions",
		borderBottom: "0.5px solid",
	},
	{ txt: "Dedicated onboarding", borderBottom: "none" },
];

const pricingInfoListTextsGroup2 = [
	{ txt: "Priority support", borderBottom: "0.5px solid" },
	{
		txt: "SLA & uptime guarantee",
		borderBottom: "0.5px solid",
	},
	{
		txt: "Custom API & integrations",
		borderBottom: "0.5px solid",
	},
	{ txt: "Audit logs & activity history", borderBottom: "none" },
];

// Pricing Card details
interface pricingCardDetail {
	free: [
		{
			img: null;
			fee: number;
			h1: string;
			list: {
				l1: string;
				l2: string;
				l3: string;
				l4: string;
			};
		},
	];
	starter: [
		{
			img: null;
			fee: number;
			h1: string;
			list: {
				l1: string;
				l2: string;
				l3: string;
				l4: string;
			};
		},
	];
	pro: [
		{
			img: StaticImageData;
			fee: number;
			h1: string;
			list: {
				l1: string;
				l2: string;
				l3: string;
				l4: string;
			};
		},
	];
	business: [
		{
			img: null;
			fee: number;
			h1: string;
			list: {
				l1: string;
				l2: string;
				l3: string;
				l4: string;
			};
		},
	];
}

const pricingCardDetails: pricingCardDetail[] = [
	{
		free: [
			{
				img: null,
				fee: 0,
				h1: "FREE",
				list: {
					l1: "No team member",
					l2: "Basic objectives tracking",
					l3: "Initiative overview",
					l4: "Weekly progress updates",
				},
			},
		],
		starter: [
			{
				img: null,
				fee: 40,
				h1: "STARTER",
				list: {
					l1: "Up to 2 team members",
					l2: "Basic objectives tracking",
					l3: "Initiative overview",
					l4: "Weekly progress updates",
				},
			},
		],

		pro: [
			{
				img: mostPopular,
				fee: 79,
				h1: "FOR SMALL TEAMS STARTING PLANNING",
				list: {
					l1: "Up to 5 team members",
					l2: "Pro objectives tracking",
					l3: "Initiative overview",
					l4: "Weekly progress updates",
				},
			},
		],
		business: [
			{
				img: null,
				fee: 100,
				h1: "BUSINESS",
				list: {
					l1: "Up to 50 team members",
					l2: "Advanced objectives tracking",
					l3: "Initiative overview",
					l4: "Weekly progress updates",
				},
			},
		],
	},
];

// Impact section
interface testimony {
	quoteImgTag: StaticImageData;
	quotes: string;
	img: StaticImageData;
	name: string;
	position: string;
	borderRight: string;
}

const testimonies: testimony[] = [
	{
		quoteImgTag: quoteImgTag,
		quotes: "“We stopped managing strategy in documents.”",
		img: sarahJohnsonImg,
		name: "Sarah Johnson",
		position: "Head of product, ACME",
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		quoteImgTag: quoteImgTag,
		quotes: "“Our roadmap finally reflects reality.”",
		img: martinsIzuImg,
		name: "Martins Izu",
		position: "CEO, NCS Crop",
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		quoteImgTag: quoteImgTag,
		quotes: "“Meetings became 50% shorter.”",
		img: emmaWilsonImg,
		name: "Emma Wilson",
		position: "Founder, Tuple",
		borderRight: "none",
	},
];

// Impact Section Logos
interface logo {
	img: StaticImageData;
	borderRight: string;
}

const impactSecLogos: logo[] = [
	{
		img: impactlogo1,
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		img: impactlogo2,
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		img: impactlogo3,
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		img: impactlogo4,
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		img: impactlogo5,
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		img: impactlogo6,
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		img: impactlogo7,
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		img: impactlogo8,
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		img: impactlogo9,
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		img: impactlogo10,
		borderRight: "0.5px solid #D0D0D0",
	},
	{
		img: impactlogo11,
		borderRight: "none",
	},
];

// FAQ section
interface faqAccordionDetail {
	h1: string;
	p: string;
}

const faqAccordionDetails: faqAccordionDetail[] = [
	{
		h1: "Who is Strata for?",
		p: "Strata is designed for teams of all sizes that need a better way to define objectives, align initiatives, assign ownership, and track progress in one place.",
	},
	{
		h1: "Can I invite my team?",
		p: "Strata is designed for teams of all sizes that need a better way to define objectives, align initiatives, assign ownership, and track progress in one place.",
	},
	{
		h1: "Is there a free plan?",
		p: "Strata is designed for teams of all sizes that need a better way to define objectives, align initiatives, assign ownership, and track progress in one place.",
	},
	{
		h1: "Can I track OKRs?",
		p: "Strata is designed for teams of all sizes that need a better way to define objectives, align initiatives, assign ownership, and track progress in one place.",
	},
	{
		h1: "Does Strata integrate with other tools?",
		p: "Strata is designed for teams of all sizes that need a better way to define objectives, align initiatives, assign ownership, and track progress in one place.",
	},
	{
		h1: "Is my data secure?",
		p: "Strata is designed for teams of all sizes that need a better way to define objectives, align initiatives, assign ownership, and track progress in one place.",
	},
	{
		h1: "Do you offer custom enterprise pricing?",
		p: "Strata is designed for teams of all sizes that need a better way to define objectives, align initiatives, assign ownership, and track progress in one place.",
	},
];

export default function Home() {
	const [tab, setTab] = useState(2);

	return (
		<div>
			<Navigation />
			<main>
				<section className="container mx-auto border-x border-[#D0D0D0] ">
					<div className="font-[manrope] w-[41.75 rem] flex items-center flex-col gap-8 pt-48">
						<h1 className="text-[4rem] text-[#141414] text-center font-semibold w-[41.75 rem] h-[9.25 rem] leading-[115%] tracking-normal">
							Strategy without the
							<br /> chaos
						</h1>
						<p className="text-[#808080] text-[0.875rem] w-145.5 text-center tracking-[2%]">
							Strata helps growing teams define priorities, align initiatives,
							and execute with clarity. Turn strategy into structured plans
							everyone can act on.
						</p>
						<div className="flex items-center">
							<button className="bg-[#A9E1FF] text-[12px] px-5 py-3 text-[#141414] font-[Geist Mono] cursor-pointer">
								START FREE TRIAL
							</button>
							<button className="text-[12px] px-5 py-3 text-[#141414] font-[Geist Mono] cursor-pointer flex items-center gap-1">
								<span>BOOK DEMO</span>
								<Image src={rightArrow} alt="" />
							</button>
						</div>
						<div className="w-full h-144.75 relative">
							<Image
								className="object-cover"
								loading="eager"
								src={heroImg}
								fill
								alt=""
							/>
						</div>
					</div>
					<div>
						<p className="font-[Geist Mono] text-[0.8rem] text-center text-[Gray] py-6">
							TRUSTED BY STRATEGY-FOCUS TEAMS
						</p>
						<div className="flex items-center justify-between gap-4 border-y border-[#D0D0D0]">
							<div className=" border-[#D0D0D0] h-22.75  w-[218.67px] p-7">
								<Image src={acmeLogo} alt="" />
							</div>
							{heroLogos.map((heroLogo, i) => (
								<div
									className="border-l border-[#D0D0D0] h-22.75 w-[218.67px] p-7"
									key={i}
								>
									<Image src={heroLogo} alt="" />
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="container mx-auto border-x border-[#D0D0D0]">
					<div className="flex flex-col items-center gap-2.5 pt-36">
						<span className="text-[#141414] bg-[#F7CF49] font-medium font-[Geist Mono] text-[0.8rem] px-3 p-1.5">
							THE PROBLEM
						</span>
						<h1 className="text-[40px] font-semibold font-[manrope]">
							Growth creates misalignment
						</h1>
						<p className="text-center text-[0.875rem] text-[#808080] font-medium font-[manrope]">
							As teams scale, priorities shift, ownership blurs, and execution
							drifts
							<br /> from strategy.
						</p>
					</div>
					<div className=" mt-28">
						<div className="flex items-center justify-between border-t border-b border-[#D0D0D0] ">
							{theProblemSecCardDetails.map((theProSecCardDetail, i) => (
								<div className={`${theProSecCardDetail.br} w-full p-6`} key={i}>
									<div className="">
										<span className="text-[0.75rem] text-[#8F8F8F] font-[Geist Mono] font-medium">
											{theProSecCardDetail.num}
										</span>
										<div className="">
											<Image src={theProSecCardDetail.img} alt="" />
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="flex items-center justify-between border-b border-[#D0D0D0]">
							{theProblemSecCardDetails.map((theProSecCardDetail, i) => (
								<div key={i} className={`${theProSecCardDetail.br} w-full p-8`}>
									<h1 className="text-[1rem] font-[manrope] font-semibold">
										{theProSecCardDetail.h1}
									</h1>
									<p className="text-[#808080] font-[manrope] text-[0.875rem]">
										{theProSecCardDetail.p}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="container mx-auto border-x border-[#D0D0D0]">
					<div className="flex flex-col items-center gap-2.5 pt-36">
						<span className="text-[#141414] bg-[#F7CF49] font-medium font-[Geist Mono] text-[0.8rem] px-3 p-1.5">
							THE SOLUTION
						</span>
						<h1 className="text-[40px] font-semibold font-[manrope]">
							A system for aligned execution
						</h1>
						<p className="text-center text-[0.875rem] text-[#808080] font-medium font-[manrope]">
							Strata gives teams a clear structure to define priorities, align
							<br /> initiatives, and track progress in one place.
						</p>
					</div>
					<div className="relative mt-24 w-full h-146">
						<Image
							className="object-cover"
							fill
							loading="eager"
							src={solutionSecImg}
							alt=""
						/>
					</div>
				</section>
				<section className="container mx-auto border-x border-[#D0D0D0]">
					<div className="flex flex-col items-center gap-2.5 pt-36">
						<span className="text-[#141414] bg-[#F7CF49] font-medium font-[Geist Mono] text-[0.8rem] px-3 p-1.5">
							FEATURES
						</span>
						<h1 className="text-[40px] font-semibold font-[manrope]">
							Everything you need to execute strategy
						</h1>
						<p className="text-center text-[0.875rem] text-[#808080] font-medium font-[manrope]">
							Strata brings objectives, initiatives, and progress into one clear
							system for
							<br /> your team.
						</p>
					</div>
					<div className="flex justify-between font-[manrope] w-full h-160.25 mt-32">
						<div className="flex flex-col justify-between w-full">
							{featuresSecCardDetailsGroup1.map(
								(featuresSecCardDetailGroup1, i) => (
									<FeaturesSecCard
										key={i}
										img={featuresSecCardDetailGroup1.num1.img}
										h1={featuresSecCardDetailGroup1.num1.h1}
										p={featuresSecCardDetailGroup1.num1.p}
										pw={featuresSecCardDetailGroup1.num1.pw}
									/>
								),
							)}
							{featuresSecCardDetailsGroup1.map(
								(featuresSecCardDetailGroup1, i) => (
									<FeaturesSecCard
										key={i}
										img={featuresSecCardDetailGroup1.num2.img}
										h1={featuresSecCardDetailGroup1.num2.h1}
										p={featuresSecCardDetailGroup1.num2.p}
										pw={featuresSecCardDetailGroup1.num2.pw}
									/>
								),
							)}
						</div>
						<div className="relative w-full h-full">
							<Image fill src={featuresImage} alt="" />
						</div>
						<div className="flex flex-col justify-between w-full">
							{featuresSecCardDetailsGroup2.map(
								(featuresSecCardDetailGroup2, i) => (
									<FeaturesSecCard
										key={i}
										img={featuresSecCardDetailGroup2.num1.img}
										h1={featuresSecCardDetailGroup2.num1.h1}
										p={featuresSecCardDetailGroup2.num1.p}
										pw={featuresSecCardDetailGroup2.num1.pw}
									/>
								),
							)}
							{featuresSecCardDetailsGroup2.map(
								(featuresSecCardDetailGroup2, i) => (
									<FeaturesSecCard
										key={i}
										img={featuresSecCardDetailGroup2.num2.img}
										h1={featuresSecCardDetailGroup2.num2.h1}
										p={featuresSecCardDetailGroup2.num2.p}
										pw={featuresSecCardDetailGroup2.num2.pw}
									/>
								),
							)}
						</div>
					</div>
				</section>
				<section className="bg-[#141414]">
					<div className="container mx-auto border-x border-[#464646]">
						<div className="flex flex-col items-center gap-2.5 pt-36">
							<span className="text-[#141414] bg-[#F7CF49] font-medium font-[Geist Mono] text-[0.8rem] px-3 p-1.5">
								PRICING
							</span>
							<h1 className="text-[40px] font-semibold font-[manrope] text-[#FFFFFF]">
								Simple, transparent pricing
							</h1>
							<p className="text-center text-[0.875rem] text-[#808080] font-medium font-[manrope]">
								Start free, upgrade as your team grows. No hidden fees.
							</p>
							<div className="flex items-center justify-center bg-[#1F1F1F]">
								<div className="flex items-center justify-evenly gap-1 px-2 h-11.5 text-[#808080] font-[Geist Mono] text-[0.75rem]">
									<div
										onClick={() => setTab(0)}
										className={
											tab === 0
												? `bg-[#141414] text-[#F7CF49] cursor-pointer px-5 py-2`
												: `cursor-pointer px-5 py-2`
										}
									>
										FREE
									</div>
									<div
										onClick={() => setTab(1)}
										className={
											tab === 1
												? `bg-[#141414] text-[#F7CF49] px-5 py-2 cursor-pointer`
												: `cursor-pointer px-5 py-2`
										}
									>
										STARTER
									</div>
									<div
										onClick={() => setTab(2)}
										className={
											tab === 2
												? `bg-[#141414] text-[#F7CF49] px-5 py-2 cursor-pointer`
												: `cursor-pointer px-5 py-2`
										}
									>
										PRO
									</div>
									<div
										onClick={() => setTab(3)}
										className={
											tab === 3
												? `bg-[#141414] text-[#F7CF49] px-5 py-2  cursor-pointer`
												: `cursor-pointer px-5 py-2`
										}
									>
										BUSINESS
									</div>
								</div>
							</div>
							<div className=" mt-20">
								{tab === 0 &&
									pricingCardDetails.map((pricingCardDetail, i) => (
										<PricingCard
											key={i}
											img={pricingCardDetail.free[0].img}
											fee={pricingCardDetail.free[0].fee}
											h1={pricingCardDetail.free[0].h1}
											list={pricingCardDetail.free[0].list}
										/>
									))}
								{tab === 1 &&
									pricingCardDetails.map((pricingCardDetail, i) => (
										<PricingCard
											key={i}
											img={pricingCardDetail.starter[0].img}
											fee={pricingCardDetail.starter[0].fee}
											h1={pricingCardDetail.starter[0].h1}
											list={pricingCardDetail.starter[0].list}
										/>
									))}
								{tab === 2 &&
									pricingCardDetails.map((pricingCardDetail, i) => (
										<PricingCard
											key={i}
											img={pricingCardDetail.pro[0].img}
											fee={pricingCardDetail.pro[0].fee}
											h1={pricingCardDetail.pro[0].h1}
											list={pricingCardDetail.pro[0].list}
										/>
									))}
								{tab === 3 &&
									pricingCardDetails.map((pricingCardDetail, i) => (
										<PricingCard
											key={i}
											img={pricingCardDetail.business[0].img}
											fee={pricingCardDetail.business[0].fee}
											h1={pricingCardDetail.business[0].h1}
											list={pricingCardDetail.business[0].list}
										/>
									))}
							</div>
						</div>
						<div className="flex justify-between  border-t border-[#464646] mt-32  py-20  font-[manrope]">
							<div className="flex flex-col gap-3 text-[#808080] pl-10 pr-32 border-r  h-55 border-[#464646]">
								<span className="font-[Geist Mono] font-normal">
									ENTERPRISE
								</span>
								<h1 className="text-[#FFFFFF] font-semibold text-[2.5rem] leading-[140%]">
									Built for organizations
									<br /> at scale
								</h1>
								<p className="w-[26.3125 rem] text-[0.875rem] font-medium">
									Custom plans for larger teams that need advanced security,
									<br />
									flexible deployment, and dedicated supports.
								</p>
							</div>
							<div className="flex justify-evenly flex-1 ">
								<div className="flex flex-col justify-between h-42 ">
									{pricingInfoListTextsGroup1.map((pricingInfoTxt, i) => (
										<div
											key={i}
											className="flex items-center gap-2 text-[0.875rem] text-[#F5F5F5] px-16"
										>
											<Image src={goodMark} alt="" />
											<span
												style={{
													borderBottom: pricingInfoTxt.borderBottom,
													borderColor: "#464646",
												}}
												className="w-67.25  py-4"
											>
												{pricingInfoTxt.txt}
											</span>
										</div>
									))}
								</div>
								<div className="flex flex-col items-end ">
									<div className="flex flex-col justify-between">
										{pricingInfoListTextsGroup2.map((pricingInfoTxt, i) => (
											<div
												key={i}
												className="flex items-center gap-2 text-[0.875rem] text-[#F5F5F5]"
											>
												<Image src={goodMark} alt="" />
												<span
													style={{
														borderBottom: pricingInfoTxt.borderBottom,
														borderColor: "#464646",
													}}
													className="w-67.25 py-4"
												>
													{pricingInfoTxt.txt}
												</span>
											</div>
										))}
									</div>
									<div className="mt-4">
										<button className="bg-[#A9E1FF] flex items-center gap-2.5 justify-between px-5 py-4 font-[Geist mono] font-medium text-[0.75rem]">
											<span>CONTACT SALES</span>
											<Image src={rightArrow} alt="" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="container m-auto border-x border-[#D0D0D0]">
					<div className="flex flex-col items-center gap-2.5 pt-36">
						<span className="text-[#141414] bg-[#F7CF49] font-medium font-[Geist Mono] text-[0.75rem] px-3 p-1.5">
							THE IMPACT
						</span>
						<h1 className="text-[40px] font-semibold font-[manrope]">
							Clarity changes how teams execute
						</h1>
						<p className="text-center text-[0.875rem] text-[#808080] font-medium font-[manrope]">
							When strategy, ownership, and progress live in one place, teams
							spend less time
							<br /> coordinating and more time delivering results.
						</p>
					</div>
					<div className="flex items-center justify-evenly border-y border-[#D0D0D0] mt-24">
						{testimonies.map((testimony, i) => (
							<div
								style={{ borderRight: testimony.borderRight }}
								className="w-full flex flex-col justify-between] p-8"
								key={i}
							>
								<div className="flex flex-col gap-4 h-72.75">
									<Image src={testimony.quoteImgTag} alt="" />
									<h1 className="text-[1.625rem] w-95.25 text-[#141414] font-[manrope] font-semibold tracking-[2%] leading-[140%]">
										{testimony.quotes}
									</h1>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-20 h-15.25">
										<Image src={testimony.img} alt="" />
									</div>

									<div className="flex flex-col gap-2 text-[#5B5B5B] text-[0.875rem] font-[manrope] tracking-[2%] leading-[140%]">
										<span>{testimony.name}</span>
										<span>{testimony.position}</span>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="text-center text-[1.75rem] font-[manrope] font-semibold leading-[140%] tracking-[0%] py-10">
						<h2>Strata works with the tools your team already uses</h2>
					</div>
					<div className="flex items-center justify-evenly border-y border-[#D0D0D0]">
						{impactSecLogos.map((logo, i) => (
							<div
								className="py-8 pl-10 pr-12"
								style={{ borderRight: logo.borderRight }}
								key={i}
							>
								<Image src={logo.img} alt="" />
							</div>
						))}
					</div>
					<div className="text-center py-8 font-[manrope] font-semibold leading-[140%] text-[0.875rem] text-[#808080]">
						<p>More integrations coming soon...</p>
					</div>
				</section>
				<section>
					<div className="flex justify-evenly h-248.75 container mx-auto border-x border-[#D0D0D0]">
						<div className="relative h-full w-full flex flex-col items-center justify-center gap-4">
							<Image
								className="object-cover -z-5"
								fill
								src={faqSecbgImg}
								alt=""
							/>
							<Image className="" src={faqSecImg1} alt="" />
							<Image className="" src={faqSecImg2} alt="" />
						</div>
						<div className="w-full flex flex-col gap-9">
							<div className="flex flex-col gap-2.5 pt-24 px-8">
								<div>
									<span className="text-[#141414] bg-[#F7CF49] font-medium font-[Geist Mono] text-[0.75rem] px-3 p-1.5">
										FAQ
									</span>
								</div>
								<h1 className="text-[40px] font-semibold font-[manrope]">
									Everything you need to
									<br /> know
								</h1>
								<p className="text-[0.875rem] text-[#808080] font-medium font-[manrope]">
									Answers to common questions about Strata. Need more help?
									Reach out to us at
									<br /> help@strata.com.
								</p>
							</div>
							<div className="px-8">
								{faqAccordionDetails.map((faqAccordionDetail, i) => (
									<Accordion key={i} defaultValue={[i]}>
										<AccordionItem value={0}>
											<AccordionTrigger className="text-[1rem] text-[#141414] font-[manrope]! font-semibold cursor-pointer">
												{faqAccordionDetail.h1}
											</AccordionTrigger>
											<AccordionContent className="text-[#808080] text-[0.875rem] font-[manrope]! px-9 pb-4">
												{faqAccordionDetail.p}
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								))}
							</div>
						</div>
					</div>
				</section>
				<section className="bg-[#4B4B4B]">
					<div className="container m-auto border-x border-[#ADADAD] flex flex-col items-center gap-2.5 py-20">
						<span className="text-[#141414] bg-[#F7CF49] font-medium font-[Geist Mono] text-[0.75rem] px-3 p-1.5">
							READY TO START?
						</span>

						<div className="h-[131.98px] flex text-[3.75rem] justify-evenly border-y border-[#ADADAD] font-[manrope] font-semibold leading-[114.99999999999999%] tracking-[0%] text-[#FFFCF2] w-full my-8">
							<div className="border-r border-[#ADADAD] text-right p-4 pt-6.5 w-full">
								Turn strategy into
							</div>
							<div className=" w-full overflow-hidden relative">
								<div className="words-ctn flex flex-col absolute w-full ">
									<div className="word border-b border-[#ADADAD] text-[#FFFCF2]  p-4 ">
										Execution
									</div>
									<div className="word border-b border-[#ADADAD] text-[#FFFCF2]  p-4">
										Alignment
									</div>
									<div className="word border-b border-[#ADADAD] text-[#FFFCF2] p-4">
										Purpose
									</div>
									<div className="word border-b border-[#ADADAD] text-[#FFFCF2]  p-4">
										Class
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center">
							<button className="bg-[#A9E1FF] text-[12px] px-5 py-3 text-[#141414] font-[Geist Mono] cursor-pointer">
								START FREE TRIAL
							</button>
							<button className="text-[12px] px-5 py-3 text-[#FFFCF2] font-[Geist Mono] cursor-pointer flex items-center gap-1">
								<span>BOOK DEMO</span>
								<Image src={whiteRightArrow} alt="" />
							</button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
