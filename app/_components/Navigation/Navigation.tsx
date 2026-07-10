"use client";

import { useState, useEffect } from "react";
import Logo from "@/app/_components/Logo/Logo";
import Image from "next/image";
import Link from "next/link";
import dropdownIcon from "@/public/dropdownicon.png";

const Navigation = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY >= 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed z-10 flex items-center justify-center border-b border-[#D0D0D0]  w-screen">
			<nav
				className={
					scrolled
						? `container m-auto flex items-center justify-between w-full h-24.25  px-44 backdrop-blur-xl`
						: `container m-auto flex items-center justify-between w-full h-24.25  px-44`
				}
			>
				<Link className="cursor-pointer" href="/">
					<Logo />
				</Link>
				<div className="flex items-center gap-8 justify-between">
					<Link href="" className="flex items-center gap-2 cursor-pointer">
						<span>PRODUCT</span>
						<Image src={dropdownIcon} alt="" />
					</Link>
					<Link href="" className="cursor-pointer">
						PRICING
					</Link>
					<Link href="" className="cursor-pointer">
						INTEGRATION
					</Link>
					<Link href="" className="flex items-center gap-2 cursor-pointer">
						<span>RESOURCES</span>
						<Image src={dropdownIcon} alt="" />
					</Link>
				</div>
				<div className="flex items-center justify-between gap-2.5 text-[0.8rem]">
					<button className="text-[#656565] text-[0.8rem] cursor-pointer">
						LOG IN
					</button>
					<button className="bg-[#A9E1FF] text-[#141414] px-5 py-3 cursor-pointer">
						START FREE TRIAL
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
