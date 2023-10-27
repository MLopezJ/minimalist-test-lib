/**
 * Encapsulate assertion and provide a description of it
 */
export const test = (description: string, callback: () => void) => {
  console.log(description);
  callback();
};

export const it = test