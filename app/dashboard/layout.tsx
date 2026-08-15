import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardNavigation from "@/app/_components/DashboardNavigation/DashboardNavigation";
import { DashboardSidebar } from "@/app/_components/DashboardSidebar/DashboardSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider className="flex h-screen  bg-[#F5F2E9] ">
			<aside>
				<DashboardSidebar />
			</aside>
			<div className="flex flex-col flex-1">
				<header className="flex border-b border-[#D0D0D0] p-3 bg-[#FFFCF2]">
					<SidebarTrigger />
					<DashboardNavigation />
				</header>
				<main className="overflow-y-scroll">{children}</main>
			</div>
		</SidebarProvider>
	);
}
