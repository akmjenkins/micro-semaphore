export default {
  input: 'index.js',
  output: [
    {
      sourcemap: true,
      file: 'build/bundle.min.js',
      format: 'iife',
      name: 'createSemaphore',
    },
  ],
};
