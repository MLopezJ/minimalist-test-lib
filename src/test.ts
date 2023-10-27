/**
 * Encapsulate assertion and provide a description of it
 */
export const test = (
  description: string,
  assertionContext: () => void | Promise<void>
) => {
  try {
    isPromise(assertionContext())
      ? callAsync(
          description,
          assertionContext as unknown as () => Promise<void>
        )
      : call(description, assertionContext);
  } catch (error) {
    console.log(`❌ ${description}`);
  }
};

export const it = test;

/**
 * check if parameter is a promise.
 */
const isPromise = (maybePromise: void | Promise<void>) =>
  !!maybePromise &&
  typeof (maybePromise as unknown as Promise<unknown>).then === "function";

/**
 * call sync method
 */
const call = (description: string, callback: () => void) => {
  callback();
  console.log(`✅ ${description}`);
};

/**
 * call async method
 */
const callAsync = (description: string, callback: () => Promise<void>) =>
  callback()
    .then(() => console.log(`✅ ${description}`))
    .catch((error) => console.log(`❌ ${description}`));
