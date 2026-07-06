import { MapContainer } from "react-leaflet";
import TerritoryLayer from "./TerritoryLayer";
import FitBounds from "./FitBounds";
import TerritoryDrawer from "./TerritoryDrawer";
import MapInteraction from "./MapInteraction";
import MapTileLayer from "../../../shared/components/MapTileLayer";

export default function TerritoryMap() {
	return (
		<div className="h-full w-full flex min-h-0">
			<MapContainer
				className="h-full w-full flex-1 min-h-0"
				center={[23.8, 90.35]}
				zoom={6}
				minZoom={5}
				maxZoom={10}
				scrollWheelZoom
				maxBounds={[
					[20.5, 88.0],
					[26.7, 92.8],
				]}
				maxBoundsViscosity={1.0}
			>
				<MapTileLayer />
				<FitBounds />
				<MapInteraction />
				<TerritoryLayer />
				<TerritoryDrawer />
			</MapContainer>
		</div>
	);
}
