export default function createSemaphor(n?: number): {
  then: <R>(func?: () => R) => Promise<R>;
};
