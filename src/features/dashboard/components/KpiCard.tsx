import { ArrowUpRight } from "lucide-react";
import { formatPeriod } from "../../../shared/utils/formatPeriod";
import type { DateFilterValue } from "../../../shared/store/dateFilterStore";
import AnimatedNumber from "../../../shared/components/AnimatedNumber";

interface KpiCardProps {
	label: string;
	value: string;
	selectedPeriod: DateFilterValue;
	icon: React.ReactNode;
	change: string;
	iconClassName?: string;
}

export default function KpiCard({
	label,
	value,
	selectedPeriod,
	icon,
	change,
	iconClassName = "bg-violet-100 text-violet-600",
}: KpiCardProps) {
	return (
		<div className="rounded-xl border border-slate-200 bg-white p-3">
			<div className="flex items-center gap-3">
				{/* Icon */}
				<div
					className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconClassName}`}
				>
					{icon}
				</div>

				{/* Content */}
				<div className="min-w-0 flex-1">
					<p className="text-[10px] font-medium uppercase tracking-normal text-slate-500">
						{label}
					</p>

					<div className="mt-0.5 flex items-end justify-between">
						<h2 className="text-2xl font-bold text-slate-900">
							<AnimatedNumber value={value} />
						</h2>

						<div className="flex items-center gap-1 text-[11px]">
							<div className="flex items-center gap-0.5 font-semibold text-emerald-600">
								<ArrowUpRight size={13} />
								<span>{change}</span>
							</div>

							<span className="min-w-24 text-slate-400">
								vs Last {formatPeriod(selectedPeriod)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
