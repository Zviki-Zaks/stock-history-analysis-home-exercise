import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { getMinMax } from "../index.js";
import { getRandomIntsArray } from "../utils.js";

describe("test getMinMax function", () => {
  it("random values", () => {
    const values = getRandomIntsArray({ length: 10, min: 100, max: 500 });
    const { minIdx, maxIdx, diff: maxDiff } = getMinMax(values);
    assert.strictEqual(typeof minIdx, "number");
    assert.strictEqual(typeof maxIdx, "number");
    assert.strictEqual(typeof maxDiff, "number");
    assert.notEqual(minIdx, maxIdx);
    assert.strictEqual(values[minIdx] < values[maxIdx], true);
    assert.strictEqual(values[maxIdx] - values[minIdx], maxDiff);
  });

  it("the values with the largest difference are not in order", () => {
    const values = [150, 253, 485, 896, 112, 489, 123];
    const absoluteMax = Math.max(...values);
    const absoluteMin = Math.min(...values);
    const { minIdx, maxIdx, diff: maxDiff } = getMinMax(values);
    assert.strictEqual(
      minIdx,
      values.findIndex((val) => val === 150)
    );
    assert.notEqual(values[minIdx], absoluteMin);
    assert.strictEqual(
      maxIdx,
      values.findIndex((val) => val === 896)
    );
    assert.strictEqual(maxDiff, 896 - 150);
    assert.notEqual(maxDiff, absoluteMax - absoluteMin);
  });

  it("there is no early low value for late value", () => {
    const values = [500, 400, 300, 200, 100];
    const { minIdx, maxIdx, diff: maxDiff } = getMinMax(values);
    assert.strictEqual(minIdx, null);
    assert.strictEqual(maxIdx, null);
    assert.strictEqual(maxDiff, 0);
  });
});
