import { GeoJSON } from "react-leaflet";
import tangail from "../../../assets/tangail-geo.json";
import type { FeatureCollection } from "geojson";
import { useTerritoryStore } from "../store/territory.store";
import { upazilaData } from "../data/upazila.data";

const colors = [
	"#ef4444",
	"#f97316",
	"#eab308",
	"#22c55e",
	"#06b6d4",
	"#3b82f6",
	"#8b5cf6",
	"#ec4899",
	"#84cc16",
	"#14b8a6",
	"#f43f5e",
	"#6366f1",
];

const districtStyle = {
	color: "#1d4ed8",
	weight: 3,
	fillOpacity: 0,
};

const tangailUpazilaNames = [
	"Basail",
	"Bhuapur",
	"Delduar",
	"Dhanbari",
	"Ghatail",
	"Gopalpur",
	"Kalihati",
	"Madhupur",
	"Mirzapur",
	"Nagarpur",
	"Sakhipur",
	"Tangail Sadar",
];

const response = await fetch("/maps/tangail-upazila.json");

const tangailUpazila = await response.json();

const tangailFeatures: FeatureCollection = {
	...(tangailUpazila as FeatureCollection),
	features: (tangailUpazila as any).features.filter((feature: any) =>
		tangailUpazilaNames.includes(feature.properties.shapeName),
	),
};

export default function TerritoryLayer() {
	const open = useTerritoryStore((state) => state.open);
	return (
		<>
			{/* Tangail Upazilas */}
			<GeoJSON
				data={tangailFeatures}
				style={(feature) => {
					const index = tangailFeatures.features.findIndex(
						(f) => f === feature,
					);

					return {
						color: "#ffffff",
						weight: 1.5,
						fillColor: colors[index % colors.length],
						fillOpacity: 0.7,
						interactive: true,
					};
				}}
				onEachFeature={(feature: any, layer) => {
					layer.on({
						click: () => {
							const name = feature.properties.shapeName;

							const data = upazilaData[name];

							if (data) {
								open(data);
							}
						},
					});
				}}
			/>

			{/* Tangail District Border */}
			<GeoJSON
				data={tangail as any}
				style={districtStyle}
				interactive={false}
			/>
		</>
	);
}
