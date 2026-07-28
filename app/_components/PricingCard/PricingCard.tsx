import Image, { StaticImageData } from "next/image";
import rightArrow from "@/public/right arrow.png";
import { Check } from "lucide-react";

interface pricingCardProps {
	img: StaticImageData | null;
	fee: number;
	h1: string;
	list: {
		l1: string;
		l2: string;
		l3: string;
		l4: string;
	};
}

const PricingCard = ({ img, fee, h1, list }: pricingCardProps) => {
	return (
		<div className="h-124.5 w-101.25 bg-[#F7CF49] flex flex-col items-center justify-center ">
			<div className="flex w-full justify-end pt-3">
				<div className="relative w-30.75 h-8.25">
					{img && <Image fill src={img} alt="" />}
				</div>
			</div>
			<div className="flex items-center justify-center">
				<span className=" font-[Geist Mono] text-[2rem] text-[#141414] font-medium">
					$
				</span>
				<span className="font-[manrope] text-[6rem] text-[#141414] font-medium">
					{fee}
				</span>
				<span className="text-[0.75rem] text-[#141414]  font-[Geist mono] font-normal">
					PER
					<br /> MONTH
				</span>
			</div>
			<div className="h-62.25 w-97.25 py-8 bg-black flex flex-col items-center justify-center">
				<div className="h-52 flex flex-col justify-center">
					<h1 className="text-[#C49700] text-[0.75rem] font-[Geist Mono]">
						{h1}
					</h1>
					<div className="h-full w-fit flex flex-col justify-evenly">
						<div className="flex items-center gap-3">
							<Check size={24} color="#F7CF49" />
							<span className="text-[#F7CF49] text-[0.875rem] font-[manrope] font-medium">
								{list.l1}
							</span>
						</div>
						<div className="flex items-center gap-3">
							<Check size={24} color="#F7CF49" />
							<span className="text-[#F7CF49] text-[0.875rem] font-[manrope] font-medium">
								{list.l2}
							</span>
						</div>
						<div className="flex items-center gap-3">
							<Check size={24} color="#F7CF49" />
							<span className="text-[#F7CF49] text-[0.875rem] font-[manrope] font-medium">
								{list.l3}
							</span>
						</div>
						<div className="flex items-center gap-3">
							<Check size={24} color="#F7CF49" />
							<span className="text-[#F7CF49] text-[0.875rem] font-[manrope] font-medium">
								{list.l4}
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="py-4">
				<button className="text-[0.875rem] px-5 py-3 text-[#141414] font-[Geist Mono] font-medium cursor-pointer flex items-center gap-1">
					<span>GET STARTED</span>
					<Image src={rightArrow} alt="" />
				</button>
			</div>
		</div>
	);
};

export default PricingCard;
