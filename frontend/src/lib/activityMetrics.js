/**
 * @param {number | null | undefined} value
 * @param {number} fractionDigits
 */
export function formatActivityMetric(value, fractionDigits) {
	return value == null ? '–' : value.toFixed(fractionDigits);
}
