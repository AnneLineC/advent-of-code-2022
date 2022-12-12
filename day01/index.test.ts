import { getHighestCaloriesTotal, getThreeHighestCaloriesSum, TEST_INPUT } from './index';

describe('Total max calories carried by one elf', () => {
    it('If there is only one elf with one ingredient, we get that one', () => {
        const input = `1000`;

        const result = getHighestCaloriesTotal(input);

        expect(result).toBe(1000);
    });

    it('If there are two elves with one ingredient each, we get the highest one', () => {
        const input = `1000

        2000
        `;

        const result = getHighestCaloriesTotal(input);

        expect(result).toBe(2000);
    });

    it('If there are two elves with more than one ingredient each, we get the sum of the highest', () => {
        const input = `1000
        2000

        2000
        500
        `;

        const result = getHighestCaloriesTotal(input);

        expect(result).toBe(3000);
    });

    it('If there are several elves with more than one ingredient each, we get the sum of the highest', () => {
        const result = getHighestCaloriesTotal(TEST_INPUT);

        expect(result).toBe(24000);
    });
});

describe('Total max calories carried by three elves', () => {
    it('If there are several elves with more than one ingredient each, we get the sum of the highest calories carried by the three elves', () => {
        const result = getThreeHighestCaloriesSum(TEST_INPUT);

        expect(result).toBe(45000);
    });
});
