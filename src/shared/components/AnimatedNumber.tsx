import { useEffect, useState } from "react";

interface AnimatedNumberProps {
	value: string | number;
	duration?: number;
	className?: string;
}

export default function AnimatedNumber({
	value,
	duration = 800,
	className = "",
}: AnimatedNumberProps) {
	const rawValue = String(value);

	const numericValue = Number(
		rawValue.replace(/,/g, "").replace(/[^0-9]/g, ""),
	);

	const isNumeric = /^\d[\d,]*$/.test(rawValue);

	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!isNumeric) return;

		let start = 0;

		const increment = numericValue / (duration / 16);

		const timer = setInterval(() => {
			start += increment;

			if (start >= numericValue) {
				setCount(numericValue);
				clearInterval(timer);
			} else {
				setCount(Math.floor(start));
			}
		}, 16);

		return () => clearInterval(timer);
	}, [numericValue, duration, isNumeric]);

	if (!isNumeric) {
		return <span className={className}>{rawValue}</span>;
	}

	return <span className={className}>{count.toLocaleString()}</span>;
}
