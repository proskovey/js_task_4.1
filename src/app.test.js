import healthStatus from './app';

test.each([
  ['critical', 10],
  ['wounded', 15],
  ['wounded', 20],
  ['wounded', 50],
  ['healthy', 55],
])(
  ('check health status'), (expected, health) => {
    const result = healthStatus({ name: 'Cat', health });
    expect(result).toBe(expected);
  },
);
