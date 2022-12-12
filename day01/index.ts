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
    const arrayOfCalories = splitInputIntoCaloriesArray(input);
    const highestAmountOfCalories = calculateHighestAmout(arrayOfCalories);
    return highestAmountOfCalories;
};

const splitInputIntoCaloriesArray = (input: string): string[] => {
    const splittedInput = input.split('\n');
    const inputWithNoInnerSpaces = splittedInput.map((item) => item.trim());
    return inputWithNoInnerSpaces;
};

const calculateHighestAmout = (input) => {
    let maxAmoutOfCalories = 0;
    let totalAmountForCurrentElf = 0;

    if (isOnlyOneItem(input)) {
        maxAmoutOfCalories = getStringIntoNumber(input[0]);
        return maxAmoutOfCalories;
    }

    input.forEach((calory) => {
        if (calory) {
            calory = getStringIntoNumber(calory);
            totalAmountForCurrentElf = totalAmountForCurrentElf + calory;
        } else {
            if (totalAmountForCurrentElf > maxAmoutOfCalories) {
                maxAmoutOfCalories = totalAmountForCurrentElf;
            }
            totalAmountForCurrentElf = 0;
        }
    });
    return maxAmoutOfCalories;
};

const getStringIntoNumber = (item: string): number => parseInt(item, 10);

const isOnlyOneItem = (input) => input.length === 1;

// ---------------
// Display answers
// ---------------

const solve = (): string | number => {
    return getHighestCaloriesTotal(INPUT);
};

solveWithLogs(solve, 1);
