import Image, { StaticImageData } from "next/image";

interface FeatureSecCardProps {
	img: StaticImageData;
	h1: string;
	p: string;
	pw: number;
}

const FeatureSecCard = ({ img, h1, p, pw }: FeatureSecCardProps) => {
	return (
		<div className="flex flex-col justify-between border-t border-[#D0D0D0] p-6 h-full w-full">
			<div className="flex flex-col justify-between h-full w-full">
				<Image src={img} alt="" />
				<div className={`flex flex-col gap-3 py-4`} style={{ maxWidth: pw }}>
					<h1 className="text-[1rem] text-[#141414] font-semibold">{h1}</h1>
					<p
						className={`text-[#686868] text-[0.875rem] font-medium tracking-[2%]`}
					>
						{p}
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeatureSecCard;
