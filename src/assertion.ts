/**
 * check if the result of a method is the expected.
 */
export const expect = (result: unknown) => ({
  toBe: (expected: unknown) => {
    if (result !== expected)
      throw new Error(`❌ ${result} is not equal to ${expected}`);
  },
});
