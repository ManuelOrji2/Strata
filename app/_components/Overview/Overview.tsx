// overview highlights
import activeObjImg from "@/public/active_objectives.svg";
import strategicInitImg from "@/public/strategic_initiative.svg";
import teamsInvolvedImg from "@/public/Teams_involved.svg";
import overallCompletionImg from "@/public/overall_completion.svg";

// overview analysis
import quarterlyObjImg from "@/public/quarterly_objectives.svg";
import atRiskInitImg from "@/public/at_risk_initiative.svg";
import upcomingMilestoneImg from "@/public/upcoming_milestones.svg";

import initiativeOwnershipImg from "@/public/initiative_owner.svg";

import Image, { StaticImageData } from "next/image";

// overview Cards highlights

interface strataOverviewHighlightsCardDetail {
	img: StaticImageData;
	h1: string;
	digits: number | string;
	changes: string | null;
	changes_comment: string;
}

const strataOverviewHighlightsCardDetails: strataOverviewHighlightsCardDetail[] =
	[
		{
			img: activeObjImg,
			h1: "ACTIVE OBJECTIVES",
			digits: 4,
			changes: "+1",
			changes_comment: "VS LAST QUARTER",
		},
		{
			img: strategicInitImg,
			h1: "STRATEGIC INITIATIVES",
			digits: 18,
			changes: "+3",
			changes_comment: "VS LAST QUARTER",
		},
		{
			img: teamsInvolvedImg,
			h1: "TEAMS INVOLVED",
			digits: 5,
			changes: null,
			changes_comment: "NO CHANGES",
		},
		{
			img: overallCompletionImg,
			h1: "OVERALL COMPLETION",
			digits: "76%",
			changes: "+1",
			changes_comment: "VS LAST QUARTER",
		},
	];

// overview analysis cards
interface strataOverviewAnalysisCardDetail {
	img: StaticImageData;
}

const strataOverviewAnalysisCardDetails: strataOverviewAnalysisCardDetail[] = [
	{
		img: quarterlyObjImg,
	},
	{
		img: atRiskInitImg,
	},
	{
		img: upcomingMilestoneImg,
	},
];

const Overview = () => {
	return (
		<main className="w-312.25 container m-auto flex flex-col gap-6 py-6">
			<div>
				<h1 className="text-[#141414] font-[Manrope] text-[2.25rem] font-semibold">
					Overview
				</h1>
				<p className="text-[#808080] font-[Manrope] text-[0.875rem] font-medium">
					Track progress accross your strategy and initiatives
				</p>
			</div>
			<div className="flex justify-between">
				{strataOverviewHighlightsCardDetails.map((stratadata, i) => (
					<div
						className="bg-[#FFFCF2] flex flex-col gap-5 p-4 w-74.5 h-36.75"
						key={i}
					>
						<div className="flex gap-5">
							<Image src={stratadata.img} alt="" />
							<div>
								<h1 className="font-[Geist Mono] text-[#141414] text-[0.75rem] font-medium">
									{stratadata.h1}
								</h1>
								<span className="text-[2rem] font-[Geist Mono] font-medium text-[#141414]">
									{stratadata.digits}
								</span>
							</div>
						</div>
						<div className="flex gap-2 text-[#808080] text-[0.75rem]">
							<span className="text-[#506EFF]">{stratadata.changes}</span>
							<span>{stratadata.changes_comment}</span>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-between">
				{strataOverviewAnalysisCardDetails.map((strataData, i) => (
					<div key={i}>
						<Image src={strataData.img} alt="" />
					</div>
				))}
			</div>
			<div>
				<div className="relative w-full h-110.5">
					<Image loading="eager" src={initiativeOwnershipImg} alt="" />
				</div>
			</div>
		</main>
	);
};

export default Overview;
