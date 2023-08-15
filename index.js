import { getRandomIntsArray } from "./utils.js";

export function getMinMax(values) {
  console.log("values", values);
  let maxDiff = 0;
  let minIdx = null;
  let maxIdx = null;
  values.forEach((num, idx) => {
    for (let i = idx + 1; i < values.length; i++) {
      if (values[i] > num) {
        let diff = values[i] - num;
        if (diff > maxDiff) {
          maxDiff = diff;
          minIdx = idx;
          maxIdx = i;
        }
      }
    }
  });
  return { minIdx, maxIdx, diff: maxDiff };
}

(() => {
  const values = getRandomIntsArray({ length: 100, min: 100, max: 500 });
  const res = getMinMax(values);
  console.log("res: \n", JSON.stringify(res, null, 2));
})();
