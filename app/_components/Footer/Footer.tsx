"use client";

import Image from "next/image";
import Link from "next/link";

import strataLogo from "@/public/strata logo(white).png";

const Footer = () => {
	return (
		<div className="bg-[#141414] w-full">
			<footer className="container m-auto flex flex-col justify-around h-142.25 border-x border-[#464646] p-8">
				<div className="flex items-center justify-between border-b border-[#464646] py-8">
					<span className="text-[0.875rem] text-[#FFFCF2] font-medium font-[Geist Mono]">
						PRODUCT
					</span>
					<div className="flex items-center justify-between text-[#808080] text-[0.75rem] gap-3">
						<Link href="">Overview</Link>
						<span>/</span>
						<Link href="">Objectives</Link>
						<span>/</span>
						<Link href="">Initiatives</Link>
						<span>/</span>
						<Link href="">Roadmaps</Link>
						<span>/</span>
						<Link href="">Reports</Link>
						<span>/</span>
						<Link href="">Pricing</Link>
					</div>
				</div>
				<div className="flex items-center justify-between border-b border-[#464646] py-8">
					<span className="text-[0.875rem] text-[#FFFCF2] font-medium font-[Geist Mono]">
						RESOURCES
					</span>
					<div className="flex items-center justify-between text-[#808080] text-[0.75rem] gap-3">
						<Link href="">Documentation</Link>
						<span>/</span>
						<Link href="">Help Center</Link>
						<span>/</span>
						<Link href="">API</Link>
						<span>/</span>
						<Link href="">Changelog</Link>
						<span>/</span>
						<Link href="">Status</Link>
					</div>
				</div>
				<div className="flex items-center justify-between border-b border-[#464646] py-8">
					<span className="text-[0.875rem] text-[#FFFCF2] font-medium font-[Geist Mono]">
						COMPANY
					</span>
					<div className="flex items-center justify-between text-[#808080] text-[0.75rem] gap-3">
						<Link href="">About</Link>
						<span>/</span>
						<Link href="">Blog</Link>
						<span>/</span>
						<Link href="">Careers</Link>
						<span>/</span>
						<Link href="">Contact</Link>
					</div>
				</div>
				<div className="flex items-center justify-between border-b border-[#464646] py-8">
					<span className="text-[0.875rem] text-[#FFFCF2] font-medium font-[Geist Mono]">
						LEGAL
					</span>
					<div className="flex items-center justify-between text-[#808080] text-[0.75rem] gap-3">
						<Link href="">Privacy</Link>
						<span>/</span>
						<Link href="">Terms</Link>
						<span>/</span>
						<Link href="">Security</Link>
						<span>/</span>
						<Link href="">Cookies</Link>
					</div>
				</div>
				<div className="flex items-center justify-between py-11">
					<div className="flex flex-col justify-between gap-3">
						<Image src={strataLogo} alt="" />
						<span className="text-[0.875rem] text-[#B2B2B2] font-medium font-[manrope]">
							Strategy execution for modern team.
						</span>
						<span className="text-[0.75rem] text-[#808080] font-medium font-[Geist Mono]">
							© 2026 Strata Inc. ALl rights reserved.
						</span>
					</div>
					<div className="flex items-center justify-between text-[#808080] text-[0.75rem] gap-3">
						<Link href="">LINKEDIN</Link>
						<span>/</span>
						<Link href="">X</Link>
						<span>/</span>
						<Link href="">INSTAGRAM</Link>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
