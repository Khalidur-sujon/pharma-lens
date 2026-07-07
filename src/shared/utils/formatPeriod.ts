import type { DateFilterValue } from "../store/dateFilterStore";

const PERIOD_UNITS = {
	d: ["Day", "Days"],
	m: ["Month", "Months"],
	y: ["Year", "Years"],
} as const;

export function formatPeriod(period: DateFilterValue): string {
	const match = period.match(/^(\d+)([a-z])$/i);

	if (!match) {
		return period.toUpperCase();
	}

	const [, value, unit] = match;

	const labels =
		PERIOD_UNITS[unit.toLowerCase() as keyof typeof PERIOD_UNITS];

	if (!labels) {
		return period.toUpperCase();
	}

	const [singular, plural] = labels;

	return `${value} ${Number(value) === 1 ? singular : plural}`;
}
