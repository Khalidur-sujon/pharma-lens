import { Package, Pill, Wallet } from "lucide-react";
import KpiCard from "../components/KpiCard";

export default function KpiSection() {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<KpiCard
				label="Total Orders"
				value="2,355"
				change="18.2%"
				icon={<Package size={22} />}
			/>

			<KpiCard
				label="Total Amount"
				value="৳12.8L"
				change="12.4%"
				icon={<Wallet size={22} />}
			/>

			<KpiCard
				label="Total Medicines"
				value="320"
				change="6.8%"
				icon={<Pill size={22} />}
			/>
		</div>
	);
}
