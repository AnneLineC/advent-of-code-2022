import path from 'path';
import { solveWithLogs } from '../utils/logs';
import { readInput } from '../utils/readFile';

// ------------------------------
// Problem input and test inputs
// ------------------------------

export const TEST_INPUT = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;
export const INPUT = readInput(path.resolve(__dirname, './input.txt'));

// -------------------
// Your functions here
// -------------------

export const getHighestCaloriesTotal = (input: string): number => {
    const arrayOfStrings = splitInput(input);
    const arrayOfStringsWithoutEmptyStrings = removesEmptyStringsFromArray(arrayOfStrings);
    const arrayOfNumbersInput = convertArrayOfStringsToArrayOfNumbers(arrayOfStringsWithoutEmptyStrings);
    const higherAmount = getHigherAmount(arrayOfNumbersInput);
    return higherAmount;
};

const splitInput = (input: string): string[] => {
    const splittedInput = input.split(/\s+/);
    return splittedInput;
};

const removesEmptyStringsFromArray = (input: string[]): string[] => {
    const arrayWithoutEmptyStrings = input.filter((item) => /\S/.test(item));
    return arrayWithoutEmptyStrings;
};

const convertArrayOfStringsToArrayOfNumbers = (input: string[]): number[] => {
    const arrayOfNumbers = input.map((item) => parseInt(item, 10));
    return arrayOfNumbers;
};

const getHigherAmount = (input: number[]): number => {
    const higherAmount = Math.max(...input);
    return higherAmount;
};

// -------------
// Solve problem
// -------------

// const solve1 = (): string | number => {
//     return computeMaxCalories2(INPUT);
// };

// ---------------
// Display answers
// ---------------

// solveWithLogs(solve1, 1);
