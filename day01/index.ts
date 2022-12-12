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
