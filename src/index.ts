/**
 * Basic functions that will help us to test the test library
 */

/**
 * Sum elements in array
 */
const sum = (numbers: number[]): number => numbers.reduce((prev, current) => prev + current, 0)

/**
 * Get average of elements in array
 */
const average = (numbers: number[]) : number => sum(numbers) / numbers.length


console.log(sum([1,2,3]))
console.log(average([1,2,3]))
// npx tsx src/index.ts 