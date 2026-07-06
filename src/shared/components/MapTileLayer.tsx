import { TileLayer } from "react-leaflet";
import { MAP_PROVIDER } from "../config/map.config";

export default function MapTileLayer() {
	return (
		<TileLayer
			url={MAP_PROVIDER.url}
			attribution={MAP_PROVIDER.attribution}
		/>
	);
}
