import { Menu, CircleUserRound } from "lucide-react";
import SearchBox from "../../../shared/components/SearchBox";
import DateFilter from "./DateFilter";
import { useSidebarStore } from "../../../shared/store/useSidebarStore";

export default function AppHeader() {
	const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
	return (
		<header className="sticky top-0 z-50 h-16 border-b border-slate-200 bg-white/90 backdrop-blur">
			<div className="flex h-full items-center justify-between px-4 md:px-6">
				{/* Left */}
				<div className="flex items-center gap-3">
					<button
						onClick={toggleSidebar}
						className="rounded-lg p-2 transition-colors hover:bg-slate-100 hover:cursor-pointer min-[1330px]:hidden "
						aria-label="Open menu"
					>
						<Menu size={20} />
					</button>

					<div>
						<h1 className="text-lg font-bold tracking-tight text-slate-900">
							Pharma Lens
						</h1>

						<p className="hidden text-xs text-slate-500 min-[1192px]:block">
							Operational Intelligence
						</p>
					</div>
				</div>

				{/* Center */}
				<div className="hidden w-full max-w-xl min-[1000px]:flex items-center justify-center">
					{/* <SearchBox /> */}
					<DateFilter />
				</div>

				{/* Right */}
				<div className="flex items-center">
					<button
						className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-slate-100"
						aria-label="Profile"
					>
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow">
							<CircleUserRound size={22} />
						</div>

						<div className=" text-left">
							<p className="text-sm font-semibold text-slate-900">
								Admin
							</p>

							<p className="text-xs text-slate-500">
								Business Owner
							</p>
						</div>
					</button>
				</div>
			</div>
		</header>
	);
}
