import { getHighestCaloriesTotal, TEST_INPUT } from './index';

describe('Total calories carried by the elves', () => {
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
});
