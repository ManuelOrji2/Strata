"use client";

import Image from "next/image";
import { ChevronDown, SearchIcon } from "lucide-react";
import KIcon from "@/public/K.png";
import boxIcon from "@/public/boxicons_command-filled.png";
import { Calendar } from "lucide-react";
import notificationBells from "@/public/notification bell.png";
import michaelEnyinnaImg from "@/public/Michael Enyinnaya.png";

const dashboardNavigation = () => {
	return (
		<nav className="w-full flex items-center justify-between">
			<div className="w-74.75 flex items-center justify-between border border-[#D0D0D0] p-2">
				<div className="flex items-center">
					<div className="p-2">
						<SearchIcon className="w-3.75 h-3.75" />
					</div>
					<input
						className="outline-none border-none"
						type="text"
						placeholder="Search anything..."
					/>
				</div>
				<div className="flex items-center gap-2">
					<Image className="w-3.5 h-3.5" src={boxIcon} alt="" />
					<Image className="w-2.25" src={KIcon} alt="" />
				</div>
			</div>
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-2 border border-[#D0D0D0] p-2">
					<Calendar className="w-[13.33px] h-[13.33px]" />
					<span className="text-[#141414] text-[0.875rem] font-[Geist Mono]">
						Q2
					</span>
					<span className="text-[#141414] text-[0.875rem] font-[Geist Mono]">
						2026
					</span>
					<ChevronDown />
				</div>
				<Image src={notificationBells} alt="" />{" "}
				<Image src={michaelEnyinnaImg} alt="" />
			</div>
		</nav>
	);
};

export default dashboardNavigation;
