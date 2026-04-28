import test from "node:test";
import assert from "node:assert/strict";

import {
  detectOperator,
  formatPhone,
  isValidMoroccanNumber,
  normalizeNumber,
} from "../src/index.js";

test("normalizeNumber converts international numbers to local format", () => {
  assert.equal(normalizeNumber("+212612345678"), "0612345678");
  assert.equal(normalizeNumber("212612345678"), "0612345678");
});

test("normalizeNumber rejects invalid inputs", () => {
  assert.equal(normalizeNumber("0812345678"), null);
  assert.equal(normalizeNumber("hello"), null);
  assert.equal(normalizeNumber(null), null);
});

test("formatPhone supports local and international spacing", () => {
  assert.equal(formatPhone("0612345678", { spaces: true }), "06 12 34 56 78");
  assert.equal(
    formatPhone("0612345678", { international: true, spaces: true }),
    "+212 6 12 34 56 78",
  );
});

test("formatPhone returns null for invalid numbers", () => {
  assert.equal(formatPhone("12345"), null);
});

test("isValidMoroccanNumber validates local and international formats", () => {
  assert.equal(isValidMoroccanNumber("0612345678"), true);
  assert.equal(isValidMoroccanNumber("+212612345678"), true);
  assert.equal(isValidMoroccanNumber("0812345678"), false);
});

test("detectOperator works for local and international numbers", () => {
  assert.equal(detectOperator("0612345678"), "Orange");
  assert.equal(detectOperator("+212610123456"), "IAM");
  assert.equal(detectOperator("12345"), "Unknown");
});
