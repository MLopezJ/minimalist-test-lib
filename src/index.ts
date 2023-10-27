/**
 * Basic functions that will help us to test the test library
 */

/**
 * Sum elements in array
 */
export const sum = (numbers: number[]): number => numbers.reduce((prev, current) => prev + current, 0)

/**
 * Get average of elements in array
 */
export const average = (numbers: number[]) : number => sum(numbers) / numbers.length



// npx tsx src/index.ts 