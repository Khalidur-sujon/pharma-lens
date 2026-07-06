import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import tangail from "../../../assets/tangail-geo.json";

export default function FitBounds() {
	const map = useMap();

	useEffect(() => {
		if (!map) return;

		const geoLayer = L.geoJSON(tangail as any);

		const bounds = geoLayer.getBounds();

		if (bounds.isValid()) {
			map.fitBounds(bounds, {
				padding: [20, 20],
				maxZoom: 9,
				animate: true,
			});
		}
	}, [map]);

	return null;
}
