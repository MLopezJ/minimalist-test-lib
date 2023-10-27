/**
 * check if the result of a method is the expected.
 */
export const expect = (result: unknown) => ({
  toBe: (expected: unknown) => {
    if (result === expected) console.log("✅ ");
    else throw new Error(`❌ ${result} is not equal to ${expected}`);
  },
});
