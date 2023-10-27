/**
 * Basic functions that will help us to test the test library
 */

/**
 * Sum elements in array
 */
export const sum = (numbers: number[]): number =>
  numbers.reduce((prev, current) => prev + current, 0);
/**
 * Async sum
 */
export const asyncSum = (numbers: number[]): Promise<number> =>
  Promise.resolve(sum(numbers));

/**
 * Get average of elements in array
 */
export const average = (numbers: number[]): number =>
  sum(numbers) / numbers.length;

/**
 * Async average
 */
export const asyncAverage = (numbers: number[]): Promise<number> =>
  Promise.resolve(average(numbers));

// npx tsx src/index.ts
