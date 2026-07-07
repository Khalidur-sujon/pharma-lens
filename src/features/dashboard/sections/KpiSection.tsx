import { Package, Pill, Wallet } from "lucide-react";
import KpiCard from "../components/KpiCard";
import { useDateFilterStore } from "../../../shared/store/dateFilterStore";

const kpiData = {
	"3d": {
		totalOrders: "434",
		orderGrowth: "4.2%",
		totalAmount: "৳2.4L",
		amountGrowth: "3.8%",
		totalMedicines: "86",
		medicineGrowth: "2.1%",
	},

	"15d": {
		totalOrders: "6,980",
		orderGrowth: "8.7%",
		totalAmount: "৳5.6L",
		amountGrowth: "7.4%",
		totalMedicines: "142",
		medicineGrowth: "4.6%",
	},

	"30d": {
		totalOrders: "12,450",
		orderGrowth: "12.4%",
		totalAmount: "৳12.8L",
		amountGrowth: "10.2%",
		totalMedicines: "320",
		medicineGrowth: "6.8%",
	},

	"3m": {
		totalOrders: "38,920",
		orderGrowth: "14.6%",
		totalAmount: "৳36.5L",
		amountGrowth: "13.8%",
		totalMedicines: "540",
		medicineGrowth: "8.2%",
	},

	"6m": {
		totalOrders: "82,640",
		orderGrowth: "21.4%",
		totalAmount: "৳72.4L",
		amountGrowth: "18.6%",
		totalMedicines: "820",
		medicineGrowth: "12.4%",
	},

	"1y": {
		totalOrders: "168,920",
		orderGrowth: "28.7%",
		totalAmount: "৳1.6Cr",
		amountGrowth: "24.8%",
		totalMedicines: "1,240",
		medicineGrowth: "16.2%",
	},
};

export default function KpiSection() {
	const selectedPeriod = useDateFilterStore((state) => state.activeFilter);

	const data = kpiData[selectedPeriod];

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<KpiCard
				label="Total Orders"
				value={data.totalOrders}
				change={data.orderGrowth}
				selectedPeriod={selectedPeriod}
				icon={<Package size={22} />}
			/>

			<KpiCard
				label="Total Amount"
				value={data.totalAmount}
				change={data.amountGrowth}
				selectedPeriod={selectedPeriod}
				icon={<Wallet size={22} />}
				iconClassName="bg-red-100 text-red-600"
			/>

			<KpiCard
				label="Total Medicines"
				value={data.totalMedicines}
				change={data.medicineGrowth}
				selectedPeriod={selectedPeriod}
				icon={<Pill size={22} />}
				iconClassName="bg-emerald-100 text-emerald-600"
			/>
		</div>
	);
}
