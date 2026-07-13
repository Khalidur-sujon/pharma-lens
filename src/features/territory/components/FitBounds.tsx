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

		const width = window.innerWidth;

		let paddingTop = 20;
		let paddingRight = 20;
		let paddingBottom = 20;
		let paddingLeft = 20;

		// Mobile
		if (width < 640) {
			paddingTop = -400;
			paddingRight = 16;
			paddingBottom = 24;
			paddingLeft = 16;
		}
		// Tablet
		else if (width < 1024) {
			paddingTop = -370;
			paddingRight = 20;
			paddingBottom = 24;
			paddingLeft = 20;
		}
		// Desktop
		else {
			paddingTop = -270;
			paddingRight = 24;
			paddingBottom = 24;
			paddingLeft = 24;
		}

		map.fitBounds(bounds, {
			maxZoom: 9,
			animate: false,
			paddingTopLeft: [paddingLeft, paddingTop],
			paddingBottomRight: [paddingRight, paddingBottom],
		});
	}, [map]);

	return null;
}
