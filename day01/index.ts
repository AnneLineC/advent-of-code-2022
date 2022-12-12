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

const calculateHighestAmout = (input: string[]): number => {
    let maxAmoutOfCalories = 0;
    let totalAmountForCurrentElf = 0;

    if (isOnlyOneItem(input)) {
        maxAmoutOfCalories = getStringIntoNumber(input[0]);
        return maxAmoutOfCalories;
    }

    input.forEach((calory) => {
        if (calory) {
            const caloryInt = getStringIntoNumber(calory);
            totalAmountForCurrentElf = totalAmountForCurrentElf + caloryInt;
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

const isOnlyOneItem = (input: any[]) => input.length === 1;

// ---------------
// Three elves
// ---------------

export const getThreeHighestCaloriesSum = (input: string): number => {
    const arrayOfCalories = splitInputIntoCaloriesArray(input);
    const highestAmountOfCalories = calculateThreeHightestCaloriesSum(arrayOfCalories);
    return highestAmountOfCalories;
};

const calculateThreeHightestCaloriesSum = (input: string[]): number => {
    let maxThreeAmoutsOfCalories = [0, 0, 0];
    let totalAmountForCurrentElf = 0;

    for (let i = 0; i < maxThreeAmoutsOfCalories.length; i++) {
        input.forEach((calory, index) => {
            if (calory) {
                const caloryInt = getStringIntoNumber(calory);
                totalAmountForCurrentElf = totalAmountForCurrentElf + caloryInt;
            } else {
                if (
                    totalAmountForCurrentElf > maxThreeAmoutsOfCalories[i] &&
                    !maxThreeAmoutsOfCalories.includes(totalAmountForCurrentElf)
                ) {
                    maxThreeAmoutsOfCalories[i] = totalAmountForCurrentElf;
                }
                totalAmountForCurrentElf = 0;
            }

            if (index === input.length - 1) {
                totalAmountForCurrentElf = 0;
            }
        });
    }

    const totalNumberOfCalories = maxThreeAmoutsOfCalories.reduce((sum, value) => sum + value);

    return totalNumberOfCalories;
};

// ---------------
// Display answers
// ---------------

const solve1 = (): string | number => {
    return getHighestCaloriesTotal(INPUT);
};

const solve2 = (): string | number => {
    return getThreeHighestCaloriesSum(INPUT);
};

solveWithLogs(solve1, 1);
solveWithLogs(solve2, 2);
