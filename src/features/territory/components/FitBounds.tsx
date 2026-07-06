import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import tangail from "../../../assets/tangail-geo.json";

export default function FitBounds() {
	const map = useMap();

	useEffect(() => {
		const layer = L.geoJSON(tangail as any);
		const bounds = layer.getBounds();

		if (!bounds.isValid()) return;

		map.fitBounds(bounds, {
			padding: [20, 20],
			maxZoom: 9,
			animate: false,
		});

		// Move the map upward without changing zoom.
		requestAnimationFrame(() => {
			map.panBy([0, 70], {
				animate: false,
			});
		});
	}, [map]);

	return null;
}
