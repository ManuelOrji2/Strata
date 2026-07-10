"use client";

import Image from "next/image";
import strataIcon from "@/public/icon.png";

const Logo = () => {
	return (
		<div className="flex items-center gap-2 w-[7.570625 rem] h-[2.10rem]">
			<Image src={strataIcon} alt="logo" width={33.59} height={33.59} />
			<span className="text-[21.86px] text-[#141414] font-[manrope] font-semibold">
				STRATA
			</span>
		</div>
	);
};

export default Logo;
