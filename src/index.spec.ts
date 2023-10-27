import { expect } from "./assertion";
import { test, it } from "./test";
import { sum, average } from "./index.js";

test("should sum  methods in array", () => {
  const result_sum = sum([1, 2, 3]);
  const expected_sum = 6;

  expect(result_sum).toBe(expected_sum);
});


it("should return average from methods in array", () => {
    const result_sum = average([1, 2, 3]);
    const expected_sum = 2;
  
    expect(result_sum).toBe(expected_sum);
  });