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
    console.log('arrayOfStrings', arrayOfStrings);

    return calculateHighestAmout(arrayOfStrings);
};

const calculateHighestAmout = (input) => {
    let totalAmountForCurrentElf = 0;
    let maxAmout = 0;
    if (input.length === 1) {
        maxAmout = parseInt(input[0], 10);
    }
    input.forEach((calory) => {
        if (calory) {
            calory = parseInt(calory, 10);
            totalAmountForCurrentElf = totalAmountForCurrentElf + calory;
        } else {
            console.log('no calory');
            if (totalAmountForCurrentElf > maxAmout) {
                maxAmout = totalAmountForCurrentElf;
            }
            totalAmountForCurrentElf = 0;
        }
    });
    return maxAmout;
};

const splitInput = (input: string): string[] => {
    const splittedInput = input.split('\n');
    const inputWithNoInnerSpaces = splittedInput.map((item) => item.trim());
    return inputWithNoInnerSpaces;
};

// ---------------
// Display answers
// ---------------

// solveWithLogs(solve1, 1);
