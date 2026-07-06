import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useTerritoryStore } from "../store/territory.store";

export default function MapInteraction() {
	const map = useMap();
	const isOpen = useTerritoryStore((state) => state.isOpen);

	useEffect(() => {
		if (isOpen) {
			map.scrollWheelZoom.disable();
			map.dragging.disable();
			map.doubleClickZoom.disable();
		} else {
			map.scrollWheelZoom.enable();
			map.dragging.enable();
			map.doubleClickZoom.enable();
		}
	}, [isOpen, map]);

	return null;
}
