import { describe, expect, it } from 'vitest';
import { calculateAverage, factorial, fizzBuzz, max } from '../intro';

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2, 1)).toBe(2);
  });
  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });
  it('should return the first  argument if argument are equal', () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe('fizzBuzz', () => {
  it('it should return FizzBuzz if argument is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  it('it should return Fizz if argument is only divisible by 3 ', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it('it should return FizzBuzz if argument is only  divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it('it should return argument as a string if it is not divisible by 3 and 5 ', () => {
    expect(fizzBuzz(1)).toBe('1');
  });
});

describe('averageNumber', () => {
  it('should return NaN if given an empty array ', () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it('should calculate the average  of an array with the single number ', () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it('should calculate the average  of an array with the two number ', () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it('should calculate the average  of an array with the two number ', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe('factorial', () => {
  it('should return 1 if given is 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('should return 1 if give is 1', () => {
    expect(factorial(1)).toBe(1);
  });
  it('should return 2 if give is 2', () => {
    expect(factorial(2)).toBe(2);
  });
  it('should return 6 if give is 3', () => {
    expect(factorial(3)).toBe(6);
  });
  it('should return 24 if give is 4', () => {
    expect(factorial(4)).toBe(24);
  });
  it('should return undefined if given a negative number ', () => {
    expect(factorial(-1)).toBeUndefined;
  });
});

/***********************************************************************/

describe('demo', () => {
  it('test case', () => {
    const result = 'The requested file is not found';
    // to specific
    expect(result).toBe('The requested file is not found');
    // better assertion
    expect(result).toMatch(/not found/i);
  });
});

/***********************************************************************/

describe('test', () => {
  it('test', () => {
    const res = [1, 2, 3];
    // expect(res).toBe([1, 2, 3]);
    expect(res).toEqual(expect.arrayContaining([1, 2, 3]));
  });
});
