export default function createSemaphore(n?: number): {
  then: <R>(func?: () => R) => Promise<R>;
};
