import { normalizeNumber } from "./normalize.js";

export function isValidMoroccanNumber(phone) {
  return normalizeNumber(phone) !== null;
}
