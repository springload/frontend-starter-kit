import { humanNumber, padNumber, monthName } from '../utils/format';

describe('format', () => {
    describe('#humanNumber', () => {
        it('exists', () => {
            expect(humanNumber).toBeDefined();
        });

        it('number formatting makes the numbers look nicer', () => {
            expect(humanNumber(0)).toBe('0');
            expect(humanNumber(5000)).toBe('5,000');
            expect(humanNumber(5000000)).toBe('5,000,000');
            expect(humanNumber(-5000)).toBe('-5,000');
            expect(humanNumber(-5000000)).toBe('-5,000,000');
            expect(humanNumber(5000.5000)).toBe('5,000.5');
            expect(humanNumber(0.3333333)).toBe('0.3333333');
        });
    });

    describe('#padNumber', () => {
        it('exists', () => {
            expect(padNumber).toBeDefined();
        });

        it('pads single-digit numbers with a zero', () => {
            expect(padNumber(0)).toBe('00');
            expect(padNumber(9)).toBe('09');
            expect(padNumber(-1)).toBe('-1');
            expect(padNumber(0.3333333)).toBe('00.3333333');
        });
    });

    describe('#monthName', () => {
        it('exists', () => {
            expect(monthName).toBeDefined();
        });

        it('converts a month number to a string, from 0 to 11', () => {
            expect(monthName(0)).toBe('January');
            expect(monthName(11)).toBe('December');
        });
    });
});
