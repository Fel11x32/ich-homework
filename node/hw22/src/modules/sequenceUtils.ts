export function generateFibonacci(limit: number): number[] {
  if (limit < 0) return [];
  if (limit === 0) return [0];

  const result: number[] = [0, 1];
  while (true) {
    const next = result[result.length - 1] + result[result.length - 2];
    if (next > limit) break;
    result.push(next);
  }
  return result;
}
export function generatePrimeNumbers(limit: number): number[] {
  if (limit < 2) return [];

  const isPrime = new Array<boolean>(limit + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let p = 2; p * p <= limit; p++) {
    if (isPrime[p]) {
      for (let m = p * p; m <= limit; m += p) {
        isPrime[m] = false;
      }
    }
  }

  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) primes.push(i);
  }
  return primes;
}