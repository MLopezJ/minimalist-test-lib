/**
 * Group tests with a description of that group
 */
export const describe = (description: string, callback: () => void) => {
    console.log(description)
    callback()
}