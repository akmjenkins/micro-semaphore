module.exports = (capacity, q = []) => {
  let n = capacity || 1;
  const process = () => (q = q.filter((r) => !n || r(--n)));
  const done = (a) => (process(n++), a);
  return {
    then: (fn) =>
      new Promise((res) => process(q.push(res))).then(fn).then(done),
  };
};
