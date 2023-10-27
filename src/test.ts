/**
 * Encapsulate assertion and provide a description of it
 */
export const test = (description: string, callback: () => void) => {
  callback();
  console.log(`✅ ${description}`);
};

export const it = test