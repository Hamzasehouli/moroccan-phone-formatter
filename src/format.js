import { normalizeNumber } from "./normalize.js";

export function formatPhone(phone, options = {}) {
  const normalized = normalizeNumber(phone);

  if (!normalized) {
    return null;
  }

  const formatted = options.international
    ? `+212${normalized.slice(1)}`
    : normalized;

  if (options.spaces) {
    return formatted.replace(/(\+212|)(\d{1,2})(\d{2})(\d{2})(\d{2})(\d{2})$/, (_, country, a, b, c, d, e) => {
      return country
        ? `${country} ${a} ${b} ${c} ${d} ${e}`
        : `${a}${b ? ` ${b}` : ""} ${c} ${d} ${e}`.trim();
    });
  }

  return formatted;
}
