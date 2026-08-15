import {
	Sidebar,
	SidebarHeader,
	SidebarGroup,
	SidebarMenu,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import { ChevronDown } from "lucide-react";

import Logo from "../Logo/Logo";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Image from "next/image";

import overviewImg from "@/public/overview.png";
import objectiveImg from "@/public/objectives.png";
import intiativeImg from "@/public/initiatives.png";
import roadMapImg from "@/public/roadmap.png";
import reportsImg from "@/public/reports.png";

import teamImg from "@/public/team.png";
import documentImg from "@/public/document.png";
import settingsImg from "@/public/settings.png";

import michaelEnyinnaImg from "@/public/Michael Enyinnaya.png";

interface sidebarMenuItemDetail {
	img: StaticImageData;
	name: string;
}

const sidebarMenuItemDetailsGrpOne: sidebarMenuItemDetail[] = [
	{
		img: overviewImg,
		name: "OVERVIEW",
	},
	{
		img: objectiveImg,
		name: "OBJECTIVES",
	},
	{
		img: intiativeImg,
		name: "INTIATIVES",
	},
	{
		img: roadMapImg,
		name: "ROADMAP",
	},
	{
		img: reportsImg,
		name: "REPORTS",
	},
];

const sidebarMenuItemDetailsGrpTwo: sidebarMenuItemDetail[] = [
	{
		img: teamImg,
		name: "TEAMS",
	},
	{
		img: documentImg,
		name: "DOCUMENTS",
	},
	{
		img: settingsImg,
		name: "SETTINGS",
	},
];

export function DashboardSidebar() {
	return (
		<Sidebar className="border-r-[#D0D0D0] absolute z-10">
			<SidebarHeader className="border-b border-b-[#D0D0D0] p-5 bg-[#FFFCF2]">
				<div className="w-30.25 h-8.25">
					<Logo />
				</div>
			</SidebarHeader>
			<SidebarMenu className="flex flex-col justify-between px-5 h-full">
				<SidebarGroup className="flex flex-col justify-evenly gap-2 h-[60%]">
					<SidebarGroup className="flex flex-col gap-2 border-b border-[#D0D0D0] py-5">
						{sidebarMenuItemDetailsGrpOne.map((menuItem, i) => (
							<SidebarMenuItem className="py-3 px-1.5" key={i}>
								<Link className="flex items-center gap-4" href="">
									<Image src={menuItem.img} alt="" />
									<span className="text-[#141414] text-[0.8125rem] font-[Geist Mono] font-medium">
										{menuItem.name}
									</span>
								</Link>
							</SidebarMenuItem>
						))}
					</SidebarGroup>
					<SidebarGroup className="flex flex-col gap-2 ">
						{sidebarMenuItemDetailsGrpTwo.map((menuItem, i) => (
							<SidebarMenuItem className="py-3 px-1.5" key={i}>
								<Link className="flex items-center gap-4" href="">
									<Image src={menuItem.img} alt="" />
									<span className="text-[#141414] text-[0.8125rem] font-[Geist Mono] font-medium">
										{menuItem.name}
									</span>
								</Link>
							</SidebarMenuItem>
						))}
					</SidebarGroup>
				</SidebarGroup>
				<SidebarGroup className="flex flex-col gap-2 h-[30%]">
					<SidebarMenuItem className="py-3 px-1.5 border border-[#D0D0D0]">
						<Link className="flex items-center gap-4" href="">
							<div className="bg-[#F8F4ED] p-2">
								<span className="text-[#141414] text-[0.75rem] font-[Manrope] font-medium">
									MC
								</span>
							</div>
							<span className="text-[#141414] text-[0.875rem] font-[Manrope] font-semibold">
								Merc Corp
							</span>
							<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
						</Link>
					</SidebarMenuItem>
					<SidebarMenuItem className="py-3 px-1.5">
						<Link className="flex items-center gap-4" href="">
							<Image src={michaelEnyinnaImg} alt="" />
							<div className="flex flex-col gap-2">
								<span className="text-[#141414] text-[0.875rem] font-[Manrope] font-semibold">
									Michael E.
								</span>
								<span className="text-[#808080] text-[0.75rem] font-[Manrope]">
									Admin
								</span>
							</div>
							<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
						</Link>
					</SidebarMenuItem>
				</SidebarGroup>
			</SidebarMenu>
		</Sidebar>
	);
}
