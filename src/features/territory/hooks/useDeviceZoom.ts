import { useEffect, useState } from "react";

export function useDeviceZoom() {
	const getConfig = (width: number) => {
		if (width < 640) {
			return { minZoom: 9, maxZoom: 13, zoom: 9 };
		}
		if (width < 1024) {
			return { minZoom: 9, maxZoom: 14, zoom: 10 };
		}
		return { minZoom: 10, maxZoom: 15, zoom: 11 };
	};

	const [config, setConfig] = useState(() => getConfig(window.innerWidth));

	useEffect(() => {
		const handleResize = () => {
			setConfig(getConfig(window.innerWidth));
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return config;
}
