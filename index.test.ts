import createSemaphore from './index';

const tick = () => Promise.resolve();
const sleep = () => new Promise((res) => setTimeout(res, 10));

describe('it should work', () => {
  it('should work', async () => {
    const spy1 = jest.fn(sleep);
    const spy2 = jest.fn(sleep);
    const spy3 = jest.fn(sleep);
    const semaphore = createSemaphore();
    const p1 = semaphore.then(spy1);
    const p2 = semaphore.then(spy2);

    expect(spy1).not.toHaveBeenCalled();
    expect(spy2).not.toHaveBeenCalled();

    // not called immediately, only on tick
    await tick();
    expect(spy1).toHaveBeenCalled();
    expect(spy2).not.toHaveBeenCalled();

    // when the first process is completed, the next should be called
    await p1;
    expect(spy2).toHaveBeenCalled();
    semaphore.then(spy3);
    expect(spy3).not.toHaveBeenCalled();
    await p2;
    expect(spy3).toHaveBeenCalled();
  });

  it('should work with N', async () => {
    const n = 10;
    const spies = new Array(n * 2).fill(0).map(() => jest.fn(sleep));
    const semaphore = createSemaphore(n);
    const ps = spies.map(semaphore.then);
    await tick();
    spies.slice(0, n).map((spy) => expect(spy).toHaveBeenCalled());
    spies.slice(n).map((spy) => expect(spy).not.toHaveBeenCalled());

    let m = 0;
    await ps[m];
    expect(spies[n + m]).toHaveBeenCalled();
    expect(spies[n + m + 1]).not.toHaveBeenCalled();

    m++;
    await ps[m];
    expect(spies[n + m]).toHaveBeenCalled();
    expect(spies[n + m + 1]).not.toHaveBeenCalled();

    m++;
    await ps[m];
    expect(spies[n + m]).toHaveBeenCalled();
    expect(spies[n + m + 1]).not.toHaveBeenCalled();
  });
});
