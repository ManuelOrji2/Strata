"use client";

import Navigation from "@/app/_components/Navigation/Navigation";
import Image from "next/image";

import heroImg from "@/public/HomePageHero image.png";
import rightArrow from "@/public/right arrow.png";

import acmeLogo from "@/public/acme.png";
import lumenLogo from "@/public/lumen.png";
import tupleLogo from "@/public/tuple.png";
import everestLogo from "@/public/everest.png";
import northridgeLogo from "@/public/northridge.png";
import cloudonixLogo from "@/public/cloudonix.png";

const heroLogos = [
	lumenLogo,
	tupleLogo,
	everestLogo,
	northridgeLogo,
	cloudonixLogo,
];

export default function Home() {
	return (
		<div>
			<Navigation />
			<main className="container m-auto border-x border-[#D0D0D0]  w-327.75">
				<section>
					<div className="font-[manrope] w-[41.75 rem] flex items-center flex-col gap-8 pt-48">
						<h1 className="text-[4rem] text-[#141414] text-center font-semibold w-[41.75 rem] h-[9.25 rem] leading-[115%] tracking-normal">
							Strategy without the
							<br /> chaos
						</h1>
						<p className="text-[#808080] text-[0.875rem] w-145.5 text-center tracking-[2%]">
							Strata helps growing teams define priorities, align initiatives,
							and execute with clarity.  Turn strategy into structured plans
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
						<div>
							<Image src={heroImg} alt="" />
						</div>
					</div>
					<div>
						<p className="font-[Geist Mono] text-[0.8rem] text-center text-[Gray] py-6">
							TRUSTED BY STRATEGY-FOCUS TEAMS
						</p>
						<div className="flex items-center justify-between gap-4 border-y border-[#D0D0D0] mb-5">
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
			</main>
		</div>
	);
}
