import {
	AlertTriangle,
	Pill,
	TrendingDown,
	TrendingUp,
	X,
	type LucideIcon,
} from "lucide-react";

import { useSidebarStore } from "../../../shared/store/useSidebarStore";

type SummaryItem = {
	label: string;
	value: string;
	change: string;
	positive: boolean;
};

const summary: SummaryItem[] = [
	{
		label: "Orders",
		value: "1,284",
		change: "+18%",
		positive: true,
	},
	{
		label: "Coverage",
		value: "94%",
		change: "+3%",
		positive: true,
	},
	{
		label: "Active Zones",
		value: "12/12",
		change: "100%",
		positive: true,
	},
	{
		label: "Growth",
		value: "+11.4%",
		change: "+2%",
		positive: true,
	},
	{
		label: "Pending Orders",
		value: "42",
		change: "-4%",
		positive: false,
	},
	{
		label: "Low Stock",
		value: "7",
		change: "+2",
		positive: false,
	},
];

function SummaryCard({ item }: { item: SummaryItem }) {
	const Icon: LucideIcon = item.positive ? TrendingUp : TrendingDown;

	return (
		<div className="flex items-center justify-between rounded-xl bg-slate-50 p-2.5 transition hover:bg-slate-100">
			<div>
				<p className="text-xs text-slate-500">{item.label}</p>

				<p className="mt-1 text-base font-bold text-slate-900">
					{item.value}
				</p>
			</div>

			<div
				className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
					item.positive
						? "bg-emerald-50 text-emerald-600"
						: "bg-red-50 text-red-600"
				}`}
			>
				<Icon size={13} />

				<span>{item.change}</span>
			</div>
		</div>
	);
}

export default function AppSidebar() {
	const { isOpen, closeSidebar } = useSidebarStore();

	return (
		<>
			{/* Mobile Overlay */}
			{isOpen && (
				<div
					onClick={closeSidebar}
					className="
						fixed inset-0
						z-[999]
						bg-black/30
						backdrop-blur-sm
						lg:hidden
					"
				/>
			)}

			<aside
				className={`
					fixed inset-y-0 left-0
					z-[1000]

					flex
					h-screen
					w-64
					shrink-0
					flex-col

					border-r
					border-slate-200
					bg-slate-50

					transition-transform
					duration-300
					ease-in-out

					${isOpen ? "translate-x-0" : "-translate-x-full"}

					lg:static
					lg:h-auto
					lg:translate-x-0
				`}
			>
				{/* Mobile Header */}
				<div
					className="
						flex
						items-center
						justify-between
						border-b
						border-slate-200
						p-3
						lg:hidden
					"
				>
					<div className="flex items-center gap-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 text-white">
							<Pill size={17} />
						</div>

						<h2 className="text-sm font-bold tracking-tight text-slate-900">
							Pharma Lens
						</h2>
					</div>

					<button
						onClick={closeSidebar}
						className="
							rounded-full
							p-2
							transition
							hover:bg-slate-100
							hover:cursor-pointer
						"
						aria-label="Close sidebar"
					>
						<X size={18} />
					</button>
				</div>

				<div
					className="
						flex-1
						space-y-3
						overflow-y-auto
						p-3
					"
				>
					{/* Today's Summary */}
					<section
						className="
							rounded-2xl
							border
							border-slate-200
							bg-white
							p-3
							shadow-sm
						"
					>
						<div
							className="
								mb-3
								flex
								items-center
								justify-between
							"
						>
							<div>
								<h3 className="text-sm font-semibold text-slate-900">
									Today at a Glance
								</h3>
							</div>
						</div>

						<div
							className="
								max-h-64
								space-y-2.5
								overflow-y-auto
								pr-1
							"
						>
							{summary.map((item) => (
								<SummaryCard key={item.label} item={item} />
							))}
						</div>
					</section>

					{/* Needs Attention */}
					<section
						className="
							rounded-2xl
							border
							border-slate-200
							bg-white
							p-3
							shadow-sm
						"
					>
						<div className="flex items-center gap-2">
							<AlertTriangle
								size={17}
								className="text-amber-500"
							/>

							<h3 className="text-sm font-semibold text-slate-900">
								Needs Attention
							</h3>
						</div>

						<div className="mt-3 space-y-2.5">
							<div className="rounded-xl bg-amber-50 p-3">
								<p className="text-sm font-medium text-slate-900">
									Tangail
								</p>

								<p className="mt-1 text-xs text-amber-700">
									Order volume dropped by 12%
								</p>
							</div>

							<div className="rounded-xl bg-red-50 p-3">
								<p className="text-sm font-medium text-slate-900">
									Ghatail
								</p>

								<p className="mt-1 text-xs text-red-600">
									Low stock alert
								</p>
							</div>
						</div>
					</section>
				</div>
			</aside>
		</>
	);
}
