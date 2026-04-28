export function normalizeNumber(phone) {
  if (typeof phone !== "string") {
    return null;
  }

  const clean = phone.replace(/\D/g, "");

  if (clean.startsWith("212") && clean.length === 12) {
    return `0${clean.slice(3)}`;
  }

  if (clean.length === 10 && /^0[5-7]/.test(clean)) {
    return clean;
  }

  return null;
}
