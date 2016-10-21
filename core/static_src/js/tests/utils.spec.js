import { debounce } from '../utils';

jest.useFakeTimers();

describe('Utils', () => {
    it('has a debounce function', () => {
        expect(debounce).toBeDefined();
    });

    it('debounce calls its callback', () => {
        const callback = jest.fn();
        const proxy = debounce(callback, 5000);

        proxy();

        // Fast forward and exhaust only currently pending timers
        // (but not any new timers that get created during that process)
        jest.runOnlyPendingTimers();

        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1);
    });
});
